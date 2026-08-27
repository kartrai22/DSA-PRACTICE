import React from 'react';
import { X, BarChart3, CheckCircle2, Award, Zap } from 'lucide-react';
import { PROBLEMS, PROBLEM_CATEGORIES } from '../../data/problems';

export default function StatsModal({ isOpen, onClose, problemStatus }) {
  if (!isOpen) return null;

  const total = PROBLEMS.length;
  const solved = PROBLEMS.filter(p => problemStatus[p.id]?.status === 'solved').length;
  const attempted = PROBLEMS.filter(p => problemStatus[p.id]?.status === 'attempted').length;

  const easyTotal = PROBLEMS.filter(p => p.difficulty === 'Easy').length;
  const easySolved = PROBLEMS.filter(p => p.difficulty === 'Easy' && problemStatus[p.id]?.status === 'solved').length;

  const medTotal = PROBLEMS.filter(p => p.difficulty === 'Medium').length;
  const medSolved = PROBLEMS.filter(p => p.difficulty === 'Medium' && problemStatus[p.id]?.status === 'solved').length;

  const hardTotal = PROBLEMS.filter(p => p.difficulty === 'Hard').length;
  const hardSolved = PROBLEMS.filter(p => p.difficulty === 'Hard' && problemStatus[p.id]?.status === 'solved').length;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        backgroundColor: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #1e293b',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={18} color="#38bdf8" />
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc' }}>Your DSA Progress Analytics</h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Top Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            <div style={{ backgroundColor: '#090d16', padding: '14px', borderRadius: '10px', border: '1px solid #1e293b', textAlign: 'center' }}>
              <div style={{ color: '#38bdf8', fontSize: '24px', fontWeight: 700 }}>{solved}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>Solved</div>
            </div>
            <div style={{ backgroundColor: '#090d16', padding: '14px', borderRadius: '10px', border: '1px solid #1e293b', textAlign: 'center' }}>
              <div style={{ color: '#f59e0b', fontSize: '24px', fontWeight: 700 }}>{attempted}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>Attempted</div>
            </div>
            <div style={{ backgroundColor: '#090d16', padding: '14px', borderRadius: '10px', border: '1px solid #1e293b', textAlign: 'center' }}>
              <div style={{ color: '#10b981', fontSize: '24px', fontWeight: 700 }}>
                {total > 0 ? Math.round((solved / total) * 100) : 0}%
              </div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>Completion</div>
            </div>
          </div>

          {/* Difficulty Breakdown */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '12px' }}>Difficulty Breakdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Easy */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#10b981', fontWeight: 500 }}>Easy</span>
                  <span style={{ color: '#94a3b8' }}>{easySolved} / {easyTotal} ({easyTotal > 0 ? Math.round((easySolved / easyTotal) * 100) : 0}%)</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${easyTotal > 0 ? (easySolved / easyTotal) * 100 : 0}%`, backgroundColor: '#10b981' }} />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#f59e0b', fontWeight: 500 }}>Medium</span>
                  <span style={{ color: '#94a3b8' }}>{medSolved} / {medTotal} ({medTotal > 0 ? Math.round((medSolved / medTotal) * 100) : 0}%)</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${medTotal > 0 ? (medSolved / medTotal) * 100 : 0}%`, backgroundColor: '#f59e0b' }} />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#ef4444', fontWeight: 500 }}>Hard</span>
                  <span style={{ color: '#94a3b8' }}>{hardSolved} / {hardTotal} ({hardTotal > 0 ? Math.round((hardSolved / hardTotal) * 100) : 0}%)</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${hardTotal > 0 ? (hardSolved / hardTotal) * 100 : 0}%`, backgroundColor: '#ef4444' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Topic Progress Breakdown */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '12px' }}>Topic Mastery</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {PROBLEM_CATEGORIES.map(cat => {
                const catProblems = PROBLEMS.filter(p => p.category === cat.id);
                const catSolved = catProblems.filter(p => problemStatus[p.id]?.status === 'solved').length;
                const percent = catProblems.length > 0 ? Math.round((catSolved / catProblems.length) * 100) : 0;

                return (
                  <div key={cat.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', backgroundColor: '#090d16', padding: '8px 12px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color }} />
                      <span style={{ color: '#f1f5f9' }}>{cat.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#94a3b8' }}>{catSolved}/{catProblems.length}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: percent > 0 ? '#38bdf8' : '#64748b', minWidth: '35px', textAlign: 'right' }}>
                        {percent}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
