'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  GraduationCap, 
  Calculator, 
  Bot, 
  Sparkles, 
  BookOpen, 
  Users, 
  Video, 
  Briefcase, 
  Trophy, 
  FileText, 
  ShieldCheck, 
  X, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Colleges' | 'AI & Tools' | 'Learning' | 'Campus & Community' | 'Admin';
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Pre-configured searchable index
  const baseItems: PaletteItem[] = [
    // Tools
    {
      id: 'tool-predictor',
      title: 'AI College Predictor',
      subtitle: 'Calculate admission odds based on KCET & COMEDK historical cutoffs',
      category: 'AI & Tools',
      href: '/predictor',
      icon: Sparkles,
      badge: 'Popular',
    },
    {
      id: 'tool-assistant',
      title: 'Connect AI Copilot',
      subtitle: 'Ask about cutoffs, VTU schemes, syllabi, and career paths',
      category: 'AI & Tools',
      href: '/assistant',
      icon: Bot,
      badge: 'GPT-4o',
    },
    {
      id: 'tool-vtu',
      title: 'VTU Academic Tools Suite',
      subtitle: 'Calculate SGPA, CGPA, Attendance Bunk Forecaster & CIE Internal Marks',
      category: 'AI & Tools',
      href: '/vtu-tools',
      icon: Calculator,
      badge: '2022 Scheme',
    },
    {
      id: 'tool-ats',
      title: 'AI Resume ATS Analyzer',
      subtitle: 'Scan your resume against Bangalore tech job descriptions',
      category: 'AI & Tools',
      href: '/placements',
      icon: Briefcase,
      badge: 'ATS Score',
    },
    {
      id: 'tool-roadmap',
      title: 'AI Career Roadmap Generator',
      subtitle: 'Personalized step-by-step career path for Karnataka engineers',
      category: 'AI & Tools',
      href: '/advanced',
      icon: Layers,
    },

    // Learning
    {
      id: 'learn-courses',
      title: 'Technical Courses & Certifications',
      subtitle: 'Free beginner starter courses with verifiable certificate generator',
      category: 'Learning',
      href: '/courses',
      icon: BookOpen,
      badge: '3 Free Courses',
    },
    {
      id: 'learn-materials',
      title: 'VTU Study Material Hub',
      subtitle: 'Syllabus notes, Previous Year Questions (PYQs), and Lab manuals',
      category: 'Learning',
      href: '/study-materials',
      icon: FileText,
    },

    // Campus & Community
    {
      id: 'comm-feed',
      title: 'Student Community Feed',
      subtitle: 'Cross-college discussion, technical questions, and peer updates',
      category: 'Campus & Community',
      href: '/community',
      icon: Users,
    },
    {
      id: 'comm-tutors',
      title: 'Peer Tutoring Marketplace',
      subtitle: 'Book 1-on-1 tutoring sessions with senior toppers (Escrow protected)',
      category: 'Campus & Community',
      href: '/mentors',
      icon: Users,
      badge: 'Escrow',
    },
    {
      id: 'comm-studyrooms',
      title: 'Virtual Study Rooms',
      subtitle: 'Realtime whiteboard, collaborative code editor, and study rooms',
      category: 'Campus & Community',
      href: '/study-rooms',
      icon: Video,
      badge: 'Live',
    },
    {
      id: 'comm-internships',
      title: 'Verified Bangalore Internships',
      subtitle: 'Paid internship opportunities with stipend tracking',
      category: 'Campus & Community',
      href: '/internships',
      icon: Briefcase,
    },
    {
      id: 'comm-hackathons',
      title: 'Student Connect Annual Hackathon 2025',
      subtitle: '₹2,50,000 cash prize pool • Statewide hybrid hackathon',
      category: 'Campus & Community',
      href: '/events',
      icon: Trophy,
      badge: '₹2.5L Prize',
    },

    // Admin
    {
      id: 'admin-console',
      title: 'Admin Management Console',
      subtitle: 'Platform analytics, college & cutoff editor, escrow release, MongoDB status',
      category: 'Admin',
      href: '/admin',
      icon: ShieldCheck,
      badge: 'Super Admin',
    },
  ];

  // Dynamically add top Karnataka colleges
  const collegeItems: PaletteItem[] = COLLEGES_DATA.map((col) => ({
    id: `col-${col.id}`,
    title: `${col.name} (${col.shortName})`,
    subtitle: `${col.location.city} • Rank #${col.accreditations.karnatakaRank} in KA • Avg CTC: ₹${col.placements.averagePackageLPA} LPA`,
    category: 'Colleges',
    href: `/colleges/${col.id}`,
    icon: GraduationCap,
    badge: `NAAC ${col.accreditations.naacGrade}`,
  }));

  const allItems = [...baseItems, ...collegeItems];

  const filteredItems = query.trim() === ''
    ? baseItems
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          router.push(filteredItems[selectedIndex].href);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a college name, tool, course, or shortcut..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 flex-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No matching results found for <span className="font-semibold text-slate-700 dark:text-slate-300">"{query}"</span>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer text-xs transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-blue-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-bold truncate">{item.title}</span>
                        {item.badge && (
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-blue-100' : 'text-slate-400'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-3">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {item.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">↑</kbd> <kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">↓</kbd> to navigate</span>
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">↵</kbd> to select</span>
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">esc</kbd> to close</span>
          </div>
          <span className="font-semibold text-blue-600 dark:text-blue-400">Student Connect</span>
        </div>
      </div>
    </div>
  );
}
