import React, { useState, useEffect } from 'react';
import { X, Key, Sparkles, Trash2, Check, ExternalLink } from 'lucide-react';
import { storageService } from '../../services/storageService';

export default function SettingsModal({ isOpen, onClose, onResetAllData }) {
  const [settings, setSettings] = useState({
    geminiApiKey: '',
    theme: 'vs-dark',
    fontSize: 14,
    autoRunTests: true,
    enableSounds: true
  });
  const [saved, setSaved] = useState(false);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSettings(storageService.getSettings());
      setSaved(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    storageService.saveSettings(settings);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to reset all solved problems, notes, and local code? This cannot be undone.')) {
      onResetAllData();
      onClose();
    }
  };

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
        maxWidth: '520px',
        backgroundColor: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
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
            <Sparkles size={18} color="#38bdf8" />
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc' }}>Settings & AI Configuration</h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSave} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Gemini API Key */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Key size={14} color="#38bdf8" />
                <span>Google Gemini API Key (Optional)</span>
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '12px', color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}
              >
                <span>Get Free Key</span>
                <ExternalLink size={11} />
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showKey ? 'text' : 'password'}
                placeholder="AIzaSy..."
                value={settings.geminiApiKey}
                onChange={(e) => setSettings({ ...settings, geminiApiKey: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#090d16',
                  border: '1px solid #273549',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#f8fafc',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '11px',
                  cursor: 'pointer'
                }}
              >
                {showKey ? 'Hide' : 'Show'}
              </button>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>
              *Without an API key, NeetCode AI uses the built-in intelligent offline tutor engine automatically.
            </p>
          </div>

          {/* Editor Theme & Font */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#e2e8f0', display: 'block', marginBottom: '6px' }}>
                Editor Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#090d16',
                  border: '1px solid #273549',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#f8fafc',
                  fontSize: '13px',
                  outline: 'none'
                }}
              >
                <option value="vs-dark">VS Dark (Default)</option>
                <option value="light">Light</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#e2e8f0', display: 'block', marginBottom: '6px' }}>
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
                style={{
                  width: '100%',
                  backgroundColor: '#090d16',
                  border: '1px solid #273549',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#f8fafc',
                  fontSize: '13px',
                  outline: 'none'
                }}
              >
                <option value={12}>12 px</option>
                <option value={14}>14 px</option>
                <option value={16}>16 px</option>
                <option value={18}>18 px</option>
              </select>
            </div>
          </div>

          {/* Reset Local Data */}
          <div style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#f87171' }}>Reset Progress</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Wipe all solved statuses & user code</div>
            </div>
            <button
              type="button"
              onClick={handleClearData}
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Trash2 size={13} />
              <span>Reset Data</span>
            </button>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '8px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              {saved ? <Check size={15} /> : null}
              <span>{saved ? 'Saved!' : 'Save Preferences'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
