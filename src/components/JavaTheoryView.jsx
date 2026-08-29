import React, { useState, useMemo, useEffect } from 'react';
import { JAVA_THEORY_SECTIONS } from '../data/javaTheory';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Circle, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Code2, 
  Flame, 
  Zap, 
  Blocks, 
  Boxes, 
  Database, 
  ShieldAlert, 
  Shapes, 
  FileText, 
  Layers, 
  GitBranch, 
  ArrowLeft, 
  ArrowRight,
  ExternalLink,
  BookMarked,
  Clock,
  Terminal,
  Cpu
} from 'lucide-react';

const ICON_MAP = {
  Blocks,
  Boxes,
  Database,
  Sparkles,
  ShieldAlert,
  Shapes,
  FileText,
  Layers,
  GitBranch,
  Flame,
  Zap,
  Code2
};

// Simple syntax highlighter for Java code blocks
function HighlightedJavaCode({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom tokenization for Java
  const renderFormattedLine = (line) => {
    // If it's a comment
    if (line.trim().startsWith('//')) {
      return <span style={{ color: '#64748b', fontStyle: 'italic' }}>{line}</span>;
    }

    // Split preserving spaces and common delimiters
    const tokens = line.split(/(\s+|[(){}[\].,;:=+\-*/<>!&|^?%"])/g);

    const keywords = new Set([
      'public', 'private', 'protected', 'class', 'interface', 'record', 'sealed', 'permits', 'non-sealed',
      'extends', 'implements', 'static', 'final', 'abstract', 'default', 'void', 'return', 'if', 'else',
      'switch', 'case', 'yield', 'when', 'for', 'while', 'do', 'break', 'continue', 'try', 'catch', 'finally',
      'throw', 'throws', 'new', 'instanceof', 'var', 'import', 'package', 'this', 'super', 'null', 'true', 'false'
    ]);

    const types = new Set([
      'int', 'long', 'double', 'float', 'boolean', 'char', 'byte', 'short',
      'String', 'Integer', 'Double', 'Long', 'Boolean', 'Character', 'Object',
      'List', 'ArrayList', 'LinkedList', 'Set', 'HashSet', 'TreeSet', 'LinkedHashSet',
      'Map', 'HashMap', 'TreeMap', 'LinkedHashMap', 'Entry', 'Queue', 'Deque', 'ArrayDeque',
      'PriorityQueue', 'Optional', 'Stream', 'IntStream', 'Collectors', 'Thread', 'Executors',
      'ExecutorService', 'Future', 'CompletableFuture', 'Path', 'Files', 'Arrays', 'Collections',
      'Math', 'System', 'Comparator', 'Function', 'Predicate', 'Consumer', 'Supplier', 'Exception', 'RuntimeException'
    ]);

    let inString = false;

    return tokens.map((token, idx) => {
      if (!token) return null;

      if (token === '"') {
        inString = !inString;
        return <span key={idx} style={{ color: '#86efac' }}>"</span>;
      }

      if (inString) {
        return <span key={idx} style={{ color: '#86efac' }}>{token}</span>;
      }

      if (keywords.has(token)) {
        return <span key={idx} style={{ color: '#f472b6', fontWeight: 600 }}>{token}</span>;
      }

      if (types.has(token)) {
        return <span key={idx} style={{ color: '#38bdf8', fontWeight: 500 }}>{token}</span>;
      }

      if (/^\d+(\.\d+)?[fLdD]?$/.test(token)) {
        return <span key={idx} style={{ color: '#facc15' }}>{token}</span>;
      }

      if (token.startsWith('@')) {
        return <span key={idx} style={{ color: '#c084fc', fontStyle: 'italic' }}>{token}</span>;
      }

      return <span key={idx} style={{ color: '#e2e8f0' }}>{token}</span>;
    });
  };

  const lines = code.split('\n');

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#090d16',
      border: '1px solid #1e293b',
      borderRadius: '10px',
      margin: '18px 0',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.35)'
    }}>
      {/* Code Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        fontSize: '12px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', opacity: 0.7 }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', opacity: 0.7 }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.7 }} />
          </div>
          <span style={{ color: '#38bdf8', fontWeight: 600, marginLeft: '6px' }}>Java 21</span>
          <span style={{ color: '#64748b' }}>• {lines.length} lines</span>
        </div>

        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.7)',
            border: `1px solid ${copied ? '#10b981' : '#334155'}`,
            color: copied ? '#10b981' : '#cbd5e1',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>

      {/* Code Body */}
      <pre style={{
        margin: 0,
        padding: '16px',
        overflowX: 'auto',
        fontSize: '13.5px',
        lineHeight: 1.6,
        fontFamily: 'JetBrains Mono, monospace'
      }}>
        <code>
          {lines.map((line, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <span style={{
                display: 'inline-block',
                width: '32px',
                color: '#475569',
                textAlign: 'right',
                marginRight: '16px',
                userSelect: 'none',
                fontSize: '12px'
              }}>
                {i + 1}
              </span>
              <span style={{ flex: 1 }}>{renderFormattedLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

// Custom Markdown Component for Theory content
function MarkdownRenderer({ content }) {
  const renderedElements = useMemo(() => {
    if (!content) return null;

    const blocks = [];
    const rawBlocks = content.split(/(```[\s\S]*?```)/g);

    rawBlocks.forEach((block, index) => {
      if (block.startsWith('```')) {
        // Code block
        const match = block.match(/```(\w+)?\n?([\s\S]*?)```/);
        const code = match ? match[2].trim() : block.replace(/```/g, '');
        blocks.push(
          <HighlightedJavaCode key={index} code={code} />
        );
      } else {
        // Text / Markdown content
        const lines = block.split('\n');
        let tableBuffer = [];
        let inTable = false;

        const flushTable = (k) => {
          if (tableBuffer.length > 0) {
            const headerRow = tableBuffer[0];
            const dataRows = tableBuffer.slice(2); // skip separator row

            blocks.push(
              <div key={`table-${k}`} style={{ overflowX: 'auto', margin: '18px 0' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13.5px',
                  backgroundColor: '#0f172a',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #1e293b'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#1e293b', borderBottom: '2px solid #334155' }}>
                      {headerRow.map((cell, cIdx) => (
                        <th key={cIdx} style={{ padding: '10px 14px', textAlign: 'left', color: '#f8fafc', fontWeight: 600 }}>
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid #1e293b', backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'rgba(30, 41, 59, 0.3)' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={{ padding: '10px 14px', color: '#cbd5e1' }}>
                            {renderInlineFormatting(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            tableBuffer = [];
          }
        };

        lines.forEach((line, lIdx) => {
          const trimmed = line.trim();

          // Table detection
          if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
            inTable = true;
            const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
            tableBuffer.push(cells);
            return;
          } else if (inTable) {
            inTable = false;
            flushTable(lIdx);
          }

          if (!trimmed) return;

          // Headings
          if (trimmed.startsWith('### ')) {
            blocks.push(
              <h3 key={`${index}-${lIdx}`} style={{
                fontSize: '17px',
                fontWeight: 700,
                color: '#38bdf8',
                marginTop: '24px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#818cf8' }}>#</span>
                {trimmed.replace('### ', '')}
              </h3>
            );
          } else if (trimmed.startsWith('## ')) {
            blocks.push(
              <h2 key={`${index}-${lIdx}`} style={{
                fontSize: '21px',
                fontWeight: 800,
                color: '#f8fafc',
                marginTop: '32px',
                marginBottom: '14px',
                borderBottom: '1px solid #1e293b',
                paddingBottom: '8px',
                letterSpacing: '-0.01em'
              }}>
                {trimmed.replace('## ', '')}
              </h2>
            );
          } else if (trimmed.startsWith('# ')) {
            blocks.push(
              <h1 key={`${index}-${lIdx}`} style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#f8fafc',
                marginTop: '20px',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}>
                {trimmed.replace('# ', '')}
              </h1>
            );
          } else if (trimmed.startsWith('> [!NOTE]') || trimmed.startsWith('> [!TIP]') || trimmed.startsWith('> ⚠️') || trimmed.startsWith('> ')) {
            // Blockquote / Callout
            const text = trimmed.replace(/^>\s*(\[!NOTE\]|\[!TIP\]|⚠️)?\s*/, '');
            blocks.push(
              <div key={`${index}-${lIdx}`} style={{
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                borderLeft: '4px solid #38bdf8',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                margin: '16px 0',
                color: '#cbd5e1',
                fontSize: '14px',
                lineHeight: 1.6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontWeight: 600, marginBottom: '4px' }}>
                  <Sparkles size={15} />
                  <span>Pro Tip / Note</span>
                </div>
                <div>{renderInlineFormatting(text)}</div>
              </div>
            );
          } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            // List item
            blocks.push(
              <div key={`${index}-${lIdx}`} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                margin: '6px 0 6px 12px',
                color: '#cbd5e1',
                fontSize: '14.5px',
                lineHeight: 1.6
              }}>
                <span style={{ color: '#38bdf8', fontSize: '16px', lineHeight: '1.2' }}>•</span>
                <span style={{ flex: 1 }}>{renderInlineFormatting(trimmed.substring(2))}</span>
              </div>
            );
          } else {
            // Paragraph
            blocks.push(
              <p key={`${index}-${lIdx}`} style={{
                margin: '10px 0',
                color: '#cbd5e1',
                fontSize: '14.5px',
                lineHeight: 1.7
              }}>
                {renderInlineFormatting(trimmed)}
              </p>
            );
          }
        });

        if (inTable) {
          flushTable('end');
        }
      }
    });

    return blocks;
  }, [content]);

  return <div style={{ color: '#cbd5e1' }}>{renderedElements}</div>;
}

// Inline formatting helper (bold, code, links)
function renderInlineFormatting(text) {
  if (!text) return text;

  // Split by inline code `...` and bold **...**
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} style={{
          backgroundColor: 'rgba(56, 189, 248, 0.12)',
          color: '#38bdf8',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '13px',
          fontFamily: 'JetBrains Mono, monospace',
          border: '1px solid rgba(56, 189, 248, 0.25)'
        }}>
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: '#f8fafc', fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function JavaTheoryView({ 
  theoryProgress = [], 
  onToggleTheoryRead,
  onNavigateToWorkspace
}) {
  const [selectedSectionId, setSelectedSectionId] = useState(JAVA_THEORY_SECTIONS[0].id);
  const [selectedChapterId, setSelectedChapterId] = useState(JAVA_THEORY_SECTIONS[0].chapters[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'java21' | 'oop' | 'collections' | 'dsa'

  // Expand / collapse section in sidebar
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleCollapse = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Find currently active section & chapter
  const currentSection = useMemo(() => {
    return JAVA_THEORY_SECTIONS.find(s => s.id === selectedSectionId) || JAVA_THEORY_SECTIONS[0];
  }, [selectedSectionId]);

  const currentChapter = useMemo(() => {
    for (const section of JAVA_THEORY_SECTIONS) {
      const ch = section.chapters.find(c => c.id === selectedChapterId);
      if (ch) return ch;
    }
    return JAVA_THEORY_SECTIONS[0].chapters[0];
  }, [selectedChapterId]);

  // Flatten all chapters for Previous/Next navigation
  const allChaptersList = useMemo(() => {
    const list = [];
    JAVA_THEORY_SECTIONS.forEach(s => {
      s.chapters.forEach(ch => {
        list.push({ sectionId: s.id, sectionTitle: s.title, ...ch });
      });
    });
    return list;
  }, []);

  const currentIndex = allChaptersList.findIndex(c => c.id === selectedChapterId);
  const prevChapter = currentIndex > 0 ? allChaptersList[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChaptersList.length - 1 ? allChaptersList[currentIndex + 1] : null;

  // Filtered sections according to search and tag filter
  const filteredSections = useMemo(() => {
    return JAVA_THEORY_SECTIONS.map(section => {
      // Category filter check
      if (activeFilter === 'java21' && section.id !== 'modern-java' && section.id !== 'fundamentals') return null;
      if (activeFilter === 'oop' && section.id !== 'oop') return null;
      if (activeFilter === 'collections' && section.id !== 'collections' && section.id !== 'generics') return null;
      if (activeFilter === 'dsa' && section.id !== 'dsa-java') return null;

      // Search matching
      if (!searchQuery.trim()) return section;

      const q = searchQuery.toLowerCase();
      const matchingChapters = section.chapters.filter(ch => 
        ch.title.toLowerCase().includes(q) || 
        ch.content.toLowerCase().includes(q)
      );

      if (matchingChapters.length === 0 && !section.title.toLowerCase().includes(q)) {
        return null;
      }

      return {
        ...section,
        chapters: matchingChapters.length > 0 ? matchingChapters : section.chapters
      };
    }).filter(Boolean);
  }, [searchQuery, activeFilter]);

  // Calculate overall read progress
  const totalChaptersCount = allChaptersList.length;
  const completedCount = allChaptersList.filter(c => theoryProgress.includes(c.id)).length;
  const progressPercent = totalChaptersCount > 0 ? Math.round((completedCount / totalChaptersCount) * 100) : 0;

  const isCurrentChapterRead = theoryProgress.includes(selectedChapterId);

  const handleSelectChapter = (sectionId, chapterId) => {
    setSelectedSectionId(sectionId);
    setSelectedChapterId(chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 20px', display: 'flex', gap: '24px' }}>
      {/* LEFT SIDEBAR: Navigation, Search, Topics */}
      <aside style={{
        width: '340px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Header / Progress Card */}
        <div className="glass-panel" style={{ padding: '18px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)'
            }}>
              <BookOpen size={18} color="#ffffff" />
            </div>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc' }}>Java 21 Mastery</h2>
              <p style={{ fontSize: '12px', color: '#94a3b8' }}>Modern Concepts & DSA Guide</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
              <span style={{ color: '#94a3b8' }}>Completion Progress</span>
              <span style={{ color: '#10b981', fontWeight: 700 }}>{completedCount}/{totalChaptersCount} ({progressPercent}%)</span>
            </div>
            <div style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#1e293b',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #0284c7 0%, #10b981 100%)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        </div>

        {/* Search & Quick Filter Pills */}
        <div className="glass-panel" style={{ padding: '14px', flexShrink: 0 }}>
          <div style={{
            position: 'relative',
            marginBottom: '10px'
          }}>
            <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="text"
              placeholder="Search concepts (e.g. Virtual Threads, Record, Streams)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#0b0f19',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '8px 12px 8px 34px',
                color: '#f8fafc',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>

          {/* Quick Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {[
              { id: 'all', label: 'All' },
              { id: 'java21', label: '⚡ Java 21 LTS' },
              { id: 'oop', label: 'OOP & Records' },
              { id: 'collections', label: 'Collections' },
              { id: 'dsa', label: 'DSA Templates' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: activeFilter === filter.id ? '1px solid #38bdf8' : '1px solid #1e293b',
                  backgroundColor: activeFilter === filter.id ? 'rgba(56, 189, 248, 0.15)' : '#0b0f19',
                  color: activeFilter === filter.id ? '#38bdf8' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section List (Scrollable) */}
        <div style={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 280px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          paddingRight: '4px'
        }}>
          {filteredSections.map(section => {
            const IconComponent = ICON_MAP[section.icon] || BookOpen;
            const isCollapsed = collapsedSections[section.id];
            const sectionCompleted = section.chapters.every(c => theoryProgress.includes(c.id));

            return (
              <div key={section.id} className="glass-panel" style={{ overflow: 'hidden', flexShrink: 0 }}>
                {/* Section Title Bar */}
                <div
                  onClick={() => toggleCollapse(section.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    backgroundColor: '#131c2e',
                    cursor: 'pointer',
                    userSelect: 'none',
                    borderBottom: isCollapsed ? 'none' : '1px solid #1e293b'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconComponent size={16} color={section.color} />
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#f8fafc' }}>
                      {section.title}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      color: '#94a3b8',
                      backgroundColor: '#1e293b',
                      padding: '1px 6px',
                      borderRadius: '10px'
                    }}>
                      {section.chapters.length}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {sectionCompleted && (
                      <CheckCircle2 size={14} color="#10b981" />
                    )}
                    {isCollapsed ? <ChevronRight size={15} color="#94a3b8" /> : <ChevronDown size={15} color="#94a3b8" />}
                  </div>
                </div>

                {/* Chapter items */}
                {!isCollapsed && (
                  <div style={{ padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {section.chapters.map(chapter => {
                      const isSelected = selectedChapterId === chapter.id;
                      const isRead = theoryProgress.includes(chapter.id);

                      return (
                        <div
                          key={chapter.id}
                          onClick={() => handleSelectChapter(section.id, chapter.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                            border: `1px solid ${isSelected ? 'rgba(56, 189, 248, 0.3)' : 'transparent'}`,
                            transition: 'all 0.15s'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleTheoryRead(chapter.id);
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                display: 'flex',
                                color: isRead ? '#10b981' : '#475569'
                              }}
                              title={isRead ? 'Mark unread' : 'Mark as read'}
                            >
                              {isRead ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                            </button>
                            <span style={{
                              fontSize: '13px',
                              color: isSelected ? '#38bdf8' : (isRead ? '#94a3b8' : '#e2e8f0'),
                              fontWeight: isSelected ? 600 : 400,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {chapter.title}
                            </span>
                          </div>

                          {isSelected && (
                            <ChevronRight size={14} color="#38bdf8" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT: Theory Reader */}
      <main style={{ flex: 1, minWidth: 0 }}>
        <div className="glass-panel" style={{ padding: '32px 36px', minHeight: 'calc(100vh - 120px)' }}>
          {/* Chapter Top Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1e293b',
            paddingBottom: '20px',
            marginBottom: '28px',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  color: '#38bdf8',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}>
                  {currentSection.title}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '12px' }}>
                  <Clock size={13} />
                  <span>5-8 min read</span>
                </div>
              </div>
              <h1 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#f8fafc',
                letterSpacing: '-0.02em',
                margin: 0
              }}>
                {currentChapter.title}
              </h1>
            </div>

            {/* Actions: Mark Read / Workspace */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => onToggleTheoryRead(currentChapter.id)}
                className="btn-secondary"
                style={{
                  backgroundColor: isCurrentChapterRead ? 'rgba(16, 185, 129, 0.15)' : '#1e293b',
                  borderColor: isCurrentChapterRead ? '#10b981' : '#334155',
                  color: isCurrentChapterRead ? '#10b981' : '#cbd5e1'
                }}
              >
                {isCurrentChapterRead ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                <span>{isCurrentChapterRead ? 'Completed' : 'Mark Complete'}</span>
              </button>
            </div>
          </div>

          {/* Theory Markdown Content */}
          <div style={{ minHeight: '400px' }}>
            <MarkdownRenderer content={currentChapter.content} />
          </div>

          {/* Bottom Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid #1e293b',
            gap: '16px'
          }}>
            {prevChapter ? (
              <button
                onClick={() => handleSelectChapter(prevChapter.sectionId, prevChapter.id)}
                className="btn-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px' }}
              >
                <ArrowLeft size={16} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Previous</div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{prevChapter.title}</div>
                </div>
              </button>
            ) : <div />}

            {nextChapter ? (
              <button
                onClick={() => handleSelectChapter(nextChapter.sectionId, nextChapter.id)}
                className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px' }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Next</div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{nextChapter.title}</div>
                </div>
                <ArrowRight size={16} />
              </button>
            ) : <div />}
          </div>
        </div>
      </main>
    </div>
  );
}
