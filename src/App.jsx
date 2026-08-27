import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import RoadmapView from './components/RoadmapView';
import ProblemList from './components/ProblemList';
import ProblemWorkspace from './components/Workspace/ProblemWorkspace';
import SettingsModal from './components/Modals/SettingsModal';
import StatsModal from './components/Modals/StatsModal';
import { PROBLEMS } from './data/problems';
import { storageService } from './services/storageService';

export default function App() {
  const [currentView, setCurrentView] = useState('roadmap'); // 'roadmap' | 'problems' | 'workspace'
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [problemStatus, setProblemStatus] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  // Load initial local data
  useEffect(() => {
    setProblemStatus(storageService.getProblemStatus());
    setBookmarks(storageService.getBookmarks());
  }, []);

  const handleStatusChange = (problemId, status) => {
    storageService.setProblemStatus(problemId, status);
    setProblemStatus(storageService.getProblemStatus());
  };

  const handleToggleBookmark = (problemId) => {
    const updated = storageService.toggleBookmark(problemId);
    setBookmarks(updated);
  };

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    setCurrentView('workspace');
  };

  const handleSelectCategoryFromRoadmap = (categoryId) => {
    setFilterCategory(categoryId);
    setCurrentView('problems');
  };

  const handleSelectRandom = () => {
    const randomIndex = Math.floor(Math.random() * PROBLEMS.length);
    const randomProblem = PROBLEMS[randomIndex];
    handleSelectProblem(randomProblem);
  };

  const handleResetAllData = () => {
    localStorage.clear();
    setProblemStatus({});
    setBookmarks([]);
  };

  const solvedCount = PROBLEMS.filter(p => problemStatus[p.id]?.status === 'solved').length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0b0f19' }}>
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedProblem={selectedProblem}
        onSelectRandom={handleSelectRandom}
        solvedCount={solvedCount}
        totalCount={PROBLEMS.length}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {/* Main Views */}
      <main style={{ flex: 1 }}>
        {currentView === 'roadmap' && (
          <RoadmapView
            problemStatus={problemStatus}
            onSelectCategory={handleSelectCategoryFromRoadmap}
            onSelectProblem={handleSelectProblem}
          />
        )}

        {currentView === 'problems' && (
          <ProblemList
            problemStatus={problemStatus}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onSelectProblem={handleSelectProblem}
            initialCategory={filterCategory}
          />
        )}

        {currentView === 'workspace' && selectedProblem && (
          <ProblemWorkspace
            problem={selectedProblem}
            problemStatus={problemStatus}
            onStatusChange={handleStatusChange}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onResetAllData={handleResetAllData}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        problemStatus={problemStatus}
      />
    </div>
  );
}
