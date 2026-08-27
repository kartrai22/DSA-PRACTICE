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

export const testRunner = {
  async runCode(code, testCases, language = 'javascript', problemId = '') {
    // For Java and Python, invoke the local backend compiler/runner
    if (language === 'java' || language === 'python') {
      try {
        const response = await fetch('/api/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ language, code, testCases, problemId })
        });

        if (response.ok) {
          const resJson = await response.json();
          if (resJson && resJson.results) {
            return resJson;
          }
        }
      } catch (err) {
        console.warn('Backend runner fetch failed, falling back', err);
      }
    }

    if (language === 'cpp') {
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
          error: 'C++ Compiler (g++) is not detected on your Windows system. To run C++ locally, install MinGW/GCC, or use Java, Python, or JavaScript.'
        }))
      };
    }

    // Default JavaScript In-Browser Runner
    return this.runJavaScript(code, testCases);
  },

  async runJavaScript(code, testCases) {
    const results = [];
    let totalTime = 0;
    let allPassed = true;

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

        const getFn = new Function('console', wrapperCode);
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
        results.push({
          testIndex: i + 1,
          input: tc.input,
          expected: tc.expected,
          actual: undefined,
          passed: false,
          executionTimeMs: Math.round((endTime - startTime) * 100) / 100,
          logs: capturedLogs,
          error: err.message || String(err)
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
  }
};
