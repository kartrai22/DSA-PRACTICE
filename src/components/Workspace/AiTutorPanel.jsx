import React, { useState } from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  Cpu, 
  Bug, 
  CheckCheck, 
  Send, 
  Loader2, 
  Key,
  Copy,
  Check
} from 'lucide-react';
import { aiService } from '../../services/aiService';

export default function AiTutorPanel({ problem, currentCode, language, testResults, onOpenSettings }) {
  const [hintTier, setHintTier] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [customQuestion, setCustomQuestion] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGetHint = async () => {
    setLoading(true);
    try {
      const response = await aiService.getHint(problem, currentCode, hintTier);
      setAiResponse({
        type: 'hint',
        title: `Socratic Hint (Tier ${hintTier}/3)`,
        content: response
      });
      // Cycle to next hint tier for subsequent clicks
      setHintTier((prev) => (prev % 3) + 1);
    } catch (err) {
      setAiResponse({ type: 'error', title: 'Error', content: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeComplexity = async () => {
    setLoading(true);
    try {
      const response = await aiService.analyzeComplexity(problem, currentCode, language);
      setAiResponse({
        type: 'complexity',
        title: 'Big-O Complexity Evaluation',
        content: response
      });
    } catch (err) {
      setAiResponse({ type: 'error', title: 'Error', content: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDiagnoseBug = async () => {
    setLoading(true);
    try {
      const response = await aiService.diagnoseFailure(problem, currentCode, testResults || {});
      setAiResponse({
        type: 'bug',
        title: 'Bug & Edge Case Diagnosis',
        content: response
      });
    } catch (err) {
      setAiResponse({ type: 'error', title: 'Error', content: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleExplainOptimal = async () => {
    setLoading(true);
    try {
      const response = await aiService.getOptimalExplanation(problem);
      setAiResponse({
        type: 'optimal',
        title: 'Optimal Approach & Explanation',
        content: response
      });
    } catch (err) {
      setAiResponse({ type: 'error', title: 'Error', content: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleAskCustom = async (e) => {
    e.preventDefault();
    if (!customQuestion.trim() || loading) return;
    setLoading(true);
    try {
      const prompt = `User question regarding DSA problem "${problem.title}":\n"${customQuestion}"\nCurrent user code:\n\`\`\`\n${currentCode}\n\`\`\`\nAnswer clearly, concisely, and helpfully.`;
      const response = await aiService.callGeminiAPI('local_or_key', prompt).catch(async () => {
        // Fallback local response
        return `🤖 **AI Tutor Response to:** *"${customQuestion}"*\n\nFor **${problem.title}**, focus on using the optimal invariants. Check that your state transitions correctly handle edge cases (e.g. empty or 1-element inputs, duplicate keys).`;
      });
      setAiResponse({
        type: 'chat',
        title: 'Tutor Response',
        content: response
      });
      setCustomQuestion('');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (aiResponse?.content) {
      navigator.clipboard.writeText(aiResponse.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px', gap: '16px' }}>
      {/* Action Chips */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#38bdf8" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>AI DSA Coach</span>
          </div>
          <button
            onClick={onOpenSettings}
            style={{
              background: 'none',
              border: 'none',
              color: '#38bdf8',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Key size={13} />
            <span>Configure Gemini API</span>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button
            onClick={handleGetHint}
            disabled={loading}
            className="btn-secondary"
            style={{ padding: '8px 10px', fontSize: '12px', justifyContent: 'flex-start' }}
          >
            <Lightbulb size={15} color="#facc15" />
            <span>Get Hint (Tier {hintTier})</span>
          </button>

          <button
            onClick={handleAnalyzeComplexity}
            disabled={loading}
            className="btn-secondary"
            style={{ padding: '8px 10px', fontSize: '12px', justifyContent: 'flex-start' }}
          >
            <Cpu size={15} color="#38bdf8" />
            <span>Analyze Big-O</span>
          </button>

          <button
            onClick={handleDiagnoseBug}
            disabled={loading}
            className="btn-secondary"
            style={{ padding: '8px 10px', fontSize: '12px', justifyContent: 'flex-start' }}
          >
            <Bug size={15} color="#f87171" />
            <span>Debug / Edge Cases</span>
          </button>

          <button
            onClick={handleExplainOptimal}
            disabled={loading}
            className="btn-secondary"
            style={{ padding: '8px 10px', fontSize: '12px', justifyContent: 'flex-start' }}
          >
            <CheckCheck size={15} color="#4ade80" />
            <span>Optimal Walkthrough</span>
          </button>
        </div>
      </div>

      {/* Response Box */}
      <div style={{
        flex: 1,
        backgroundColor: '#0a0e17',
        border: '1px solid #1e293b',
        borderRadius: '10px',
        padding: '16px',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', color: '#94a3b8' }}>
            <Loader2 size={24} className="pulse-glow" style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '13px' }}>AI Tutor is analyzing your code...</span>
          </div>
        ) : aiResponse ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#38bdf8' }}>{aiResponse.title}</span>
              <button
                onClick={handleCopy}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}
              >
                {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
              {aiResponse.content}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: '#64748b', gap: '8px' }}>
            <Sparkles size={28} color="#334155" />
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#94a3b8' }}>How can the AI Coach help you?</div>
            <p style={{ fontSize: '12px', maxWidth: '300px' }}>
              Click any quick action above for progressive hints, complexity analysis, or failing test breakdown.
            </p>
          </div>
        )}
      </div>

      {/* Custom prompt input */}
      <form onSubmit={handleAskCustom} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Ask AI a specific question about your approach..."
          value={customQuestion}
          onChange={(e) => setCustomQuestion(e.target.value)}
          disabled={loading}
          style={{
            flex: 1,
            backgroundColor: '#0d131f',
            border: '1px solid #273549',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#f8fafc',
            fontSize: '13px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={!customQuestion.trim() || loading}
          style={{ padding: '8px 14px' }}
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
