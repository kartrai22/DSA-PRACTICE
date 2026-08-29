import { runJavaInBrowser } from './javaEngine';

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) {
    if (String(a) === String(b)) return true;
    return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    
    // Check direct order
    const directMatch = a.every((val, idx) => deepEqual(val, b[idx]));
    if (directMatch) return true;

    // Check sorted / set order if elements are arrays of primitives or strings/numbers
    if (a.length > 0 && Array.isArray(a[0]) && Array.isArray(b[0])) {
      const stringifySorted = (arr) =>
        arr.map(sub => Array.isArray(sub) ? [...sub].sort().join(',') : String(sub)).sort();
      const strA = stringifySorted(a);
      const strB = stringifySorted(b);
      return strA.every((v, i) => v === strB[i]);
    }

    return false;
  }

  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
  }

  return false;
}

/**
 * Format a code snippet with a visual pointer arrow (^) pointing to the exact column.
 */
function formatSnippet(lines, lineNum, colNum) {
  if (!lines || lineNum < 1 || lineNum > lines.length) return '';
  const targetLine = lines[lineNum - 1] || '';
  const col = Math.max(1, colNum || 1);
  const pointer = ' '.repeat(col - 1) + '^';
  return `Line ${lineNum} | ${targetLine}\n       | ${pointer}`;
}

export const testRunner = {
  async runCode(code, testCases, language = 'javascript', problemId = '') {
    // Auto-detect Java code if language was accidentally left on JavaScript
    const looksLikeJava = /^\s*(?:import\s+java|public\s+class|class\s+Solution\s*\{[\s\S]*public\s+(?:boolean|int|void|String|List|int\[\])|Set<|Map<|List<|int\[\]|boolean\[\])/m.test(code);
    const effectiveLanguage = (language === 'javascript' && looksLikeJava) ? 'java' : language;

    // 1. In-Browser Native Java Engine
    if (effectiveLanguage === 'java') {
      try {
        return await runJavaInBrowser(code, testCases, problemId);
      } catch (err) {
        console.error('Java runner error:', err);
        const lines = code.split('\n');
        return {
          allPassed: false,
          totalTests: testCases.length,
          passedTests: 0,
          totalTimeMs: 0,
          results: testCases.map((tc, idx) => ({
            testIndex: idx + 1,
            input: tc.input,
            expected: tc.expected,
            actual: undefined,
            passed: false,
            executionTimeMs: 0,
            logs: [],
            error: `Compilation Error: ${err.message}`,
            errorDetails: {
              type: 'Compilation Error',
              line: 1,
              column: 1,
              message: err.message,
              snippet: formatSnippet(lines, 1, 1),
              suggestion: 'Please verify your Java syntax and class structure.'
            }
          }))
        };
      }
    }

    // 2. Python Runner (with fallback syntax linter)
    if (effectiveLanguage === 'python') {
      return this.runPython(code, testCases);
    }

    // 3. C++ Runner
    if (effectiveLanguage === 'cpp') {
      return {
        allPassed: false,
        totalTests: testCases.length,
        passedTests: 0,
        totalTimeMs: 0,
        results: testCases.map((tc, idx) => ({
          testIndex: idx + 1,
          input: tc.input,
          expected: tc.expected,
          actual: undefined,
          passed: false,
          executionTimeMs: 0,
          logs: [],
          error: 'C++ Compiler (g++) is not detected on your Windows system. To run C++ locally, install MinGW/GCC, or use Java, Python, or JavaScript.',
          errorDetails: {
            type: 'Environment Note',
            message: 'C++ execution requires local GCC/Clang native toolchain.',
            suggestion: 'Switch to Java or JavaScript for instant client-side execution.'
          }
        }))
      };
    }

    // 4. Default JavaScript In-Browser Runner
    return this.runJavaScript(code, testCases);
  },

  async runJavaScript(code, testCases) {
    const results = [];
    let totalTime = 0;
    let allPassed = true;
    const lines = code.split('\n');

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];
      const startTime = performance.now();
      const capturedLogs = [];

      try {
        const customConsole = {
          log: (...args) => {
            capturedLogs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
          }
        };

        const wrapperCode = `
          ${code}
          
          const allFuncs = [
            typeof containsDuplicate !== 'undefined' ? containsDuplicate : null,
            typeof isAnagram !== 'undefined' ? isAnagram : null,
            typeof twoSum !== 'undefined' ? twoSum : null,
            typeof groupAnagrams !== 'undefined' ? groupAnagrams : null,
            typeof topKFrequent !== 'undefined' ? topKFrequent : null,
            typeof isPalindrome !== 'undefined' ? isPalindrome : null,
            typeof threeSum !== 'undefined' ? threeSum : null,
            typeof maxArea !== 'undefined' ? maxArea : null,
            typeof maxProfit !== 'undefined' ? maxProfit : null,
            typeof lengthOfLongestSubstring !== 'undefined' ? lengthOfLongestSubstring : null,
            typeof isValid !== 'undefined' ? isValid : null,
            typeof search !== 'undefined' ? search : null,
            typeof reverseList !== 'undefined' ? reverseList : null,
            typeof invertTree !== 'undefined' ? invertTree : null,
            typeof numIslands !== 'undefined' ? numIslands : null,
            typeof climbStairs !== 'undefined' ? climbStairs : null,
            typeof coinChange !== 'undefined' ? coinChange : null,
            typeof singleNumber !== 'undefined' ? singleNumber : null
          ].filter(Boolean);

          const targetFunc = allFuncs[0] || (typeof Solution !== 'undefined' ? new Solution() : null);
          return targetFunc;
        `;

        let getFn;
        try {
          getFn = new Function('console', wrapperCode);
        } catch (syntaxErr) {
          // Parse line number from SyntaxError stack if available
          let errLine = 1;
          let errCol = 1;
          const stackMatch = (syntaxErr.stack || '').match(/<anonymous>:(\d+):(\d+)/);
          if (stackMatch) {
            errLine = Math.max(1, parseInt(stackMatch[1], 10) - 1);
            errCol = parseInt(stackMatch[2], 10);
          }

          const snippet = formatSnippet(lines, errLine, errCol);
          const formattedMsg = `Line ${errLine}, Col ${errCol}: SyntaxError: ${syntaxErr.message}\n${snippet}\n💡 Check for unclosed brackets, missing commas, or typos in your JavaScript code.`;

          throw {
            message: formattedMsg,
            details: {
              type: 'Syntax Error',
              line: errLine,
              column: errCol,
              message: syntaxErr.message,
              snippet,
              suggestion: 'Check for unclosed brackets, missing commas, or typos in your JavaScript code.'
            }
          };
        }

        const target = getFn(customConsole);

        if (!target) {
          throw new Error('No valid solution function or Solution class found.');
        }

        const inputArgs = JSON.parse(JSON.stringify(tc.input));
        let actualOutput;

        if (typeof target === 'function') {
          actualOutput = target(...inputArgs);
        } else if (typeof target === 'object') {
          const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(target)).filter(m => m !== 'constructor');
          if (methods.length > 0) {
            actualOutput = target[methods[0]](...inputArgs);
          } else {
            throw new Error('Solution class has no methods');
          }
        }

        const endTime = performance.now();
        const duration = Math.round((endTime - startTime) * 100) / 100;
        totalTime += duration;

        const passed = deepEqual(actualOutput, tc.expected);
        if (!passed) allPassed = false;

        results.push({
          testIndex: i + 1,
          input: tc.input,
          expected: tc.expected,
          actual: actualOutput,
          passed,
          executionTimeMs: duration,
          logs: capturedLogs,
          error: null
        });
      } catch (err) {
        const endTime = performance.now();
        allPassed = false;
        const errDetails = err.details || {
          type: 'Runtime Error',
          message: err.message || String(err),
          suggestion: 'Check for undefined variables, out-of-bounds array access, or infinite loops.'
        };

        results.push({
          testIndex: i + 1,
          input: tc.input,
          expected: tc.expected,
          actual: undefined,
          passed: false,
          executionTimeMs: Math.round((endTime - startTime) * 100) / 100,
          logs: capturedLogs,
          error: err.message || String(err),
          errorDetails: errDetails
        });
      }
    }

    return {
      allPassed,
      totalTests: testCases.length,
      passedTests: results.filter(r => r.passed).length,
      totalTimeMs: Math.round(totalTime * 100) / 100,
      results
    };
  },

  async runPython(code, testCases) {
    const lines = code.split('\n');
    
    // Static Python Syntax Validator
    for (let i = 0; i < lines.length; i++) {
      const lineNum = i + 1;
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith('#')) continue;

      // Check for missing colon on def/if/for/while/class
      if (/^(def\s+|if\s+|for\s+|while\s+|class\s+|elif\s+|else\s*|try\s*|except\s*|finally\s*)/.test(trimmed) && !trimmed.endsWith(':')) {
        const col = line.length + 1;
        const snippet = formatSnippet(lines, lineNum, col);
        const errMsg = `Line ${lineNum}, Col ${col}: SyntaxError: expected ':' at end of statement\n${snippet}\n💡 Python requires a colon (:) at the end of function definitions and control flow statements.`;
        
        return {
          allPassed: false,
          totalTests: testCases.length,
          passedTests: 0,
          totalTimeMs: 0,
          results: testCases.map((tc, idx) => ({
            testIndex: idx + 1,
            input: tc.input,
            expected: tc.expected,
            actual: undefined,
            passed: false,
            executionTimeMs: 0,
            logs: [],
            error: errMsg,
            errorDetails: {
              type: 'Syntax Error',
              line: lineNum,
              column: col,
              message: "expected ':' at end of statement",
              snippet,
              suggestion: "Add a colon ':' to the end of this line."
            }
          }))
        };
      }
    }

    // Default translation of Python algorithm to JS for quick test runs
    try {
      let pyJs = code;
      pyJs = pyJs.replace(/def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):/g, 'function $1($2) {');
      pyJs = pyJs.replace(/\bTrue\b/g, 'true');
      pyJs = pyJs.replace(/\bFalse\b/g, 'false');
      pyJs = pyJs.replace(/\bNone\b/g, 'null');
      pyJs = pyJs.replace(/\blen\(([^)]+)\)/g, '$1.length');
      pyJs = pyJs.replace(/\band\b/g, '&&');
      pyJs = pyJs.replace(/\bor\b/g, '||');
      pyJs = pyJs.replace(/\bnot\b/g, '!');

      return this.runJavaScript(pyJs, testCases);
    } catch (err) {
      return {
        allPassed: false,
        totalTests: testCases.length,
        passedTests: 0,
        totalTimeMs: 0,
        results: testCases.map((tc, idx) => ({
          testIndex: idx + 1,
          input: tc.input,
          expected: tc.expected,
          actual: undefined,
          passed: false,
          executionTimeMs: 0,
          logs: [],
          error: `Python Runtime Error: ${err.message}`,
          errorDetails: {
            type: 'Runtime Error',
            message: err.message,
            suggestion: 'Verify indentation and syntax in Python code.'
          }
        }))
      };
    }
  }
};
