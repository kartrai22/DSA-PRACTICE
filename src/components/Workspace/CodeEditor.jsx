import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Send, RotateCcw, Code, Sparkles } from 'lucide-react';

const LANGUAGE_MAP = {
  javascript: { label: 'JavaScript', monacoLang: 'javascript' },
  python: { label: 'Python 3', monacoLang: 'python' },
  cpp: { label: 'C++', monacoLang: 'cpp' },
  java: { label: 'Java', monacoLang: 'java' }
};

export default function CodeEditor({ 
  code, 
  onChange, 
  language, 
  onLanguageChange, 
  onReset, 
  onRun, 
  onSubmit, 
  isRunning, 
  isSubmitting 
}) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    // Add custom keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRun();
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      onSubmit();
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#090d16' }}>
      {/* Editor Top Bar */}
      <div style={{
        height: '42px',
        backgroundColor: '#0b0f19',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px'
      }}>
        {/* Language Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code size={16} color="#38bdf8" />
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            style={{
              backgroundColor: '#162032',
              border: '1px solid #273549',
              borderRadius: '6px',
              padding: '4px 10px',
              color: '#f8fafc',
              fontSize: '13px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.entries(LANGUAGE_MAP).map(([key, config]) => (
              <option key={key} value={key}>{config.label}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onReset}
            className="btn-secondary"
            style={{ padding: '4px 10px', fontSize: '12px' }}
            title="Reset code to original starter template"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

          <button
            onClick={onRun}
            disabled={isRunning || isSubmitting}
            className="btn-secondary"
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              color: '#38bdf8',
              borderColor: 'rgba(56, 189, 248, 0.4)'
            }}
            title="Run test cases (Ctrl + Enter)"
          >
            <Play size={13} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>

          <button
            onClick={onSubmit}
            disabled={isRunning || isSubmitting}
            className="btn-success"
            style={{ padding: '4px 14px', fontSize: '12px' }}
            title="Submit solution (Ctrl + Shift + Enter)"
          >
            <Send size={13} />
            <span>{isSubmitting ? 'Evaluating...' : 'Submit'}</span>
          </button>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <Editor
          height="100%"
          language={LANGUAGE_MAP[language]?.monacoLang || 'javascript'}
          value={code}
          theme="vs-dark"
          onChange={(value) => onChange(value || '')}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: true,
            tabSize: 4,
            suggestOnTriggerCharacters: true,
            quickSuggestions: true,
            padding: { top: 12, bottom: 12 }
          }}
        />
      </div>
    </div>
  );
}
