import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Map, 
  ListOrdered, 
  Play, 
  Pause, 
  RotateCcw, 
  Shuffle, 
  Settings, 
  BarChart3, 
  Sparkles,
  Terminal,
  BookOpen
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  selectedProblem, 
  onSelectRandom, 
  solvedCount, 
  totalCount,
  onOpenSettings,
  onOpenStats
}) {
  // Interview Timer
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  return (
    <header style={{
      height: '60px',
      backgroundColor: '#0d131f',
      borderBottom: '1px solid #1e293b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      zIndex: 50,
      position: 'sticky',
      top: 0
    }}>
      {/* Brand & Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div 
          onClick={() => setCurrentView('roadmap')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
            padding: '6px 8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.4)'
          }}>
            <Code2 size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc' }}>
                JAVA DSA
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '6px',
                letterSpacing: '0.04em',
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.35)'
              }}>
                PRACTICE
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '11px',
                fontWeight: 700,
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '1px 5px',
                borderRadius: '4px',
                backgroundColor: 'rgba(56, 189, 248, 0.08)'
              }}>
                AI
              </span>
            </div>
          </div>
        </div>

        {/* View Navigation */}
        <nav style={{ display: 'flex', gap: '6px', marginLeft: '12px' }}>
          <button
            onClick={() => setCurrentView('roadmap')}
            className="btn-secondary"
            style={{
              backgroundColor: currentView === 'roadmap' ? '#1e293b' : 'transparent',
              borderColor: currentView === 'roadmap' ? '#38bdf8' : 'transparent',
              color: currentView === 'roadmap' ? '#38bdf8' : '#94a3b8',
              padding: '6px 12px',
              fontSize: '13px'
            }}
          >
            <Map size={15} />
            <span>Roadmap</span>
          </button>

          <button
            onClick={() => setCurrentView('problems')}
            className="btn-secondary"
            style={{
              backgroundColor: currentView === 'problems' ? '#1e293b' : 'transparent',
              borderColor: currentView === 'problems' ? '#38bdf8' : 'transparent',
              color: currentView === 'problems' ? '#38bdf8' : '#94a3b8',
              padding: '6px 12px',
              fontSize: '13px'
            }}
          >
            <ListOrdered size={15} />
            <span>Problems</span>
          </button>

          <button
            onClick={() => setCurrentView('theory')}
            className="btn-secondary"
            style={{
              backgroundColor: currentView === 'theory' ? '#1e293b' : 'transparent',
              borderColor: currentView === 'theory' ? '#38bdf8' : 'transparent',
              color: currentView === 'theory' ? '#38bdf8' : '#94a3b8',
              padding: '6px 12px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <BookOpen size={15} />
            <span>Java Theory</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              color: '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              padding: '1px 5px',
              borderRadius: '4px'
            }}>
              21 LTS
            </span>
          </button>

          {selectedProblem && (
            <button
              onClick={() => setCurrentView('workspace')}
              className="btn-secondary"
              style={{
                backgroundColor: currentView === 'workspace' ? '#1e293b' : 'transparent',
                borderColor: currentView === 'workspace' ? '#38bdf8' : 'transparent',
                color: currentView === 'workspace' ? '#38bdf8' : '#94a3b8',
                padding: '6px 12px',
                fontSize: '13px'
              }}
            >
              <Terminal size={15} />
              <span>Workspace: {selectedProblem.title}</span>
            </button>
          )}
        </nav>
      </div>

      {/* Right Controls: Timer, Random, Stats, Settings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Progress Pill */}
        <div 
          onClick={onOpenStats}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#162032',
            border: '1px solid #233044',
            padding: '5px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '13px'
          }}
          title="Click to view detailed stats"
        >
          <span style={{ color: '#94a3b8' }}>Solved:</span>
          <span style={{ color: '#10b981', fontWeight: 600 }}>{solvedCount}/{totalCount}</span>
          <div style={{
            width: '45px',
            height: '6px',
            backgroundColor: '#273549',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: '#10b981',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Interview Timer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#162032',
          border: '1px solid #233044',
          padding: '4px 10px',
          borderRadius: '8px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px'
        }}>
          <span style={{ color: timerRunning ? '#38bdf8' : '#94a3b8', minWidth: '45px' }}>
            {formatTimer(seconds)}
          </span>
          <button 
            onClick={() => setTimerRunning(!timerRunning)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px', display: 'flex' }}
            title={timerRunning ? "Pause timer" : "Start timer"}
          >
            {timerRunning ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button 
            onClick={() => { setTimerRunning(false); setSeconds(0); }}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px', display: 'flex' }}
            title="Reset timer"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Random Pick */}
        <button
          onClick={onSelectRandom}
          className="btn-secondary"
          style={{ padding: '6px 12px', fontSize: '13px' }}
          title="Pick a random problem"
        >
          <Shuffle size={14} color="#38bdf8" />
          <span>Pick One</span>
        </button>

        {/* Stats */}
        <button
          onClick={onOpenStats}
          className="btn-secondary"
          style={{ padding: '6px 10px' }}
          title="Detailed analytics"
        >
          <BarChart3 size={15} color="#94a3b8" />
        </button>

        {/* Settings */}
        <button
          onClick={onOpenSettings}
          className="btn-secondary"
          style={{ padding: '6px 10px' }}
          title="Settings & Gemini API"
        >
          <Settings size={15} color="#94a3b8" />
        </button>
      </div>
    </header>
  );
}
