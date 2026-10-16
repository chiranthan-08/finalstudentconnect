'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  Search, 
  Sparkles, 
  Bot, 
  Users, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Building2, 
  DollarSign, 
  Compass, 
  ShieldCheck, 
  Video, 
  FileText, 
  Award,
  Zap,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Sliders,
  Check,
  Briefcase,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { COLLEGES_DATA, COURSES_DATA, COMMUNITY_POSTS, TECHNICAL_EVENTS, ADVERTISEMENTS } from '@/data/mockData';

export default function LandingPage() {
  const router = useRouter();
  
  // Instant search
  const [instantSearch, setInstantSearch] = useState('');
  
  // Live Hero Predictor Simulator state
  const [simulatorRank, setSimulatorRank] = useState(4500);
  const [simulatorExam, setSimulatorExam] = useState<'kcet' | 'comedk'>('kcet');
  const [simulatorCategory, setSimulatorCategory] = useState('GM');
  const [simulatorBranch, setSimulatorBranch] = useState('CSE');

  // Comparison matrix selected colleges
  const [compareMetric, setCompareMetric] = useState<'placements' | 'cutoffs' | 'fees'>('placements');

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick VTU Mini Calculator state
  const [sub1Grade, setSub1Grade] = useState(10); // O (4 credits)
  const [sub2Grade, setSub2Grade] = useState(9);  // A+ (4 credits)
  const [sub3Grade, setSub3Grade] = useState(8);  // A (3 credits)
  const miniSgpa = useMemo(() => {
    const totalCredits = 4 + 4 + 3;
    const totalPoints = (4 * sub1Grade) + (4 * sub2Grade) + (3 * sub3Grade);
    return (totalPoints / totalCredits).toFixed(2);
  }, [sub1Grade, sub2Grade, sub3Grade]);

  // College filter on landing page
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | 'Autonomous' | 'VTU Affiliated' | 'Deemed' | 'State University'>('all');

  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter(c => {
      const matchesSearch = instantSearch === '' || 
        c.name.toLowerCase().includes(instantSearch.toLowerCase()) ||
        c.shortName.toLowerCase().includes(instantSearch.toLowerCase()) ||
        c.location.district.toLowerCase().includes(instantSearch.toLowerCase());
      
      const matchesType = selectedTypeFilter === 'all' || c.affiliation === selectedTypeFilter;
      return matchesSearch && matchesType;
    });
  }, [instantSearch, selectedTypeFilter]);

  // Real-time simulated odds calculation for Hero Simulator
  const simulatedChances = useMemo(() => {
    return COLLEGES_DATA.slice(0, 4).map(col => {
      const branch = col.branches.find(b => b.branchCode === simulatorBranch) || col.branches[0];
      const cutoff = simulatorExam === 'kcet' 
        ? branch.cutoffs.kcet.gm 
        : (branch.cutoffs.comedk?.gm || branch.cutoffs.kcet.gm);
      
      let probability = 50;
      let status: 'Safe' | 'Moderate' | 'Dream' = 'Moderate';
      let badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800';

      if (simulatorRank <= cutoff * 0.85) {
        probability = Math.min(96, Math.round(85 + (cutoff - simulatorRank) / cutoff * 15));
        status = 'Safe';
        badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      } else if (simulatorRank <= cutoff * 1.15) {
        probability = Math.round(60 + (cutoff * 1.15 - simulatorRank) / (cutoff * 0.3) * 20);
        status = 'Moderate';
        badgeColor = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800';
      } else {
        probability = Math.max(15, Math.round(30 - (simulatorRank - cutoff) / cutoff * 20));
        status = 'Dream';
        badgeColor = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-800';
      }

      return {
        college: col,
        branch: branch.branchName,
        cutoff,
        probability,
        status,
        badgeColor
      };
    });
  }, [simulatorRank, simulatorExam, simulatorBranch]);

  const stats = [
    { label: 'Engineering Colleges', value: '240+', icon: GraduationCap },
    { label: 'Active Students', value: '48,500+', icon: Users },
    { label: 'Curated Courses', value: '120+', icon: BookOpen },
    { label: 'Hackathons & Events', value: '85+', icon: Trophy },
    { label: 'VTU Study Resources', value: '14,200+', icon: FileText },
  ];

  const testimonials = [
    {
      name: 'Aditya Kulkarni',
      role: 'Software Engineer @ Google Bangalore',
      college: 'RV College of Engineering (Batch of 2024)',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
      text: 'Student Connect’s cutoff predictor helped me prioritize option entry between RVCE ECE and BMSCE CSE. The study rooms and VTU notes also saved our entire semester!',
      package: '₹48 LPA',
    },
    {
      name: 'Sahana Rao',
      role: 'Cloud Architect Intern @ Microsoft',
      college: 'BMS College of Engineering (Batch of 2025)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'The AI Resume ATS scanner flagged 4 missing keywords for Bangalore product companies. Two weeks after optimizing, I cracked 3 off-campus interviews!',
      package: '₹52 LPA',
    },
    {
      name: 'Karthik Hegde',
      role: 'Peer Tutor & Senior Student',
      college: 'PES University, Ring Road (Batch of 2025)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'Teaching Data Structures and VTU Engineering Math to junior students earned me over ₹24,000 via Student Connect’s escrow platform. Highly safe and transparent.',
      package: 'Top Mentor',
    },
  ];

  const faqs = [
    {
      q: 'How does the KCET and COMEDK AI cutoff predictor work?',
      a: 'Our predictor runs multi-year linear probability models against official KEA (Karnataka Examination Authority) and COMEDK Round 1, Round 2, and Extended Round cutoffs (2021–2024). It cross-references your exam rank, reservation category (GM, 2A, 2B, 3A, 3B, SC, ST), and preferred branch to categorize colleges into Safe (≥85%), Moderate (50–84%), and Dream (<50%) probability bands.'
    },
    {
      q: 'Which VTU grading schemes and calculations are supported?',
      a: 'We fully support the latest VTU 2022 Scheme (NEP CBCS), 2021 Scheme, and 2018 Scheme. This includes SGPA, CGPA to Percentage conversion using the official VTU formula ((CGPA - 0.75) × 10), Attendance Bunk Forecaster (75% mandatory vs 85% safe attendance), and Continuous Internal Evaluation (CIE) 50-scale marks calculator.'
    },
    {
      q: 'How does the Peer Tutoring Escrow system protect students and mentors?',
      a: 'When a student books a 1-on-1 tutoring session, the fee is securely held in an automated escrow lock. The tutor delivers the session via our interactive whiteboard and video room. Once the student completes the session and marks it verified (or after a 48-hour satisfaction guarantee period), funds are safely released to the tutor’s bank account.'
    },
    {
      q: 'Are the starter courses completely free with verifiable certificates?',
      a: 'Yes! Every Karnataka engineering student gets free lifetime access to 3 foundational starter courses: Python for Engineers, Full-Stack Web Basics, and Engineering Mathematics for VTU. Upon scoring 70%+ in the end-of-module assessment, you receive a tamper-proof digital certificate with a verifiable QR code.'
    },
    {
      q: 'Can colleges, placement coordinators, and recruiters partner with Student Connect?',
      a: 'Yes. College administration and TPO (Training and Placement Officer) representatives can request verified badges to post official campus drives, cutoffs, and departmental news. HR recruiters can post verified internships and review pre-screened student candidate portfolios directly through the platform.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION WITH INTERACTIVE SIMULATOR */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow ambient background effects */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Karnataka’s Premier Engineering Student Platform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] text-slate-500 font-mono">KCET • COMEDK • VTU</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Explore. Learn. Connect.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Grow Together.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover 240+ Karnataka engineering colleges, predict admission odds, learn trending tech with free starter courses, and prepare for top tier-1 placements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/predictor"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch College Predictor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/assistant"
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-blue-500" />
              <span>Ask Connect AI</span>
            </Link>

            <Link
              href="/courses"
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-md transition-all"
            >
              Free Courses & Certificates
            </Link>
          </div>

          {/* Quick Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative glass-card rounded-2xl p-1.5 flex items-center shadow-lg border border-slate-200/80 dark:border-slate-800">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={instantSearch}
                onChange={(e) => setInstantSearch(e.target.value)}
                placeholder="Search colleges (RVCE, BMSCE, Ramaiah, Mysuru)..."
                className="w-full px-3 py-2 text-xs bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              <Link
                href={`/colleges${instantSearch ? `?q=${encodeURIComponent(instantSearch)}` : ''}`}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shrink-0"
              >
                Search
              </Link>
            </div>
          </div>
        </div>

        {/* INTERACTIVE HERO SIMULATOR WIDGET */}
        <div className="mt-12 max-w-5xl mx-auto glass-card rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-500" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                  Instant Admission Odds Simulator (Interactive)
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Adjust your rank slider to preview real-time admission probability across top Karnataka institutions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
                <button
                  onClick={() => setSimulatorExam('kcet')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    simulatorExam === 'kcet' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  KCET Rank
                </button>
                <button
                  onClick={() => setSimulatorExam('comedk')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    simulatorExam === 'comedk' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  COMEDK Rank
                </button>
              </div>

              <select
                value={simulatorBranch}
                onChange={(e) => setSimulatorBranch(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <option value="CSE">CSE</option>
                <option value="AIML">AI & ML</option>
                <option value="ISE">ISE</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
          </div>

          {/* Slider and live display */}
          <div className="pt-6 pb-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-slate-600 dark:text-slate-400">
                Your Entrance Exam Rank:
              </span>
              <span className="font-extrabold text-blue-600 dark:text-blue-400 text-base sm:text-lg font-mono">
                #{simulatorRank.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="45000"
              step="100"
              value={simulatorRank}
              onChange={(e) => setSimulatorRank(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>#200 (Top Rank)</span>
              <span>#15,000 (Tier-1 Cutoff)</span>
              <span>#45,000</span>
            </div>
          </div>

          {/* Realtime Live Probability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
            {simulatedChances.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex flex-col justify-between hover:border-blue-500/50 transition-all hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {item.college.location.city}
                    </span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.status} ({item.probability}%)
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                    {item.college.name}
                  </h4>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {simulatorBranch} Cutoff: ~{item.cutoff.toLocaleString()} GM
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Highest: ₹{item.college.placements.highestPackageLPA} LPA</span>
                  <Link
                    href={`/colleges/${item.college.id}`}
                    className="text-blue-500 font-bold hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Want comprehensive multi-round predictions for all 240+ Karnataka engineering colleges?
            </span>
            <Link
              href={`/predictor?rank=${simulatorRank}&branch=${simulatorBranch}`}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <span>Run Deep AI Admission Prediction</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Animated Statistics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 text-center border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {s.value}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. DIRECTORY & INSTANT FILTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Karnataka Engineering Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore Top Verified Institutions
            </h2>
          </div>
          <Link
            href="/colleges"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Browse Complete Karnataka Directory (240+)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {(['all', 'Autonomous', 'VTU Affiliated', 'Deemed', 'State University'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedTypeFilter(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedTypeFilter === type
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {type === 'all' ? 'All Institution Types' : type}
            </button>
          ))}
        </div>

        {/* College Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.slice(0, 3).map((college) => (
            <div
              key={college.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={college.heroImage}
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow">
                      Rank #{college.accreditations.karnatakaRank} in KA
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/90 text-slate-900 text-[10px] font-bold">
                      NAAC {college.accreditations.naacGrade}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-base font-bold line-clamp-1">{college.name}</div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-200">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{college.location.city} • {college.collegeType}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Highest</div>
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ₹{college.placements.highestPackageLPA} LPA
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Avg CTC</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        ₹{college.placements.averagePackageLPA} LPA
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Placed</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {college.placements.placementPercentage}%
                      </div>
                    </div>
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>CSE KCET GM Cutoff:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        ~{college.branches.find(b => b.branchCode === 'CSE')?.cutoffs.kcet.gm.toLocaleString() || 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>Govt Quota Annual Fee:</span>
                      <span className="font-bold text-slate-900 dark:text-white">₹{college.fees.kcetAnnual.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href={`/colleges/${college.id}`}
                  className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                >
                  <span>Explore Cutoffs & Placement Stats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE COLLEGE COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Head-to-Head Comparison</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Tier-1 Karnataka Engineering Institutions Compared
              </h2>
            </div>

            <div className="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setCompareMetric('placements')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  compareMetric === 'placements' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Placements & CTC
              </button>
              <button
                onClick={() => setCompareMetric('cutoffs')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  compareMetric === 'cutoffs' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                KCET & COMEDK Cutoffs
              </button>
              <button
                onClick={() => setCompareMetric('fees')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  compareMetric === 'fees' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Fee Structures
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider font-bold">
                  <th className="py-3 px-4">Institution</th>
                  <th className="py-3 px-4">KA Rank / NAAC</th>
                  {compareMetric === 'placements' && (
                    <>
                      <th className="py-3 px-4">Highest CTC</th>
                      <th className="py-3 px-4">Average CTC</th>
                      <th className="py-3 px-4">Placement Rate</th>
                      <th className="py-3 px-4">Top Recruiters</th>
                    </>
                  )}
                  {compareMetric === 'cutoffs' && (
                    <>
                      <th className="py-3 px-4">CSE KCET GM</th>
                      <th className="py-3 px-4">AIML KCET GM</th>
                      <th className="py-3 px-4">ECE KCET GM</th>
                      <th className="py-3 px-4">COMEDK Round 2</th>
                    </>
                  )}
                  {compareMetric === 'fees' && (
                    <>
                      <th className="py-3 px-4">KCET Govt Fee</th>
                      <th className="py-3 px-4">COMEDK Annual Fee</th>
                      <th className="py-3 px-4">Hostel / Campus Exp.</th>
                      <th className="py-3 px-4">Autonomous Status</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-700 dark:text-slate-300">
                {COLLEGES_DATA.slice(0, 4).map((col) => (
                  <tr key={col.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900 dark:text-white">{col.name} ({col.shortName})</div>
                      <div className="text-[11px] text-slate-400">{col.location.city} • {col.affiliation}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-blue-600 dark:text-blue-400">#{col.accreditations.karnatakaRank}</span>
                      <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {col.accreditations.naacGrade}
                      </span>
                    </td>

                    {compareMetric === 'placements' && (
                      <>
                        <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                          ₹{col.placements.highestPackageLPA} LPA
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                          ₹{col.placements.averagePackageLPA} LPA
                        </td>
                        <td className="py-3.5 px-4 font-bold text-blue-600 dark:text-blue-400">
                          {col.placements.placementPercentage}%
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {col.placements.topRecruiters.slice(0, 3).join(', ')}
                        </td>
                      </>
                    )}

                    {compareMetric === 'cutoffs' && (
                      <>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white">
                          ~{col.branches.find(b => b.branchCode === 'CSE')?.cutoffs.kcet.gm.toLocaleString() || 'N/A'}
                        </td>
                        <td className="py-3.5 px-4 font-mono">
                          ~{col.branches.find(b => b.branchCode === 'AIML')?.cutoffs.kcet.gm.toLocaleString() || 'N/A'}
                        </td>
                        <td className="py-3.5 px-4 font-mono">
                          ~{col.branches.find(b => b.branchCode === 'ECE')?.cutoffs.kcet.gm.toLocaleString() || 'N/A'}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-purple-600 dark:text-purple-400 font-semibold">
                          ~{col.branches.find(b => b.branchCode === 'CSE')?.cutoffs.comedk?.gm.toLocaleString() || 'N/A'}
                        </td>
                      </>
                    )}

                    {compareMetric === 'fees' && (
                      <>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-900 dark:text-white">
                          ₹{col.fees.kcetAnnual.toLocaleString()}/yr
                        </td>
                        <td className="py-3.5 px-4 font-mono">
                          ₹{col.fees.comedkAnnual.toLocaleString()}/yr
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">
                          ~₹{col.fees.hostelAnnual.toLocaleString()}/yr
                        </td>
                        <td className="py-3.5 px-4 text-blue-500 font-semibold">
                          {col.collegeType}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. VTU QUICK CALCULATOR & ACADEMIC HUB SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-900/10 via-indigo-900/10 to-slate-900/10 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
                <Compass className="w-4 h-4 text-blue-500" />
                <span>VTU Belagavi 2022 & 2021 Schemes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Comprehensive VTU Academic Tools Suite
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Calculate your exact SGPA, convert CGPA to official VTU percentage, calculate attendance safe bunks, and determine required marks in semester end exams to maintain your target pointer.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white">Official VTU Formula</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Percentage = (CGPA - 0.75) × 10</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white">Attendance Thresholds</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">85% Safe Zone • 75% VTU Mandatory</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/vtu-tools"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Launch Full VTU Suite (All 8 Sems)</span>
                </Link>
                <Link
                  href="/study-materials"
                  className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>VTU Notes & Question Papers</span>
                </Link>
              </div>
            </div>

            {/* Quick Interactive Mini-SGPA Simulator */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Quick SGPA Preview Widget</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-bold">
                  Live Calculator
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                    <span>Engineering Math (4 Credits)</span>
                    <span className="font-mono font-bold text-blue-600">{sub1Grade === 10 ? 'Grade O (10 pts)' : `Grade ${sub1Grade} pts`}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    value={sub1Grade}
                    onChange={(e) => setSub1Grade(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                    <span>Data Structures & OOP (4 Credits)</span>
                    <span className="font-mono font-bold text-blue-600">{sub2Grade === 10 ? 'Grade O (10 pts)' : `Grade ${sub2Grade} pts`}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    value={sub2Grade}
                    onChange={(e) => setSub2Grade(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                    <span>Computer Organization (3 Credits)</span>
                    <span className="font-mono font-bold text-blue-600">{sub3Grade === 10 ? 'Grade O (10 pts)' : `Grade ${sub3Grade} pts`}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    value={sub3Grade}
                    onChange={(e) => setSub3Grade(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>

              <div className="pt-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-300 uppercase font-bold tracking-wider">
                    Calculated SGPA
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {miniSgpa} <span className="text-xs text-slate-400">/ 10.0</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">VTU Percentage</div>
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {((Number(miniSgpa) - 0.75) * 10).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TRENDING COURSES (Free Starter Certifications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Free Engineering Starter Courses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Learn In-Demand Technologies Early
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Every Karnataka student gets 100% free lifetime access to the first 3 foundational courses with verifiable certificate generator.
            </p>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All Courses & Certificates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES_DATA.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.isFreeStarter && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-[10px] tracking-wide shadow-md">
                      FREE STARTER COURSE
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold">
                    {course.durationHours} hrs
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{course.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {course.skills.slice(0, 3).map((s, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href="/courses"
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Enroll Free & Start Learning</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VIRTUAL STUDY ROOMS & ESCROW PEER TUTORING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Study Rooms Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Interactive Virtual Study Rooms
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Study in real-time with classmates across Karnataka colleges. Includes an interactive live whiteboard, shared code runner, and video channels for semester exams and coding interviews.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Interactive Whiteboard
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Collaborative Code Pad
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Voice & Video Channels
                </span>
              </div>
            </div>
            <Link
              href="/study-rooms"
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-white dark:text-slate-900 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Join a Live Study Room</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Peer Mentorship Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Escrow-Protected Peer Tutoring
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Book 1-on-1 tutoring sessions with senior toppers from RVCE, BMSCE, and PESU. Earn money by teaching subjects you love. 100% safe escrow: payment is held safely until the session is completed and verified.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Safe Escrow Workflow
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Verified Senior Tutors
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Money-Back Guarantee
                </span>
              </div>
            </div>
            <Link
              href="/mentors"
              className="mt-4 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Tutors & Mentors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. STUDENT CONNECT ANNUAL HACKATHON 2025 TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-black font-extrabold text-[11px] tracking-wide uppercase">
                FLAGSHIP ANNUAL EVENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Student Connect Hackathon 2025
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ₹2,50,000 Cash Prize Pool • 36-Hour Statewide Hybrid Hackathon. Form cross-college teams, build innovative software/hardware solutions, and pitch in front of Bangalore VC & Tech leaders.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/events"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
              >
                <Trophy className="w-4 h-4" />
                <span>Join Hackathon 2025</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PLACEMENT TESTIMONIALS & HALL OF FAME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Karnataka Student Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Built by Engineers, Loved by Toppers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/20"
                    />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                        <span>{t.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">{t.college}</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">{t.role}</span>
                <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  {t.package}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. INTERACTIVE FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Everything you need to know about KCET cutoffs, VTU formulas, and peer tutoring.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. OFFICIAL TRANSPARENCY DISCLAIMER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <p className="text-[11px] leading-relaxed">
              <strong>Official Reference Transparency:</strong> Cutoff trends and college data are referenced from public archives of the Karnataka Examination Authority (KEA) and VTU Belagavi. Student Connect is an independent open platform built for Karnataka students.
            </p>
          </div>
          <Link
            href="/colleges"
            className="text-blue-600 dark:text-blue-400 font-bold hover:underline shrink-0 text-xs"
          >
            Explore 240+ Colleges →
          </Link>
        </div>
      </section>

    </div>
  );
}
