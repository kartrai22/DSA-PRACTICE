import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Terminal, 
  AlertTriangle, 
  AlertOctagon,
  ChevronUp, 
  ChevronDown,
  Lightbulb,
  MapPin
} from 'lucide-react';

export default function TestConsole({ testCases, testResults, isRunning }) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeResult = testResults?.results?.[selectedCaseIdx];
  const activeTestCase = testCases[selectedCaseIdx] || testCases[0];

  const hasError = !!activeResult?.error;
  const errorDetails = activeResult?.errorDetails;

  return (
    <div style={{
      borderTop: '1px solid #1e293b',
      backgroundColor: '#0d131f',
      display: 'flex',
      flexDirection: 'column',
      height: isCollapsed ? '38px' : '290px',
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
                  {hasError ? <AlertOctagon size={14} /> : <XCircle size={14} />} 
                  {hasError ? (errorDetails?.type || 'Error Encountered') : `Wrong Answer (${testResults.passedTests}/${testResults.totalTests} Passed)`}
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
          <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Input */}
            <div>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>Input</div>
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
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>Expected Output</div>
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
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>Your Output</div>
                <pre style={{
                  backgroundColor: '#090d16',
                  border: `1px solid ${activeResult ? (activeResult.passed ? '#10b981' : '#ef4444') : '#1e293b'}`,
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  color: activeResult?.passed ? '#34d399' : '#f87171',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {activeResult ? (activeResult.actual !== undefined ? JSON.stringify(activeResult.actual) : 'None / Error') : 'Not run yet'}
                </pre>
              </div>
            </div>

            {/* Detailed Error Diagnostics Card */}
            {activeResult?.error && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                borderRadius: '8px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {/* Error Header & Location Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertOctagon size={15} color="#ef4444" />
                    <strong style={{ color: '#f87171', fontSize: '13px' }}>
                      {errorDetails?.type || 'Error'}:
                    </strong>
                    <span style={{ color: '#fca5a5', fontSize: '12px' }}>
                      {errorDetails?.message || activeResult.error}
                    </span>
                  </div>

                  {errorDetails?.line && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: '#fca5a5',
                      fontSize: '11px',
                      fontWeight: 600
                    }}>
                      <MapPin size={12} />
                      Line {errorDetails.line}{errorDetails.column ? `, Col ${errorDetails.column}` : ''}
                    </div>
                  )}
                </div>

                {/* Code Snippet with Caret Pointer */}
                {errorDetails?.snippet && (
                  <pre style={{
                    backgroundColor: '#090d16',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    fontSize: '12px',
                    color: '#f87171',
                    fontFamily: 'JetBrains Mono, monospace',
                    margin: '2px 0',
                    lineHeight: '1.5'
                  }}>
                    {errorDetails.snippet}
                  </pre>
                )}

                {/* Raw Error text if no snippet */}
                {!errorDetails?.snippet && (
                  <pre style={{
                    backgroundColor: '#090d16',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    fontSize: '12px',
                    color: '#f87171',
                    fontFamily: 'JetBrains Mono, monospace',
                    margin: '2px 0',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
                    {activeResult.error}
                  </pre>
                )}

                {/* Smart Suggestion */}
                {errorDetails?.suggestion && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px',
                    color: '#fde047',
                    fontSize: '12px',
                    backgroundColor: 'rgba(234, 179, 8, 0.08)',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(234, 179, 8, 0.2)'
                  }}>
                    <Lightbulb size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span><strong>Fix Suggestion:</strong> {errorDetails.suggestion}</span>
                  </div>
                )}
              </div>
            )}

            {/* Captured Stdout Logs */}
            {activeResult?.logs && activeResult.logs.length > 0 && (
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>Stdout Logs</div>
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
