'use client';

import React, { useState } from 'react';
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
  ArrowUpRight
} from 'lucide-react';
import { COLLEGES_DATA, COURSES_DATA, COMMUNITY_POSTS, TECHNICAL_EVENTS, ADVERTISEMENTS } from '@/data/mockData';

export default function LandingPage() {
  const router = useRouter();
  const [instantSearch, setInstantSearch] = useState('');
  const [quickRank, setQuickRank] = useState('');
  const [quickBranch, setQuickBranch] = useState('CSE');

  const filteredColleges = COLLEGES_DATA.filter(c => 
    c.name.toLowerCase().includes(instantSearch.toLowerCase()) ||
    c.shortName.toLowerCase().includes(instantSearch.toLowerCase()) ||
    c.location.district.toLowerCase().includes(instantSearch.toLowerCase())
  ).slice(0, 4);

  const handlePredictRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickRank) {
      router.push(`/predictor?rank=${quickRank}&branch=${quickBranch}`);
    } else {
      router.push('/predictor');
    }
  };

  const stats = [
    { label: 'Engineering Colleges', value: '240+', icon: GraduationCap },
    { label: 'Active Students', value: '48,500+', icon: Users },
    { label: 'Curated Courses', value: '120+', icon: BookOpen },
    { label: 'Technical Events & Hackathons', value: '85+', icon: Trophy },
    { label: 'Study Resources & Notes', value: '14,200+', icon: FileText },
  ];

  const popularBranches = [
    { code: 'CSE', name: 'Computer Science & Engineering', cutoffs: 'Top ~3,000 GM' },
    { code: 'AIML', name: 'Artificial Intelligence & Machine Learning', cutoffs: 'Top ~5,500 GM' },
    { code: 'ISE', name: 'Information Science & Engineering', cutoffs: 'Top ~6,200 GM' },
    { code: 'AIDS', name: 'AI & Data Science', cutoffs: 'Top ~7,000 GM' },
    { code: 'ECE', name: 'Electronics & Communication', cutoffs: 'Top ~12,000 GM' },
  ];

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-sm animate-pulse-subtle">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Karnataka’s #1 Centralized Engineering Student Ecosystem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] text-slate-500">KCET • COMEDK • VTU</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Your Complete Student Ecosystem{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover colleges, predict admissions, learn trending technologies, connect with students, find internships, and build your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/colleges"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 group"
            >
              <span>Explore Colleges</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/assistant"
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-blue-500" />
              <span>Ask AI Assistant</span>
            </Link>

            <Link
              href="/login"
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-md transition-all"
            >
              Join Student Connect
            </Link>
          </div>

          {/* Instant Search Bar */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="relative glass-card rounded-2xl p-2 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={instantSearch}
                onChange={(e) => setInstantSearch(e.target.value)}
                placeholder="Search colleges (e.g. RVCE, BMSCE, Ramaiah, Mysuru, Hubballi)..."
                className="w-full px-3 py-2 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              <Link
                href={`/colleges${instantSearch ? `?q=${encodeURIComponent(instantSearch)}` : ''}`}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shrink-0"
              >
                Search
              </Link>
            </div>

            {/* Instant suggestions preview */}
            {instantSearch && (
              <div className="glass-card mt-2 rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-left space-y-1 shadow-xl">
                {filteredColleges.length > 0 ? (
                  filteredColleges.map((col) => (
                    <Link
                      key={col.id}
                      href={`/colleges/${col.id}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <div>
                        <span className="font-bold">{col.name} ({col.shortName})</span>
                        <span className="text-[11px] text-slate-500 ml-2">{col.location.city} • Rank #{col.accreditations.karnatakaRank}</span>
                      </div>
                      <span className="text-blue-500 font-semibold">View Profile →</span>
                    </Link>
                  ))
                ) : (
                  <div className="p-2 text-xs text-slate-400">No matching college found. Click search to view full directory.</div>
                )}
              </div>
            )}
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

      {/* 2. FIND COLLEGES BASED ON RANK (Quick Predictor Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>AI KCET & COMEDK Admission Forecaster</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Know Which Colleges You Can Get Before Option Entry
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
                Enter your entrance exam rank. Our AI analyzes historical cutoffs from 2021 to 2024 to categorize colleges into Safe (85%), Moderate (60%), and Dream (25%) chances.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl p-5 shadow-2xl">
              <form onSubmit={handlePredictRedirect} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Entrance Rank (KCET / COMEDK)
                  </label>
                  <input
                    type="number"
                    value={quickRank}
                    onChange={(e) => setQuickRank(e.target.value)}
                    placeholder="e.g. 8450"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Branch
                  </label>
                  <select
                    value={quickBranch}
                    onChange={(e) => setQuickBranch(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="CSE">Computer Science & Engg (CSE)</option>
                    <option value="AIML">AI & Machine Learning (AIML)</option>
                    <option value="ISE">Information Science (ISE)</option>
                    <option value="ECE">Electronics & Communication (ECE)</option>
                    <option value="MECH">Mechanical Engineering</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Predict My College Odds Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOP KARNATAKA COLLEGES DIRECTORY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Karnataka Engineering Elite</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Discover Top Ranked Institutions
            </h2>
          </div>
          <Link
            href="/colleges"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All 240+ Karnataka Colleges</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLEGES_DATA.slice(0, 3).map((college) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
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
                      <span>{college.location.city} • {college.collegeType} • {college.affiliation}</span>
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
                      <span>CSE KCET Cutoff:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        ~{college.branches.find(b => b.branchCode === 'CSE')?.cutoffs.kcet.gm || 'N/A'} GM Rank
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>Annual Govt Fee:</span>
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

      {/* 4. TRENDING COURSES (3 Free Beginner Courses Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Upskill Early</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Trending Technical Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Special offer for all Karnataka students: Access the first 3 starter courses 100% Free!
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
                  {course.isFreeStarter ? (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-[10px] tracking-wide shadow-md">
                      FREE STARTER COURSE
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600 text-white font-extrabold text-[10px]">
                      PREMIUM
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
                  <span>{course.isFreeStarter ? 'Enroll for Free' : 'View Course'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONNECT AI - SMART ASSISTANT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-200 dark:border-indigo-950 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <Bot className="w-4 h-4 text-indigo-500" />
                <span>Meet "Connect AI" - Your Karnataka Engineering Copilot</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Get Instant Answers on Cutoffs, VTU Exams, CGPA & Career Roadmaps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect AI is fine-tuned for the Karnataka student journey. Ask questions like:
              </p>
              
              <div className="space-y-2">
                {[
                  '“I have a KCET rank of 25,000. Which CSE & AIML colleges can I get?”',
                  '“How is SGPA calculated under VTU 2022 Scheme for 4th sem CSE?”',
                  '“Compare RVCE vs BMSCE for placements and campus life”',
                  '“Give me a 6-month roadmap to crack Bangalore tech internships”',
                ].map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/assistant"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Bot className="w-4 h-4" />
                  <span>Launch Connect AI Assistant</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow-xl space-y-3 font-sans">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Connect AI Assistant</div>
                    <div className="text-[10px] text-emerald-500 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online • KEA & VTU Knowledge Base</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                    <span className="text-[10px] text-slate-400 block font-semibold">Student:</span>
                    "I have a KCET rank of 25,000. Which CSE colleges can I get?"
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
                    <span className="text-[10px] text-indigo-500 dark:text-indigo-400 block font-bold">Connect AI:</span>
                    <p className="text-[11px] leading-relaxed">
                      Based on Round 2 historical cutoff archives, here are high-probability recommendations for KCET 25,000:
                    </p>
                    <div className="text-[11px] font-semibold space-y-0.5">
                      <div>• <strong>SIT Tumakuru</strong> - ISE / ECE (Safe - 88% chance)</div>
                      <div>• <strong>BIT Bengaluru</strong> - ECE / Telecom (Moderate - 65% chance)</div>
                      <div>• <strong>DSCE Bengaluru</strong> - ECE / Instrumentation (Moderate - 58% chance)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. VIRTUAL STUDY ROOMS & PEER MENTORSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Study Rooms Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Free Virtual Study Rooms
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Join live group study rooms with interactive whiteboard, collaborative code editor, and student video/audio channels. Prepare for VTU sem exams, KCET counselling, and coding challenges together.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Interactive Whiteboard
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Code Pad
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Group Audio/Video
                </span>
              </div>
            </div>
            <Link
              href="/study-rooms"
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-white dark:text-slate-900 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Enter Virtual Study Rooms</span>
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
                Book 1-on-1 sessions with senior toppers from RVCE, BMSCE, and PESU. Earn money by teaching subjects you love. 100% safe escrow: payment is held safely until the session is completed and verified.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Safe Escrow Workflow
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Verified Tutors
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Dispute Protection
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

      {/* 8. ADVERTISEMENT BANNER SECTION */}
      {ADVERTISEMENTS.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[9px] font-bold text-slate-500 uppercase">
                Sponsored Partner
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {ADVERTISEMENTS[0].title}
              </span>
            </div>
            <a
              href={ADVERTISEMENTS[0].targetUrl}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shrink-0"
            >
              Learn More
            </a>
          </div>
        </section>
      )}

      {/* 9. COMMUNITY HIGHLIGHTS & SUCCESS TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Campus Pulse</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Student Community Feed
            </h2>
          </div>
          <Link
            href="/community"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Open Community Feed</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMUNITY_POSTS.slice(0, 2).map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{post.author.name}</span>
                    {post.author.verifiedBadge && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {post.author.college} • {post.author.branch}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {post.content}
              </p>

              {post.imageUrl && (
                <div className="h-40 rounded-xl overflow-hidden bg-slate-900">
                  <img src={post.imageUrl} alt="post preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500">
                <span>❤️ {post.likesCount} Likes</span>
                <span>💬 {post.commentsCount} Comments</span>
                <Link href="/community" className="text-blue-500 font-semibold hover:underline">
                  Join Discussion →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
