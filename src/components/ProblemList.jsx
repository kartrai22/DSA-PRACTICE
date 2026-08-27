import React, { useState, useMemo } from 'react';
import { PROBLEMS, PROBLEM_CATEGORIES } from '../data/problems';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  Circle, 
  Clock, 
  SlidersHorizontal,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function ProblemList({ 
  problemStatus, 
  bookmarks, 
  onToggleBookmark, 
  onSelectProblem,
  initialCategory = 'all'
}) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter((p) => {
      // Search query
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.category.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Difficulty
      if (difficultyFilter !== 'all' && p.difficulty.toLowerCase() !== difficultyFilter.toLowerCase()) {
        return false;
      }
      // Status
      const status = problemStatus[p.id]?.status || 'todo';
      const isBookmarked = bookmarks.includes(p.id);
      if (statusFilter === 'solved' && status !== 'solved') return false;
      if (statusFilter === 'attempted' && status !== 'attempted') return false;
      if (statusFilter === 'todo' && status !== 'todo') return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      return true;
    });
  }, [search, selectedCategory, difficultyFilter, statusFilter, problemStatus, bookmarks]);

  return (
    <div style={{ padding: '32px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Top Filter Controls */}
      <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Search bar */}
          <div style={{
            position: 'relative',
            flex: '1 1 300px',
            minWidth: '240px'
          }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '10px' }} />
            <input
              type="text"
              placeholder="Search problems by name or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#0d131f',
                border: '1px solid #273549',
                borderRadius: '8px',
                padding: '8px 12px 8px 38px',
                color: '#f8fafc',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Select */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              backgroundColor: '#0d131f',
              border: '1px solid #273549',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#f8fafc',
              fontSize: '14px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Topics ({PROBLEMS.length})</option>
            {PROBLEM_CATEGORIES.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          {/* Difficulty Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {['all', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className="btn-secondary"
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  backgroundColor: difficultyFilter === diff ? '#273549' : 'transparent',
                  borderColor: difficultyFilter === diff ? '#38bdf8' : '#273549',
                  color: diff === 'Easy' ? '#10b981' : diff === 'Medium' ? '#f59e0b' : diff === 'Hard' ? '#ef4444' : '#e2e8f0'
                }}
              >
                {diff === 'all' ? 'All Difficulties' : diff}
              </button>
            ))}
          </div>

          {/* Status Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {['all', 'solved', 'attempted', 'bookmarked'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className="btn-secondary"
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  backgroundColor: statusFilter === st ? '#273549' : 'transparent',
                  borderColor: statusFilter === st ? '#38bdf8' : '#273549',
                  color: statusFilter === st ? '#38bdf8' : '#94a3b8',
                  textTransform: 'capitalize'
                }}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Table */}
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#0d131f', borderBottom: '1px solid #1e293b', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 16px', width: '50px' }}>Status</th>
              <th style={{ padding: '14px 16px' }}>Title</th>
              <th style={{ padding: '14px 16px' }}>Category</th>
              <th style={{ padding: '14px 16px', width: '110px' }}>Difficulty</th>
              <th style={{ padding: '14px 16px', width: '100px' }}>Acceptance</th>
              <th style={{ padding: '14px 16px', width: '90px', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                  No problems found matching your filters.
                </td>
              </tr>
            ) : (
              filteredProblems.map((prob) => {
                const status = problemStatus[prob.id]?.status || 'todo';
                const isBookmarked = bookmarks.includes(prob.id);
                const categoryObj = PROBLEM_CATEGORIES.find(c => c.id === prob.category);

                return (
                  <tr 
                    key={prob.id}
                    onClick={() => onSelectProblem(prob)}
                    style={{
                      borderBottom: '1px solid #162032',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#162032'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {/* Status Column */}
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {status === 'solved' ? (
                          <CheckCircle2 size={18} color="#10b981" />
                        ) : status === 'attempted' ? (
                          <Clock size={18} color="#f59e0b" />
                        ) : (
                          <Circle size={18} color="#475569" />
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(prob.id);
                          }}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: isBookmarked ? '#f59e0b' : '#334155' }}
                          title="Bookmark problem"
                        >
                          {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                        </button>
                      </div>
                    </td>

                    {/* Title */}
                    <td style={{ padding: '14px 16px', fontWeight: 500, color: '#f8fafc' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{prob.title}</span>
                      </div>
                    </td>

                    {/* Category */}
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        fontSize: '12px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: `${categoryObj?.color || '#38bdf8'}15`,
                        color: categoryObj?.color || '#38bdf8',
                        border: `1px solid ${categoryObj?.color || '#38bdf8'}30`
                      }}>
                        {categoryObj?.name || prob.category}
                      </span>
                    </td>

                    {/* Difficulty */}
                    <td style={{ padding: '14px 16px' }}>
                      <span className={`badge-${prob.difficulty.toLowerCase()}`} style={{
                        fontSize: '12px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontWeight: 600
                      }}>
                        {prob.difficulty}
                      </span>
                    </td>

                    {/* Acceptance */}
                    <td style={{ padding: '14px 16px', color: '#94a3b8', fontSize: '13px' }}>
                      {prob.acceptance}
                    </td>

                    {/* Action */}
                    <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                      <button
                        className="btn-secondary"
                        style={{ padding: '4px 10px', fontSize: '12px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProblem(prob);
                        }}
                      >
                        <span>{status === 'solved' ? 'Review' : 'Solve'}</span>
                        <ChevronRight size={13} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
