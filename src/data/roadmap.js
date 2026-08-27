export const ROADMAP_NODES = [
  {
    id: 'arrays-hashing',
    title: 'Arrays & Hashing',
    level: 1,
    row: 0,
    col: 2,
    color: '#38bdf8',
    description: 'The foundation of all data structures. Hash maps, sets, frequency counting.',
    prerequisites: []
  },
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    level: 2,
    row: 1,
    col: 1,
    color: '#a78bfa',
    description: 'Inward and outward pointers on arrays and strings.',
    prerequisites: ['arrays-hashing']
  },
  {
    id: 'stack',
    title: 'Stack',
    level: 2,
    row: 1,
    col: 3,
    color: '#fb923c',
    description: 'LIFO processing, monotonic stacks, bracket validation.',
    prerequisites: ['arrays-hashing']
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    level: 3,
    row: 2,
    col: 0,
    color: '#34d399',
    description: 'Divide and conquer logarithmic searches on sorted ranges.',
    prerequisites: ['two-pointers']
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    level: 3,
    row: 2,
    col: 1,
    color: '#f472b6',
    description: 'Subarray bounds tracking for continuous subsets.',
    prerequisites: ['two-pointers']
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    level: 3,
    row: 2,
    col: 2,
    color: '#60a5fa',
    description: 'Node chains, fast & slow pointers, reversals.',
    prerequisites: ['arrays-hashing']
  },
  {
    id: 'trees',
    title: 'Trees',
    level: 4,
    row: 3,
    col: 2,
    color: '#4ade80',
    description: 'Hierarchical nodes, recursive DFS, level-order BFS, BSTs.',
    prerequisites: ['linked-list', 'stack']
  },
  {
    id: 'heap-priority-queue',
    title: 'Heap / Priority Queue',
    level: 5,
    row: 4,
    col: 1,
    color: '#f87171',
    description: 'Top-K elements, min/max priority retrieval.',
    prerequisites: ['trees']
  },
  {
    id: 'backtracking',
    title: 'Backtracking',
    level: 5,
    row: 4,
    col: 3,
    color: '#c084fc',
    description: 'Exhaustive decision tree exploration and pruning.',
    prerequisites: ['trees']
  },
  {
    id: 'graphs',
    title: 'Graphs',
    level: 6,
    row: 5,
    col: 2,
    color: '#2dd4bf',
    description: 'Network traversal, cycle detection, topological sort.',
    prerequisites: ['trees', 'backtracking']
  },
  {
    id: '1d-dp',
    title: '1-D Dynamic Programming',
    level: 6,
    row: 5,
    col: 4,
    color: '#facc15',
    description: 'Subproblem recurrence, memoization, linear DP state.',
    prerequisites: ['backtracking']
  },
  {
    id: 'intervals',
    title: 'Intervals',
    level: 7,
    row: 6,
    col: 1,
    color: '#e879f9',
    description: 'Overlapping spans, merging, interval schedules.',
    prerequisites: ['heap-priority-queue']
  },
  {
    id: 'greedy',
    title: 'Greedy',
    level: 7,
    row: 6,
    col: 2,
    color: '#10b981',
    description: 'Local optimal choices yielding global optimums.',
    prerequisites: ['graphs']
  },
  {
    id: '2d-dp',
    title: '2-D Dynamic Programming',
    level: 7,
    row: 6,
    col: 4,
    color: '#fbbf24',
    description: 'Grid paths, subsequence alignments, knapsack patterns.',
    prerequisites: ['1d-dp']
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    level: 8,
    row: 7,
    col: 3,
    color: '#818cf8',
    description: 'Binary operations, bitmasks, XOR properties.',
    prerequisites: ['1d-dp']
  }
];
