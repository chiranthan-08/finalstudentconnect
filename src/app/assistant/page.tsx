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
  RefreshCw
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  cards?: {
    title: string;
    subtitle: string;
    linkUrl?: string;
    details?: string[];
  }[];
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: "Namaskara! I am **Connect AI**, your dedicated Karnataka Student Assistant. I can help you with KCET/COMEDK cutoffs, college comparisons, VTU SGPA formulas, tech learning roadmaps, and internship preparation.\n\nHow can I help you today?",
      timestamp: 'Just now',
      cards: [
        {
          title: 'KEA Cutoff Forecaster',
          subtitle: 'Ask: "I have KCET rank 25,000. Which CSE colleges can I get?"',
          details: ['KCET GM / 2A / 3B', 'Round 2 trends', 'Placement package insights'],
        },
        {
          title: 'VTU Academic Advisor',
          subtitle: 'Ask: "How to calculate VTU SGPA and internal CIE marks?"',
          details: ['2022 Scheme credits', 'O, A+, A grade point conversions', 'CIE 50/50 scale'],
        },
      ],
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    'I have a KCET rank of 25,000. Which CSE colleges can I get?',
    'Compare RVCE vs BMSCE for Information Science',
    'How do I calculate SGPA in VTU 2022 Scheme?',
    'Give me a 6-month AI & Machine Learning roadmap',
    'What are the top recruiting companies visiting MSRIT & PESU?',
  ];

  const handleSend = (textToSend?: string) => {
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

    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText = '';
      let replyCards: any[] | undefined = undefined;

      if (lower.includes('25,000') || lower.includes('25000') || (lower.includes('kcet') && lower.includes('rank'))) {
        replyText = `Based on historical KEA Round 2 cutoff archives for a KCET rank of ~25,000 in General Merit (GM), here are the recommended options:\n\n` +
          `1. **SIT Tumakuru** - Highly Safe for ECE (~12,800 cutoff in 2024). Outstanding placement track record with ₹38 LPA highest.\n` +
          `2. **BIT Bengaluru** - Moderate chance for ECE / Telecommunication. Located centrally in VV Puram Bangalore.\n` +
          `3. **Dayananda Sagar College of Engineering (DSCE)** - ECE & Electrical branches are comfortably within reach.\n\n` +
          `*Pro-Tip for Option Entry:* Put dream choices (RVCE, BMSCE, MSRIT) at positions 1-10, followed by realistic choices (DSCE, SIT, BIT) at positions 11-25.`;
        
        replyCards = [
          {
            title: 'Siddaganga Institute of Technology (SIT)',
            subtitle: 'Tumakuru • NAAC A++ • Highest ₹38 LPA',
            linkUrl: '/colleges/sit-tumakuru',
            details: ['Safe for ECE & EEE', 'Avg Package: ₹8.6 LPA', 'Govt Fee: ₹98,196/yr'],
          },
          {
            title: 'Bangalore Institute of Technology (BIT)',
            subtitle: 'Bengaluru (VV Puram) • NAAC A+',
            linkUrl: '/colleges/bit-bangalore',
            details: ['Moderate for ECE', 'Avg Package: ₹8.5 LPA', 'Top Recruiters: Infosys, Bosch'],
          },
        ];
      } else if (lower.includes('rvce vs bmsce') || (lower.includes('rvce') && lower.includes('bmsce'))) {
        replyText = `### RVCE vs BMSCE Comparison for Information Science & CSE:\n\n` +
          `• **State Ranking:** RVCE is Ranked #1 in Karnataka; BMSCE is Ranked #2.\n` +
          `• **Placements:** RVCE reports an average package of ₹14.8 LPA with ₹62 LPA highest. BMSCE reports ₹11.8 LPA average with ₹50 LPA highest.\n` +
          `• **Campus Culture & Location:** BMSCE is situated in Basavanagudi (very central Bengaluru with vibrant student culture & fests like Utsav). RVCE is on Mysore Road with strong academic and coding culture.\n` +
          `• **KCET Cutoff:** RVCE ISE closes around ~590 GM rank, whereas BMSCE ISE closes around ~1,450 GM rank.\n\n` +
          `Both are autonomous, NAAC A++ accredited institutions. Choose RVCE if higher average CTC is your primary objective, or BMSCE for central location and balanced campus experience.`;
      } else if (lower.includes('sgpa') || lower.includes('vtu') || lower.includes('cie') || lower.includes('marks')) {
        replyText = `### VTU 2022 Scheme SGPA Formula & Calculation Guide:\n\n` +
          `**Formula:**\n` +
          `\`SGPA = Σ (Credit × Grade Point) / Σ (Total Credits)\`\n\n` +
          `**Grade Point Scale:**\n` +
          `• **O (Outstanding, 90-100%):** 10 points\n` +
          `• **A+ (Excellent, 80-89%):** 9 points\n` +
          `• **A (Very Good, 70-79%):** 8 points\n` +
          `• **B+ (Good, 60-69%):** 7 points\n` +
          `• **B (Above Avg, 55-59%):** 6 points\n` +
          `• **C (Average, 50-54%):** 5 points\n` +
          `• **P (Pass, 40-49%):** 4 points\n` +
          `• **F (Fail, <40%):** 0 points\n\n` +
          `**VTU CGPA to Percentage Conversion:**\n` +
          `\`Percentage (%) = (CGPA - 0.75) × 10\`\n\n` +
          `Try our interactive **VTU SGPA & CGPA Calculator tool** in the navbar to calculate your marks automatically!`;
        
        replyCards = [
          {
            title: 'Interactive VTU Calculator Suite',
            subtitle: 'Preloaded with 2022 Scheme Subject Credits & Grades',
            linkUrl: '/vtu-tools',
            details: ['SGPA & CGPA Calculator', 'Attendance Bunk Forecaster', 'CIE Internal 50/50 Marks'],
          },
        ];
      } else if (lower.includes('roadmap') || lower.includes('machine learning') || lower.includes('ai')) {
        replyText = `### 6-Month Roadmap for AI & Machine Learning Engineering:\n\n` +
          `**Month 1: Python & Mathematical Foundations**\n` +
          `• Python 3.12 (NumPy, Pandas, Matplotlib)\n` +
          `• Linear Algebra: Vectors, Matrices, Eigenvalues & Dot Products\n` +
          `• Calculus: Gradient Descent, Partial Derivatives\n\n` +
          `**Month 2: Classical Machine Learning & Scikit-Learn**\n` +
          `• Supervised: Regression, Decision Trees, Random Forests, XGBoost\n` +
          `• Unsupervised: K-Means, PCA Dimensionality Reduction\n` +
          `• Build 2 Kaggle datasets projects\n\n` +
          `**Month 3: Deep Learning with PyTorch**\n` +
          `• Neural network architectures, Backpropagation, Activations\n` +
          `• Computer Vision: CNNs, Transfer Learning with ResNet\n\n` +
          `**Month 4: NLP & Generative AI Systems**\n` +
          `• Attention mechanisms, Transformers (BERT, GPT)\n` +
          `• RAG Pipelines with LangChain and Vector Databases (ChromaDB)\n\n` +
          `**Month 5-6: Full-Stack Deployment & Internships**\n` +
          `• Wrap models in FastAPI / Next.js microservices\n` +
          `• Containerize with Docker and deploy to Cloud\n` +
          `• Target Bangalore AI startup internships via our Internship Hub!`;
      } else {
        replyText = `Thank you for asking! I've analyzed your question regarding "${query}".\n\n` +
          `In the Karnataka engineering ecosystem, having verified insights on cutoffs, coursework, and industry skills gives you a distinct advantage. Would you like me to recommend specific colleges, calculate your prospective SGPA, or connect you with a student mentor from RVCE or BMSCE?`;
      }

      const aiMsg: ChatMessage = {
        id: 'ai_' + Date.now(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cards: replyCards,
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-5rem)] flex flex-col space-y-4">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base text-slate-900 dark:text-white">
                Connect AI Student Copilot
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Fine-tuned for KCET, COMEDK, VTU Schemes, Placements & Bangalore Internships
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages(messages.slice(0, 1))}
          className="p-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {msg.sender === 'ai' ? (
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                <User className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'glass-card border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <div className="whitespace-pre-line prose dark:prose-invert prose-xs">
                {msg.text}
              </div>

              {/* Structured Recommendation Cards */}
              {msg.cards && msg.cards.length > 0 && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {msg.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5"
                    >
                      <div className="font-bold text-slate-900 dark:text-white">{card.title}</div>
                      <div className="text-[11px] text-slate-500">{card.subtitle}</div>
                      {card.details && (
                        <ul className="text-[10px] text-slate-400 space-y-0.5 list-disc pl-3">
                          {card.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                      {card.linkUrl && (
                        <Link
                          href={card.linkUrl}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div
                className={`text-[9px] mt-1.5 ${
                  msg.sender === 'user' ? 'text-blue-100 text-right' : 'text-slate-400'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="glass-card rounded-2xl p-3 border border-slate-200 dark:border-slate-800 text-xs flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
              <span className="text-[11px] ml-1">Connect AI is evaluating Karnataka databases...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-slate-400">Suggested Questions:</span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-blue-500 text-[11px] text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap transition-colors shrink-0"
            >
              {p}
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
          placeholder="Ask Connect AI anything about colleges, VTU exams, SGPA, career paths..."
          className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white transition-colors shadow-md shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
