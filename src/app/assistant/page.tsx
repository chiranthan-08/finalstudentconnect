'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Send, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  Briefcase, 
  Award, 
  User, 
  CheckCircle2, 
  ArrowRight,
  RefreshCw,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Zap,
  X,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface AssistantCard {
  title: string;
  subtitle: string;
  linkUrl?: string;
  badge?: string;
  details?: string[];
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  cards?: AssistantCard[];
  suggestions?: string[];
  poweredBy?: 'gemini' | 'openai' | 'local';
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: "Namaskara! 🙏 I am **Connect AI**, your dedicated Karnataka Student Assistant and Copilot.\n\n" +
        "You can ask me anything just like **ChatGPT and Google** — including:\n" +
        "• **Best Engineering Colleges in Tumakuru & Karnataka** (*Which is the best college in Tumakuru for engineering?*)\n" +
        "• **College Profiles & Placements** (*BMSIT, CIT Gubbi, SIT Tumakuru, RVCE, BMSCE cutoffs & fees*)\n" +
        "• **Campus Events, Hackathons & Tech Fests** (*CIT Buildathon 2K26*, *SIT Halocon*, *Advith*, *SIET Tech Utsav*)\n" +
        "• **VTU SGPA / CGPA Calculators & Syllabus** (2021, 2022 NEP, 2025 schemes)\n" +
        "• **Coding & General Knowledge** (*Who is PM of India?*, Python scripts, algorithms)\n\n" +
        "How can I help you today?",
      timestamp: 'Just now',
      cards: [
        {
          title: 'BUILDATHON-2.0 2K26 (CIT Gubbi)',
          subtitle: '30-31 Oct 2026 • 24-Hour National Hackathon',
          badge: 'Deadline: 25 Oct 2026',
          linkUrl: '/events',
          details: ['Prize Pool: ₹30,000 Cash', 'Team Fee: ₹500 (3-4 members)', 'Brochure Available'],
        },
        {
          title: 'SIT Tumakuru (#1 in Tumakuru)',
          subtitle: 'NIRF #95 • NAAC A++ • Highest ₹41.5 LPA',
          linkUrl: '/colleges/sit-tumakuru',
          badge: 'Top Tier Autonomous',
          details: ['Autonomous Institution', 'Avg CTC: ₹8.6 LPA', 'Top Recruiter: Amazon, Cisco'],
        },
      ],
      suggestions: [
        'Which is the best college in Tumakuru for engineering?',
        'BMSIT college information',
        'Tell me about CIT Buildathon 2K26',
        'Who is the Prime Minister of India?',
      ],
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<string | null>(null);
  
  // Gemini API Key Management
  const [geminiKey, setGeminiKey] = useState<string>('');
  const [hasServerKey, setHasServerKey] = useState(false);
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);
  const [tempKey, setTempKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isTestingKey, setIsTestingKey] = useState(false);
  const [keyStatus, setKeyStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const isAiConnected = Boolean(geminiKey || hasServerKey);

  const chatScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load persisted Gemini API key
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('studentconnect_gemini_key') || '';
      if (stored) {
        setGeminiKey(stored);
        setTempKey(stored);
      }

      // Check if server already has GEMINI_API_KEY configured
      fetch('/api/assistant')
        .then((res) => res.json())
        .then((data) => {
          if (data?.hasServerKey) {
            setHasServerKey(true);
          }
        })
        .catch(() => {});

      // Check URL query parameter (e.g. from home screen Connect AI spotlight card)
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get('q');
      if (queryParam) {
        setInputText(queryParam);
        setTimeout(() => {
          handleSend(queryParam);
        }, 350);
      }
    }
  }, []);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (chatScrollContainerRef.current) {
      chatScrollContainerRef.current.scrollTo({
        top: chatScrollContainerRef.current.scrollHeight,
        behavior,
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    'Which is the best college in Tumakuru for engineering?',
    'BMSIT college information',
    'Which events are going on in Tumakuru colleges (CIT, SIT, SIET)?',
    'Tell me about CIT Buildathon 2K26 details & deadline',
    'Who is the Prime Minister of India?',
    'I have a KCET rank of 25,000. Which colleges can I get?',
    'How do I calculate SGPA in VTU 2022 Scheme?',
  ];

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(id);
    setTimeout(() => setCopiedCodeIndex(null), 2500);
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...(geminiKey ? { 'x-gemini-key': geminiKey } : {}),
        },
        body: JSON.stringify({ 
          query,
          geminiApiKey: geminiKey,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: 'ai_' + Date.now(),
        sender: 'ai',
        text: data.text || 'I have analyzed your query.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cards: data.cards,
        suggestions: data.suggestions,
        poweredBy: data.poweredBy,
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Failed to get answer:', error);
      const fallbackMsg: ChatMessage = {
        id: 'ai_err_' + Date.now(),
        sender: 'ai',
        text: "I encountered a communication error while querying the database. Please try asking again!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSaveKey = async () => {
    const cleaned = tempKey.trim();
    if (!cleaned) {
      setKeyStatus({ type: 'error', message: 'Please enter a valid Gemini API key' });
      return;
    }

    setIsTestingKey(true);
    setKeyStatus(null);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: '__test_gemini_key__',
          geminiApiKey: cleaned,
        }),
      });

      const data = await res.json();
      if (res.ok && data.valid) {
        localStorage.setItem('studentconnect_gemini_key', cleaned);
        setGeminiKey(cleaned);
        setKeyStatus({ type: 'success', message: 'Connected to Google Gemini AI successfully!' });
        setTimeout(() => {
          setIsGeminiModalOpen(false);
          setKeyStatus(null);
        }, 1200);
      } else {
        setKeyStatus({ type: 'error', message: data.error || 'Invalid Gemini key. Please verify in Google AI Studio.' });
      }
    } catch (err: any) {
      setKeyStatus({ type: 'error', message: 'Failed to verify key: ' + err.message });
    } finally {
      setIsTestingKey(false);
    }
  };

  const handleRemoveKey = () => {
    localStorage.removeItem('studentconnect_gemini_key');
    setGeminiKey('');
    setTempKey('');
    setKeyStatus(null);
    setIsGeminiModalOpen(false);
  };

  /**
   * Rich Message Formatter
   * Handles markdown headers, bold, bullet points, links, and code blocks
   */
  const renderFormattedText = (rawText: string, messageId: string) => {
    const codeBlockRegex = /```([a-zA-Z]*)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let blockCount = 0;

    while ((match = codeBlockRegex.exec(rawText)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: rawText.substring(lastIndex, match.index),
        });
      }

      parts.push({
        type: 'code',
        lang: match[1] || 'text',
        code: match[2].trim(),
        id: `${messageId}_code_${blockCount++}`,
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < rawText.length) {
      parts.push({
        type: 'text',
        content: rawText.substring(lastIndex),
      });
    }

    return (
      <div className="space-y-2">
        {parts.map((part, pIdx) => {
          if (part.type === 'code') {
            const isCopied = copiedCodeIndex === part.id;
            return (
              <div key={pIdx} className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 my-2">
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="font-mono uppercase">{part.lang}</span>
                  <button
                    onClick={() => handleCopyCode(part.code || '', part.id || '')}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-3 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                  <code>{part.code}</code>
                </pre>
              </div>
            );
          }

          // Plain text parsing with headers, bold, and bullet points
          const lines = (part.content || '').split('\n');
          return (
            <div key={pIdx} className="space-y-1.5 leading-relaxed">
              {lines.map((line, lIdx) => {
                const trimmed = line.trim();

                // Markdown Header 3 or 4
                if (trimmed.startsWith('####')) {
                  return (
                    <h4 key={lIdx} className="font-bold text-sm text-slate-900 dark:text-white mt-2 pt-1 border-b border-slate-100 dark:border-slate-800 pb-0.5">
                      {parseInlineFormatting(trimmed.replace(/^####\s*/, ''))}
                    </h4>
                  );
                }
                if (trimmed.startsWith('###')) {
                  return (
                    <h3 key={lIdx} className="font-extrabold text-sm sm:text-base text-blue-600 dark:text-blue-400 mt-2">
                      {parseInlineFormatting(trimmed.replace(/^###\s*/, ''))}
                    </h3>
                  );
                }

                // Horizontal separator
                if (trimmed === '---') {
                  return <hr key={lIdx} className="my-2 border-slate-200 dark:border-slate-800" />;
                }

                // Bullet point
                if (trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                  const content = trimmed.replace(/^([•*-]|\d+\.)\s*/, '');
                  return (
                    <div key={lIdx} className="flex items-start gap-2 pl-1">
                      <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                      <div className="flex-1">{parseInlineFormatting(content)}</div>
                    </div>
                  );
                }

                // Numbered list
                if (/^\d+\.\s/.test(trimmed)) {
                  const numberMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
                  if (numberMatch) {
                    return (
                      <div key={lIdx} className="flex items-start gap-2 pl-1">
                        <span className="font-bold text-blue-600 dark:text-blue-400 shrink-0">{numberMatch[1]}.</span>
                        <div className="flex-1">{parseInlineFormatting(numberMatch[2])}</div>
                      </div>
                    );
                  }
                }

                // Empty line
                if (!trimmed) {
                  return <div key={lIdx} className="h-1" />;
                }

                // Standard paragraph line
                return (
                  <p key={lIdx} className="text-slate-700 dark:text-slate-300">
                    {parseInlineFormatting(line)}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  /**
   * Helper to parse inline bolding (**text**), italics (*text*), inline code (`code`), and markdown links [text](url)
   */
  const parseInlineFormatting = (text: string): React.ReactNode => {
    // 1. Markdown Links [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const segments: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        segments.push(parseBoldAndCode(text.substring(lastIndex, match.index)));
      }
      const label = match[1];
      const url = match[2];
      const isInternal = url.startsWith('/');

      segments.push(
        isInternal ? (
          <Link
            key={`link_${match.index}`}
            href={url}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-0.5"
          >
            <span>{label}</span>
            <ArrowRight className="w-2.5 h-2.5 inline" />
          </Link>
        ) : (
          <a
            key={`ext_${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-0.5"
          >
            <span>{label}</span>
            <ExternalLink className="w-2.5 h-2.5 inline" />
          </a>
        )
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      segments.push(parseBoldAndCode(text.substring(lastIndex)));
    }

    return segments.length === 1 ? segments[0] : <>{segments}</>;
  };

  const parseBoldAndCode = (text: string): React.ReactNode => {
    // Split by bold (**bold**) and inline code (`code`)
    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-extrabold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-semibold border border-slate-200 dark:border-slate-700">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-500 dark:text-slate-400">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-5rem)] flex flex-col space-y-4">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base text-slate-900 dark:text-white">
                Connect AI Student Copilot
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isAiConnected ? 'Gemini 1.5/2.0 Connected' : 'Karnataka Intelligence Engine'}</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Karnataka engineering advisor • Ingested with Tumakuru & Bengaluru colleges, hackathons, VTU schemes & general knowledge
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Gemini API Connect Button */}
          <button
            onClick={() => {
              setTempKey(geminiKey);
              setIsGeminiModalOpen(true);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              isAiConnected
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/20 hover:opacity-95'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100'
            }`}
            title="Configure Google Gemini API Key"
          >
            <Zap className={`w-3.5 h-3.5 ${isAiConnected ? 'text-amber-300' : 'text-indigo-600 dark:text-indigo-400'}`} />
            <span className="hidden sm:inline">{isAiConnected ? 'Gemini AI Active' : 'Connect Gemini AI'}</span>
            <span className="sm:hidden">{isAiConnected ? 'Gemini' : 'AI Key'}</span>
          </button>

          <button
            onClick={() => setMessages(messages.slice(0, 1))}
            className="p-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition-colors"
            title="Reset conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Messages Scroll Area (Scrolls internally so page window never jumps down) */}
      <div 
        ref={chatScrollContainerRef}
        className="flex-1 overflow-y-auto space-y-4 pr-1 scroll-smooth"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {msg.sender === 'ai' ? (
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'glass-card border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm'
              }`}
            >
              {msg.sender === 'user' ? (
                <div className="whitespace-pre-line font-medium">{msg.text}</div>
              ) : (
                renderFormattedText(msg.text, msg.id)
              )}

              {/* Structured Contextual Recommendation Cards */}
              {msg.cards && msg.cards.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {msg.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs space-y-1.5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="font-bold text-slate-900 dark:text-white leading-tight">
                          {card.title}
                        </div>
                        {card.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold shrink-0 border border-blue-200 dark:border-blue-800">
                            {card.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {card.subtitle}
                      </div>

                      {card.details && card.details.length > 0 && (
                        <div className="space-y-0.5 pt-1 text-[11px] text-slate-600 dark:text-slate-300">
                          {card.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="truncate">{d}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {card.linkUrl && (
                        <div className="pt-1.5">
                          <Link
                            href={card.linkUrl}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            <span>Open Details</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Contextual Follow-up Chips */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Suggested:
                  </span>
                  {msg.suggestions.map((sug, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSend(sug)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors border border-slate-200 dark:border-slate-700"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-2 text-[10px] text-slate-400 text-right">
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <div className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
              </div>
              <span>Connect AI is analyzing Karnataka college cutoffs, hackathons & databases...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Starters */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {quickPrompts.map((promptText, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(promptText)}
              className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-[11px] text-slate-700 dark:text-slate-300 font-semibold whitespace-nowrap transition-all shadow-sm shrink-0"
            >
              {promptText}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="glass-card rounded-2xl p-2 border border-slate-200 dark:border-slate-800 flex items-center gap-2 shadow-lg"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask Connect AI anything (e.g. Best college in Tumakuru, BMSIT details, CIT Buildathon 2K26, PM of India)..."
          className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-all shadow-md shadow-blue-500/25 shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Google Gemini Settings Modal */}
      {isGeminiModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
            
            <button 
              onClick={() => { setIsGeminiModalOpen(false); setKeyStatus(null); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Connect Google Gemini AI</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">100% Free</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Power Connect AI with Google's state-of-the-art Gemini models.
                </p>
              </div>
            </div>

            {hasServerKey && (
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Server API Key Connected:</strong>
                  <p className="text-[11px] opacity-90 mt-0.5">
                    A global Gemini API Key is configured in your project's <code className="bg-emerald-100 dark:bg-emerald-900 px-1 py-0.5 rounded font-mono">.env.local</code>. You can use it as is, or override it with your personal key below.
                  </p>
                </div>
              </div>
            )}

            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>How to get your free Gemini API Key in 10 seconds:</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-[11px] text-blue-800 dark:text-blue-300 pl-1">
                <li>Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="font-bold underline hover:text-blue-600 inline-flex items-center gap-0.5">Google AI Studio <ExternalLink className="w-2.5 h-2.5" /></a></li>
                <li>Sign in with your Google account & click <strong>"Create API Key"</strong></li>
                <li>Paste your API key below and click <strong>"Save & Connect"</strong></li>
              </ol>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Gemini API Key
              </label>
              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {keyStatus && (
              <div className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                keyStatus.type === 'success' 
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
              }`}>
                {keyStatus.type === 'success' ? <ShieldCheck className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{keyStatus.message}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-2 pt-2">
              {geminiKey ? (
                <button
                  onClick={handleRemoveKey}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 p-2 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
                >
                  Disconnect Key
                </button>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setIsGeminiModalOpen(false); setKeyStatus(null); }}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveKey}
                  disabled={isTestingKey || !tempKey.trim()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all"
                >
                  {isTestingKey ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Save & Connect</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
