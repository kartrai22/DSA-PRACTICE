import fs from 'fs';
import path from 'path';
import { exec, spawn } from 'child_process';
import os from 'os';

const TEMP_DIR = path.join(os.tmpdir(), 'neetcode_ai_exec');
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

function runCommand(cmd, args, cwd, timeoutMs = 8000) {
  return new Promise((resolve) => {
    const proc = spawn(cmd, args, { cwd, shell: true });
    let stdout = '';
    let stderr = '';
    let isTimeout = false;

    const timer = setTimeout(() => {
      isTimeout = true;
      proc.kill();
    }, timeoutMs);

    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.on('data', (d) => { stderr += d.toString(); });

    proc.on('close', (code) => {
      clearTimeout(timer);
      if (isTimeout) {
        resolve({ code: -1, stdout, stderr: 'Time Limit Exceeded (Execution timed out)' });
      } else {
        resolve({ code, stdout, stderr });
      }
    });

    proc.on('error', (err) => {
      clearTimeout(timer);
      resolve({ code: 1, stdout, stderr: err.message });
    });
  });
}

export async function executeCode({ language, code, testCases, problemId }) {
  const reqId = 'run_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const runDir = path.join(TEMP_DIR, reqId);
  fs.mkdirSync(runDir, { recursive: true });

  try {
    if (language === 'java') {
      return await executeJava(code, testCases, runDir);
    } else if (language === 'python') {
      return await executePython(code, testCases, runDir);
    } else {
      // JavaScript / fallback
      return null;
    }
  } finally {
    try {
      fs.rmSync(runDir, { recursive: true, force: true });
    } catch {}
  }
}

// Deep equal helper
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) {
    if (String(a) === String(b)) return true;
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const directMatch = a.every((val, idx) => deepEqual(val, b[idx]));
    if (directMatch) return true;
    if (a.length > 0 && Array.isArray(a[0]) && Array.isArray(b[0])) {
      const stringifySorted = (arr) =>
        arr.map(sub => Array.isArray(sub) ? [...sub].sort().join(',') : String(sub)).sort();
      return stringifySorted(a).every((v, i) => v === stringifySorted(b)[i]);
    }
    return false;
  }
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(k => keysB.includes(k) && deepEqual(a[k], b[k]));
  }
  return false;
}

// Java Execution
async function executeJava(code, testCases, runDir) {
  // Prepend standard imports if missing
  let fullUserCode = code;
  const standardImports = `
import java.util.*;
import java.io.*;
import java.math.*;
`;
  if (!fullUserCode.includes('import java.util')) {
    fullUserCode = standardImports + '\n' + fullUserCode;
  }

  // Create Driver Runner
  const driverSource = `
${fullUserCode}

public class MainDriver {
    public static void main(String[] args) {
        try {
            Solution sol = new Solution();
            java.lang.reflect.Method[] methods = Solution.class.getDeclaredMethods();
            java.lang.reflect.Method target = null;
            for (java.lang.reflect.Method m : methods) {
                if (!m.getName().equals("main") && !m.getName().equals("equals") && !m.getName().equals("toString") && !m.getName().equals("hashCode")) {
                    target = m;
                    break;
                }
            }
            if (target == null) {
                System.err.println("No solution method found in Solution class");
                System.exit(1);
            }
            target.setAccessible(true);

            // Read test cases JSON passed via file or standard args
            BufferedReader reader = new BufferedReader(new FileReader("input_tests.json"));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
            reader.close();

            String jsonText = sb.toString().trim();
            // We use standard reflection or simple test caller
            System.out.println("READY_FOR_EXEC");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
`;

  // Rather than reflection for complex types, we can dynamically generate the exact typed test harness!
  // Let's generate a clean type-safe test runner for the test cases!
  const javaCodeFilePath = path.join(runDir, 'Solution.java');
  fs.writeFileSync(javaCodeFilePath, fullUserCode, 'utf8');

  // Let's build Main.java with dynamic typed runner:
  const harness = `
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        java.lang.reflect.Method target = null;
        for (java.lang.reflect.Method m : Solution.class.getDeclaredMethods()) {
            if (java.lang.reflect.Modifier.isPublic(m.getModifiers())) {
                target = m;
                break;
            }
        }
        if (target == null && Solution.class.getDeclaredMethods().length > 0) {
            target = Solution.class.getDeclaredMethods()[0];
        }
        if (target == null) {
            System.out.println("ERROR: No callable method found in class Solution");
            return;
        }

        // Test cases count
        int numCases = ${testCases.length};
        for (int i = 0; i < numCases; i++) {
            System.out.println("---TEST_CASE_START---" + i);
            long start = System.nanoTime();
            try {
                Object res = runSpecificCase(sol, i);
                long elapsed = System.nanoTime() - start;
                System.out.println("RESULT:" + formatResult(res));
                System.out.println("TIME_MS:" + (elapsed / 1000000.0));
            } catch (Exception e) {
                System.out.println("EXCEPTION:" + (e.getCause() != null ? e.getCause().toString() : e.toString()));
            }
            System.out.println("---TEST_CASE_END---" + i);
        }
    }

    private static Object runSpecificCase(Solution sol, int caseIdx) throws Exception {
        switch (caseIdx) {
            ${testCases.map((tc, idx) => {
              const formattedArgs = tc.input.map(arg => formatJavaValue(arg)).join(', ');
              return `case ${idx}: {
                return sol.${getMethodCall(code, formattedArgs)};
            }`;
            }).join('\n            ')}
            default: return null;
        }
    }

    private static String formatResult(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof boolean[]) return Arrays.toString((boolean[]) obj);
        if (obj instanceof int[]) return Arrays.toString((int[]) obj);
        if (obj instanceof long[]) return Arrays.toString((long[]) obj);
        if (obj instanceof double[]) return Arrays.toString((double[]) obj);
        if (obj instanceof Object[]) return Arrays.deepToString((Object[]) obj);
        if (obj instanceof List) {
            return obj.toString();
        }
        return String.valueOf(obj);
    }
}
`;

  // Write Main.java
  fs.writeFileSync(path.join(runDir, 'Main.java'), harness, 'utf8');

  // Compile javac Solution.java Main.java
  const compileRes = await runCommand('javac', ['-encoding', 'UTF-8', 'Solution.java', 'Main.java'], runDir);
  if (compileRes.code !== 0) {
    // Format compilation error cleanly
    const cleanedErr = compileRes.stderr
      .replace(/Solution\.java:/g, 'Line ')
      .replace(/Main\.java:\d+:\s*error:\s*/g, '');
    return {
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      totalTimeMs: 0,
      results: testCases.map((tc, i) => ({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: undefined,
        passed: false,
        executionTimeMs: 0,
        logs: [],
        error: `Compilation Error:\n${compileRes.stderr.trim()}`
      }))
    };
  }

  // Run java Main
  const execRes = await runCommand('java', ['-cp', '.', 'Main'], runDir);
  if (execRes.code !== 0 && !execRes.stdout.includes('---TEST_CASE_START---')) {
    return {
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      totalTimeMs: 0,
      results: testCases.map((tc, i) => ({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: undefined,
        passed: false,
        executionTimeMs: 0,
        logs: [],
        error: `Runtime Error:\n${execRes.stderr.trim()}`
      }))
    };
  }

  // Parse results from stdout
  return parseTestOutput(execRes.stdout, testCases);
}

function getMethodCall(userCode, formattedArgs) {
  // Find the method name from user's Solution class
  const match = userCode.match(/public\s+[A-Za-z0-9_<>,\[\]]+\s+([A-Za-z0-9_]+)\s*\(/);
  const methodName = match ? match[1] : 'containsDuplicate';
  return `${methodName}(${formattedArgs})`;
}

function formatJavaValue(val) {
  if (typeof val === 'number') {
    return String(val);
  }
  if (typeof val === 'boolean') {
    return String(val);
  }
  if (typeof val === 'string') {
    return JSON.stringify(val);
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return 'new int[]{}';
    if (typeof val[0] === 'number') {
      return `new int[]{${val.join(', ')}}`;
    }
    if (typeof val[0] === 'string') {
      if (val[0].length === 1 && !val.some(s => s.length > 1)) {
        // array of chars
        return `new char[]{${val.map(c => "'" + c + "'").join(', ')}}`;
      }
      return `new String[]{${val.map(s => JSON.stringify(s)).join(', ')}}`;
    }
    if (Array.isArray(val[0])) {
      if (typeof val[0][0] === 'number') {
        return `new int[][]{${val.map(row => `{${row.join(', ')}}`).join(', ')}}`;
      }
      if (typeof val[0][0] === 'string') {
        if (val[0][0].length === 1) {
          return `new char[][]{${val.map(row => `{${row.map(c => "'" + c + "'").join(', ')}}`).join(', ')}}`;
        }
        return `new String[][]{${val.map(row => `{${row.map(s => JSON.stringify(s)).join(', ')}}`).join(', ')}}`;
      }
    }
  }
  return JSON.stringify(val);
}

// Python Execution
async function executePython(code, testCases, runDir) {
  const script = `
import sys, json, time

${code}

test_cases = json.loads('''${JSON.stringify(testCases)}''')
sol = Solution()
methods = [m for m in dir(sol) if not m.startswith('__') and callable(getattr(sol, m))]
if not methods:
    print("ERROR: No solution method found")
    sys.exit(1)
method_name = methods[0]
target = getattr(sol, method_name)

for i, tc in enumerate(test_cases):
    print(f"---TEST_CASE_START---{i}")
    start = time.perf_counter()
    try:
        args = tc["input"]
        res = target(*args)
        elapsed = (time.perf_counter() - start) * 1000.0
        print(f"RESULT:{json.dumps(res)}")
        print(f"TIME_MS:{elapsed:.2f}")
    except Exception as e:
        print(f"EXCEPTION:{type(e).__name__}: {str(e)}")
    print(f"---TEST_CASE_END---{i}")
`;

  const scriptPath = path.join(runDir, 'solution.py');
  fs.writeFileSync(scriptPath, script, 'utf8');

  const execRes = await runCommand('python', ['solution.py'], runDir);
  if (execRes.code !== 0 && !execRes.stdout.includes('---TEST_CASE_START---')) {
    return {
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      totalTimeMs: 0,
      results: testCases.map((tc, i) => ({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: undefined,
        passed: false,
        executionTimeMs: 0,
        logs: [],
        error: `Python Syntax / Runtime Error:\n${execRes.stderr.trim()}`
      }))
    };
  }

  return parseTestOutput(execRes.stdout, testCases);
}

function parseTestOutput(stdout, testCases) {
  const results = [];
  let allPassed = true;
  let totalTime = 0;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const blockRegex = new RegExp(`---TEST_CASE_START---${i}([\\s\\S]*?)---TEST_CASE_END---${i}`);
    const match = stdout.match(blockRegex);

    if (!match) {
      allPassed = false;
      results.push({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: undefined,
        passed: false,
        executionTimeMs: 0,
        logs: [],
        error: 'Execution failed to output result'
      });
      continue;
    }

    const block = match[1];
    const resMatch = block.match(/RESULT:(.*)/);
    const timeMatch = block.match(/TIME_MS:(.*)/);
    const excMatch = block.match(/EXCEPTION:(.*)/);

    let actual = undefined;
    let error = null;
    let timeMs = timeMatch ? parseFloat(timeMatch[1]) : 0;
    totalTime += timeMs;

    if (excMatch) {
      error = excMatch[1].trim();
      allPassed = false;
    } else if (resMatch) {
      const rawStr = resMatch[1].trim();
      try {
        actual = JSON.parse(rawStr);
      } catch {
        if (rawStr === 'true') actual = true;
        else if (rawStr === 'false') actual = false;
        else if (rawStr.startsWith('[') && rawStr.endsWith(']')) {
          try {
            actual = rawStr.slice(1, -1).split(',').map(s => s.trim()).map(v => isNaN(Number(v)) ? v : Number(v));
          } catch {
            actual = rawStr;
          }
        } else {
          actual = rawStr;
        }
      }
    }

    const passed = error == null && deepEqual(actual, tc.expected);
    if (!passed) allPassed = false;

    results.push({
      testIndex: i + 1,
      input: tc.input,
      expected: tc.expected,
      actual,
      passed,
      executionTimeMs: Math.round(timeMs * 100) / 100,
      logs: [],
      error
    });
  }

  return {
    allPassed,
    totalTests: testCases.length,
    passedTests: results.filter(r => r.passed).length,
    totalTimeMs: Math.round(totalTime * 100) / 100,
    results
  };
}
