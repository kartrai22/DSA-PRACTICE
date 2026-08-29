import React from 'react';
import { ROADMAP_NODES } from '../data/roadmap';
import { PROBLEM_CATEGORIES, PROBLEMS } from '../data/problems';
import { CheckCircle2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function RoadmapView({ problemStatus, onSelectCategory, onSelectProblem }) {
  // Calculate stats for each category
  const categoryStats = PROBLEM_CATEGORIES.map(cat => {
    const catProblems = PROBLEMS.filter(p => p.category === cat.id);
    const solved = catProblems.filter(p => problemStatus[p.id]?.status === 'solved').length;
    return {
      ...cat,
      total: catProblems.length,
      solved,
      percent: catProblems.length > 0 ? Math.round((solved / catProblems.length) * 100) : 0,
      problems: catProblems
    };
  });

  return (
    <div style={{ padding: '32px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div style={{
        marginBottom: '32px',
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={20} color="#f59e0b" />
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>
              Java DSA Practice Roadmap
            </h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '640px', lineHeight: '1.5' }}>
            Master Data Structures & Algorithms in Java with this structured curriculum. Write clean, optimal solutions and test them live with your local Java compiler!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{
            backgroundColor: '#0f172a',
            padding: '12px 18px',
            borderRadius: '12px',
            border: '1px solid #1e293b',
            textAlign: 'center'
          }}>
            <div style={{ color: '#38bdf8', fontSize: '20px', fontWeight: 700 }}>
              {PROBLEMS.filter(p => problemStatus[p.id]?.status === 'solved').length} / {PROBLEMS.length}
            </div>
            <div style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Total Completed
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Grid Categories */}
      <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#e2e8f0', marginBottom: '16px' }}>
        Skill Tracks & Milestones
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '20px'
      }}>
        {categoryStats.map((cat) => (
          <div
            key={cat.id}
            className="glass-panel glow-hover"
            style={{
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.15s ease, border-color 0.15s ease'
            }}
            onClick={() => onSelectCategory(cat.id)}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: `${cat.color}20`,
                    border: `1px solid ${cat.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cat.color
                  }}>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#f1f5f9' }}>{cat.name}</h3>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                      {cat.solved} of {cat.total} solved
                    </span>
                  </div>
                </div>

                {cat.solved === cat.total && cat.total > 0 ? (
                  <CheckCircle2 size={20} color="#10b981" />
                ) : (
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: cat.percent > 0 ? '#38bdf8' : '#64748b'
                  }}>
                    {cat.percent}%
                  </span>
                )}
              </div>

              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.4', marginBottom: '16px' }}>
                {cat.description}
              </p>

              {/* Progress bar */}
              <div style={{
                width: '100%',
                height: '6px',
                backgroundColor: '#1e293b',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: `${cat.percent}%`,
                  height: '100%',
                  backgroundColor: cat.color,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            {/* Problem pills preview */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                {cat.problems.slice(0, 3).map((p) => {
                  const isSolved = problemStatus[p.id]?.status === 'solved';
                  return (
                    <span
                      key={p.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProblem(p);
                      }}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: isSolved ? 'rgba(16, 185, 129, 0.15)' : '#1e293b',
                        color: isSolved ? '#34d399' : '#cbd5e1',
                        border: isSolved ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid #334155',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {isSolved && '✓'} {p.title}
                    </span>
                  );
                })}
                {cat.problems.length > 3 && (
                  <span style={{ fontSize: '11px', color: '#64748b', alignSelf: 'center' }}>
                    +{cat.problems.length - 3} more
                  </span>
                )}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '13px',
                color: '#38bdf8',
                fontWeight: 500,
                borderTop: '1px solid #1e293b',
                paddingTop: '10px'
              }}>
                <span>Practice Topic</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
