import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Terminal, 
  AlertTriangle, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';

export default function TestConsole({ testCases, testResults, isRunning }) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeResult = testResults?.results?.[selectedCaseIdx];
  const activeTestCase = testCases[selectedCaseIdx] || testCases[0];

  return (
    <div style={{
      borderTop: '1px solid #1e293b',
      backgroundColor: '#0d131f',
      display: 'flex',
      flexDirection: 'column',
      height: isCollapsed ? '38px' : '260px',
      transition: 'height 0.2s ease'
    }}>
      {/* Console Header / Status */}
      <div style={{
        height: '38px',
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#090d16',
        borderBottom: isCollapsed ? 'none' : '1px solid #1e293b'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={15} color="#94a3b8" />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc' }}>
            Test Result
          </span>

          {testResults && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
              {testResults.allPassed ? (
                <span style={{
                  fontSize: '12px',
                  color: '#10b981',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <CheckCircle2 size={14} /> Accepted ({testResults.passedTests}/{testResults.totalTests})
                </span>
              ) : (
                <span style={{
                  fontSize: '12px',
                  color: '#ef4444',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <XCircle size={14} /> Wrong Answer ({testResults.passedTests}/{testResults.totalTests} Passed)
                </span>
              )}
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                in {testResults.totalTimeMs} ms
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', padding: '4px' }}
        >
          {isCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {!isCollapsed && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Test Case Tab Selector */}
          <div style={{
            display: 'flex',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: '#0d131f',
            borderBottom: '1px solid #1e293b'
          }}>
            {testCases.map((tc, idx) => {
              const res = testResults?.results?.[idx];
              const isSelected = selectedCaseIdx === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className="btn-secondary"
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    backgroundColor: isSelected ? '#1e293b' : 'transparent',
                    borderColor: isSelected ? '#38bdf8' : '#273549',
                    color: isSelected ? '#38bdf8' : '#94a3b8',
                    gap: '6px'
                  }}
                >
                  {res && (
                    res.passed ? (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                    ) : (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    )
                  )}
                  <span>Case {idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Test Case Detail View */}
          <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Input */}
            <div>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Input</div>
              <pre style={{
                backgroundColor: '#090d16',
                border: '1px solid #1e293b',
                borderRadius: '6px',
                padding: '8px 10px',
                fontSize: '12px',
                color: '#f8fafc',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {JSON.stringify(activeTestCase?.input)}
              </pre>
            </div>

            {/* Expected & Output Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Expected Output</div>
                <pre style={{
                  backgroundColor: '#090d16',
                  border: '1px solid #1e293b',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  color: '#34d399',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {JSON.stringify(activeTestCase?.expected)}
                </pre>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Your Output</div>
                <pre style={{
                  backgroundColor: '#090d16',
                  border: `1px solid ${activeResult ? (activeResult.passed ? '#10b981' : '#ef4444') : '#1e293b'}`,
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  color: activeResult?.passed ? '#34d399' : '#f87171',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {activeResult ? JSON.stringify(activeResult.actual) : 'Not run yet'}
                </pre>
              </div>
            </div>

            {/* Runtime Error */}
            {activeResult?.error && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: '#f87171',
                fontSize: '12px'
              }}>
                <strong>Runtime Error:</strong> {activeResult.error}
              </div>
            )}

            {/* Captured Logs */}
            {activeResult?.logs && activeResult.logs.length > 0 && (
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Stdout Logs</div>
                <pre style={{
                  backgroundColor: '#090d16',
                  border: '1px solid #1e293b',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  color: '#94a3b8',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {activeResult.logs.join('\n')}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
