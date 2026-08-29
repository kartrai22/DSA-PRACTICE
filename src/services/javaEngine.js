/**
 * In-Browser Java Transpiler, Syntax Validator, and Execution Engine for DSA problems.
 * Translates standard Java DSA code into runnable JavaScript and performs static analysis
 * to pinpoint exact line numbers, column numbers, and meaningful compiler errors.
 */

// Helper: Java Standard Library Mocks for JavaScript Runtime
function createJavaRuntimeEnvironment() {
  // HashSet / Set
  class JavaSet {
    constructor(initial) {
      this._set = new Set();
      if (initial) {
        if (Array.isArray(initial)) {
          for (let item of initial) this.add(item);
        } else if (initial._set) {
          for (let item of initial._set) this._set.add(item);
        }
      }
    }
    add(item) {
      const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
      if (this._set.has(key)) return false;
      this._set.add(key);
      return true;
    }
    contains(item) {
      const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
      return this._set.has(key);
    }
    remove(item) {
      const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
      return this._set.delete(key);
    }
    size() {
      return this._set.size;
    }
    isEmpty() {
      return this._set.size === 0;
    }
    clear() {
      this._set.clear();
    }
    toArray() {
      return Array.from(this._set);
    }
    [Symbol.iterator]() {
      return this._set.values();
    }
  }

  // HashMap / Map
  class JavaMap {
    constructor() {
      this._map = new Map();
    }
    put(key, value) {
      const prev = this.get(key);
      this._map.set(key, value);
      return prev === undefined ? null : prev;
    }
    get(key) {
      return this._map.has(key) ? this._map.get(key) : null;
    }
    getOrDefault(key, defaultValue) {
      return this._map.has(key) ? this._map.get(key) : defaultValue;
    }
    containsKey(key) {
      return this._map.has(key);
    }
    containsValue(val) {
      for (let v of this._map.values()) {
        if (v === val) return true;
      }
      return false;
    }
    remove(key) {
      const val = this.get(key);
      this._map.delete(key);
      return val;
    }
    putIfAbsent(key, value) {
      if (!this._map.has(key)) {
        this._map.set(key, value);
        return null;
      }
      return this._map.get(key);
    }
    computeIfAbsent(key, mappingFunction) {
      if (!this._map.has(key)) {
        const newVal = mappingFunction(key);
        this._map.set(key, newVal);
        return newVal;
      }
      return this._map.get(key);
    }
    size() {
      return this._map.size;
    }
    isEmpty() {
      return this._map.size === 0;
    }
    clear() {
      this._map.clear();
    }
    keySet() {
      const s = new JavaSet();
      for (let k of this._map.keys()) s.add(k);
      return s;
    }
    values() {
      return Array.from(this._map.values());
    }
    entrySet() {
      const arr = [];
      for (let [k, v] of this._map.entries()) {
        arr.push({ getKey: () => k, getValue: () => v, key: k, value: v });
      }
      return arr;
    }
  }

  // ArrayList / List
  class JavaList {
    constructor(initial) {
      this._arr = Array.isArray(initial) ? [...initial] : [];
    }
    add(item) {
      this._arr.push(item);
      return true;
    }
    get(index) {
      if (index < 0 || index >= this._arr.length) {
        throw new Error(`IndexOutOfBoundsException: Index ${index}, Size ${this._arr.length}`);
      }
      return this._arr[index];
    }
    set(index, element) {
      if (index < 0 || index >= this._arr.length) {
        throw new Error(`IndexOutOfBoundsException: Index ${index}, Size ${this._arr.length}`);
      }
      const prev = this._arr[index];
      this._arr[index] = element;
      return prev;
    }
    remove(indexOrObj) {
      if (typeof indexOrObj === 'number' && indexOrObj >= 0 && indexOrObj < this._arr.length) {
        const removed = this._arr.splice(indexOrObj, 1);
        return removed[0];
      }
      const idx = this._arr.indexOf(indexOrObj);
      if (idx !== -1) {
        this._arr.splice(idx, 1);
        return true;
      }
      return false;
    }
    size() {
      return this._arr.length;
    }
    isEmpty() {
      return this._arr.length === 0;
    }
    contains(item) {
      return this._arr.includes(item);
    }
    clear() {
      this._arr = [];
    }
    toArray() {
      return [...this._arr];
    }
    [Symbol.iterator]() {
      return this._arr.values();
    }
  }

  // PriorityQueue (Min-Heap by default)
  class JavaPriorityQueue {
    constructor(comparatorOrInitial) {
      this._heap = [];
      this._comparator = typeof comparatorOrInitial === 'function' 
        ? comparatorOrInitial 
        : (a, b) => (a < b ? -1 : a > b ? 1 : 0);
    }
    add(item) { return this.offer(item); }
    offer(item) {
      this._heap.push(item);
      this._bubbleUp(this._heap.length - 1);
      return true;
    }
    poll() {
      if (this._heap.length === 0) return null;
      const top = this._heap[0];
      const bottom = this._heap.pop();
      if (this._heap.length > 0) {
        this._heap[0] = bottom;
        this._bubbleDown(0);
      }
      return top;
    }
    peek() {
      return this._heap.length > 0 ? this._heap[0] : null;
    }
    size() { return this._heap.length; }
    isEmpty() { return this._heap.length === 0; }
    _bubbleUp(i) {
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this._comparator(this._heap[i], this._heap[parent]) < 0) {
          [this._heap[i], this._heap[parent]] = [this._heap[parent], this._heap[i]];
          i = parent;
        } else {
          break;
        }
      }
    }
    _bubbleDown(i) {
      const len = this._heap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;
        if (left < len && this._comparator(this._heap[left], this._heap[smallest]) < 0) {
          smallest = left;
        }
        if (right < len && this._comparator(this._heap[right], this._heap[smallest]) < 0) {
          smallest = right;
        }
        if (smallest !== i) {
          [this._heap[i], this._heap[smallest]] = [this._heap[smallest], this._heap[i]];
          i = smallest;
        } else {
          break;
        }
      }
    }
  }

  // Stack
  class JavaStack extends JavaList {
    push(item) { this.add(item); return item; }
    pop() {
      if (this.isEmpty()) throw new Error('EmptyStackException');
      return this._arr.pop();
    }
    peek() {
      if (this.isEmpty()) throw new Error('EmptyStackException');
      return this._arr[this._arr.length - 1];
    }
  }

  // Deque / Queue
  class JavaArrayDeque extends JavaList {
    offer(item) { return this.add(item); }
    offerFirst(item) { this._arr.unshift(item); return true; }
    offerLast(item) { return this.add(item); }
    poll() { return this._arr.length > 0 ? this._arr.shift() : null; }
    pollFirst() { return this.poll(); }
    pollLast() { return this._arr.length > 0 ? this._arr.pop() : null; }
    peek() { return this._arr.length > 0 ? this._arr[0] : null; }
    peekFirst() { return this.peek(); }
    peekLast() { return this._arr.length > 0 ? this._arr[this._arr.length - 1] : null; }
    push(item) { this.offerFirst(item); }
    pop() { return this.pollFirst(); }
  }

  // Arrays utility
  const JavaArrays = {
    sort: (arr, comparator) => {
      if (comparator) {
        arr.sort(comparator);
      } else {
        arr.sort((a, b) => (typeof a === 'number' ? a - b : String(a).localeCompare(String(b))));
      }
    },
    fill: (arr, val) => {
      arr.fill(val);
    },
    copyOf: (arr, newLength) => {
      const res = new Array(newLength).fill(0);
      for (let i = 0; i < Math.min(arr.length, newLength); i++) res[i] = arr[i];
      return res;
    },
    asList: (...items) => new JavaList(items),
    equals: (a, b) => JSON.stringify(a) === JSON.stringify(b),
    toString: (a) => JSON.stringify(a)
  };

  // Collections utility
  const JavaCollections = {
    sort: (list, comparator) => {
      if (list._arr) {
        JavaArrays.sort(list._arr, comparator);
      } else if (Array.isArray(list)) {
        JavaArrays.sort(list, comparator);
      }
    },
    reverse: (list) => {
      if (list._arr) list._arr.reverse();
      else if (Array.isArray(list)) list.reverse();
    },
    max: (list) => {
      const arr = list._arr || list;
      return Math.max(...arr);
    },
    min: (list) => {
      const arr = list._arr || list;
      return Math.min(...arr);
    },
    swap: (list, i, j) => {
      const arr = list._arr || list;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  // Character utility
  const JavaCharacter = {
    isLetterOrDigit: (c) => /^[a-zA-Z0-9]$/.test(c),
    isLetter: (c) => /^[a-zA-Z]$/.test(c),
    isDigit: (c) => /^[0-9]$/.test(c),
    toLowerCase: (c) => c.toLowerCase(),
    toUpperCase: (c) => c.toUpperCase(),
    isWhitespace: (c) => /\s/.test(c)
  };

  // Integer utility
  const JavaInteger = {
    parseInt: (str) => parseInt(str, 10),
    toString: (n) => String(n),
    MAX_VALUE: 2147483647,
    MIN_VALUE: -2147483648,
    bitCount: (n) => {
      n = n >>> 0;
      let count = 0;
      while (n > 0) {
        n = n & (n - 1);
        count++;
      }
      return count;
    },
    compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0),
    max: (a, b) => Math.max(a, b),
    min: (a, b) => Math.min(a, b)
  };

  // StringBuilder
  class JavaStringBuilder {
    constructor(init = '') {
      this._str = String(init);
    }
    append(val) {
      this._str += String(val);
      return this;
    }
    insert(offset, val) {
      this._str = this._str.slice(0, offset) + String(val) + this._str.slice(offset);
      return this;
    }
    deleteCharAt(index) {
      this._str = this._str.slice(0, index) + this._str.slice(index + 1);
      return this;
    }
    reverse() {
      this._str = this._str.split('').reverse().join('');
      return this;
    }
    length() { return this._str.length; }
    charAt(i) { return this._str.charAt(i); }
    setCharAt(i, ch) {
      this._str = this._str.substring(0, i) + ch + this._str.substring(i + 1);
    }
    toString() { return this._str; }
  }

  return {
    Set: JavaSet,
    HashSet: JavaSet,
    TreeSet: JavaSet,
    LinkedHashSet: JavaSet,
    Map: JavaMap,
    HashMap: JavaMap,
    TreeMap: JavaMap,
    LinkedHashMap: JavaMap,
    List: JavaList,
    ArrayList: JavaList,
    LinkedList: JavaArrayDeque,
    Queue: JavaArrayDeque,
    Deque: JavaArrayDeque,
    ArrayDeque: JavaArrayDeque,
    Stack: JavaStack,
    PriorityQueue: JavaPriorityQueue,
    Arrays: JavaArrays,
    Collections: JavaCollections,
    Character: JavaCharacter,
    Integer: JavaInteger,
    StringBuilder: JavaStringBuilder,
    Math: Math
  };
}

/**
 * Static Analysis & Error Detector for Java code.
 * Analyzes variables, mismatched types, missing brackets, and typos.
 */
export function analyzeJavaCode(code) {
  const lines = code.split('\n');
  const declaredVariables = new Map(); // varName -> { line, col, type }
  const usedVariables = []; // { name, line, col }
  const errors = [];

  // Bracket match stack
  const bracketStack = [];

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i];
    const trimmed = line.trim();

    // Skip comment lines
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      continue;
    }

    // Bracket tracking
    for (let col = 0; col < line.length; col++) {
      const char = line[col];
      if (char === '{' || char === '(' || char === '[') {
        bracketStack.push({ char, line: lineNum, col: col + 1 });
      } else if (char === '}' || char === ')' || char === ']') {
        const expected = char === '}' ? '{' : char === ')' ? '(' : '[';
        if (bracketStack.length === 0 || bracketStack[bracketStack.length - 1].char !== expected) {
          errors.push({
            type: 'Syntax Error',
            line: lineNum,
            column: col + 1,
            message: `Unmatched closing '${char}'`,
            snippet: formatSnippet(lines, lineNum, col + 1),
            suggestion: `Check opening/closing parentheses and braces around line ${lineNum}.`
          });
        } else {
          bracketStack.pop();
        }
      }
    }

    // Detect variable declarations: Type varName = ... or Set<Type> varName = ...
    const declRegex = /(?:(?:[A-Za-z0-9_<>[\]]+)\s+)+([a-zA-Z_][a-zA-Z0-9_]*)\s*(?:=|;|\:|\))/g;
    let match;
    while ((match = declRegex.exec(line)) !== null) {
      const varName = match[1];
      const reserved = ['class', 'public', 'private', 'protected', 'static', 'final', 'void', 'return', 'if', 'else', 'for', 'while', 'new', 'boolean', 'int', 'long', 'double', 'float', 'char', 'byte', 'short', 'true', 'false', 'null', 'Solution', 'import', 'package', 'containsDuplicate', 'twoSum', 'isAnagram', 'groupAnagrams', 'topKFrequent', 'isPalindrome', 'threeSum', 'maxArea', 'maxProfit', 'lengthOfLongestSubstring', 'isValid', 'search', 'reverseList', 'invertTree', 'numIslands', 'climbStairs', 'coinChange', 'singleNumber'];
      if (!reserved.includes(varName)) {
        const col = match.index + 1;
        declaredVariables.set(varName, { line: lineNum, col, name: varName });
      }
    }

    // Detect method invocation or property on variable: varName.method(...)
    const methodCallRegex = /([a-zA-Z_][a-zA-Z0-9_]*)\s*\.\s*([a-zA-Z_][a-zA-Z0-9_]*)/g;
    let callMatch;
    while ((callMatch = methodCallRegex.exec(line)) !== null) {
      const varName = callMatch[1];
      const col = callMatch.index + 1;
      const builtins = ['System', 'Math', 'Arrays', 'Collections', 'Integer', 'Character', 'String', 'Double', 'Boolean', 'this', 'super'];
      if (!builtins.includes(varName)) {
        usedVariables.push({ name: varName, line: lineNum, col, fullCall: callMatch[0] });
      }
    }
  }

  // Check for unclosed brackets
  if (bracketStack.length > 0) {
    const unclosed = bracketStack[bracketStack.length - 1];
    errors.push({
      type: 'Syntax Error',
      line: unclosed.line,
      column: unclosed.col,
      message: `Unclosed bracket '${unclosed.char}' opened on line ${unclosed.line}`,
      snippet: formatSnippet(lines, unclosed.line, unclosed.col),
      suggestion: `Add the missing matching closing bracket '${unclosed.char === '{' ? '}' : unclosed.char === '(' ? ')' : ']'}' before the end of the class.`
    });
  }

  // Check for undeclared variable usage (e.g. user defined 'st' but called 'set.add()')
  for (const used of usedVariables) {
    if (!declaredVariables.has(used.name)) {
      // Find closest declared variable for fuzzy suggestion
      let bestMatch = null;
      let minDistance = 4;
      for (const [declName] of declaredVariables.entries()) {
        const dist = levenshteinDistance(used.name.toLowerCase(), declName.toLowerCase());
        if (dist <= 2 && dist < minDistance) {
          minDistance = dist;
          bestMatch = declaredVariables.get(declName);
        }
      }

      let suggestion = `Variable '${used.name}' is not defined in this scope.`;
      if (bestMatch) {
        suggestion = `Cannot find symbol '${used.name}'. Did you mean '${bestMatch.name}' (declared on line ${bestMatch.line})?`;
      }

      errors.push({
        type: 'Compilation Error',
        line: used.line,
        column: used.col,
        message: `cannot find symbol: variable '${used.name}'`,
        snippet: formatSnippet(lines, used.line, used.col),
        suggestion
      });
      break; // Report the first critical symbol error
    }
  }

  return errors;
}

function formatSnippet(lines, lineNum, colNum) {
  const targetLine = lines[lineNum - 1] || '';
  const pointer = ' '.repeat(Math.max(0, colNum - 1)) + '^';
  return `Line ${lineNum} | ${targetLine}\n       | ${pointer}`;
}

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

/**
 * Transpiles Java DSA code into browser-executable JavaScript.
 */
export function transpileJavaToJS(javaCode) {
  const lines = javaCode.split('\n');
  let braceDepth = 0;
  const transpiledLines = [];
  const methodNames = new Set();

  // First pass: identify method names in class Solution
  for (let line of lines) {
    const isControlFlow = /^\s*(if|for|while|switch|catch|return)\b/.test(line);
    if (!isControlFlow && !line.includes('=') && !line.includes('new ')) {
      const match = line.match(/^\s*(?:(?:public|private|protected|static|final)\s+)*(?:[a-zA-Z0-9_<>[\]]+)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/);
      if (match && match[1] !== 'class') {
        methodNames.add(match[1]);
      }
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Remove package & imports
    line = line.replace(/package\s+[a-zA-Z0-9_.]+;/g, '');
    line = line.replace(/import\s+[a-zA-Z0-9_.*]+;/g, '');

    // Transpile 2D array initializations: new int[m][n] -> Array.from({length: m}, () => new Array(n).fill(0))
    line = line.replace(/new\s+(?:int|long|double|float)\[([^\]]+)\]\[([^\]]+)\]/g, 'Array.from({length: $1}, () => new Array($2).fill(0))');
    line = line.replace(/new\s+boolean\[([^\]]+)\]\[([^\]]+)\]/g, 'Array.from({length: $1}, () => new Array($2).fill(false))');
    line = line.replace(/new\s+char\[([^\]]+)\]\[([^\]]+)\]/g, 'Array.from({length: $1}, () => new Array($2).fill(" "))');

    // Transpile array literals: int[] nums = {1, 2, 3}; -> nums = [1, 2, 3];
    line = line.replace(/=\s*\{([^{}]*)\}/g, '= [$1]');
    line = line.replace(/new\s+[a-zA-Z0-9_]+\[\]\s*\{([^{}]*)\}/g, '[$1]');

    // Transpile new int[n] -> new Array(n).fill(0)
    line = line.replace(/new\s+int\[([^\]]+)\]/g, 'new Array($1).fill(0)');
    line = line.replace(/new\s+boolean\[([^\]]+)\]/g, 'new Array($1).fill(false)');
    line = line.replace(/new\s+String\[([^\]]+)\]/g, 'new Array($1).fill("")');
    line = line.replace(/new\s+char\[([^\]]+)\]/g, 'new Array($1).fill("")');

    // Transpile new HashSet<>() -> new HashSet()
    line = line.replace(/new\s+([A-Za-z0-9_]+)\s*<[^>]*>\s*\(/g, 'new $1(');

    // Method vs Field declaration
    const isControlFlow = /^\s*(if|for|while|switch|catch|return)\b/.test(line);
    const isMethodDecl = !isControlFlow && !line.includes('=') && !line.includes('new ') && /^\s*(?:(?:public|private|protected|static|final)\s+)*(?:[a-zA-Z0-9_<>[\]]+)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*(?:throws\s+[^{]+)?\s*\{?/.test(line);

    if (isMethodDecl) {
      const match = line.match(/^\s*(?:(?:public|private|protected|static|final)\s+)*(?:[a-zA-Z0-9_<>[\]]+)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*(?:throws\s+[^{]+)?\s*(\{?)/);
      if (match) {
        const methodName = match[1];
        const params = match[2];
        const hasBrace = match[3] === '{';
        const cleanedParams = params.split(',').map(p => {
          const parts = p.trim().split(/\s+/);
          return parts[parts.length - 1];
        }).filter(Boolean).join(', ');

        line = `  ${methodName}(${cleanedParams}) ${hasBrace ? '{' : ''}`;
      }
    } else {
      // Remove access modifiers
      line = line.replace(/\b(public|private|protected|static|final)\s+/g, '');

      // Variable declaration handling:
      // Inside class body (braceDepth === 1): fieldName = value;
      // Inside method body (braceDepth > 1): let fieldName = value;
      const typePattern = /^\s*(?:int|long|double|float|boolean|char|byte|short|String|Set|HashSet|TreeSet|Map|HashMap|TreeMap|List|ArrayList|LinkedList|Queue|Deque|ArrayDeque|Stack|PriorityQueue)(?:<[^>]*>)?(?:\[\])*\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(=|;)/;
      const varMatch = line.match(typePattern);
      if (varMatch) {
        const varName = varMatch[1];
        const rest = varMatch[2];
        if (braceDepth <= 1) {
          // Class field
          line = line.replace(typePattern, `  ${varName} $2`);
        } else {
          // Local variable inside method
          line = line.replace(typePattern, `  let ${varName} $2`);
        }
      }

      // Handle multi-variable declarations: int a = 1, b = 2; -> let a = 1, b = 2;
      const multiVarPattern = /^\s*(?:int|long|double|float|boolean|char|byte|short|String)\s+([a-zA-Z_][a-zA-Z0-9_]*\s*=[^,;]+(?:,\s*[a-zA-Z_][a-zA-Z0-9_]*\s*=[^,;]+)+);?/;
      const multiMatch = line.match(multiVarPattern);
      if (multiMatch) {
        if (braceDepth <= 1) {
          line = `  ${multiMatch[1]};`;
        } else {
          line = `  let ${multiMatch[1]};`;
        }
      }
    }

    // Strip remaining generic types <...>
    line = line.replace(/<[a-zA-Z0-9_,\s<>]*>/g, '');

    // Enhanced for loop: for (int x : nums) -> for (let x of nums)
    line = line.replace(/for\s*\(\s*(?:let|var|int|long|double|String|char|boolean)?\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*([^)]+)\)/g, 'for (let $1 of $2)');

    // For loop primitive type: for (int i = 0; ...) -> for (let i = 0; ...)
    line = line.replace(/for\s*\(\s*(?:int|long|double|float|char)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, 'for (let $1 =');

    // String length & charAt
    line = line.replace(/\.length\(\)/g, '.length');
    line = line.replace(/\.toCharArray\(\)/g, ".split('')");

    // Auto-bind internal helper method calls: e.g. dfs(r, c) -> this.dfs(r, c)
    for (let mName of methodNames) {
      if (mName !== 'containsDuplicate' && mName !== 'twoSum' && mName !== 'isAnagram' && mName !== 'if' && mName !== 'for' && mName !== 'while') {
        const callRegex = new RegExp(`(?<!this\\.)\\b(${mName})\\s*\\(`, 'g');
        if (!line.includes(`function ${mName}`) && !line.includes(`${mName}(` + params_placeholder(line, mName))) {
          line = line.replace(callRegex, `this.${mName}(`);
        }
      }
    }

    // System.out.println -> console.log
    line = line.replace(/System\.out\.println/g, 'console.log');
    line = line.replace(/System\.out\.print/g, 'console.log');

    // Track braces
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      else if (ch === '}') braceDepth--;
    }

    transpiledLines.push(line);
  }

  return transpiledLines.join('\n');
}

function params_placeholder(line, mName) {
  return '';
}

/**
 * Executes Java code in the browser with full test suite verification.
 */
export async function runJavaInBrowser(code, testCases, problemId) {
  // Step 1: Run Static Analysis to catch syntax & symbol errors with exact line numbers
  const staticErrors = analyzeJavaCode(code);
  if (staticErrors.length > 0) {
    const primaryError = staticErrors[0];
    const formattedMsg = `Line ${primaryError.line}, Col ${primaryError.column}: ${primaryError.message}\n${primaryError.snippet}\n💡 ${primaryError.suggestion}`;
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
        error: formattedMsg,
        errorDetails: primaryError
      }))
    };
  }

  // Step 2: Transpile to JavaScript
  let transpiledCode;
  try {
    transpiledCode = transpileJavaToJS(code);
  } catch (transpileErr) {
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
        error: `Java Transpilation Error: ${transpileErr.message}`,
        errorDetails: {
          type: 'Compilation Error',
          line: 1,
          column: 1,
          message: transpileErr.message,
          suggestion: 'Please verify standard Java syntax formatting.'
        }
      }))
    };
  }

  // Step 3: Instantiate Java runtime environment
  const runtime = createJavaRuntimeEnvironment();
  const results = [];
  let totalTime = 0;
  let allPassed = true;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const startTime = performance.now();
    const capturedLogs = [];

    const customConsole = {
      log: (...args) => {
        capturedLogs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      }
    };

    try {
      const runnerWrapper = `
        const { Set, HashSet, TreeSet, LinkedHashSet, Map, HashMap, TreeMap, LinkedHashMap, List, ArrayList, LinkedList, Queue, Deque, ArrayDeque, Stack, PriorityQueue, Arrays, Collections, Character, Integer, StringBuilder, Math } = runtime;
        const console = customConsole;

        ${transpiledCode}

        if (typeof Solution !== 'undefined') {
          return new Solution();
        }
        throw new Error("Class 'Solution' not found in Java code.");
      `;

      let factory;
      try {
        factory = new Function('runtime', 'customConsole', runnerWrapper);
      } catch (syntaxErr) {
        // Parse line number of syntax error from user Java code
        const lines = code.split('\n');
        let errLine = 1;
        let errCol = 1;

        // Try to match offending token in user's original code
        const tokenMatch = syntaxErr.message.match(/Unexpected token '([^']+)'/);
        if (tokenMatch) {
          const token = tokenMatch[1];
          for (let l = 0; l < lines.length; l++) {
            const col = lines[l].indexOf(token);
            if (col !== -1) {
              errLine = l + 1;
              errCol = col + 1;
              break;
            }
          }
        }

        const snippet = formatSnippet(lines, errLine, errCol);
        const formattedErr = `Line ${errLine}, Col ${errCol}: SyntaxError: ${syntaxErr.message}\n${snippet}\n💡 Verify Java class syntax, braces, and variable declarations.`;

        throw {
          message: formattedErr,
          details: {
            type: 'Syntax Error',
            line: errLine,
            column: errCol,
            message: syntaxErr.message,
            snippet,
            suggestion: 'Check for unclosed brackets, missing semicolons, or invalid type declarations.'
          }
        };
      }

      const solutionInstance = factory(runtime, customConsole);

      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(solutionInstance))
        .filter(m => m !== 'constructor');

      if (methods.length === 0) {
        throw new Error("No solution methods found inside 'class Solution'.");
      }

      const methodName = methods[0];
      const inputArgs = JSON.parse(JSON.stringify(tc.input));
      
      const actualOutput = solutionInstance[methodName](...inputArgs);

      const endTime = performance.now();
      const duration = Math.round((endTime - startTime) * 100) / 100;
      totalTime += duration;

      // Handle Set/List/Array output conversion to standard JSON for comparison
      let normalizedActual = actualOutput;
      if (actualOutput && typeof actualOutput.toArray === 'function') {
        normalizedActual = actualOutput.toArray();
      }

      const passed = deepEqual(normalizedActual, tc.expected);
      if (!passed) allPassed = false;

      results.push({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: normalizedActual,
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
        suggestion: 'Check for array out-of-bounds, null references, or infinite loops.'
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
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) {
    if (String(a) === String(b)) return true;
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((val, idx) => deepEqual(val, b[idx]));
  }
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
  }
  return false;
}
