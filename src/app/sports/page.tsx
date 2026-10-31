'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  FileText, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Bookmark, 
  PlusCircle, 
  Check, 
  X, 
  ChevronRight, 
  Activity, 
  Flame, 
  Award, 
  Building2,
  Share2,
  Compass,
  Zap,
  Info
} from 'lucide-react';
import { 
  SPORTS_OPPORTUNITIES, 
  SPORTS_CATEGORIES_LIST, 
  SPORTS_LEVELS_LIST, 
  KARNATAKA_SPORTS_CITIES 
} from '@/data/sportsData';
import { 
  SportsOpportunity, 
  SportType, 
  SportsLevel, 
  SportsCategory, 
  ParticipationType 
} from '@/types/sports';

export default function SportsOpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<SportsOpportunity[]>(SPORTS_OPPORTUNITIES);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('All Sports');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Men' | 'Women' | 'Mixed'>('ALL');
  const [selectedParticipation, setSelectedParticipation] = useState<'ALL' | 'Team' | 'Individual'>('ALL');
  const [feeFilter, setFeeFilter] = useState<'ALL' | 'FREE' | 'PAID'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'OPEN' | 'CLOSING_SOON' | 'TRIALS'>('ALL');

  // Bookmarked IDs
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active Modals
  const [selectedBrochureEvent, setSelectedBrochureEvent] = useState<SportsOpportunity | null>(null);
  const [selectedEligibilityEvent, setSelectedEligibilityEvent] = useState<SportsOpportunity | null>(null);
  const [selectedContactEvent, setSelectedContactEvent] = useState<SportsOpportunity | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Recommendation Engine State
  const [prefSports, setPrefSports] = useState<string[]>(['Cricket', 'Badminton']);
  const [prefSkillLevel, setPrefSkillLevel] = useState<'College Team' | 'Varsity' | 'State' | 'Enthusiast'>('College Team');
  const [prefCity, setPrefCity] = useState('All Cities');

  // New Event Form State
  const [newTitle, setNewTitle] = useState('');
  const [newSport, setNewSport] = useState<SportType>('Cricket');
  const [newLevel, setNewLevel] = useState<SportsLevel>('College');
  const [newCategory, setNewCategory] = useState<SportsCategory>('Men');
  const [newParticipation, setNewParticipation] = useState<ParticipationType>('Team');
  const [newOrganizer, setNewOrganizer] = useState('');
  const [newCity, setNewCity] = useState('Tumakuru');
  const [newVenue, setNewVenue] = useState('');
  const [newRegDeadline, setNewRegDeadline] = useState('2026-11-20T23:59:59');
  const [newEventStart, setNewEventStart] = useState('2026-11-25');
  const [newEventEnd, setNewEventEnd] = useState('2026-11-27');
  const [newIsFree, setNewIsFree] = useState(true);
  const [newRegUrl, setNewRegUrl] = useState('https://studentconnect.karnataka.gov.in/sports/register');
  const [newPhone, setNewPhone] = useState('+91 98450 12345');
  const [newEmail, setNewEmail] = useState('sports@college.edu.in');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleTrackOutboundLink = (opportunityId: string, url: string) => {
    fetch('/api/sports/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ opportunityId, targetUrl: url }),
    }).catch(() => {});
  };

  const toggleBookmark = (id: string, title: string) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed "${title}" from your sports reminders`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`🔔 Reminder set for "${title}"! We'll alert you before deadline.`);
        return [...prev, id];
      }
    });
  };

  // Live Countdown Calculator helper
  const calculateDaysLeft = (deadlineISO: string) => {
    const deadline = new Date(deadlineISO).getTime();
    const now = new Date('2026-10-18T18:00:00').getTime(); // Based on application simulation context
    const diff = deadline - now;
    if (diff <= 0) return { days: 0, hours: 0, text: 'Registration Closed', isExpired: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return { days, hours, text: `${days}d ${hours}h left`, isExpired: false };
  };

  // Filtered Opportunities
  const filteredEvents = useMemo(() => {
    return opportunities.filter((item) => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const searchable = `${item.title} ${item.sport} ${item.level} ${item.organizer} ${item.collegeName || ''} ${item.city} ${item.venue} ${item.tags.join(' ')}`.toLowerCase();
        if (!searchable.includes(query)) return false;
      }
      // Sport
      if (selectedSport !== 'All Sports' && item.sport !== selectedSport) {
        return false;
      }
      // Level
      if (selectedLevel !== 'All Levels' && item.level !== selectedLevel) {
        return false;
      }
      // City
      if (selectedCity !== 'All Cities' && item.city !== selectedCity) {
        return false;
      }
      // Category (Men/Women/Mixed)
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory && item.category !== 'Open') {
        return false;
      }
      // Participation Type (Team / Individual)
      if (selectedParticipation !== 'ALL' && item.participationType !== selectedParticipation && item.participationType !== 'Both') {
        return false;
      }
      // Fee
      if (feeFilter === 'FREE' && !item.isFree) return false;
      if (feeFilter === 'PAID' && item.isFree) return false;

      // Status
      if (statusFilter === 'OPEN' && item.status !== 'Open') return false;
      if (statusFilter === 'CLOSING_SOON' && item.status !== 'Closing Soon') return false;
      if (statusFilter === 'TRIALS' && item.status !== 'Trials Active') return false;

      return true;
    });
  }, [
    opportunities,
    searchQuery,
    selectedSport,
    selectedLevel,
    selectedCity,
    selectedCategory,
    selectedParticipation,
    feeFilter,
    statusFilter
  ]);

  // Personalized Match Recommendations
  const personalizedMatches = useMemo(() => {
    return opportunities.filter((item) => {
      const sportMatch = prefSports.includes(item.sport);
      const cityMatch = prefCity === 'All Cities' || item.city === prefCity;
      return sportMatch && cityMatch;
    }).slice(0, 3);
  }, [opportunities, prefSports, prefCity]);

  // Urgent Deadlines Tracker (< 14 days)
  const urgentDeadlines = useMemo(() => {
    return opportunities
      .filter((ev) => {
        const { isExpired, days } = calculateDaysLeft(ev.registrationDeadline);
        return !isExpired && days <= 18;
      })
      .slice(0, 4);
  }, [opportunities]);

  // Handle Event Submission
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newOrganizer.trim() || !newVenue.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    const created: SportsOpportunity = {
      id: `sp-user-${Date.now()}`,
      title: newTitle,
      sport: newSport,
      level: newLevel,
      category: newCategory,
      participationType: newParticipation,
      organizer: newOrganizer,
      city: newCity,
      state: 'Karnataka',
      venue: newVenue,
      description: `Official collegiate sports opportunity registered by ${newOrganizer} for student athletes across Karnataka.`,
      registrationOpenDate: new Date().toISOString().split('T')[0],
      registrationDeadline: newRegDeadline,
      eventStartDate: newEventStart,
      eventEndDate: newEventEnd,
      isFree: newIsFree,
      entryFee: newIsFree ? 'Free Registration' : 'Standard Team Fee',
      eligibility: {
        rules: [
          'Must be a valid enrolled college student with institution ID',
          'Follow standard official federation and tournament rules',
          'Consent letter from college Physical Education Director required'
        ],
        scheme: 'Karnataka Higher Education Collegiate Scheme'
      },
      links: {
        registerUrl: newRegUrl,
        brochureUrl: '#',
        officialWebsite: newRegUrl
      },
      contact: {
        name: 'Authorized Sports Officer',
        role: 'Sports Secretary',
        phone: newPhone,
        email: newEmail
      },
      prizes: {
        cashPool: 'Cash Prizes & Trophies for Top Teams',
        trophies: 'Championship Rolling Trophy',
        certificates: 'Official Merit & Participation Certificates'
      },
      status: 'Open',
      isVerified: true,
      badge: 'Community Verified',
      tags: [newSport, newLevel, newCity, 'Verified Tournament'],
      bannerImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
    };

    setOpportunities((prev) => [created, ...prev]);
    setIsSubmitModalOpen(false);
    showToast(`🎉 "${newTitle}" has been verified and added to the sports hub!`);

    // Reset Form
    setNewTitle('');
    setNewOrganizer('');
    setNewVenue('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* 1. HERO & STRATEGIC BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/50">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Next Phase: Sports & Athletics Ecosystem</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Karnataka Collegiate <br />
                <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 bg-clip-text text-transparent">
                  Sports Opportunities Hub
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Centralized discovery for inter-college tournaments, VTU championships, Khelo India selection trials, and national athletic meets. Access verified brochures, eligibility criteria, and direct official registration links without missing a single deadline.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#tournaments"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Browse Competitions</span>
                </a>
                
                <a
                  href="#deadline-tracker"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                >
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Deadline Tracker</span>
                </a>

                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Post Sports Event</span>
                </button>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Trophy className="w-4 h-4" />
                  <span>Verified Events</span>
                </div>
                <div className="text-2xl font-extrabold text-white mt-1">45+</div>
                <div className="text-[11px] text-slate-400">Inter-College & VTU</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                  <Activity className="w-4 h-4" />
                  <span>Disciplines</span>
                </div>
                <div className="text-2xl font-extrabold text-white mt-1">11+</div>
                <div className="text-[11px] text-slate-400">Cricket, Mat Kabaddi, Track</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>Prize Pool</span>
                </div>
                <div className="text-2xl font-extrabold text-white mt-1">₹8.5L+</div>
                <div className="text-[11px] text-slate-400">Total Cash & Medals</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official Links</span>
                </div>
                <div className="text-2xl font-extrabold text-white mt-1">100%</div>
                <div className="text-[11px] text-slate-400">Direct Verified Reg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE SPORTS DEADLINE TRACKER BANNER */}
      <section id="deadline-tracker" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="rounded-2xl border border-amber-300 dark:border-amber-900/60 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/50 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-slate-900 p-4 shadow-xl">
          <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-amber-200 dark:border-amber-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-md">
                <Clock className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-amber-200 uppercase tracking-wider flex items-center gap-2">
                  <span>Sports Deadline Tracker</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                </h2>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Registration closing soon for upcoming university trials and state tournaments
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
              Closing This Month
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {urgentDeadlines.map((item) => {
              const countdown = calculateDaysLeft(item.registrationDeadline);
              return (
                <div 
                  key={item.id}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                      <span className="text-blue-600 dark:text-blue-400">{item.sport} • {item.level}</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-extrabold">
                        {countdown.text}
                      </span>
                    </div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1 truncate">
                      <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
                      <span>{item.venue}, {item.city}</span>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1 text-[11px]">
                    <span className="text-slate-500 text-[10px]">
                      Ends: {new Date(item.registrationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                    <a
                      href={item.links.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackOutboundLink(item.id, item.links.registerUrl)}
                      className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>Register</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PERSONALIZED SPORTS RECOMMENDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-4 sm:p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-indigo-100 dark:border-indigo-900/40">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Personalized Sports Recommendations
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Select your preferred sport, district, and experience level to see tailored tournament matches
              </p>
            </div>

            {/* Preference Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-medium">District:</span>
                <select
                  value={prefCity}
                  onChange={(e) => setPrefCity(e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-semibold"
                >
                  {KARNATAKA_SPORTS_CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-medium">My Level:</span>
                <select
                  value={prefSkillLevel}
                  onChange={(e) => setPrefSkillLevel(e.target.value as any)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-semibold"
                >
                  <option value="College Team">College Team Player</option>
                  <option value="Varsity">University / Varsity Player</option>
                  <option value="State">State / National Rep</option>
                  <option value="Enthusiast">Enthusiast / Beginner</option>
                </select>
              </div>
            </div>
          </div>

          {/* Preferred Sport Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-3">
            <span className="text-xs text-slate-500 font-medium mr-1">Favorite Sports:</span>
            {SPORTS_CATEGORIES_LIST.slice(1, 8).map((sp) => {
              const isSelected = prefSports.includes(sp);
              return (
                <button
                  key={sp}
                  onClick={() => {
                    setPrefSports((prev) => 
                      isSelected ? prev.filter((s) => s !== sp) : [...prev, sp]
                    );
                  }}
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-all flex items-center gap-1 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                  <span>{sp}</span>
                </button>
              );
            })}
          </div>

          {/* Recommended Cards */}
          {personalizedMatches.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              {personalizedMatches.map((m) => (
                <div
                  key={m.id}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">{m.sport} • {m.level}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                        <Sparkles className="w-3 h-3" />
                        <span>98% Match</span>
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{m.title}</div>
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">{m.organizer}</div>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 text-[10px]">
                      {m.isFree ? 'Free Registration' : m.entryFee}
                    </span>
                    <button
                      onClick={() => setSelectedEligibilityEvent(m)}
                      className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. MAIN TOURNAMENTS SECTION WITH SMART FILTERS */}
      <section id="tournaments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Search Bar & Multi-Dimensional Filter Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          
          {/* Top row: Instant Search + City + Level */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tournaments, colleges (e.g. VTU, SIT, CIT, RVCE, Kanteerava)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-semibold text-slate-700 dark:text-slate-300 w-full md:w-auto"
              >
                {SPORTS_LEVELS_LIST.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-semibold text-slate-700 dark:text-slate-300 w-full md:w-auto"
              >
                {KARNATAKA_SPORTS_CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sport Category Tabs Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {SPORTS_CATEGORIES_LIST.map((sp) => {
              const active = selectedSport === sp;
              return (
                <button
                  key={sp}
                  onClick={() => setSelectedSport(sp)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {sp}
                </button>
              );
            })}
          </div>

          {/* Secondary Filter Pills: Category, Participation, Fee, Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              {/* Category */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg">
                {(['ALL', 'Men', 'Women', 'Mixed'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Participation Type */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg">
                {(['ALL', 'Team', 'Individual'] as const).map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setSelectedParticipation(pt)}
                    className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      selectedParticipation === pt
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>

              {/* Fee filter */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg">
                <button
                  onClick={() => setFeeFilter('ALL')}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${feeFilter === 'ALL' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-xs' : 'text-slate-600'}`}
                >
                  All Fees
                </button>
                <button
                  onClick={() => setFeeFilter('FREE')}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${feeFilter === 'FREE' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-xs' : 'text-slate-600'}`}
                >
                  Free Only
                </button>
              </div>

              {/* Status filter */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg">
                <button
                  onClick={() => setStatusFilter('ALL')}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${statusFilter === 'ALL' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-xs' : 'text-slate-600'}`}
                >
                  All Status
                </button>
                <button
                  onClick={() => setStatusFilter('CLOSING_SOON')}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${statusFilter === 'CLOSING_SOON' ? 'bg-white dark:bg-slate-900 text-rose-600 shadow-xs' : 'text-slate-600'}`}
                >
                  Closing Soon
                </button>
                <button
                  onClick={() => setStatusFilter('TRIALS')}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${statusFilter === 'TRIALS' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-xs' : 'text-slate-600'}`}
                >
                  Selection Trials
                </button>
              </div>
            </div>

            {/* Clear filters shortcut */}
            {(selectedSport !== 'All Sports' || selectedLevel !== 'All Levels' || selectedCity !== 'All Cities' || selectedCategory !== 'ALL' || selectedParticipation !== 'ALL' || feeFilter !== 'ALL' || statusFilter !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedSport('All Sports');
                  setSelectedLevel('All Levels');
                  setSelectedCity('All Cities');
                  setSelectedCategory('ALL');
                  setSelectedParticipation('ALL');
                  setFeeFilter('ALL');
                  setStatusFilter('ALL');
                  setSearchQuery('');
                }}
                className="text-xs text-rose-600 hover:underline font-bold"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mt-6 mb-4">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
            Showing <span className="text-blue-600 dark:text-blue-400 font-extrabold">{filteredEvents.length}</span> sports tournaments & athletic trials
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Verified Physical Education Circulars</span>
          </div>
        </div>

        {/* 5. OPPORTUNITIES GRID */}
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Trophy className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching sports opportunities found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              Try adjusting your sport discipline, district filter, or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedSport('All Sports');
                setSelectedLevel('All Levels');
                setSelectedCity('All Cities');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((ev) => {
              const countdown = calculateDaysLeft(ev.registrationDeadline);
              const isBookmarked = bookmarkedIds.includes(ev.id);

              return (
                <div
                  key={ev.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Banner Image & Badges */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                    <img
                      src={ev.bannerImage || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Top pill badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-md uppercase tracking-wider">
                          {ev.sport}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg text-white shadow-sm ${
                          ev.level === 'National' 
                            ? 'bg-rose-600' 
                            : ev.level === 'University' 
                            ? 'bg-indigo-600' 
                            : ev.level === 'State' 
                            ? 'bg-amber-600' 
                            : 'bg-emerald-600'
                        }`}>
                          {ev.level} Level
                        </span>
                      </div>

                      {/* Bookmark button */}
                      <button
                        onClick={() => toggleBookmark(ev.id, ev.title)}
                        className={`p-2 rounded-xl backdrop-blur-md transition-colors ${
                          isBookmarked
                            ? 'bg-amber-500 text-white shadow-md'
                            : 'bg-slate-900/60 hover:bg-slate-900 text-white'
                        }`}
                        title={isBookmarked ? 'Remove reminder' : 'Set deadline reminder'}
                      >
                        <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    {/* Bottom overlay: Countdown & Category */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="text-[11px] font-semibold text-slate-200">
                        {ev.category} • {ev.participationType}
                      </span>

                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        countdown.isExpired
                          ? 'bg-slate-700 text-slate-300'
                          : countdown.days <= 7
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-amber-500 text-slate-950 font-black'
                      }`}>
                        <Clock className="w-3 h-3" />
                        <span>{countdown.text}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Organizer */}
                      <div className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{ev.organizer}</span>
                      </div>

                      {/* Tournament Title */}
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {ev.title}
                      </h3>

                      {/* Venue & Location */}
                      <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400 mt-0.5" />
                        <span className="line-clamp-1">{ev.venue}, {ev.city}</span>
                      </div>

                      {/* Key Dates & Entry Fee pill */}
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Tournament Dates:</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            {new Date(ev.eventStartDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} - {new Date(ev.eventEndDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Registration Fee:</span>
                          <span className={`font-bold ${ev.isFree ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-200'}`}>
                            {ev.isFree ? 'Free Registration' : ev.entryFee?.split('(')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Prize / Perks Pill */}
                      {ev.prizes?.cashPool && (
                        <div className="mt-2.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 flex items-center gap-1.5 text-[11px] text-amber-900 dark:text-amber-300">
                          <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span className="font-semibold truncate">{ev.prizes.cashPool}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Actions: Direct links and Modals */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      
                      {/* Primary Action Button: Register Now */}
                      <div className="flex items-center gap-2">
                        <a
                          href={ev.links.registerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleTrackOutboundLink(ev.id, ev.links.registerUrl)}
                          className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-colors flex items-center justify-center gap-1.5 text-center"
                        >
                          <span>Register Now</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* View Brochure */}
                        <button
                          onClick={() => setSelectedBrochureEvent(ev)}
                          className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors flex items-center gap-1"
                          title="View Official Circular / Brochure"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-500" />
                          <span>Brochure</span>
                        </button>
                      </div>

                      {/* Secondary Action Links: Eligibility & Contact */}
                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <button
                          onClick={() => setSelectedEligibilityEvent(ev)}
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 font-semibold flex items-center gap-1"
                        >
                          <Info className="w-3 h-3 text-slate-400" />
                          <span>View Eligibility</span>
                        </button>

                        <button
                          onClick={() => setSelectedContactEvent(ev)}
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 font-semibold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>Contact Organizer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 6. MODAL 1: OFFICIAL BROCHURE VIEWER */}
      {selectedBrochureEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Official Tournament Circular & Rulebook
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {selectedBrochureEvent.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedBrochureEvent(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span>Sanctioned by: {selectedBrochureEvent.organizer}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedBrochureEvent.description}
                </p>
              </div>

              {/* Tournament Schedule Timeline */}
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">
                  Key Milestones & Schedule
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <span className="text-[10px] text-slate-400 block font-semibold">Registration Opened</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBrochureEvent.registrationOpenDate}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40">
                    <span className="text-[10px] text-rose-500 block font-semibold">Last Date To Apply</span>
                    <span className="font-bold text-rose-700 dark:text-rose-300">
                      {new Date(selectedBrochureEvent.registrationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40">
                    <span className="text-[10px] text-indigo-500 block font-semibold">Trial / Weigh-in Date</span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300">
                      {selectedBrochureEvent.trialDate || 'On-spot reporting'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40">
                    <span className="text-[10px] text-emerald-500 block font-semibold">Competition Matches</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">
                      {new Date(selectedBrochureEvent.eventStartDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} - {new Date(selectedBrochureEvent.eventEndDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tournament Perks & Lodging */}
              {selectedBrochureEvent.prizes?.perks && (
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">
                    Athlete Amenities & Provisions
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedBrochureEvent.prizes.perks.map((p, i) => (
                      <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verification Stamp */}
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between text-xs text-emerald-900 dark:text-emerald-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified by Student Connect Sports Moderation Board</span>
                </div>
                <span className="font-mono text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded font-bold">
                  AUTH-VERIFIED
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-3">
              <a
                href={selectedBrochureEvent.links.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:underline flex items-center gap-1"
              >
                <span>Visit Organizer Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    showToast('📥 Downloading official tournament brochure PDF...');
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <a
                  href={selectedBrochureEvent.links.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <span>Proceed to Official Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL 2: ELIGIBILITY & RULES VIEWER */}
      {selectedEligibilityEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/30">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500 text-white shadow-md">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Player Eligibility & Participation Guidelines
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {selectedEligibilityEvent.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedEligibilityEvent(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-300 space-y-1">
                <div className="font-extrabold text-xs uppercase tracking-wide">Age & Academic Standard:</div>
                <div className="text-xs">{selectedEligibilityEvent.eligibility.ageLimit || 'Standard Collegiate Age (Under 25)'}</div>
                {selectedEligibilityEvent.eligibility.scheme && (
                  <div className="text-[11px] opacity-90">{selectedEligibilityEvent.eligibility.scheme}</div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">
                  Competition Rules & Format:
                </h4>
                <ul className="space-y-2">
                  {selectedEligibilityEvent.eligibility.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedEligibilityEvent.eligibility.requiredDocuments && (
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">
                    Mandatory Documentation To Carry:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedEligibilityEvent.eligibility.requiredDocuments.map((doc, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                        📄 {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-end">
              <button
                onClick={() => setSelectedEligibilityEvent(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold"
              >
                Close Rulebook
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. MODAL 3: CONTACT ORGANIZER POPOVER */}
      {selectedContactEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Official Sports Contact Details
                </h3>
              </div>
              <button
                onClick={() => setSelectedContactEvent(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {selectedContactEvent.contact.name}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  {selectedContactEvent.contact.role}
                </div>
                {selectedContactEvent.contact.department && (
                  <div className="text-[11px] text-slate-500 mt-1">{selectedContactEvent.contact.department}</div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Official Helpline Phone</span>
                    <a href={`tel:${selectedContactEvent.contact.phone}`} className="font-bold text-slate-900 dark:text-white hover:underline text-xs">
                      {selectedContactEvent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Department Email</span>
                    <a href={`mailto:${selectedContactEvent.contact.email}`} className="font-bold text-slate-900 dark:text-white hover:underline text-xs">
                      {selectedContactEvent.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Official Ground / Venue</span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      {selectedContactEvent.venue}, {selectedContactEvent.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button
                onClick={() => setSelectedContactEvent(null)}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. MODAL 4: ADMIN / ORGANIZER SUBMIT SPORTS OPPORTUNITY */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base">
                    Publish Sports Tournament / Trial
                  </h3>
                  <p className="text-[11px] text-emerald-100">
                    Submit verified college or university sports announcements
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Tournament / Trial Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. VTU South Zone Inter-College Kabaddi Trophy 2026"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Sport Discipline *
                  </label>
                  <select
                    value={newSport}
                    onChange={(e) => setNewSport(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  >
                    {SPORTS_CATEGORIES_LIST.slice(1).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Level *
                  </label>
                  <select
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  >
                    <option value="College">College-Level</option>
                    <option value="University">University (VTU)</option>
                    <option value="State">State-Level</option>
                    <option value="National">National Championship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Mixed">Mixed</option>
                    <option value="Open">Open</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Participation Format *
                  </label>
                  <select
                    value={newParticipation}
                    onChange={(e) => setNewParticipation(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  >
                    <option value="Team">Team Event</option>
                    <option value="Individual">Individual Event</option>
                    <option value="Both">Both (Singles/Doubles/Team)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Organizing College / Body *
                  </label>
                  <input
                    type="text"
                    required
                    value={newOrganizer}
                    onChange={(e) => setNewOrganizer(e.target.value)}
                    placeholder="e.g. CIT Gubbi Physical Education Dept"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    District / City *
                  </label>
                  <select
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  >
                    {KARNATAKA_SPORTS_CITIES.slice(1).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Grounds / Stadium Venue *
                </label>
                <input
                  type="text"
                  required
                  value={newVenue}
                  onChange={(e) => setNewVenue(e.target.value)}
                  placeholder="e.g. CIT Outdoor Stadium, NH 206, B.H. Road"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Reg Deadline *
                  </label>
                  <input
                    type="date"
                    required
                    value={newRegDeadline.split('T')[0]}
                    onChange={(e) => setNewRegDeadline(`${e.target.value}T23:59:59`)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-[11px]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newEventStart}
                    onChange={(e) => setNewEventStart(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-[11px]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    End Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newEventEnd}
                    onChange={(e) => setNewEventEnd(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-[11px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Registration URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={newRegUrl}
                    onChange={(e) => setNewRegUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Helpline Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isFreeCheck"
                  checked={newIsFree}
                  onChange={(e) => setNewIsFree(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="isFreeCheck" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  This sports opportunity has Free Registration for participants
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
                >
                  Publish Verified Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 10. FUTURE VISION: ATHLETE PROFILES & SPORTS PORTFOLIO TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white border border-indigo-800/50 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold border border-white/10">
              <Compass className="w-3.5 h-3.5" />
              <span>Future Strategic Horizon</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Coming in Next Phase: Athlete Digital Portfolios & College Team Rosters
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are expanding the sports ecosystem to include verifiable Athlete USN profiles, inter-college medal showcases, college team directories, sports quota guidance for engineering admissions, and talent scout connections with official federations.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs px-3 py-1 rounded-xl bg-white/10 text-slate-200 font-semibold border border-white/10">
                🏅 Verified Athlete USN Badges
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-white/10 text-slate-200 font-semibold border border-white/10">
                🏆 College Trophy Cabinet
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-white/10 text-slate-200 font-semibold border border-white/10">
                🎓 Sports Quota & Scholarship Hub
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-white/10 text-slate-200 font-semibold border border-white/10">
                🤝 Talent Scout Trials Network
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
