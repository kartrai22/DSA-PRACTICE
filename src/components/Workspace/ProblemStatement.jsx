import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Lightbulb, 
  StickyNote, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Cpu,
  Eye 
} from 'lucide-react';
import AiTutorPanel from './AiTutorPanel';
import AlgorithmVisualizer from './AlgorithmVisualizer';
import { storageService } from '../../services/storageService';

export default function ProblemStatement({ 
  problem, 
  currentCode, 
  language, 
  testResults, 
  onOpenSettings,
  isSolved 
}) {
  const [activeTab, setActiveTab] = useState('description');
  const [notes, setNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);

  useEffect(() => {
    if (problem) {
      setNotes(storageService.getNotes(problem.id));
    }
  }, [problem]);

  const handleNotesChange = (e) => {
    const val = e.target.value;
    setNotes(val);
    storageService.saveNotes(problem.id, val);
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#0f172a',
      borderRight: '1px solid #1e293b'
    }}>
      {/* Header Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0b0f19',
        borderBottom: '1px solid #1e293b',
        padding: '0 12px',
        height: '42px',
        gap: '4px'
      }}>
        <button
          onClick={() => setActiveTab('description')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'description' ? '#38bdf8' : '#94a3b8',
            borderBottom: activeTab === 'description' ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <FileText size={15} />
          <span>Description</span>
        </button>

        <button
          onClick={() => setActiveTab('ai-tutor')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'ai-tutor' ? '#38bdf8' : '#94a3b8',
            borderBottom: activeTab === 'ai-tutor' ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Sparkles size={15} color="#38bdf8" />
          <span>AI Coach</span>
        </button>

        <button
          onClick={() => setActiveTab('visualizer')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'visualizer' ? '#38bdf8' : '#94a3b8',
            borderBottom: activeTab === 'visualizer' ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Eye size={15} color="#38bdf8" />
          <span>Visualizer</span>
        </button>

        <button
          onClick={() => setActiveTab('solution')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'solution' ? '#38bdf8' : '#94a3b8',
            borderBottom: activeTab === 'solution' ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Lightbulb size={15} />
          <span>Optimal Solution</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'notes' ? '#38bdf8' : '#94a3b8',
            borderBottom: activeTab === 'notes' ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <StickyNote size={15} />
          <span>Notes</span>
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'description' && (
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Title & Badges */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>
                  {problem.title}
                </h1>
                {isSolved && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>
                    <CheckCircle2 size={12} /> Solved
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span className={`badge-${problem.difficulty.toLowerCase()}`} style={{
                  fontSize: '12px',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                  {problem.difficulty}
                </span>

                <span style={{
                  fontSize: '12px',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  backgroundColor: '#1e293b',
                  color: '#94a3b8',
                  border: '1px solid #334155'
                }}>
                  Acceptance: {problem.acceptance}
                </span>

                {problem.optimalComplexity && (
                  <span style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Zap size={12} /> Target: {problem.optimalComplexity.time} Time | {problem.optimalComplexity.space} Space
                  </span>
                )}
              </div>
            </div>

            {/* Description Text */}
            <div style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
              {problem.description}
            </div>

            {/* Examples */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '12px' }}>
                Examples
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {problem.examples?.map((ex, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#090d16',
                      border: '1px solid #1e293b',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      fontSize: '13px',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  >
                    <div style={{ fontWeight: 600, color: '#94a3b8', marginBottom: '6px' }}>Example {idx + 1}:</div>
                    <div style={{ color: '#cbd5e1', marginBottom: '4px' }}>
                      <strong style={{ color: '#94a3b8' }}>Input:</strong> {ex.input}
                    </div>
                    <div style={{ color: '#cbd5e1', marginBottom: ex.explanation ? '4px' : '0' }}>
                      <strong style={{ color: '#94a3b8' }}>Output:</strong> <span style={{ color: '#38bdf8' }}>{ex.output}</span>
                    </div>
                    {ex.explanation && (
                      <div style={{ color: '#94a3b8', fontStyle: 'italic', marginTop: '4px' }}>
                        Explanation: {ex.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Constraints */}
            {problem.constraints && (
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                  Constraints:
                </h3>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', fontSize: '13px', lineHeight: '1.8' }}>
                  {problem.constraints.map((c, i) => (
                    <li key={i}>
                      <code style={{ color: '#cbd5e1', backgroundColor: '#1e293b', padding: '2px 5px', borderRadius: '4px' }}>
                        {c}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'ai-tutor' && (
          <AiTutorPanel
            problem={problem}
            currentCode={currentCode}
            language={language}
            testResults={testResults}
            onOpenSettings={onOpenSettings}
          />
        )}

        {activeTab === 'visualizer' && (
          <AlgorithmVisualizer
            problem={problem}
            currentCode={currentCode}
            language={language}
          />
        )}

        {activeTab === 'solution' && (
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#f8fafc' }}>
              Optimal Solution Reference
            </h2>
            <div style={{
              display: 'flex',
              gap: '12px',
              backgroundColor: '#090d16',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <span style={{ color: '#38bdf8', fontSize: '13px' }}>
                <strong>Optimal Time:</strong> {problem.optimalComplexity?.time}
              </span>
              <span style={{ color: '#a78bfa', fontSize: '13px' }}>
                <strong>Optimal Space:</strong> {problem.optimalComplexity?.space}
              </span>
            </div>

            <pre style={{
              backgroundColor: '#090d16',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '16px',
              overflowX: 'auto',
              color: '#34d399',
              fontSize: '13px',
              lineHeight: '1.5'
            }}>
              <code>{problem.optimalSolution || '// Solution reference'}</code>
            </pre>
          </div>
        )}

        {activeTab === 'notes' && (
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc' }}>Personal Notes</h2>
              {notesSaved && <span style={{ fontSize: '12px', color: '#10b981' }}>Saved!</span>}
            </div>
            <textarea
              placeholder="Write your notes, edge cases, formulas, or takeaways for this problem..."
              value={notes}
              onChange={handleNotesChange}
              style={{
                flex: 1,
                minHeight: '350px',
                backgroundColor: '#090d16',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '16px',
                color: '#f8fafc',
                fontSize: '14px',
                lineHeight: '1.6',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
