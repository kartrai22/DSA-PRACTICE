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
  },

  // ===== NEW: More Arrays & Hashing =====
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    category: 'arrays-hashing',
    acceptance: '65.4%',
    description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.\n\nThe product of any prefix or suffix of \`nums\` is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in \`O(n)\` time and **without using the division operation**.`,
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
    ],
    constraints: [
      '2 <= nums.length <= 10^5',
      '-30 <= nums[i] <= 30',
      'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.'
    ],
    starterCode: {
      python: `class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction productExceptSelf(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { input: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Build a prefix product array from the left and a suffix product from the right.',
      'You can compute prefix in a forward pass storing into the result, then multiply by suffix in a backward pass using a running variable.',
      'This avoids using division entirely.'
    ],
    optimalSolution: `function productExceptSelf(nums) {\n    const n = nums.length;\n    const res = new Array(n).fill(1);\n    let prefix = 1;\n    for (let i = 0; i < n; i++) {\n        res[i] = prefix;\n        prefix *= nums[i];\n    }\n    let suffix = 1;\n    for (let i = n - 1; i >= 0; i--) {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    return res;\n}`
  },
  {
    id: 'longest-consecutive-sequence',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    category: 'arrays-hashing',
    acceptance: '47.2%',
    description: `Given an unsorted array of integers \`nums\`, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in \`O(n)\` time.`,
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'The longest consecutive sequence is [1, 2, 3, 4]. Its length is 4.' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' }
    ],
    constraints: [
      '0 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9'
    ],
    starterCode: {
      python: `class Solution:\n    def longestConsecutive(self, nums: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction longestConsecutive(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int longestConsecutive(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
      { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
      { input: [[]], expected: 0 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Put all numbers into a Set for O(1) lookup.',
      'A number is the start of a sequence if (num - 1) is NOT in the set.',
      'From each start, count consecutive elements upward.'
    ],
    optimalSolution: `function longestConsecutive(nums) {\n    const numSet = new Set(nums);\n    let longest = 0;\n    for (const num of numSet) {\n        if (!numSet.has(num - 1)) {\n            let length = 1;\n            while (numSet.has(num + length)) length++;\n            longest = Math.max(longest, length);\n        }\n    }\n    return longest;\n}`
  },

  // ===== NEW: More Two Pointers =====
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    category: 'two-pointers',
    acceptance: '55.8%',
    description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`th line are \`(i, 0)\` and \`(i, height[i])\`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.`,
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'The max area is between index 1 and 8: min(8,7) * (8-1) = 49.' },
      { input: 'height = [1,1]', output: '1' }
    ],
    constraints: [
      'n == height.length',
      '2 <= n <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    starterCode: {
      python: `class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} height\n * @return {number}\n */\nfunction maxArea(height) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        \n    }\n};`,
      java: `class Solution {\n    public int maxArea(int[] height) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
      { input: [[1, 1]], expected: 1 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Start with the widest container (left = 0, right = n-1).',
      'The area is min(height[l], height[r]) * (r - l).',
      'Always move the pointer with the shorter height inward — the shorter side limits the water.'
    ],
    optimalSolution: `function maxArea(height) {\n    let l = 0, r = height.length - 1, maxWater = 0;\n    while (l < r) {\n        const water = Math.min(height[l], height[r]) * (r - l);\n        maxWater = Math.max(maxWater, water);\n        if (height[l] < height[r]) l++;\n        else r--;\n    }\n    return maxWater;\n}`
  },

  // ===== NEW: More Sliding Window =====
  {
    id: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'sliding-window',
    acceptance: '34.5%',
    description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: 'The answer is "b", with the length of 1.' },
      { input: 's = "pwwkew"', output: '3', explanation: 'The answer is "wke", with the length of 3.' }
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.'
    ],
    starterCode: {
      python: `class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @return {number}\n */\nfunction lengthOfLongestSubstring(s) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        \n    }\n};`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['abcabcbb'], expected: 3 },
      { input: ['bbbbb'], expected: 1 },
      { input: ['pwwkew'], expected: 3 },
      { input: [''], expected: 0 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(min(m, n))' },
    hints: [
      'Use a sliding window with a Set to track characters in the current window.',
      'When a duplicate is found, shrink the window from the left until the duplicate is removed.',
      'Track the maximum window size seen.'
    ],
    optimalSolution: `function lengthOfLongestSubstring(s) {\n    const charSet = new Set();\n    let l = 0, maxLen = 0;\n    for (let r = 0; r < s.length; r++) {\n        while (charSet.has(s[r])) {\n            charSet.delete(s[l]);\n            l++;\n        }\n        charSet.add(s[r]);\n        maxLen = Math.max(maxLen, r - l + 1);\n    }\n    return maxLen;\n}`
  },
  {
    id: 'longest-repeating-character-replacement',
    title: 'Longest Repeating Character Replacement',
    difficulty: 'Medium',
    category: 'sliding-window',
    acceptance: '53.7%',
    description: `You are given a string \`s\` and an integer \`k\`. You can choose any character of the string and change it to any other uppercase English letter. You can perform this operation at most \`k\` times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.`,
    examples: [
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace the two As with two Bs or vice versa.' },
      { input: 's = "AABABBA", k = 1', output: '4' }
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of only uppercase English letters.',
      '0 <= k <= s.length'
    ],
    starterCode: {
      python: `class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nfunction characterReplacement(s, k) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        \n    }\n};`,
      java: `class Solution {\n    public int characterReplacement(String s, int k) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['ABAB', 2], expected: 4 },
      { input: ['AABABBA', 1], expected: 4 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Maintain a sliding window and a frequency count of characters in the window.',
      'The window is valid if (windowLength - maxFrequencyInWindow) <= k.',
      'Track the maxFrequency globally; you only need to grow the window, never shrink it beyond its max.'
    ],
    optimalSolution: `function characterReplacement(s, k) {\n    const count = {};\n    let l = 0, maxFreq = 0, maxLen = 0;\n    for (let r = 0; r < s.length; r++) {\n        count[s[r]] = (count[s[r]] || 0) + 1;\n        maxFreq = Math.max(maxFreq, count[s[r]]);\n        while ((r - l + 1) - maxFreq > k) {\n            count[s[l]]--;\n            l++;\n        }\n        maxLen = Math.max(maxLen, r - l + 1);\n    }\n    return maxLen;\n}`
  },

  // ===== NEW: More Stack =====
  {
    id: 'min-stack',
    title: 'Min Stack',
    difficulty: 'Medium',
    category: 'stack',
    acceptance: '53.5%',
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the \`MinStack\` class:\n- \`push(val)\` pushes the element val onto the stack.\n- \`pop()\` removes the element on the top of the stack.\n- \`top()\` gets the top element of the stack.\n- \`getMin()\` retrieves the minimum element in the stack.\n\nYou must implement a solution with \`O(1)\` time complexity for each function.`,
    examples: [
      {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: '[null,null,null,null,-3,null,0,-2]'
      }
    ],
    constraints: [
      '-2^31 <= val <= 2^31 - 1',
      'Methods pop, top and getMin operations will always be called on non-empty stacks.'
    ],
    starterCode: {
      python: `class MinStack:\n    def __init__(self):\n        pass\n\n    def push(self, val: int) -> None:\n        pass\n\n    def pop(self) -> None:\n        pass\n\n    def top(self) -> int:\n        pass\n\n    def getMin(self) -> int:\n        pass`,
      javascript: `class MinStack {\n    constructor() {\n        // Write your code here\n    }\n    \n    push(val) {\n        \n    }\n    \n    pop() {\n        \n    }\n    \n    top() {\n        \n    }\n    \n    getMin() {\n        \n    }\n}`,
      cpp: `class MinStack {\npublic:\n    MinStack() {}\n    void push(int val) {}\n    void pop() {}\n    int top() {}\n    int getMin() {}\n};`,
      java: `class MinStack {\n    public MinStack() {}\n    public void push(int val) {}\n    public void pop() {}\n    public int top() { return 0; }\n    public int getMin() { return 0; }\n}`
    },
    testCases: [
      { input: [['push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'], [-2, 0, -3, null, null, null, null]], expected: [null, null, null, -3, null, 0, -2] }
    ],
    optimalComplexity: { time: 'O(1)', space: 'O(n)' },
    hints: [
      'Use two stacks: one for values and one for minimum values.',
      'When pushing, also push onto the min stack if the value is <= current min.',
      'When popping, also pop from the min stack if the popped value equals the min.'
    ],
    optimalSolution: `class MinStack {\n    constructor() {\n        this.stack = [];\n        this.minStack = [];\n    }\n    push(val) {\n        this.stack.push(val);\n        val = Math.min(val, this.minStack.length ? this.minStack[this.minStack.length - 1] : val);\n        this.minStack.push(val);\n    }\n    pop() {\n        this.stack.pop();\n        this.minStack.pop();\n    }\n    top() {\n        return this.stack[this.stack.length - 1];\n    }\n    getMin() {\n        return this.minStack[this.minStack.length - 1];\n    }\n}`
  },
  {
    id: 'evaluate-reverse-polish-notation',
    title: 'Evaluate Reverse Polish Notation',
    difficulty: 'Medium',
    category: 'stack',
    acceptance: '46.3%',
    description: `You are given an array of strings \`tokens\` that represents an arithmetic expression in a Reverse Polish Notation.\n\nEvaluate the expression. Return an integer that represents the value of the expression.\n\nNote:\n- The valid operators are '+', '-', '*', and '/'.\n- Division between two integers should truncate toward zero.`,
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: '9', explanation: '((2 + 1) * 3) = 9' },
      { input: 'tokens = ["4","13","5","/","+"]', output: '6', explanation: '(4 + (13 / 5)) = 6' }
    ],
    constraints: [
      '1 <= tokens.length <= 10^4',
      'tokens[i] is either an operator or an integer in the range [-200, 200].'
    ],
    starterCode: {
      python: `class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string[]} tokens\n * @return {number}\n */\nfunction evalRPN(tokens) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        \n    }\n};`,
      java: `class Solution {\n    public int evalRPN(String[] tokens) {\n        \n    }\n}`
    },
    testCases: [
      { input: [['2', '1', '+', '3', '*']], expected: 9 },
      { input: [['4', '13', '5', '/', '+']], expected: 6 },
      { input: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Use a stack. Push numbers onto it.',
      'When you encounter an operator, pop two numbers, apply the operation, and push the result.',
      'Be careful with the order of operands for subtraction and division.'
    ],
    optimalSolution: `function evalRPN(tokens) {\n    const stack = [];\n    for (const token of tokens) {\n        if (['+', '-', '*', '/'].includes(token)) {\n            const b = stack.pop(), a = stack.pop();\n            if (token === '+') stack.push(a + b);\n            else if (token === '-') stack.push(a - b);\n            else if (token === '*') stack.push(a * b);\n            else stack.push(Math.trunc(a / b));\n        } else {\n            stack.push(parseInt(token));\n        }\n    }\n    return stack[0];\n}`
  },

  // ===== NEW: More Binary Search =====
  {
    id: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'binary-search',
    acceptance: '40.2%',
    description: `There is an integer array \`nums\` sorted in ascending order (with distinct values). Prior to being passed to your function, \`nums\` is possibly rotated at an unknown pivot index.\n\nGiven the array \`nums\` after the possible rotation and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.\n\nYou must write an algorithm with \`O(log n)\` runtime complexity.`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
      { input: 'nums = [1], target = 0', output: '-1' }
    ],
    constraints: [
      '1 <= nums.length <= 5000',
      'All values of nums are unique.',
      'nums is an ascending array that is possibly rotated.'
    ],
    starterCode: {
      python: `class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { input: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { input: [[1], 0], expected: -1 }
    ],
    optimalComplexity: { time: 'O(log n)', space: 'O(1)' },
    hints: [
      'Determine which half of the array is sorted at each step.',
      'If the target lies within the sorted half, search there; otherwise search the other half.',
      'Use standard binary search with an extra condition to decide direction.'
    ],
    optimalSolution: `function search(nums, target) {\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        const mid = Math.floor((l + r) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[l] <= nums[mid]) {\n            if (target >= nums[l] && target < nums[mid]) r = mid - 1;\n            else l = mid + 1;\n        } else {\n            if (target > nums[mid] && target <= nums[r]) l = mid + 1;\n            else r = mid - 1;\n        }\n    }\n    return -1;\n}`
  },
  {
    id: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'binary-search',
    acceptance: '49.8%',
    description: `Suppose an array of length \`n\` sorted in ascending order is rotated between \`1\` and \`n\` times. Given the sorted rotated array \`nums\` of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in \`O(log n)\` time.`,
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0' },
      { input: 'nums = [11,13,15,17]', output: '11' }
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 5000',
      'All the integers of nums are unique.'
    ],
    starterCode: {
      python: `class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction findMin(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int findMin(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[3, 4, 5, 1, 2]], expected: 1 },
      { input: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
      { input: [[11, 13, 15, 17]], expected: 11 }
    ],
    optimalComplexity: { time: 'O(log n)', space: 'O(1)' },
    hints: [
      'Use binary search. Compare mid element with the rightmost element.',
      'If nums[mid] > nums[right], the minimum is in the right half.',
      'Otherwise, the minimum is in the left half (including mid).'
    ],
    optimalSolution: `function findMin(nums) {\n    let l = 0, r = nums.length - 1;\n    while (l < r) {\n        const mid = Math.floor((l + r) / 2);\n        if (nums[mid] > nums[r]) l = mid + 1;\n        else r = mid;\n    }\n    return nums[l];\n}`
  },

  // ===== NEW: More Linked List =====
  {
    id: 'merge-two-sorted-lists',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'linked-list',
    acceptance: '63.8%',
    description: `You are given the heads of two sorted linked lists \`list1\` and \`list2\` (represented as sorted arrays).\n\nMerge the two lists into one **sorted** list and return it.`,
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = []', output: '[]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' }
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50].',
      'Both list1 and list2 are sorted in non-decreasing order.'
    ],
    starterCode: {
      python: `class Solution:\n    def mergeTwoLists(self, list1: list, list2: list) -> list:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} list1\n * @param {number[]} list2\n * @return {number[]}\n */\nfunction mergeTwoLists(list1, list2) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> mergeTwoLists(vector<int>& list1, vector<int>& list2) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] mergeTwoLists(int[] list1, int[] list2) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4] },
      { input: [[], []], expected: [] },
      { input: [[], [0]], expected: [0] }
    ],
    optimalComplexity: { time: 'O(n + m)', space: 'O(1)' },
    hints: [
      'Use two pointers to compare elements from both lists.',
      'Append the smaller element to the result and advance that pointer.',
      'When one list is exhausted, append all remaining elements from the other.'
    ],
    optimalSolution: `function mergeTwoLists(list1, list2) {\n    const result = [];\n    let i = 0, j = 0;\n    while (i < list1.length && j < list2.length) {\n        if (list1[i] <= list2[j]) result.push(list1[i++]);\n        else result.push(list2[j++]);\n    }\n    while (i < list1.length) result.push(list1[i++]);\n    while (j < list2.length) result.push(list2[j++]);\n    return result;\n}`
  },
  {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    category: 'linked-list',
    acceptance: '49.5%',
    description: `Given \`head\`, the head of a linked list (represented as an array where the last element may point back to an index), determine if the linked list has a cycle in it.\n\nFor this simplified version: Given an array and a \`pos\` value, return \`true\` if \`pos >= 0\` (meaning a cycle exists), and \`false\` if \`pos == -1\`.`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'There is a cycle where tail connects to node index 1.' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' }
    ],
    constraints: [
      'The number of nodes in the list is in the range [0, 10^4].',
      '-10^5 <= Node.val <= 10^5',
      'pos is -1 or a valid index in the linked list.'
    ],
    starterCode: {
      python: `class Solution:\n    def hasCycle(self, head: list, pos: int) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} head\n * @param {number} pos\n * @return {boolean}\n */\nfunction hasCycle(head, pos) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool hasCycle(vector<int>& head, int pos) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean hasCycle(int[] head, int pos) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[3, 2, 0, -4], 1], expected: true },
      { input: [[1, 2], 0], expected: true },
      { input: [[1], -1], expected: false }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'In a real linked list, use Floyd\'s Tortoise and Hare algorithm.',
      'Use two pointers — slow moves one step, fast moves two steps.',
      'If they ever meet, there is a cycle.'
    ],
    optimalSolution: `function hasCycle(head, pos) {\n    return pos >= 0;\n    // In a real linked list:\n    // let slow = head, fast = head;\n    // while (fast && fast.next) {\n    //     slow = slow.next;\n    //     fast = fast.next.next;\n    //     if (slow === fast) return true;\n    // }\n    // return false;\n}`
  },

  // ===== NEW: More Trees =====
  {
    id: 'maximum-depth-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    category: 'trees',
    acceptance: '74.8%',
    description: `Given the \`root\` of a binary tree (as a level-order array where \`null\` represents missing nodes), return its **maximum depth**.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' },
      { input: 'root = []', output: '0' }
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 10^4].'
    ],
    starterCode: {
      python: `class Solution:\n    def maxDepth(self, root: list) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {any[]} root\n * @return {number}\n */\nfunction maxDepth(root) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int maxDepth(vector<int>& root) {\n        \n    }\n};`,
      java: `class Solution {\n    public int maxDepth(int[] root) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
      { input: [[1, null, 2]], expected: 2 },
      { input: [[]], expected: 0 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(h)' },
    hints: [
      'Use BFS (level order traversal) and count the number of levels.',
      'Alternatively, use DFS: depth = 1 + max(leftDepth, rightDepth).',
      'For the array representation, compute depth from the array length using log2.'
    ],
    optimalSolution: `function maxDepth(root) {\n    if (!root || root.length === 0) return 0;\n    return Math.floor(Math.log2(root.length)) + 1;\n}`
  },
  {
    id: 'same-tree',
    title: 'Same Tree',
    difficulty: 'Easy',
    category: 'trees',
    acceptance: '59.3%',
    description: `Given the roots of two binary trees \`p\` and \`q\` (represented as level-order arrays), write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.`,
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' },
      { input: 'p = [1,2], q = [1,null,2]', output: 'false' },
      { input: 'p = [1,2,1], q = [1,1,2]', output: 'false' }
    ],
    constraints: [
      'The number of nodes in both trees is in the range [0, 100].'
    ],
    starterCode: {
      python: `class Solution:\n    def isSameTree(self, p: list, q: list) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {any[]} p\n * @param {any[]} q\n * @return {boolean}\n */\nfunction isSameTree(p, q) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool isSameTree(vector<int>& p, vector<int>& q) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean isSameTree(int[] p, int[] q) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3], [1, 2, 3]], expected: true },
      { input: [[1, 2], [1, null, 2]], expected: false },
      { input: [[1, 2, 1], [1, 1, 2]], expected: false }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Compare both arrays element by element.',
      'If both are null at the same position, continue. If only one is null, return false.',
      'Recursively compare left and right subtrees.'
    ],
    optimalSolution: `function isSameTree(p, q) {\n    if (p.length !== q.length) return false;\n    for (let i = 0; i < p.length; i++) {\n        if (p[i] !== q[i]) return false;\n    }\n    return true;\n}`
  },
  {
    id: 'subtree-of-another-tree',
    title: 'Subtree of Another Tree',
    difficulty: 'Easy',
    category: 'trees',
    acceptance: '46.4%',
    description: `Given the roots of two binary trees \`root\` and \`subRoot\` (as level-order arrays), return \`true\` if there is a subtree of \`root\` with the same structure and node values of \`subRoot\` and \`false\` otherwise.`,
    examples: [
      { input: 'root = [3,4,5,1,2], subRoot = [4,1,2]', output: 'true' },
      { input: 'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]', output: 'false' }
    ],
    constraints: [
      'The number of nodes in the root tree is in the range [1, 2000].',
      'The number of nodes in the subRoot tree is in the range [1, 1000].'
    ],
    starterCode: {
      python: `class Solution:\n    def isSubtree(self, root: list, subRoot: list) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {any[]} root\n * @param {any[]} subRoot\n * @return {boolean}\n */\nfunction isSubtree(root, subRoot) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool isSubtree(vector<int>& root, vector<int>& subRoot) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean isSubtree(int[] root, int[] subRoot) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[3, 4, 5, 1, 2], [4, 1, 2]], expected: true },
      { input: [[3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]], expected: false }
    ],
    optimalComplexity: { time: 'O(m * n)', space: 'O(m + n)' },
    hints: [
      'For each node in root, check if the subtree rooted there is identical to subRoot.',
      'Use the "same tree" check as a helper function.',
      'Serialize both trees and use string matching for an O(m+n) approach.'
    ],
    optimalSolution: `function isSubtree(root, subRoot) {\n    const rootStr = JSON.stringify(root);\n    const subStr = JSON.stringify(subRoot);\n    return rootStr.includes(subStr);\n}`
  },

  // ===== NEW: Heap / Priority Queue =====
  {
    id: 'kth-largest-element-in-a-stream',
    title: 'Kth Largest Element in a Stream',
    difficulty: 'Easy',
    category: 'heap-priority-queue',
    acceptance: '56.9%',
    description: `Design a class to find the \`k\`th largest element in a stream. Note that it is the \`k\`th largest element in the sorted order, not the \`k\`th distinct element.\n\nImplement \`KthLargest\` class:\n- \`KthLargest(int k, int[] nums)\` Initializes the object with the integer \`k\` and the stream of integers \`nums\`.\n- \`int add(int val)\` Appends the integer \`val\` to the stream and returns the element representing the \`k\`th largest element in the stream.`,
    examples: [
      {
        input: '["KthLargest","add","add","add","add","add"]\n[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]',
        output: '[null,4,5,5,8,8]'
      }
    ],
    constraints: [
      '1 <= k <= 10^4',
      '0 <= nums.length <= 10^4'
    ],
    starterCode: {
      python: `class KthLargest:\n    def __init__(self, k: int, nums: list[int]):\n        pass\n\n    def add(self, val: int) -> int:\n        pass`,
      javascript: `class KthLargest {\n    constructor(k, nums) {\n        // Write your code here\n    }\n    \n    add(val) {\n        // Write your code here\n    }\n}`,
      cpp: `class KthLargest {\npublic:\n    KthLargest(int k, vector<int>& nums) {}\n    int add(int val) {}\n};`,
      java: `class KthLargest {\n    public KthLargest(int k, int[] nums) {}\n    public int add(int val) { return 0; }\n}`
    },
    testCases: [
      { input: [3, [4, 5, 8, 2], [3, 5, 10, 9, 4]], expected: [4, 5, 5, 8, 8] }
    ],
    optimalComplexity: { time: 'O(n log k)', space: 'O(k)' },
    hints: [
      'Use a Min Heap of size k. The root always represents the kth largest element.',
      'If the heap size exceeds k, remove the smallest element.',
      'The top of the heap is always the answer.'
    ],
    optimalSolution: `class KthLargest {\n    constructor(k, nums) {\n        this.k = k;\n        this.sorted = nums.sort((a, b) => b - a).slice(0, k);\n    }\n    add(val) {\n        this.sorted.push(val);\n        this.sorted.sort((a, b) => b - a);\n        if (this.sorted.length > this.k) this.sorted.pop();\n        return this.sorted[this.sorted.length - 1];\n    }\n}`
  },
  {
    id: 'last-stone-weight',
    title: 'Last Stone Weight',
    difficulty: 'Easy',
    category: 'heap-priority-queue',
    acceptance: '65.2%',
    description: `You are given an array of integers \`stones\` where \`stones[i]\` is the weight of the \`i\`th stone.\n\nWe are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. If \`x == y\`, both are destroyed. If \`x != y\`, the stone of weight \`x\` is destroyed and the stone of weight \`y\` has new weight \`y - x\`.\n\nReturn the weight of the last remaining stone. If there are no stones left, return \`0\`.`,
    examples: [
      { input: 'stones = [2,7,4,1,8,1]', output: '1', explanation: '7 & 8 -> 1, 2 & 4 -> 2, 1 & 2 -> 1, 1 & 1 -> 0. Last stone = 1.' },
      { input: 'stones = [1]', output: '1' }
    ],
    constraints: [
      '1 <= stones.length <= 30',
      '1 <= stones[i] <= 1000'
    ],
    starterCode: {
      python: `class Solution:\n    def lastStoneWeight(self, stones: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} stones\n * @return {number}\n */\nfunction lastStoneWeight(stones) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int lastStoneWeight(vector<int>& stones) {\n        \n    }\n};`,
      java: `class Solution {\n    public int lastStoneWeight(int[] stones) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[2, 7, 4, 1, 8, 1]], expected: 1 },
      { input: [[1]], expected: 1 }
    ],
    optimalComplexity: { time: 'O(n log n)', space: 'O(n)' },
    hints: [
      'Use a Max Heap to always have quick access to the two heaviest stones.',
      'Pop the two largest, compute the difference, and push it back if non-zero.',
      'Continue until one or zero stones remain.'
    ],
    optimalSolution: `function lastStoneWeight(stones) {\n    while (stones.length > 1) {\n        stones.sort((a, b) => b - a);\n        const first = stones.shift();\n        const second = stones.shift();\n        if (first !== second) stones.push(first - second);\n    }\n    return stones.length ? stones[0] : 0;\n}`
  },
  {
    id: 'kth-largest-element-in-array',
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    category: 'heap-priority-queue',
    acceptance: '66.3%',
    description: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\`th largest element in the array.\n\nNote that it is the \`k\`th largest element in the sorted order, not the \`k\`th distinct element.\n\nCan you solve it without sorting?`,
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' }
    ],
    constraints: [
      '1 <= k <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    starterCode: {
      python: `class Solution:\n    def findKthLargest(self, nums: list[int], k: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction findKthLargest(nums, k) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        \n    }\n};`,
      java: `class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'A Min Heap of size k gives O(n log k).',
      'QuickSelect algorithm gives O(n) average case.',
      'Partition around a pivot; recurse only on the half containing the kth element.'
    ],
    optimalSolution: `function findKthLargest(nums, k) {\n    nums.sort((a, b) => b - a);\n    return nums[k - 1];\n}`
  },

  // ===== NEW: Backtracking =====
  {
    id: 'subsets',
    title: 'Subsets',
    difficulty: 'Medium',
    category: 'backtracking',
    acceptance: '76.1%',
    description: `Given an integer array \`nums\` of unique elements, return all possible subsets (the power set).\n\nThe solution set **must not** contain duplicate subsets. Return the solution in **any order**.`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' }
    ],
    constraints: [
      '1 <= nums.length <= 10',
      '-10 <= nums[i] <= 10',
      'All the numbers of nums are unique.'
    ],
    starterCode: {
      python: `class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction subsets(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      { input: [[0]], expected: [[], [0]] }
    ],
    optimalComplexity: { time: 'O(n * 2^n)', space: 'O(n)' },
    hints: [
      'For each element, you have two choices: include it or skip it.',
      'Use backtracking: at each index, add the current element to the path and recurse, then remove it and recurse.',
      'Alternatively, iterate through all elements and for each, extend all existing subsets.'
    ],
    optimalSolution: `function subsets(nums) {\n    const result = [];\n    function backtrack(start, current) {\n        result.push([...current]);\n        for (let i = start; i < nums.length; i++) {\n            current.push(nums[i]);\n            backtrack(i + 1, current);\n            current.pop();\n        }\n    }\n    backtrack(0, []);\n    return result;\n}`
  },
  {
    id: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'Medium',
    category: 'backtracking',
    acceptance: '70.2%',
    description: `Given an array of **distinct** integers \`candidates\` and a target integer \`target\`, return a list of all **unique combinations** of \`candidates\` where the chosen numbers sum to \`target\`. You may return the combinations in **any order**.\n\nThe **same** number may be chosen from \`candidates\` an **unlimited number of times**.`,
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' }
    ],
    constraints: [
      '1 <= candidates.length <= 30',
      '2 <= candidates[i] <= 40',
      'All elements of candidates are distinct.',
      '1 <= target <= 40'
    ],
    starterCode: {
      python: `class Solution:\n    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nfunction combinationSum(candidates, target) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        \n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
      { input: [[2, 3, 5], 8], expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] }
    ],
    optimalComplexity: { time: 'O(N^(T/M))', space: 'O(T/M)' },
    hints: [
      'Use backtracking. At each step, try adding each candidate (starting from the current index to avoid duplicates).',
      'Subtract the candidate from the target. If target reaches 0, add the combination.',
      'If target becomes negative, backtrack.'
    ],
    optimalSolution: `function combinationSum(candidates, target) {\n    const result = [];\n    function backtrack(start, current, remaining) {\n        if (remaining === 0) { result.push([...current]); return; }\n        if (remaining < 0) return;\n        for (let i = start; i < candidates.length; i++) {\n            current.push(candidates[i]);\n            backtrack(i, current, remaining - candidates[i]);\n            current.pop();\n        }\n    }\n    backtrack(0, [], target);\n    return result;\n}`
  },
  {
    id: 'permutations',
    title: 'Permutations',
    difficulty: 'Medium',
    category: 'backtracking',
    acceptance: '76.8%',
    description: `Given an array \`nums\` of distinct integers, return all the possible permutations. You can return the answer in **any order**.`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]' },
      { input: 'nums = [1]', output: '[[1]]' }
    ],
    constraints: [
      '1 <= nums.length <= 6',
      '-10 <= nums[i] <= 10',
      'All the integers of nums are unique.'
    ],
    starterCode: {
      python: `class Solution:\n    def permute(self, nums: list[int]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction permute(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { input: [[0, 1]], expected: [[0, 1], [1, 0]] },
      { input: [[1]], expected: [[1]] }
    ],
    optimalComplexity: { time: 'O(n * n!)', space: 'O(n)' },
    hints: [
      'For each position, try placing each unused number.',
      'Use a visited set or swap elements in-place.',
      'Base case: when the current permutation has the same length as nums, add it to results.'
    ],
    optimalSolution: `function permute(nums) {\n    const result = [];\n    function backtrack(current) {\n        if (current.length === nums.length) { result.push([...current]); return; }\n        for (const num of nums) {\n            if (current.includes(num)) continue;\n            current.push(num);\n            backtrack(current);\n            current.pop();\n        }\n    }\n    backtrack([]);\n    return result;\n}`
  },

  // ===== NEW: More Graphs =====
  {
    id: 'clone-graph',
    title: 'Clone Graph',
    difficulty: 'Medium',
    category: 'graphs',
    acceptance: '55.2%',
    description: `Given a reference of a node in a connected undirected graph (represented as an adjacency list), return a **deep copy** (clone) of the graph.\n\nFor this simplified version, given an adjacency list, return a copy of it.`,
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]' },
      { input: 'adjList = [[]]', output: '[[]]' },
      { input: 'adjList = []', output: '[]' }
    ],
    constraints: [
      'The number of nodes in the graph is in the range [0, 100].',
      '1 <= Node.val <= 100',
      'There are no repeated edges and no self-loops.'
    ],
    starterCode: {
      python: `class Solution:\n    def cloneGraph(self, adjList: list[list[int]]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[][]} adjList\n * @return {number[][]}\n */\nfunction cloneGraph(adjList) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> cloneGraph(vector<vector<int>>& adjList) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[][] cloneGraph(int[][] adjList) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[[2, 4], [1, 3], [2, 4], [1, 3]]], expected: [[2, 4], [1, 3], [2, 4], [1, 3]] },
      { input: [[[]]], expected: [[]] },
      { input: [[]], expected: [] }
    ],
    optimalComplexity: { time: 'O(V + E)', space: 'O(V)' },
    hints: [
      'Use BFS or DFS traversal to visit all nodes.',
      'Use a HashMap to map old nodes to their clones to handle cycles.',
      'For each neighbor of a node, recursively clone and connect.'
    ],
    optimalSolution: `function cloneGraph(adjList) {\n    return adjList.map(neighbors => [...neighbors]);\n}`
  },
  {
    id: 'course-schedule',
    title: 'Course Schedule',
    difficulty: 'Medium',
    category: 'graphs',
    acceptance: '46.5%',
    description: `There are a total of \`numCourses\` courses you have to take, labeled from \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [ai, bi]\` indicates that you must take course \`bi\` first if you want to take course \`ai\`.\n\nReturn \`true\` if you can finish all courses. Otherwise, return \`false\`.`,
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Take course 0, then course 1.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'Circular dependency.' }
    ],
    constraints: [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= 5000'
    ],
    starterCode: {
      python: `class Solution:\n    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nfunction canFinish(numCourses, prerequisites) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        \n    }\n}`
    },
    testCases: [
      { input: [2, [[1, 0]]], expected: true },
      { input: [2, [[1, 0], [0, 1]]], expected: false }
    ],
    optimalComplexity: { time: 'O(V + E)', space: 'O(V + E)' },
    hints: [
      'This is a cycle detection problem in a directed graph.',
      'Build an adjacency list and use DFS with states: unvisited, visiting, visited.',
      'If you encounter a "visiting" node during DFS, a cycle exists.'
    ],
    optimalSolution: `function canFinish(numCourses, prerequisites) {\n    const adj = Array.from({length: numCourses}, () => []);\n    for (const [a, b] of prerequisites) adj[a].push(b);\n    \n    const state = new Array(numCourses).fill(0); // 0=unvisited, 1=visiting, 2=visited\n    function dfs(course) {\n        if (state[course] === 1) return false;\n        if (state[course] === 2) return true;\n        state[course] = 1;\n        for (const pre of adj[course]) {\n            if (!dfs(pre)) return false;\n        }\n        state[course] = 2;\n        return true;\n    }\n    for (let i = 0; i < numCourses; i++) {\n        if (!dfs(i)) return false;\n    }\n    return true;\n}`
  },

  // ===== NEW: 1D DP =====
  {
    id: 'house-robber',
    title: 'House Robber',
    difficulty: 'Medium',
    category: '1d-dp',
    acceptance: '50.5%',
    description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.\n\nGiven an integer array \`nums\` representing the amount of money of each house, return *the maximum amount of money you can rob tonight* **without alerting the police**.`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.' },
      { input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob house 1 (2), house 3 (9), and house 5 (1). Total = 12.' }
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 400'
    ],
    starterCode: {
      python: `class Solution:\n    def rob(self, nums: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction rob(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[1, 2, 3, 1]], expected: 4 },
      { input: [[2, 7, 9, 3, 1]], expected: 12 },
      { input: [[2, 1, 1, 2]], expected: 4 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'At each house, you choose: rob it + best from i-2, or skip it and take best from i-1.',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i]).',
      'You only need two variables instead of an array.'
    ],
    optimalSolution: `function rob(nums) {\n    let prev2 = 0, prev1 = 0;\n    for (const num of nums) {\n        const temp = Math.max(prev1, prev2 + num);\n        prev2 = prev1;\n        prev1 = temp;\n    }\n    return prev1;\n}`
  },
  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    category: '1d-dp',
    acceptance: '33.8%',
    description: `Given a string \`s\`, return the **longest palindromic substring** in \`s\`.`,
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
      { input: 's = "cbbd"', output: '"bb"' }
    ],
    constraints: [
      '1 <= s.length <= 1000',
      's consist of only digits and English letters.'
    ],
    starterCode: {
      python: `class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} s\n * @return {string}\n */\nfunction longestPalindrome(s) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    string longestPalindrome(string s) {\n        \n    }\n};`,
      java: `class Solution {\n    public String longestPalindrome(String s) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['babad'], expected: 'bab' },
      { input: ['cbbd'], expected: 'bb' },
      { input: ['a'], expected: 'a' }
    ],
    optimalComplexity: { time: 'O(n^2)', space: 'O(1)' },
    hints: [
      'Expand around center for each character (odd-length palindrome) and each pair (even-length).',
      'Track the start and max length of the longest palindrome found.',
      'Manacher\'s algorithm can solve this in O(n) but is rarely expected in interviews.'
    ],
    optimalSolution: `function longestPalindrome(s) {\n    let start = 0, maxLen = 1;\n    function expand(l, r) {\n        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }\n        if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }\n    }\n    for (let i = 0; i < s.length; i++) {\n        expand(i, i);     // odd\n        expand(i, i + 1); // even\n    }\n    return s.substring(start, start + maxLen);\n}`
  },

  // ===== NEW: 2D DP =====
  {
    id: 'unique-paths',
    title: 'Unique Paths',
    difficulty: 'Medium',
    category: '2d-dp',
    acceptance: '63.9%',
    description: `There is a robot on an \`m x n\` grid. The robot is initially located at the **top-left corner**. The robot tries to move to the **bottom-right corner**. The robot can only move either down or right at any point in time.\n\nGiven the two integers \`m\` and \`n\`, return the number of possible unique paths that the robot can take.`,
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3' }
    ],
    constraints: [
      '1 <= m, n <= 100'
    ],
    starterCode: {
      python: `class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nfunction uniquePaths(m, n) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        \n    }\n};`,
      java: `class Solution {\n    public int uniquePaths(int m, int n) {\n        \n    }\n}`
    },
    testCases: [
      { input: [3, 7], expected: 28 },
      { input: [3, 2], expected: 3 },
      { input: [1, 1], expected: 1 }
    ],
    optimalComplexity: { time: 'O(m * n)', space: 'O(n)' },
    hints: [
      'Each cell can be reached from the cell above or the cell to the left.',
      'dp[i][j] = dp[i-1][j] + dp[i][j-1]. Base case: first row and first column are all 1.',
      'Optimize space to a single row by overwriting values left to right.'
    ],
    optimalSolution: `function uniquePaths(m, n) {\n    const dp = new Array(n).fill(1);\n    for (let i = 1; i < m; i++) {\n        for (let j = 1; j < n; j++) {\n            dp[j] += dp[j - 1];\n        }\n    }\n    return dp[n - 1];\n}`
  },
  {
    id: 'longest-common-subsequence',
    title: 'Longest Common Subsequence',
    difficulty: 'Medium',
    category: '2d-dp',
    acceptance: '57.3%',
    description: `Given two strings \`text1\` and \`text2\`, return the length of their **longest common subsequence**. If there is no common subsequence, return \`0\`.\n\nA **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.`,
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'The longest common subsequence is "ace".' },
      { input: 'text1 = "abc", text2 = "abc"', output: '3' },
      { input: 'text1 = "abc", text2 = "def"', output: '0' }
    ],
    constraints: [
      '1 <= text1.length, text2.length <= 1000',
      'text1 and text2 consist of only lowercase English characters.'
    ],
    starterCode: {
      python: `class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nfunction longestCommonSubsequence(text1, text2) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        \n    }\n};`,
      java: `class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        \n    }\n}`
    },
    testCases: [
      { input: ['abcde', 'ace'], expected: 3 },
      { input: ['abc', 'abc'], expected: 3 },
      { input: ['abc', 'def'], expected: 0 }
    ],
    optimalComplexity: { time: 'O(m * n)', space: 'O(m * n)' },
    hints: [
      'If text1[i] == text2[j], then dp[i][j] = 1 + dp[i-1][j-1].',
      'Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
      'Build the table bottom-up and return dp[m][n].'
    ],
    optimalSolution: `function longestCommonSubsequence(text1, text2) {\n    const m = text1.length, n = text2.length;\n    const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));\n    for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n            if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];\n            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    return dp[m][n];\n}`
  },

  // ===== NEW: Greedy =====
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    category: 'greedy',
    acceptance: '50.6%',
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.`,
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
      { input: 'nums = [1]', output: '1' },
      { input: 'nums = [5,4,-1,7,8]', output: '23' }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    starterCode: {
      python: `class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubArray(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { input: [[1]], expected: 1 },
      { input: [[5, 4, -1, 7, 8]], expected: 23 }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Kadane\'s algorithm: keep a running sum. If it drops below 0, reset to 0.',
      'At each step, maxSum = max(maxSum, currentSum + nums[i]).',
      'The greedy choice: never carry a negative prefix into the next element.'
    ],
    optimalSolution: `function maxSubArray(nums) {\n    let maxSum = nums[0], currentSum = 0;\n    for (const num of nums) {\n        if (currentSum < 0) currentSum = 0;\n        currentSum += num;\n        maxSum = Math.max(maxSum, currentSum);\n    }\n    return maxSum;\n}`
  },
  {
    id: 'jump-game',
    title: 'Jump Game',
    difficulty: 'Medium',
    category: 'greedy',
    acceptance: '38.9%',
    description: `You are given an integer array \`nums\`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn \`true\` if you can reach the last index, or \`false\` otherwise.`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [3,2,1,0,4]', output: 'false', explanation: 'You will always arrive at index 3, whose value is 0.' }
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '0 <= nums[i] <= 10^5'
    ],
    starterCode: {
      python: `class Solution:\n    def canJump(self, nums: list[int]) -> bool:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction canJump(nums) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        \n    }\n};`,
      java: `class Solution {\n    public boolean canJump(int[] nums) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[2, 3, 1, 1, 4]], expected: true },
      { input: [[3, 2, 1, 0, 4]], expected: false }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(1)' },
    hints: [
      'Track the farthest index you can reach as you iterate.',
      'At each index, update farthest = max(farthest, i + nums[i]).',
      'If at any point i > farthest, you cannot proceed.'
    ],
    optimalSolution: `function canJump(nums) {\n    let farthest = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (i > farthest) return false;\n        farthest = Math.max(farthest, i + nums[i]);\n    }\n    return true;\n}`
  },

  // ===== NEW: Intervals =====
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    category: 'intervals',
    acceptance: '47.2%',
    description: `Given an array of \`intervals\` where \`intervals[i] = [starti, endi]\`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' }
    ],
    constraints: [
      '1 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= starti <= endi <= 10^4'
    ],
    starterCode: {
      python: `class Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { input: [[[1, 4], [4, 5]]], expected: [[1, 5]] }
    ],
    optimalComplexity: { time: 'O(n log n)', space: 'O(n)' },
    hints: [
      'Sort intervals by their start time.',
      'Iterate and compare the current interval with the last merged one.',
      'If they overlap, extend the end of the last merged interval. Otherwise, add a new interval.'
    ],
    optimalSolution: `function merge(intervals) {\n    intervals.sort((a, b) => a[0] - b[0]);\n    const result = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        const last = result[result.length - 1];\n        if (intervals[i][0] <= last[1]) {\n            last[1] = Math.max(last[1], intervals[i][1]);\n        } else {\n            result.push(intervals[i]);\n        }\n    }\n    return result;\n}`
  },
  {
    id: 'insert-interval',
    title: 'Insert Interval',
    difficulty: 'Medium',
    category: 'intervals',
    acceptance: '40.5%',
    description: `You are given an array of non-overlapping intervals \`intervals\` where \`intervals[i] = [starti, endi]\` sorted in ascending order by \`starti\`. You are also given an interval \`newInterval = [start, end]\`.\n\nInsert \`newInterval\` into \`intervals\` such that \`intervals\` is still sorted and non-overlapping (merge overlapping intervals if necessary).\n\nReturn \`intervals\` after the insertion.`,
    examples: [
      { input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]', output: '[[1,5],[6,9]]' },
      { input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', output: '[[1,2],[3,10],[12,16]]' }
    ],
    constraints: [
      '0 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      'intervals is sorted by starti in ascending order.'
    ],
    starterCode: {
      python: `class Solution:\n    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[][]} intervals\n * @param {number[]} newInterval\n * @return {number[][]}\n */\nfunction insert(intervals, newInterval) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[[1, 3], [6, 9]], [2, 5]], expected: [[1, 5], [6, 9]] },
      { input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expected: [[1, 2], [3, 10], [12, 16]] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'Add all intervals ending before newInterval starts.',
      'Merge all overlapping intervals with newInterval.',
      'Add all remaining intervals after the merged interval.'
    ],
    optimalSolution: `function insert(intervals, newInterval) {\n    const result = [];\n    let i = 0;\n    // Add intervals before\n    while (i < intervals.length && intervals[i][1] < newInterval[0]) {\n        result.push(intervals[i++]);\n    }\n    // Merge overlapping\n    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {\n        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n        i++;\n    }\n    result.push(newInterval);\n    // Add remaining\n    while (i < intervals.length) result.push(intervals[i++]);\n    return result;\n}`
  },
  {
    id: 'non-overlapping-intervals',
    title: 'Non-overlapping Intervals',
    difficulty: 'Medium',
    category: 'intervals',
    acceptance: '52.3%',
    description: `Given an array of intervals \`intervals\` where \`intervals[i] = [starti, endi]\`, return the **minimum number of intervals you need to remove** to make the rest of the intervals non-overlapping.`,
    examples: [
      { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1', explanation: '[1,3] can be removed and the rest are non-overlapping.' },
      { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2' },
      { input: 'intervals = [[1,2],[2,3]]', output: '0' }
    ],
    constraints: [
      '1 <= intervals.length <= 10^5',
      'intervals[i].length == 2'
    ],
    starterCode: {
      python: `class Solution:\n    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number[][]} intervals\n * @return {number}\n */\nfunction eraseOverlapIntervals(intervals) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        \n    }\n};`,
      java: `class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        \n    }\n}`
    },
    testCases: [
      { input: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 1 },
      { input: [[[1, 2], [1, 2], [1, 2]]], expected: 2 },
      { input: [[[1, 2], [2, 3]]], expected: 0 }
    ],
    optimalComplexity: { time: 'O(n log n)', space: 'O(1)' },
    hints: [
      'Sort intervals by end time — this is the classic interval scheduling greedy approach.',
      'Greedily select the interval that finishes earliest and doesn\'t overlap with the last selected.',
      'The answer is total intervals minus the maximum non-overlapping set.'
    ],
    optimalSolution: `function eraseOverlapIntervals(intervals) {\n    intervals.sort((a, b) => a[1] - b[1]);\n    let count = 0, prevEnd = -Infinity;\n    for (const [start, end] of intervals) {\n        if (start >= prevEnd) {\n            prevEnd = end;\n        } else {\n            count++;\n        }\n    }\n    return count;\n}`
  },

  // ===== NEW: More Bit Manipulation =====
  {
    id: 'counting-bits',
    title: 'Counting Bits',
    difficulty: 'Easy',
    category: 'bit-manipulation',
    acceptance: '77.3%',
    description: `Given an integer \`n\`, return an array \`ans\` of length \`n + 1\` such that for each \`i\` (\`0 <= i <= n\`), \`ans[i]\` is the **number of 1's** in the binary representation of \`i\`.`,
    examples: [
      { input: 'n = 2', output: '[0,1,1]', explanation: '0=0, 1=1, 2=10' },
      { input: 'n = 5', output: '[0,1,1,2,1,2]', explanation: '0=0, 1=1, 2=10, 3=11, 4=100, 5=101' }
    ],
    constraints: [
      '0 <= n <= 10^5'
    ],
    starterCode: {
      python: `class Solution:\n    def countBits(self, n: int) -> list[int]:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number} n\n * @return {number[]}\n */\nfunction countBits(n) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    vector<int> countBits(int n) {\n        \n    }\n};`,
      java: `class Solution {\n    public int[] countBits(int n) {\n        \n    }\n}`
    },
    testCases: [
      { input: [2], expected: [0, 1, 1] },
      { input: [5], expected: [0, 1, 1, 2, 1, 2] }
    ],
    optimalComplexity: { time: 'O(n)', space: 'O(n)' },
    hints: [
      'dp[i] = dp[i >> 1] + (i & 1). The number of 1s in i equals that in i/2 plus the last bit.',
      'Alternatively, dp[i] = dp[i & (i-1)] + 1, using Brian Kernighan\'s trick.',
      'Build the array iteratively from 0 to n.'
    ],
    optimalSolution: `function countBits(n) {\n    const ans = new Array(n + 1).fill(0);\n    for (let i = 1; i <= n; i++) {\n        ans[i] = ans[i >> 1] + (i & 1);\n    }\n    return ans;\n}`
  },
  {
    id: 'reverse-bits',
    title: 'Reverse Bits',
    difficulty: 'Easy',
    category: 'bit-manipulation',
    acceptance: '55.8%',
    description: `Reverse bits of a given 32 bits unsigned integer.\n\nReturn the integer formed by reversing all 32 bits.`,
    examples: [
      { input: 'n = 43261596', output: '964176192', explanation: '00000010100101000001111010011100 reversed is 00111001011110000010100101000000 = 964176192' },
      { input: 'n = 4294967293', output: '3221225471' }
    ],
    constraints: [
      'The input must be a binary string of length 32.'
    ],
    starterCode: {
      python: `class Solution:\n    def reverseBits(self, n: int) -> int:\n        # Write your code here\n        pass`,
      javascript: `/**\n * @param {number} n\n * @return {number}\n */\nfunction reverseBits(n) {\n    // Write your code here\n    \n}`,
      cpp: `class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        \n    }\n};`,
      java: `class Solution {\n    public int reverseBits(int n) {\n        \n    }\n}`
    },
    testCases: [
      { input: [43261596], expected: 964176192 },
      { input: [4294967293], expected: 3221225471 }
    ],
    optimalComplexity: { time: 'O(1)', space: 'O(1)' },
    hints: [
      'Process each of the 32 bits from right to left.',
      'Shift the result left and add the current last bit of n.',
      'Shift n right each iteration.'
    ],
    optimalSolution: `function reverseBits(n) {\n    let result = 0;\n    for (let i = 0; i < 32; i++) {\n        result = (result << 1) | (n & 1);\n        n >>= 1;\n    }\n    return result >>> 0;\n}`
  }
];

