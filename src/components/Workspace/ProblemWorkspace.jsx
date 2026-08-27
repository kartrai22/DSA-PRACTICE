import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import ProblemStatement from './ProblemStatement';
import CodeEditor from './CodeEditor';
import TestConsole from './TestConsole';
import { testRunner } from '../../services/testRunner';
import { storageService } from '../../services/storageService';

export default function ProblemWorkspace({ 
  problem, 
  problemStatus, 
  onStatusChange, 
  onOpenSettings 
}) {
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load starter code or saved user code when problem or language changes
  useEffect(() => {
    if (problem) {
      const savedCode = storageService.getCode(problem.id, language);
      if (savedCode) {
        setCode(savedCode);
      } else {
        setCode(problem.starterCode?.[language] || problem.starterCode?.javascript || '');
      }
      setTestResults(null);
    }
  }, [problem, language]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    if (problem) {
      storageService.saveCode(problem.id, language, newCode);
    }
  };

  const handleReset = () => {
    if (problem && window.confirm('Reset code to starter template? Your current changes will be overwritten.')) {
      const defaultTemplate = problem.starterCode?.[language] || problem.starterCode?.javascript || '';
      setCode(defaultTemplate);
      storageService.saveCode(problem.id, language, defaultTemplate);
    }
  };

  const handleRun = async () => {
    if (!problem) return;
    setIsRunning(true);
    try {
      const results = await testRunner.runCode(code, problem.testCases || [], language, problem.id);
      setTestResults(results);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (!problem) return;
    setIsSubmitting(true);
    try {
      const results = await testRunner.runCode(code, problem.testCases || [], language, problem.id);
      setTestResults(results);

      if (results.allPassed) {
        onStatusChange(problem.id, 'solved');
        // Trigger celebratory confetti!
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
      } else {
        onStatusChange(problem.id, 'attempted');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSolved = problemStatus[problem.id]?.status === 'solved';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      height: 'calc(100vh - 60px)',
      overflow: 'hidden'
    }}>
      {/* Left Pane: Problem Description & AI Coach */}
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <ProblemStatement
          problem={problem}
          currentCode={code}
          language={language}
          testResults={testResults}
          onOpenSettings={onOpenSettings}
          isSolved={isSolved}
        />
      </div>

      {/* Right Pane: Code Editor & Test Console */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <CodeEditor
            code={code}
            onChange={handleCodeChange}
            language={language}
            onLanguageChange={setLanguage}
            onReset={handleReset}
            onRun={handleRun}
            onSubmit={handleSubmit}
            isRunning={isRunning}
            isSubmitting={isSubmitting}
          />
        </div>

        <TestConsole
          testCases={problem.testCases || []}
          testResults={testResults}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}
