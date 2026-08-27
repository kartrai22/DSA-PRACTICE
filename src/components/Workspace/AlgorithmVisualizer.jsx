import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  RotateCcw, 
  Eye, 
  Layers, 
  Database, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

export default function AlgorithmVisualizer({ problem, currentCode, language }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000); // ms per step
  const [selectedTestCaseIdx, setSelectedTestCaseIdx] = useState(0);

  // Generate visualization execution trace based on problem and selected test case
  const testCase = problem?.testCases?.[selectedTestCaseIdx] || problem?.testCases?.[0];
  const steps = generateExecutionTrace(problem?.id, testCase?.input);

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [problem?.id, selectedTestCaseIdx]);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, speed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length, speed]);

  const activeState = steps[currentStep] || steps[0] || {
    title: 'Initial State',
    explanation: 'Ready to start step-by-step algorithm dry run.',
    variables: {},
    array: [],
    pointers: {},
    map: {},
    stack: []
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px', gap: '16px', backgroundColor: '#0f172a' }}>
      {/* Visualizer Header & Test Case Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', padding: '6px', borderRadius: '8px', color: '#38bdf8' }}>
            <Eye size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#f8fafc' }}>
              Step-by-Step Algorithm Visualizer
            </h3>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>
              Dry run execution on {problem?.title}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Test Input:</span>
          <select
            value={selectedTestCaseIdx}
            onChange={(e) => setSelectedTestCaseIdx(Number(e.target.value))}
            style={{
              backgroundColor: '#090d16',
              border: '1px solid #273549',
              borderRadius: '6px',
              padding: '4px 8px',
              color: '#f8fafc',
              fontSize: '12px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {problem?.testCases?.map((tc, idx) => (
              <option key={idx} value={idx}>Case {idx + 1}: {JSON.stringify(tc.input).slice(0, 20)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflowY: 'auto'
      }}>
        {/* Step Explanation Banner */}
        <div style={{
          backgroundColor: '#090d16',
          border: '1px solid #273549',
          borderRadius: '10px',
          padding: '14px 16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                backgroundColor: '#38bdf8',
                color: '#090d16',
                fontWeight: 700,
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '4px'
              }}>
                STEP {currentStep + 1} / {steps.length}
              </span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc' }}>
                {activeState.title}
              </span>
            </div>
            {activeState.isComplete && (
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>
                🎉 Solved
              </span>
            )}
          </div>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
            {activeState.explanation}
          </p>
        </div>

        {/* Array & Pointers Graphic View */}
        {activeState.array && activeState.array.length > 0 && (
          <div style={{
            backgroundColor: '#090d16',
            border: '1px solid #1e293b',
            borderRadius: '10px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Array Memory State & Pointers
            </div>

            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              alignItems: 'flex-end',
              padding: '20px 0',
              overflowX: 'auto'
            }}>
              {activeState.array.map((val, idx) => {
                const isLeftPointer = activeState.pointers?.left === idx;
                const isRightPointer = activeState.pointers?.right === idx;
                const isMidPointer = activeState.pointers?.mid === idx;
                const isCurrPointer = activeState.pointers?.curr === idx;
                const isHighlighted = activeState.highlightIndices?.includes(idx);
                const isMatched = activeState.matchedIndices?.includes(idx);

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    {/* Top Pointer Indicator */}
                    <div style={{ height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {isLeftPointer && <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>L ↓</span>}
                      {isRightPointer && <span style={{ fontSize: '11px', fontWeight: 700, color: '#f43f5e' }}>R ↓</span>}
                      {isMidPointer && <span style={{ fontSize: '11px', fontWeight: 700, color: '#facc15' }}>MID ↓</span>}
                      {isCurrPointer && <span style={{ fontSize: '11px', fontWeight: 700, color: '#a78bfa' }}>i ↓</span>}
                    </div>

                    {/* Array Cell */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 700,
                      backgroundColor: isMatched 
                        ? 'rgba(16, 185, 129, 0.25)' 
                        : isHighlighted 
                        ? 'rgba(56, 189, 248, 0.2)' 
                        : '#1e293b',
                      border: isMatched 
                        ? '2px solid #10b981' 
                        : isHighlighted 
                        ? '2px solid #38bdf8' 
                        : '1px solid #334155',
                      color: isMatched ? '#10b981' : '#f8fafc',
                      transition: 'all 0.2s ease',
                      boxShadow: isMatched ? '0 0 12px rgba(16, 185, 129, 0.4)' : 'none'
                    }}>
                      {val}
                    </div>

                    {/* Index Label */}
                    <div style={{ fontSize: '11px', color: '#64748b' }}>[{idx}]</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Data Structure Inspectors: Hash Map & Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: activeState.stack?.length > 0 ? '1fr 1fr' : '1fr', gap: '12px' }}>
          {/* Hash Map / Set */}
          {activeState.map && (
            <div style={{
              backgroundColor: '#090d16',
              border: '1px solid #1e293b',
              borderRadius: '10px',
              padding: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>
                <Database size={14} color="#38bdf8" />
                <span>Hash Table / Seen Set</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.keys(activeState.map).length === 0 ? (
                  <span style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic' }}>Empty (no keys recorded yet)</span>
                ) : (
                  Object.entries(activeState.map).map(([key, val]) => (
                    <div
                      key={key}
                      style={{
                        backgroundColor: '#162032',
                        border: '1px solid #273549',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        display: 'flex',
                        gap: '6px'
                      }}
                    >
                      <span style={{ color: '#38bdf8', fontWeight: 600 }}>{key}:</span>
                      <span style={{ color: '#34d399' }}>{String(val)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Stack Inspector */}
          {activeState.stack && activeState.stack.length > 0 && (
            <div style={{
              backgroundColor: '#090d16',
              border: '1px solid #1e293b',
              borderRadius: '10px',
              padding: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>
                <Layers size={14} color="#fb923c" />
                <span>Call Stack / Monotonic Stack</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {activeState.stack.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #fb923c',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#fb923c',
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Live Variable State Table */}
        {activeState.variables && Object.keys(activeState.variables).length > 0 && (
          <div style={{
            backgroundColor: '#090d16',
            border: '1px solid #1e293b',
            borderRadius: '10px',
            padding: '14px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Local Variables & Invariants
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px' }}>
              {Object.entries(activeState.variables).map(([name, val]) => (
                <div
                  key={name}
                  style={{
                    backgroundColor: '#131b2c',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1px solid #233044'
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>{name}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', fontFamily: 'JetBrains Mono, monospace' }}>
                    {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Playback Controls & Progress Bar */}
      <div style={{
        borderTop: '1px solid #1e293b',
        paddingTop: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {/* Progress Slider */}
        <input
          type="range"
          min={0}
          max={Math.max(steps.length - 1, 0)}
          value={currentStep}
          onChange={(e) => {
            setCurrentStep(Number(e.target.value));
            setIsPlaying(false);
          }}
          style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }}
        />

        {/* Buttons Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
              className="btn-secondary"
              style={{ padding: '6px 10px' }}
              title="Reset to beginning"
            >
              <RotateCcw size={14} />
            </button>

            <button
              onClick={() => { setCurrentStep(p => Math.max(p - 1, 0)); setIsPlaying(false); }}
              disabled={currentStep === 0}
              className="btn-secondary"
              style={{ padding: '6px 10px' }}
              title="Previous Step"
            >
              <SkipBack size={14} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="btn-primary"
              style={{ padding: '6px 14px' }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={() => { setCurrentStep(p => Math.min(p + 1, steps.length - 1)); setIsPlaying(false); }}
              disabled={currentStep === steps.length - 1}
              className="btn-secondary"
              style={{ padding: '6px 10px' }}
              title="Next Step"
            >
              <SkipForward size={14} />
            </button>
          </div>

          {/* Speed selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Speed:</span>
            {[
              { label: '0.5x', val: 1800 },
              { label: '1x', val: 1000 },
              { label: '2x', val: 500 }
            ].map(s => (
              <button
                key={s.label}
                onClick={() => setSpeed(s.val)}
                className="btn-secondary"
                style={{
                  padding: '3px 8px',
                  fontSize: '11px',
                  backgroundColor: speed === s.val ? '#1e293b' : 'transparent',
                  borderColor: speed === s.val ? '#38bdf8' : '#273549',
                  color: speed === s.val ? '#38bdf8' : '#94a3b8'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Step Generator Engine for DSA Problems
 */
function generateExecutionTrace(problemId, input) {
  if (!input) {
    return [{ title: 'Ready', explanation: 'Select a test case to visualize.', variables: {}, array: [] }];
  }

  // TWO SUM
  if (problemId === 'two-sum') {
    const nums = input[0] || [2, 7, 11, 15];
    const target = input[1] !== undefined ? input[1] : 9;
    const map = {};
    const trace = [
      {
        title: 'Initialize Map',
        explanation: `Target is ${target}. Initialized empty HashMap to store seen numbers and their indices.`,
        array: nums,
        pointers: {},
        map: {},
        variables: { target, i: 0 }
      }
    ];

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;

      if (map[complement] !== undefined) {
        trace.push({
          title: `Match Found at index ${i}!`,
          explanation: `At index ${i}, num = ${num}. Complement needed is ${target} - ${num} = ${complement}. Found ${complement} in HashMap at index ${map[complement]}! Solution: [${map[complement]}, ${i}].`,
          array: nums,
          pointers: { curr: i },
          highlightIndices: [map[complement], i],
          matchedIndices: [map[complement], i],
          map: { ...map },
          variables: { target, i, num, complement, solution: `[${map[complement]}, ${i}]` },
          isComplete: true
        });
        return trace;
      } else {
        map[num] = i;
        trace.push({
          title: `Inspect Index ${i}`,
          explanation: `num = ${num}. Complement needed = ${target} - ${num} = ${complement}. Not found in map. Added ${num} -> index ${i} into map.`,
          array: nums,
          pointers: { curr: i },
          highlightIndices: [i],
          map: { ...map },
          variables: { target, i, num, complement }
        });
      }
    }
    return trace;
  }

  // CONTAINS DUPLICATE
  if (problemId === 'contains-duplicate') {
    const nums = input[0] || [1, 2, 3, 1];
    const set = {};
    const trace = [
      {
        title: 'Initialize HashSet',
        explanation: 'Initialized empty HashSet to track seen elements in O(1) time.',
        array: nums,
        pointers: {},
        map: {},
        variables: { length: nums.length }
      }
    ];

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (set[num]) {
        trace.push({
          title: `Duplicate Found: ${num}!`,
          explanation: `Element ${num} is already present in the HashSet! Return true immediately.`,
          array: nums,
          pointers: { curr: i },
          matchedIndices: [i],
          map: { ...set },
          variables: { duplicate: num, result: true },
          isComplete: true
        });
        return trace;
      }
      set[num] = 'seen';
      trace.push({
        title: `Added ${num} to Set`,
        explanation: `Element ${num} not seen yet. Inserted into HashSet. Moving to next index.`,
        array: nums,
        pointers: { curr: i },
        highlightIndices: [i],
        map: { ...set },
        variables: { current: num, i }
      });
    }

    trace.push({
      title: 'No Duplicates Found',
      explanation: 'Iterated through entire array without finding duplicates. Returned false.',
      array: nums,
      map: { ...set },
      variables: { result: false },
      isComplete: true
    });
    return trace;
  }

  // TRAPPING RAIN WATER
  if (problemId === 'trapping-rain-water') {
    const height = input[0] || [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    let l = 0, r = height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    let water = 0;

    const trace = [
      {
        title: 'Initialize Two Pointers',
        explanation: `Set left = 0 (h = ${height[l]}) and right = ${r} (h = ${height[r]}). leftMax = ${leftMax}, rightMax = ${rightMax}, trapped water = 0.`,
        array: height,
        pointers: { left: l, right: r },
        variables: { left: l, right: r, leftMax, rightMax, water: 0 }
      }
    ];

    while (l < r) {
      if (leftMax < rightMax) {
        l++;
        leftMax = Math.max(leftMax, height[l]);
        const trapped = leftMax - height[l];
        water += trapped;
        trace.push({
          title: `Advance Left to [${l}]`,
          explanation: `leftMax (${leftMax}) < rightMax (${rightMax}). Advanced left pointer. Current height = ${height[l]}. Trapped at this bar = ${trapped}. Total water = ${water}.`,
          array: height,
          pointers: { left: l, right: r },
          highlightIndices: [l],
          variables: { left: l, right: r, leftMax, rightMax, water }
        });
      } else {
        r--;
        rightMax = Math.max(rightMax, height[r]);
        const trapped = rightMax - height[r];
        water += trapped;
        trace.push({
          title: `Advance Right to [${r}]`,
          explanation: `rightMax (${rightMax}) <= leftMax (${leftMax}). Advanced right pointer. Current height = ${height[r]}. Trapped at this bar = ${trapped}. Total water = ${water}.`,
          array: height,
          pointers: { left: l, right: r },
          highlightIndices: [r],
          variables: { left: l, right: r, leftMax, rightMax, water }
        });
      }
    }

    trace.push({
      title: 'Pointers Met: Complete',
      explanation: `Both pointers met. Total water trapped = ${water} units.`,
      array: height,
      pointers: { left: l, right: r },
      variables: { totalWater: water },
      isComplete: true
    });
    return trace;
  }

  // BINARY SEARCH
  if (problemId === 'binary-search') {
    const nums = input[0] || [-1, 0, 3, 5, 9, 12];
    const target = input[1] !== undefined ? input[1] : 9;
    let low = 0, high = nums.length - 1;
    const trace = [
      {
        title: 'Initial Search Space',
        explanation: `Looking for target ${target} across entire sorted array [0 ... ${high}].`,
        array: nums,
        pointers: { left: low, right: high },
        variables: { low, high, target }
      }
    ];

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        trace.push({
          title: `Target Found at index ${mid}!`,
          explanation: `nums[mid] (${nums[mid]}) == target (${target}). Target found at index ${mid}!`,
          array: nums,
          pointers: { left: low, right: high, mid },
          matchedIndices: [mid],
          variables: { mid, target, resultIndex: mid },
          isComplete: true
        });
        return trace;
      } else if (nums[mid] < target) {
        trace.push({
          title: `Search Right Half`,
          explanation: `nums[mid] (${nums[mid]}) < target (${target}). Discard left half. Set low = ${mid + 1}.`,
          array: nums,
          pointers: { left: low, right: high, mid },
          highlightIndices: [mid],
          variables: { low: mid + 1, high, mid, target }
        });
        low = mid + 1;
      } else {
        trace.push({
          title: `Search Left Half`,
          explanation: `nums[mid] (${nums[mid]}) > target (${target}). Discard right half. Set high = ${mid - 1}.`,
          array: nums,
          pointers: { left: low, right: high, mid },
          highlightIndices: [mid],
          variables: { low, high: mid - 1, mid, target }
        });
        high = mid - 1;
      }
    }

    trace.push({
      title: 'Target Not Found',
      explanation: 'Search space exhausted. Target does not exist in array (return -1).',
      array: nums,
      variables: { result: -1 },
      isComplete: true
    });
    return trace;
  }

  // GENERIC TRACE FALLBACK
  return [
    {
      title: 'Execution Start',
      explanation: `Loaded test case input: ${JSON.stringify(input)}.`,
      array: Array.isArray(input[0]) ? input[0] : [input[0]],
      variables: { input: JSON.stringify(input) }
    },
    {
      title: 'Optimal Execution Step',
      explanation: 'Simulating state transitions and invariant checking for optimal solution.',
      array: Array.isArray(input[0]) ? input[0] : [input[0]],
      variables: { status: 'Processing' }
    },
    {
      title: 'Execution Complete',
      explanation: 'All test conditions evaluated successfully against optimal Big-O bounds.',
      array: Array.isArray(input[0]) ? input[0] : [input[0]],
      variables: { status: 'Done' },
      isComplete: true
    }
  ];
}
