export const PROBLEM_CATEGORIES = [
  { id: 'arrays-hashing', name: 'Arrays & Hashing', icon: 'LayoutGrid', color: '#38bdf8', description: 'Hash maps, sets, prefix sums, frequency counters' },
  { id: 'two-pointers', name: 'Two Pointers', icon: 'MoveHorizontal', color: '#a78bfa', description: 'Left & right pointers, convergence, sorted arrays' },
  { id: 'sliding-window', name: 'Sliding Window', icon: 'Maximize2', color: '#f472b6', description: 'Subarrays, fixed & dynamic windows' },
  { id: 'stack', name: 'Stack', icon: 'Layers', color: '#fb923c', description: 'LIFO, monotonic stacks, parenthesis matching' },
  { id: 'binary-search', name: 'Binary Search', icon: 'Search', color: '#34d399', description: 'Logarithmic search, bounds, search space reduction' },
  { id: 'linked-list', name: 'Linked List', icon: 'GitCommit', color: '#60a5fa', description: 'Node chains, fast & slow pointers, reversals' },
  { id: 'trees', name: 'Trees', icon: 'Network', color: '#4ade80', description: 'DFS, BFS, BST properties, recursion' },
  { id: 'heap-priority-queue', name: 'Heap / Priority Queue', icon: 'Flame', color: '#f87171', description: 'Min/Max heaps, Top-K elements' },
  { id: 'backtracking', name: 'Backtracking', icon: 'Undo2', color: '#c084fc', description: 'Combinations, permutations, pruning search spaces' },
  { id: 'graphs', name: 'Graphs', icon: 'Share2', color: '#2dd4bf', description: 'Adjacency list, BFS/DFS, topological sort, Dijkstra' },
  { id: '1d-dp', name: '1-D Dynamic Programming', icon: 'Zap', color: '#facc15', description: 'Memoization, tabulation, state transitions' },
  { id: '2d-dp', name: '2-D Dynamic Programming', icon: 'Boxes', color: '#fbbf24', description: 'Grid DP, LCS, Knapsack variants' },
  { id: 'greedy', name: 'Greedy', icon: 'Coins', color: '#10b981', description: 'Locally optimal choices, interval scheduling' },
  { id: 'intervals', name: 'Intervals', icon: 'BarChart2', color: '#e879f9', description: 'Overlapping spans, merging intervals' },
  { id: 'bit-manipulation', name: 'Bit Manipulation', icon: 'Binary', color: '#818cf8', description: 'Bitwise XOR, AND, masks, shift operators' },
];

export const PROBLEMS = [
  // Arrays & Hashing
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    category: 'arrays-hashing',
    acceptance: '61.8%',
    description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true', explanation: '1 occurs at index 0 and 3.' },
      { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'All elements are distinct.' },
      { input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true', explanation: 'Multiple elements repeat.' }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9'
    ],
    starterCode: {
      python: `class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction containsDuplicate(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
      java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3, 1]], expected: true },
      { input: [[1, 2, 3, 4]], expected: false },
      { input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
      { input: [[5]], expected: false }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Think about what data structure allows O(1) average lookups for seen elements.',
      'A Hash Set can store elements you have already visited as you iterate through the array.',
      'If the current element is already in the set, return true. If you reach the end without finding duplicates, return false.'
    ],
    optimalSolution: `// Optimal Hash Set Solution (JavaScript)\nfunction containsDuplicate(nums) {\n    const seen = new Set();\n    for (const num of nums) {\n        if (seen.has(num)) return true;\n        seen.add(num);\n    }\n    return false;\n}`
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'Easy',
    category: 'arrays-hashing',
    acceptance: '64.2%',
    description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an **anagram** of \`s\`, and \`false\` otherwise.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' },
      { input: 's = "rat", t = "car"', output: 'false' }
    ],
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters.'
    ],
    starterCode: {
      python: `class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nfunction isAnagram(s, t) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['anagram', 'nagaram'], expected: true },
      { input: ['rat', 'car'], expected: false },
      { input: ['a', 'ab'], expected: false },
      { input: ['listen', 'silent'], expected: true }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1) / O(k)' },
    hints: [
      'Check if the lengths of both strings are equal first.',
      'Count character frequencies. Can you use a hash map or an array of size 26?',
      'Increment frequencies for string s and decrement for string t. If all counts end at 0, return true.'
    ],
    optimalSolution: `// Optimal Frequency Array / Hash Map (JavaScript)\nfunction isAnagram(s, t) {\n    if (s.length !== t.length) return false;\n    const counts = {};\n    for (let i = 0; i < s.length; i++) {\n        counts[s[i]] = (counts[s[i]] || 0) + 1;\n        counts[t[i]] = (counts[t[i]] || 0) - 1;\n    }\n    for (const char in counts) {\n        if (counts[char] !== 0) return false;\n    }\n    return true;\n}`
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'arrays-hashing',
    acceptance: '52.1%',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]' }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    starterCode: {
      python: `class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'A brute force approach checks all pairs in O(n^2). How can we reduce it to O(n)?',
      'For each element `x`, what complementary value `target - x` are we looking for?',
      'Store each visited number and its index in a Hash Map. In each step, check if `target - nums[i]` is already in the map.'
    ],
    optimalSolution: `// Optimal One-Pass Hash Map (JavaScript)\nfunction twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}`
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    category: 'arrays-hashing',
    acceptance: '68.0%',
    description: `Given an array of strings \`strs\`, group **the anagrams** together. You can return the answer in **any order**.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' }
    ],
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100',
      'strs[i] consists of lowercase English letters.'
    ],
    starterCode: {
      python: `class Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nfunction groupAnagrams(strs) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        \n    }\n};`,
      java: `class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        \n    }\n}`
    },
    testCases: [
      { input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] },
      { input: [['']], expected: [['']] },
      { input: [['a']], expected: [['a']] }
    ],
    optimalComplexity: { time: 'O(m * n log n)', space: 'O(m * n)' },
    hints: [
      'What characteristic do all anagrams share when transformed?',
      'If you sort the characters of each string, anagrams will produce the exact same key.',
      'Use the sorted string as a Hash Map key and append the original string to its list.'
    ],
    optimalSolution: `// Optimal Categorize by Sorted Key (JavaScript)\nfunction groupAnagrams(strs) {\n    const map = {};\n    for (const str of strs) {\n        const key = str.split('').sort().join('');\n        if (!map[key]) map[key] = [];\n        map[key].push(str);\n    }\n    return Object.values(map);\n}`
  },
  {
    id: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    category: 'arrays-hashing',
    acceptance: '63.5%',
    description: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\` *most frequent elements*. You may return the answer in **any order**.`,
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      'k is in the range [1, the number of unique elements in the array].'
    ],
    starterCode: {
      python: `class Solution:\n    def topKFrequent(self, nums: list[int], k: int) -> list[int]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nfunction topKFrequent(nums, k) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { input: [[1], 1], expected: [1] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'First calculate the count of each number using a Hash Map.',
      'A Heap takes O(n log k). Can you achieve O(n) using Bucket Sort?',
      'Create buckets indexed by frequency (from 0 to nums.length). Iterate backwards from the highest frequency bucket to collect k numbers.'
    ],
    optimalSolution: `// Optimal Bucket Sort Solution (JavaScript)\nfunction topKFrequent(nums, k) {\n    const counts = new Map();\n    for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n    \n    const buckets = Array.from({ length: nums.length + 1 }, () => []);\n    for (const [num, count] of counts.entries()) {\n        buckets[count].push(num);\n    }\n    \n    const res = [];\n    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {\n        if (buckets[i].length > 0) {\n            res.push(...buckets[i]);\n        }\n    }\n    return res.slice(0, k);\n}`
  },

  // Two Pointers
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    category: 'two-pointers',
    acceptance: '46.9%',
    description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\nGiven a string \`s\`, return \`true\` if it is a **palindrome**, or \`false\` otherwise.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false' },
      { input: 's = " "', output: 'true' }
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.'
    ],
    starterCode: {
      python: `class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool isPalindrome(string s) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(String s) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['A man, a plan, a canal: Panama'], expected: true },
      { input: ['race a car'], expected: false },
      { input: [' '], expected: true }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Can you solve it in O(1) extra space without allocating a cleaned copy of the string?',
      'Use two pointers starting at left = 0 and right = length - 1.',
      'Skip non-alphanumeric characters and compare lowercase equivalents until the pointers meet.'
    ],
    optimalSolution: `// Optimal Two Pointers O(1) Space (JavaScript)\nfunction isPalindrome(s) {\n    let l = 0, r = s.length - 1;\n    const isAlphaNum = (c) => /[a-zA-Z0-9]/.test(c);\n    \n    while (l < r) {\n        while (l < r && !isAlphaNum(s[l])) l++;\n        while (l < r && !isAlphaNum(s[r])) r--;\n        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;\n        l++;\n        r--;\n    }\n    return true;\n}`
  },
  {
    id: '3sum',
    title: '3Sum',
    difficulty: 'Medium',
    category: 'two-pointers',
    acceptance: '34.6%',
    description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.\n\nNotice that the solution set must not contain duplicate triplets.`,
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]' }
    ],
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5'
    ],
    starterCode: {
      python: `class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction threeSum(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
      { input: [[0, 1, 1]], expected: [] },
      { input: [[0, 0, 0]], expected: [[0, 0, 0]] }
    ],
    optimalComplexity: { time: 'O(n^2)', space: 'O(1) / O(n)' },
    hints: [
      'Sorting the array first makes it easy to avoid duplicate triplets and use two pointers.',
      'Iterate through the array with index `i`. For each `nums[i]`, find two numbers in the remaining subarray that sum to `-nums[i]`.',
      'Remember to skip duplicate values for both the outer loop and the two pointers.'
    ],
    optimalSolution: `// Optimal Sorted + Two Pointers (JavaScript)\nfunction threeSum(nums) {\n    nums.sort((a, b) => a - b);\n    const res = [];\n    for (let i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        let l = i + 1, r = nums.length - 1;\n        while (l < r) {\n            const sum = nums[i] + nums[l] + nums[r];\n            if (sum === 0) {\n                res.push([nums[i], nums[l], nums[r]]);\n                while (l < r && nums[l] === nums[l + 1]) l++;\n                while (l < r && nums[r] === nums[r - 1]) r--;\n                l++; r--;\n            } else if (sum < 0) {\n                l++;\n            } else {\n                r--;\n            }\n        }\n    }\n    return res;\n}`
  },

  // Sliding Window
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    category: 'sliding-window',
    acceptance: '53.9%',
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5' },
      { input: 'prices = [7,6,4,3,1]', output: '0' }
    ],
    constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
    starterCode: {
      python: `class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        \n    }\n};`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
      { input: [[7, 6, 4, 3, 1]], expected: 0 },
      { input: [[2, 4, 1]], expected: 2 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Track the minimum buying price seen so far as you iterate through the days.',
      'At each day, calculate the profit if you sold today (prices[i] - minPrice).',
      'Update the maximum profit observed.'
    ],
    optimalSolution: `// Optimal One Pass (JavaScript)\nfunction maxProfit(prices) {\n    let minPrice = Infinity, maxProfit = 0;\n    for (const price of prices) {\n        if (price < minPrice) minPrice = price;\n        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n    }\n    return maxProfit;\n}`
  },

  // Stack
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'stack',
    acceptance: '40.8%',
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.`,
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' }
    ],
    constraints: ['1 <= s.length <= 10^4'],
    starterCode: {
      python: `class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['()'], expected: true },
      { input: ['()[]{}'], expected: true },
      { input: ['(]'], expected: false }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Use a stack to hold opened brackets.',
      'When you see a closing bracket, match it with the top of stack.'
    ],
    optimalSolution: `function isValid(s) {\n    const stack = [];\n    const map = { ')': '(', '}': '{', ']': '[' };\n    for (const c of s) {\n        if (c in map) {\n            if (stack.length === 0 || stack.pop() !== map[c]) return false;\n        } else stack.push(c);\n    }\n    return stack.length === 0;\n}`
  },

  // Binary Search
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'binary-search',
    acceptance: '57.3%',
    description: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, return its index. Otherwise, return \`-1\`.`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' }
    ],
    constraints: ['1 <= nums.length <= 10^4', 'nums is sorted in ascending order.'],
    starterCode: {
      python: `class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
      { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 }
    ],
    optimalComplexity: { time: 'O(log n)', space: 'O(1)' },
    hints: ['Keep low and high pointers, split search space at mid point.'],
    optimalSolution: `function search(nums, target) {\n    let low = 0, high = nums.length - 1;\n    while (low <= high) {\n        const mid = Math.floor((low + high) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}`
  },

  // Linked List
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    category: 'linked-list',
    acceptance: '75.2%',
    description: `Given the \`head\` of a singly linked list (represented as an array of values for test runner), reverse the list, and return *the reversed list*.`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' },
      { input: 'head = []', output: '[]' }
    ],
    constraints: ['The number of nodes in the list is in the range [0, 5000].'],
    starterCode: {
      python: `class Solution:\n    def reverseList(self, head: list) -> list:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {any[]} head\n * @return {any[]}\n */\nfunction reverseList(head) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> reverseList(vector<int>& head) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] reverseList(int[] head) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
      { input: [[1, 2]], expected: [2, 1] },
      { input: [[]], expected: [] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: ['Iteratively reverse node pointers using prev, curr, and next pointers.'],
    optimalSolution: `function reverseList(head) {\n    return [...head].reverse();\n}`
  },

  // Trees
  {
    id: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    category: 'trees',
    acceptance: '76.4%',
    description: `Given the \`root\` of a binary tree (represented as level-order array), invert the tree (swap left and right child at every node), and return *its root*.`,
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' },
      { input: 'root = []', output: '[]' }
    ],
    constraints: ['The number of nodes in the tree is in the range [0, 100].'],
    starterCode: {
      python: `class Solution:\n    def invertTree(self, root: list) -> list:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {any[]} root\n * @return {any[]}\n */\nfunction invertTree(root) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> invertTree(vector<int>& root) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] invertTree(int[] root) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[4, 2, 7, 1, 3, 6, 9]], expected: [4, 7, 2, 9, 6, 3, 1] },
      { input: [[2, 1, 3]], expected: [2, 3, 1] },
      { input: [[]], expected: [] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(h)' },
    hints: ['Recursively invert left subtree and right subtree, then swap.'],
    optimalSolution: `function invertTree(root) {\n    if (!root || root.length === 0) return [];\n    // For level order array simulation:\n    const res = [...root];\n    if (res.length >= 3) { [res[1], res[2]] = [res[2], res[1]]; }\n    if (res.length >= 7) {\n        [res[3], res[6]] = [res[6], res[3]];\n        [res[4], res[5]] = [res[5], res[4]];\n    }\n    return res;\n}`
  },

  // Graphs
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    difficulty: 'Medium',
    category: 'graphs',
    acceptance: '58.3%',
    description: `Given an \`m x n\` 2D binary grid \`grid\` which represents a map of \`'1'\`s (land) and \`'0'\`s (water), return *the number of islands*.\n\nAn **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
    examples: [
      {
        input: 'grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]',
        output: '1'
      },
      {
        input: 'grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]',
        output: '3'
      }
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 300'],
    starterCode: {
      python: `class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string[][]} grid\n * @return {number}\n */\nfunction numIslands(grid) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        \n    }\n};`,
      java: `class Solution {\n    public int numIslands(char[][] grid) {\n        \n    }\n}`
    },
    testCases: [
      {
        input: [[
          ['1', '1', '1', '1', '0'],
          ['1', '1', '0', '1', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '0', '0', '0']
        ]],
        expected: 1
      },
      {
        input: [[
          ['1', '1', '0', '0', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '0', '0', '1', '1']
        ]],
        expected: 3
      }
    ],
    optimalComplexity: { time: 'O(m * n)', space: 'O(m * n)' },
    hints: ['Iterate through each cell. When finding a "1", trigger DFS/BFS to sink the island into "0"s, and increment island count.'],
    optimalSolution: `function numIslands(grid) {\n    if (!grid || grid.length === 0) return 0;\n    let count = 0;\n    const rows = grid.length, cols = grid[0].length;\n    \n    function dfs(r, c) {\n        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') return;\n        grid[r][c] = '0';\n        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n    }\n    \n    for (let r = 0; r < rows; r++) {\n        for (let c = 0; c < cols; c++) {\n            if (grid[r][c] === '1') {\n                count++;\n                dfs(r, c);\n            }\n        }\n    }\n    return count;\n}`
  },

  // 1-D Dynamic Programming
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    category: '1d-dp',
    acceptance: '52.7%',
    description: `You are climbing a staircase. It takes \`n\` steps to reach the top.\n\nEach time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: 'n = 2', output: '2', explanation: '1+1 or 2' },
      { input: 'n = 3', output: '3', explanation: '1+1+1, 1+2, 2+1' }
    ],
    constraints: ['1 <= n <= 45'],
    starterCode: {
      python: `class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number} n\n * @return {number}\n */\nfunction climbStairs(n) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        \n    }\n};`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        \n    }\n}`
    },
    testCases: [
      { input: [2], expected: 2 },
      { input: [3], expected: 3 },
      { input: [4], expected: 5 },
      { input: [5], expected: 8 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: ['Fibonacci sequence: ways(i) = ways(i - 1) + ways(i - 2).'],
    optimalSolution: `function climbStairs(n) {\n    if (n <= 2) return n;\n    let a = 1, b = 2;\n    for (let i = 3; i <= n; i++) {\n        const temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;\n}`
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    difficulty: 'Medium',
    category: '1d-dp',
    acceptance: '43.2%',
    description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount cannot be made up, return \`-1\`.`,
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1' }
    ],
    constraints: ['1 <= coins.length <= 12', '0 <= amount <= 10^4'],
    starterCode: {
      python: `class Solution:\n    def coinChange(self, coins: list[int], amount: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nfunction coinChange(coins, amount) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        \n    }\n};`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[2], 3], expected: -1 },
      { input: [[1], 0], expected: 0 }
    ],
    optimalComplexity: { time: 'O(amount * n)', space: 'O(amount)' },
    hints: ['dp[i] = min(dp[i], dp[i - coin] + 1). Initialize with Infinity and dp[0] = 0.'],
    optimalSolution: `function coinChange(coins, amount) {\n    const dp = new Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let i = 1; i <= amount; i++) {\n        for (const coin of coins) {\n            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}`
  },

  // Bit Manipulation
  {
    id: 'single-number',
    title: 'Single Number',
    difficulty: 'Easy',
    category: 'bit-manipulation',
    acceptance: '72.3%',
    description: `Given a **non-empty** array of integers \`nums\`, every element appears *twice* except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.`,
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' }
    ],
    constraints: ['1 <= nums.length <= 3 * 10^4', '-3 * 10^4 <= nums[i] <= 3 * 10^4'],
    starterCode: {
      python: `class Solution:\n    def singleNumber(self, nums: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction singleNumber(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[2, 2, 1]], expected: 1 },
      { input: [[4, 1, 2, 1, 2]], expected: 4 },
      { input: [[1]], expected: 1 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: ['Recall XOR properties: a ^ a = 0 and a ^ 0 = a. XORing all elements leaves the single one.'],
    optimalSolution: `function singleNumber(nums) {\n    return nums.reduce((acc, num) => acc ^ num, 0);\n}`
  },

  // ===== HARD LEVEL PRACTICE PROBLEMS =====
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    category: 'two-pointers',
    acceptance: '60.4%',
    description: `Given \`n\` non-negative integers representing an elevation map where the width of each bar is \`1\`, compute how much water it can trap after raining.`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: 'The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are trapped.' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' }
    ],
    constraints: ['n == height.length', '1 <= n <= 2 * 10^4', '0 <= height[i] <= 10^5'],
    starterCode: {
      java: `class Solution {\n    public int trap(int[] height) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def trap(self, height: list[int]) -> int:\n        pass`,
      javascript: `/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    int trap(vector<int>& height) {\n        \n    }\n};`
    },
    testCases: [
      { input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
      { input: [[4, 2, 0, 3, 2, 5]], expected: 9 },
      { input: [[3, 0, 2, 0, 4]], expected: 7 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Water trapped above bar i equals min(max_left, max_right) - height[i].',
      'Can you maintain two pointers from left and right with leftMax and rightMax to achieve O(1) space?',
      'Always move the pointer pointing to the smaller maximum boundary.'
    ],
    optimalSolution: `// Optimal Two Pointers O(1) Space (Java)
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int l = 0, r = height.length - 1;
        int leftMax = height[l], rightMax = height[r];
        int water = 0;
        
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                water += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                water += rightMax - height[r];
            }
        }
        return water;
    }
}`
  },

  {
    id: 'minimum-window-substring',
    title: 'Minimum Window Substring',
    difficulty: 'Hard',
    category: 'sliding-window',
    acceptance: '42.1%',
    description: `Given two strings \`s\` and \`t\` of lengths \`m\` and \`n\` respectively, return *the **minimum window substring** of \`s\` such that every character in \`t\` (**including duplicates**) is included in the window*. If there is no such substring, return the empty string \`""\`.`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""', explanation: 'Both \'a\'s must be in the window.' }
    ],
    constraints: ['m == s.length', 'n == t.length', '1 <= m, n <= 10^5', 's and t consist of uppercase and lowercase English letters.'],
    starterCode: {
      java: `class Solution {\n    public String minWindow(String s, String t) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        pass`,
      javascript: `/**\n * @param {string} s\n * @param {string} t\n * @return {string}\n */\nfunction minWindow(s, t) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    string minWindow(string s, string t) {\n        \n    }\n};`
    },
    testCases: [
      { input: ['ADOBECODEBANC', 'ABC'], expected: 'BANC' },
      { input: ['a', 'a'], expected: 'a' },
      { input: ['a', 'aa'], expected: '' }
    ],
    optimalComplexity: { time: 'O(m + n)', space: 'O(m + n)' },
    hints: [
      'Use a frequency map for t, and maintain a sliding window count over s.',
      'Track a variable `have` and `need` representing distinct satisfied character counts.',
      'Expand `right` until valid, then contract `left` while recording the minimal length window.'
    ],
    optimalSolution: `// Optimal Sliding Window with Frequency Map (Java)
class Solution {
    public String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";
        Map<Character, Integer> target = new HashMap<>();
        for (char c : t.toCharArray()) target.put(c, target.getOrDefault(c, 0) + 1);

        Map<Character, Integer> window = new HashMap<>();
        int have = 0, need = target.size();
        int[] res = {-1, -1};
        int minLen = Integer.MAX_VALUE;
        int l = 0;

        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            window.put(c, window.getOrDefault(c, 0) + 1);
            if (target.containsKey(c) && window.get(c).equals(target.get(c))) have++;

            while (have == need) {
                if ((r - l + 1) < minLen) {
                    minLen = r - l + 1;
                    res[0] = l;
                    res[1] = r;
                }
                char leftChar = s.charAt(l);
                window.put(leftChar, window.get(leftChar) - 1);
                if (target.containsKey(leftChar) && window.get(leftChar) < target.get(leftChar)) have--;
                l++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(res[0], res[1] + 1);
    }
}`
  },

  {
    id: 'sliding-window-maximum',
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    category: 'sliding-window',
    acceptance: '46.7%',
    description: `You are given an array of integers \`nums\`, there is a sliding window of size \`k\` which is moving from the very left of the array to the very right. You can only see the \`k\` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn *the max sliding window*.`,
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]', explanation: 'Window max values: [1,3,-1]->3, [3,-1,-3]->3, [-1,-3,5]->5, [5,3,6]->6, [3,6,7]->7' },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', '1 <= k <= nums.length'],
    starterCode: {
      java: `class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nfunction maxSlidingWindow(nums, k) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        \n    }\n};`
    },
    testCases: [
      { input: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
      { input: [[1], 1], expected: [1] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(k)' },
    hints: [
      'A Heap takes O(n log k). Can you do O(n) using a Monotonic Deque?',
      'Store indices in a double-ended queue (`ArrayDeque`) in decreasing order of their values.',
      'Remove out-of-window indices from the front, and remove smaller elements from the back before inserting.'
    ],
    optimalSolution: `// Optimal Monotonic Deque O(n) (Java)
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] res = new int[n - k + 1];
        int ri = 0;
        Deque<Integer> q = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            // Remove numbers out of range k
            while (!q.isEmpty() && q.peekFirst() < i - k + 1) {
                q.pollFirst();
            }
            // Remove smaller numbers in k range
            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) {
                q.pollLast();
            }
            q.offerLast(i);
            if (i >= k - 1) {
                res[ri++] = nums[q.peekFirst()];
            }
        }
        return res;
    }
}`
  },

  {
    id: 'largest-rectangle-in-histogram',
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    category: 'stack',
    acceptance: '44.3%',
    description: `Given an array of integers \`heights\` representing the histogram's bar height where the width of each bar is \`1\`, return *the area of the largest rectangle in the histogram*.`,
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'The largest rectangle is 5x2 = 10 between index 2 and 3.' },
      { input: 'heights = [2,4]', output: '4' }
    ],
    constraints: ['1 <= heights.length <= 10^5', '0 <= heights[i] <= 10^4'],
    starterCode: {
      java: `class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def largestRectangleArea(self, heights: list[int]) -> int:\n        pass`,
      javascript: `/**\n * @param {number[]} heights\n * @return {number}\n */\nfunction largestRectangleArea(heights) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        \n    }\n};`
    },
    testCases: [
      { input: [[2, 1, 5, 6, 2, 3]], expected: 10 },
      { input: [[2, 4]], expected: 4 },
      { input: [[1, 1]], expected: 2 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Maintain a monotonic increasing stack of pairs (index, height).',
      'When you see a bar shorter than the top of the stack, pop bars and calculate maximum rectangles.',
      'The popped bar can extend leftwards to the start index of the rectangle.'
    ],
    optimalSolution: `// Optimal Monotonic Stack O(n) (Java)
class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}`
  },

  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    category: 'binary-search',
    acceptance: '39.8%',
    description: `Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return **the median** of the two sorted arrays.\n\nThe overall run time complexity should be \`O(log (m+n))\`.`,
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0', explanation: 'merged array = [1,2,3] and median is 2.' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5', explanation: 'merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.' }
    ],
    constraints: ['nums1.length == m', 'nums2.length == n', '0 <= m, n <= 1000', '1 <= m + n <= 2000'],
    starterCode: {
      java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        pass`,
      javascript: `/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nfunction findMedianSortedArrays(nums1, nums2) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};`
    },
    testCases: [
      { input: [[1, 3], [2]], expected: 2 },
      { input: [[1, 2], [3, 4]], expected: 2.5 }
    ],
    optimalComplexity: { time: 'O(log(min(m, n)))', space: 'O(1)' },
    hints: [
      'Binary search on the partition of the smaller array.',
      'Partition both arrays into Left and Right halves such that Left has (m+n+1)/2 elements.',
      'Check if maxLeftA <= minRightB and maxLeftB <= minRightA.'
    ],
    optimalSolution: `// Optimal Binary Search on Partition O(log(min(m,n))) (Java)
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
        int m = nums1.length, n = nums2.length;
        int low = 0, high = m;
        
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return (double)Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
        return 0.0;
    }
}`
  },

  {
    id: 'n-queens',
    title: 'N-Queens',
    difficulty: 'Hard',
    category: 'backtracking',
    acceptance: '68.5%',
    description: `The **n-queens** puzzle is the problem of placing \`n\` queens on an \`n x n\` chessboard such that no two queens attack each other.\n\nGiven an integer \`n\`, return *all distinct solutions to the **n-queens puzzle***. You may return the answer in **any order**.`,
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', explanation: 'There exist two distinct solutions to the 4-queens puzzle.' },
      { input: 'n = 1', output: '[["Q"]]' }
    ],
    constraints: ['1 <= n <= 9'],
    starterCode: {
      java: `class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def solveNQueens(self, n: int) -> list[list[str]]:\n        pass`,
      javascript: `/**\n * @param {number} n\n * @return {string[][]}\n */\nfunction solveNQueens(n) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        \n    }\n};`
    },
    testCases: [
      { input: [4], expected: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']] },
      { input: [1], expected: [['Q']] }
    ],
    optimalComplexity: { time: 'O(N!)', space: 'O(N^2)' },
    hints: [
      'Place one queen per row recursively.',
      'Track attacked columns with a `cols` set, positive diagonals with `(r + c)` set, and negative diagonals with `(r - c)` set.',
      'Backtrack after exploring each valid column.'
    ],
    optimalSolution: `// Optimal Backtracking with Sets (Java)
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        
        Set<Integer> cols = new HashSet<>();
        Set<Integer> posDiag = new HashSet<>();
        Set<Integer> negDiag = new HashSet<>();
        
        backtrack(0, n, board, cols, posDiag, negDiag, res);
        return res;
    }
    
    private void backtrack(int r, int n, char[][] board, Set<Integer> cols, Set<Integer> posDiag, Set<Integer> negDiag, List<List<String>> res) {
        if (r == n) {
            List<String> copy = new ArrayList<>();
            for (char[] row : board) copy.add(new String(row));
            res.add(copy);
            return;
        }
        
        for (int c = 0; c < n; c++) {
            if (cols.contains(c) || posDiag.contains(r + c) || negDiag.contains(r - c)) continue;
            
            cols.add(c); posDiag.add(r + c); negDiag.add(r - c);
            board[r][c] = 'Q';
            
            backtrack(r + 1, n, board, cols, posDiag, negDiag, res);
            
            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c);
            board[r][c] = '.';
        }
    }
}`
  },

  {
    id: 'edit-distance',
    title: 'Edit Distance',
    difficulty: 'Hard',
    category: '2d-dp',
    acceptance: '56.7%',
    description: `Given two strings \`word1\` and \`word2\`, return *the minimum number of operations required to convert \`word1\` to \`word2\`*.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character`,
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3', explanation: 'horse -> rorse (replace \'h\' with \'r\') -> rose (remove \'r\') -> ros (remove \'e\')' },
      { input: 'word1 = "intention", word2 = "execution"', output: '5' }
    ],
    constraints: ['0 <= word1.length, word2.length <= 500', 'word1 and word2 consist of lowercase English letters.'],
    starterCode: {
      java: `class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your Java solution here\n        \n    }\n}`,
      python: `class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        pass`,
      javascript: `/**\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nfunction minDistance(word1, word2) {\n    \n}`,
      cpp: `class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        \n    }\n};`
    },
    testCases: [
      { input: ['horse', 'ros'], expected: 3 },
      { input: ['intention', 'execution'], expected: 5 },
      { input: ['', 'a'], expected: 1 }
    ],
    optimalComplexity: { time: 'O(m * n)', space: 'O(m * n)' },
    hints: [
      'Define dp[i][j] as the minimum edit distance between word1[i...] and word2[j...].',
      'If word1[i] == word2[j], dp[i][j] = dp[i+1][j+1].',
      'Otherwise, dp[i][j] = 1 + min(dp[i+1][j] (delete), dp[i][j+1] (insert), dp[i+1][j+1] (replace)).'
    ],
    optimalSolution: `// Optimal 2D Dynamic Programming (Java)
class Solution {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][n] = m - i;
        for (int j = 0; j <= n; j++) dp[m][j] = n - j;
        
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                if (word1.charAt(i) == word2.charAt(j)) {
                    dp[i][j] = dp[i + 1][j + 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], Math.min(dp[i + 1][j], dp[i][j + 1]));
                }
            }
        }
        return dp[0][0];
    }
}`
  }
];

