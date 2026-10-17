'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
  Layers,
  Zap,
  MapPin,
  Calendar,
  Building2,
  Lock,
  UserCheck
} from 'lucide-react';
import { 
  COLLEGES_DATA, 
  COURSES_DATA, 
  STUDY_MATERIALS, 
  MENTORS_DATA, 
  INTERNSHIPS_DATA, 
  TECHNICAL_EVENTS, 
  STUDY_ROOMS 
} from '@/data/mockData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export type PaletteCategory = 
  | 'All'
  | 'Colleges' 
  | 'AI & Tools' 
  | 'Courses' 
  | 'Study Materials' 
  | 'Mentors' 
  | 'Internships' 
  | 'Events' 
  | 'Study Rooms' 
  | 'Auth & Roles';

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: PaletteCategory;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  keywords?: string;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<PaletteCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 1. Comprehensive Core Tools & Services
  const baseTools: PaletteItem[] = [
    {
      id: 'tool-predictor',
      title: 'AI College Cutoff Predictor',
      subtitle: 'Calculate KCET & COMEDK round-wise admission odds by exam rank and category (GM, 2A, 2B, 3A, 3B, SC, ST)',
      category: 'AI & Tools',
      href: '/predictor',
      icon: Sparkles,
      badge: 'Popular',
      keywords: 'kcet comedk cutoff rank predictor probability kea counseling option entry round 1 round 2 seat allotment odds safe moderate dream',
    },
    {
      id: 'tool-assistant',
      title: 'Connect AI Copilot (GPT-4o)',
      subtitle: 'Karnataka engineering assistant: answer VTU schemes, KEA cutoffs, 2022 NEP syllabi, and coding roadmaps',
      category: 'AI & Tools',
      href: '/assistant',
      icon: Bot,
      badge: 'AI Copilot',
      keywords: 'ai assistant chat copilot gpt vtu syllabus question answer career roadmap karnataka',
    },
    {
      id: 'tool-vtu-sgpa',
      title: 'VTU SGPA & CGPA Calculator',
      subtitle: 'Semester grade point average calculator supporting VTU 2022 NEP, 2021, and 2018 CBCS credit schemes',
      category: 'AI & Tools',
      href: '/vtu-tools',
      icon: Calculator,
      badge: '2022 NEP',
      keywords: 'vtu sgpa cgpa calculator marks credits grading nep 2022 2021 cbcs grade points percentage converter',
    },
    {
      id: 'tool-vtu-attendance',
      title: 'VTU 75% Attendance Bunk Forecaster',
      subtitle: 'Calculate safe classes to miss while staying compliant with VTU mandatory 75% and safe 85% attendance criteria',
      category: 'AI & Tools',
      href: '/vtu-tools',
      icon: Calculator,
      badge: 'Attendance',
      keywords: 'attendance bunk calculator 75% 85% classes shortage condonation medical certificate vtu',
    },
    {
      id: 'tool-vtu-cie',
      title: 'VTU CIE Internal 50-Scale Marks Calculator',
      subtitle: 'Continuous Internal Evaluation marks predictor: IA tests, quizzes, and lab continuous evaluations',
      category: 'AI & Tools',
      href: '/vtu-tools',
      icon: Calculator,
      badge: 'Internal Marks',
      keywords: 'cie internal marks test ia1 ia2 assignment 50 marks pass marks vtu',
    },
    {
      id: 'tool-ats',
      title: 'AI Resume ATS Scanner',
      subtitle: 'Instant ATS score scanner matching engineering resumes with Bangalore tech job descriptions',
      category: 'AI & Tools',
      href: '/placements',
      icon: Briefcase,
      badge: 'ATS Scanner',
      keywords: 'resume ats scanner score placement cv bangalore tech fresher jobs keywords ctc',
    },
    {
      id: 'tool-roadmap',
      title: 'AI Career Roadmap Generator',
      subtitle: 'Tailored milestone roadmap for frontend, backend, AI/ML, DevOps, and cloud engineering',
      category: 'AI & Tools',
      href: '/advanced',
      icon: Layers,
      keywords: 'career roadmap advanced ai skills gap digital portfolio portfolio generator',
    },
    {
      id: 'tool-colleges-matrix',
      title: 'College Side-by-Side Comparison Matrix',
      subtitle: 'Compare up to 3 Karnataka engineering colleges by cutoff, fees, placements, and NIRF rank',
      category: 'Colleges',
      href: '/colleges',
      icon: GraduationCap,
      keywords: 'compare comparison matrix colleges rvce bmsce msrit pes fees placement nirf',
    },
    // Authentication & Roles
    {
      id: 'auth-student',
      title: 'Student Access Portal',
      subtitle: 'Sign in or register as an undergraduate VTU / Autonomous engineering student',
      category: 'Auth & Roles',
      href: '/login?role=student',
      icon: GraduationCap,
      badge: 'Student',
      keywords: 'student login sign in register account kcet comedk vtu',
    },
    {
      id: 'auth-mentor',
      title: 'Mentor & Tutor Escrow Portal',
      subtitle: 'Sign in as a verified peer tutor or senior mentor to earn by teaching',
      category: 'Auth & Roles',
      href: '/login?role=mentor',
      icon: UserCheck,
      badge: 'Tutor',
      keywords: 'mentor tutor login register earn teach 1-on-1 escrow booking',
    },
    {
      id: 'auth-college-rep',
      title: 'College Representative Portal',
      subtitle: 'Admissions deans, TPOs, and departmental coordinators managing college cutoffs',
      category: 'Auth & Roles',
      href: '/login?role=college_rep',
      icon: Building2,
      badge: 'College Rep',
      keywords: 'college rep admissions tpo dean institutional login cutoffs placement',
    },
    {
      id: 'auth-recruiter',
      title: 'HR & Tech Recruiter Portal',
      subtitle: 'Post verified Bangalore internships, review resumes, and hire campus talent',
      category: 'Auth & Roles',
      href: '/login?role=recruiter',
      icon: Briefcase,
      badge: 'HR Recruiter',
      keywords: 'recruiter hr talent hiring jobs internships bangalore tech startup',
    },
    {
      id: 'auth-organizer',
      title: 'Event & Hackathon Organizer Portal',
      subtitle: 'Host inter-college hackathons with ₹2.5L prize escrow and cross-campus teams',
      category: 'Auth & Roles',
      href: '/login?role=event_organizer',
      icon: Trophy,
      badge: 'Organizer',
      keywords: 'event organizer hackathon gdsc ieee symposium competition host',
    },
    {
      id: 'auth-admin',
      title: 'Admin & System Governance Console',
      subtitle: 'Institutional audit console, dispute resolution, escrow release, and RBAC control',
      category: 'Auth & Roles',
      href: '/admin',
      icon: ShieldCheck,
      badge: 'Admin',
      keywords: 'admin super admin console security dashboard governance audit users',
    },
    {
      id: 'auth-register',
      title: 'Create a New Verified Account',
      subtitle: 'Register on Student Connect under any of the 7 supported Karnataka engineering personas',
      category: 'Auth & Roles',
      href: '/register',
      icon: Lock,
      badge: 'Register',
      keywords: 'register sign up create account new user onboarding rbac',
    },
  ];

  // 2. All Karnataka Colleges
  const collegeItems: PaletteItem[] = useMemo(() => {
    return COLLEGES_DATA.map((col) => {
      const branchNames = col.branches.map(b => `${b.branchCode} (${b.branchName})`).join(', ');
      const cutoffMin = Math.min(...col.branches.map(b => b.cutoffs.kcet.gm));
      return {
        id: `col-${col.id}`,
        title: `${col.name} (${col.shortName})`,
        subtitle: `${col.location.city}, ${col.location.district} • Code: ${col.code} • Rank #${col.accreditations.karnatakaRank} in KA • Avg CTC: ₹${col.placements.averagePackageLPA} LPA • Cutoff from ~${cutoffMin}`,
        category: 'Colleges' as PaletteCategory,
        href: `/colleges/${col.id}`,
        icon: GraduationCap,
        badge: `NAAC ${col.accreditations.naacGrade}`,
        keywords: `${col.name} ${col.shortName} ${col.code} ${col.location.city} ${col.location.district} ${col.affiliation} ${col.collegeType} ${col.placements.topRecruiters.join(' ')} ${branchNames} ${col.accreditations.naacGrade} cutoff placement fees`,
      };
    });
  }, []);

  // 3. All Technical Courses
  const courseItems: PaletteItem[] = useMemo(() => {
    return COURSES_DATA.map((c) => ({
      id: `course-${c.id}`,
      title: c.title,
      subtitle: `${c.instructor.name} • ${c.durationHours} hrs • ${c.level} • ${c.isFreeStarter ? 'Free lifetime starter' : 'Pro track'} with certificate`,
      category: 'Courses' as PaletteCategory,
      href: `/courses`,
      icon: BookOpen,
      badge: c.isFreeStarter ? 'Free Course' : 'Certificate',
      keywords: `${c.title} ${c.description} ${c.category} ${c.skills.join(' ')} ${c.instructor.name} ${c.level} learn coding certification`,
    }));
  }, []);

  // 4. All Study Materials & VTU Notes
  const materialItems: PaletteItem[] = useMemo(() => {
    return STUDY_MATERIALS.map((m) => ({
      id: `material-${m.id}`,
      title: `${m.title} [${m.subjectCode}]`,
      subtitle: `${m.subject} • ${m.semester}th Sem • Scheme: ${m.scheme} • ${m.downloadsCount} downloads • ${m.fileSize}`,
      category: 'Study Materials' as PaletteCategory,
      href: `/study-materials`,
      icon: FileText,
      badge: m.category,
      keywords: `${m.title} ${m.subject} ${m.subjectCode} ${m.scheme} ${m.category} ${m.branch} semester pyq notes model question paper solutions`,
    }));
  }, []);

  // 5. All Mentors & Tutors
  const mentorItems: PaletteItem[] = useMemo(() => {
    return MENTORS_DATA.map((m) => ({
      id: `mentor-${m.id}`,
      title: `${m.name} • ${m.college.split(' ')[0]} Mentor`,
      subtitle: `Expertise: ${m.subjects.join(', ')} • Rating: ${m.rating} ★ (${m.reviewsCount} reviews) • ₹${m.hourlyRateINR}/hr (Escrow)`,
      category: 'Mentors' as PaletteCategory,
      href: `/mentors`,
      icon: Users,
      badge: `₹${m.hourlyRateINR}/hr`,
      keywords: `${m.name} ${m.college} ${m.branch} ${m.subjects.join(' ')} ${m.skills.join(' ')} ${m.bio} tutor mentor topper teaching 1-on-1`,
    }));
  }, []);

  // 6. All Internships
  const internshipItems: PaletteItem[] = useMemo(() => {
    return INTERNSHIPS_DATA.map((item) => ({
      id: `intern-${item.id}`,
      title: `${item.role} @ ${item.companyName}`,
      subtitle: `${item.location} • Stipend: ₹${item.stipendMonthlyINR.toLocaleString()}/mo • ${item.durationMonths} mos • ${item.isRemote ? 'Remote' : 'In-Office'}`,
      category: 'Internships' as PaletteCategory,
      href: `/internships`,
      icon: Briefcase,
      badge: `₹${Math.round(item.stipendMonthlyINR / 1000)}k/mo`,
      keywords: `${item.role} ${item.companyName} ${item.location} ${item.skillsRequired.join(' ')} ${item.isRemote ? 'remote' : 'in-office'} ${item.description} internship stipend bangalore`,
    }));
  }, []);

  // 7. All Events & Hackathons
  const eventItems: PaletteItem[] = useMemo(() => {
    return TECHNICAL_EVENTS.map((e) => ({
      id: `event-${e.id}`,
      title: e.title,
      subtitle: `${e.date} • ${e.location} • Cash Prize Pool: ₹${e.prizePoolINR.toLocaleString()} • ${e.type}`,
      category: 'Events' as PaletteCategory,
      href: `/events`,
      icon: Trophy,
      badge: `₹${Math.round(e.prizePoolINR / 100000)}L Prize`,
      keywords: `${e.title} ${e.type} ${e.location} ${e.description} hackathon contest fest registration prize`,
    }));
  }, []);

  // 8. Virtual Study Rooms
  const roomItems: PaletteItem[] = useMemo(() => {
    return STUDY_ROOMS.map((r) => ({
      id: `room-${r.id}`,
      title: r.name,
      subtitle: `Topic: ${r.topic} • ${r.activeParticipants}/${r.maxParticipants} online • Whiteboard & live code pad`,
      category: 'Study Rooms' as PaletteCategory,
      href: `/study-rooms`,
      icon: Video,
      badge: `${r.activeParticipants} Online`,
      keywords: `${r.name} ${r.topic} ${r.category} virtual study room live whiteboard code pad peer discussion`,
    }));
  }, []);

  // Combine all items into a single master searchable index
  const masterIndex: PaletteItem[] = useMemo(() => {
    return [
      ...baseTools,
      ...collegeItems,
      ...courseItems,
      ...materialItems,
      ...mentorItems,
      ...internshipItems,
      ...eventItems,
      ...roomItems,
    ];
  }, [collegeItems, courseItems, materialItems, mentorItems, internshipItems, eventItems, roomItems]);

  // Intelligent Search with token matching & relevance scoring
  const filteredItems = useMemo(() => {
    const rawQuery = query.toLowerCase().trim();

    // Base filtering by category chip if active
    let pool = masterIndex;
    if (activeFilter !== 'All') {
      pool = masterIndex.filter(item => item.category === activeFilter);
    }

    if (!rawQuery) {
      return pool.slice(0, 15);
    }

    const tokens = rawQuery.split(/\s+/).filter(Boolean);

    const scored = pool.map((item) => {
      const titleLower = item.title.toLowerCase();
      const subLower = item.subtitle.toLowerCase();
      const catLower = item.category.toLowerCase();
      const kwLower = (item.keywords || '').toLowerCase();
      const combined = `${titleLower} ${subLower} ${catLower} ${kwLower}`;

      // Every token must match somewhere in combined text
      const allTokensMatch = tokens.every(token => combined.includes(token));
      if (!allTokensMatch) {
        return { item, score: -1 };
      }

      let score = 0;

      // Exact title match gets highest priority
      if (titleLower === rawQuery) {
        score += 1000;
      } else if (titleLower.startsWith(rawQuery)) {
        score += 500;
      } else if (titleLower.includes(rawQuery)) {
        score += 250;
      }

      // Exact token matches
      tokens.forEach(tok => {
        if (titleLower.includes(tok)) score += 60;
        if (kwLower.includes(tok)) score += 35;
        if (subLower.includes(tok)) score += 20;
      });

      return { item, score };
    });

    return scored
      .filter(s => s.score >= 0)
      .sort((a, b) => b.score - a.score)
      .map(s => s.item);
  }, [query, activeFilter, masterIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeFilter]);

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

  const filterTabs: PaletteCategory[] = [
    'All',
    'Colleges',
    'AI & Tools',
    'Courses',
    'Study Materials',
    'Mentors',
    'Internships',
    'Events',
    'Auth & Roles'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-16 px-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. SEARCH INPUT HEADER */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 gap-3 bg-slate-50/80 dark:bg-slate-900/80">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything: 'RVCE CSE', 'SGPA calculator', 'Python course', '18MAT21 notes', 'DSA mentor', 'Bangalore internship'..."
            className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shrink-0"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. CATEGORY FILTER CHIPS */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 border-b border-slate-100 dark:border-slate-800/80 overflow-x-auto text-[11px] scrollbar-none bg-white dark:bg-slate-900">
          <span className="text-slate-400 font-bold uppercase text-[10px] mr-1 shrink-0">Filter:</span>
          {filterTabs.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all shrink-0 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. SEARCH RESULTS LIST */}
        <div className="overflow-y-auto p-3 sm:p-4 space-y-1.5 flex-1 divide-y divide-slate-100 dark:divide-slate-800/50">
          {filteredItems.length === 0 ? (
            <div className="text-center py-14 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                No matching results found for "{query}"
              </div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for college codes (E001), branches (CSE, ISE), subject codes (18MAT21), tools (SGPA, Attendance), or company names.
              </p>
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
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer text-xs transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 translate-x-1'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden pr-2">
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs sm:text-sm truncate">{item.title}</span>
                        {item.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            isSelected
                              ? 'bg-white/25 text-white'
                              : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 leading-relaxed ${
                        isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
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

        {/* 4. FOOTER SHORTCUTS & RESULTS COUNTER */}
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↵</kbd> to select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">esc</kbd> to close</span>
          </div>
          <div className="font-bold text-slate-600 dark:text-slate-300">
            {filteredItems.length} relevant results found
          </div>
        </div>

      </div>
    </div>
  );
}
