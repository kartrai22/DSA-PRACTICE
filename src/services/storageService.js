const STORAGE_KEYS = {
  USER_CODE: 'neetcode_ai_user_code',
  PROBLEM_STATUS: 'neetcode_ai_problem_status',
  SETTINGS: 'neetcode_ai_settings',
  NOTES: 'neetcode_ai_notes',
  BOOKMARKS: 'neetcode_ai_bookmarks',
  HISTORY: 'neetcode_ai_submission_history'
};

export const storageService = {
  getCode(problemId, language) {
    try {
      const codeStore = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_CODE) || '{}');
      return codeStore[`${problemId}_${language}`] || null;
    } catch {
      return null;
    }
  },

  saveCode(problemId, language, code) {
    try {
      const codeStore = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_CODE) || '{}');
      codeStore[`${problemId}_${language}`] = code;
      localStorage.setItem(STORAGE_KEYS.USER_CODE, JSON.stringify(codeStore));
    } catch (e) {
      console.error('Failed to save code to localStorage', e);
    }
  },

  getProblemStatus() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROBLEM_STATUS) || '{}');
    } catch {
      return {};
    }
  },

  setProblemStatus(problemId, status) {
    try {
      const statuses = this.getProblemStatus();
      statuses[problemId] = {
        status, // 'solved' | 'attempted' | 'todo'
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.PROBLEM_STATUS, JSON.stringify(statuses));
    } catch (e) {
      console.error('Failed to save problem status', e);
    }
  },

  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]');
    } catch {
      return [];
    }
  },

  toggleBookmark(problemId) {
    try {
      const bookmarks = new Set(this.getBookmarks());
      if (bookmarks.has(problemId)) {
        bookmarks.delete(problemId);
      } else {
        bookmarks.add(problemId);
      }
      const arr = Array.from(bookmarks);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(arr));
      return arr;
    } catch {
      return [];
    }
  },

  getNotes(problemId) {
    try {
      const notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '{}');
      return notes[problemId] || '';
    } catch {
      return '';
    }
  },

  saveNotes(problemId, noteText) {
    try {
      const notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '{}');
      notes[problemId] = noteText;
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to save notes', e);
    }
  },

  getSettings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || JSON.stringify({
        geminiApiKey: '',
        theme: 'vs-dark',
        fontSize: 14,
        autoRunTests: true,
        enableSounds: true
      }));
    } catch {
      return {
        geminiApiKey: '',
        theme: 'vs-dark',
        fontSize: 14,
        autoRunTests: true,
        enableSounds: true
      };
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }
};
