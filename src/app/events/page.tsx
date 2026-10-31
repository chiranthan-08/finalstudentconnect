'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  Clock, 
  Search, 
  CheckCircle2, 
  PlusCircle, 
  ArrowRight,
  Flame,
  Award,
  Building2,
  Tag,
  FileText,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { TECHNICAL_EVENTS } from '@/data/mockData';
import { COLLEGE_EVENTS } from '@/data/eventsData';
import { TechnicalEvent, CollegeEvent } from '@/types';

export default function EventsPage() {
  const [events, setEvents] = useState<TechnicalEvent[]>(TECHNICAL_EVENTS);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'college_fests' | 'hackathon_portal'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // College Events Filters
  const [collegeFestCategory, setCollegeFestCategory] = useState<'ALL' | 'Technical' | 'Non-Technical'>('ALL');
  const [selectedCollegeId, setSelectedCollegeId] = useState<string>('ALL');

  const collegeList = useMemo(() => {
    const map = new Map<string, string>();
    COLLEGE_EVENTS.forEach(e => {
      if (e.collegeId && !map.has(e.collegeId)) {
        map.set(e.collegeId, e.collegeName || e.collegeId);
      }
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, []);

  const filteredCollegeEvents = useMemo(() => {
    return COLLEGE_EVENTS.filter((ev) => {
      if (selectedCollegeId !== 'ALL' && ev.collegeId !== selectedCollegeId) {
        return false;
      }
      if (collegeFestCategory !== 'ALL' && ev.category !== collegeFestCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const searchable = `${ev.title} ${ev.collegeName} ${ev.theme || ''} ${ev.category} ${ev.eventType} ${ev.department || ''} ${ev.domains?.join(' ') || ''}`.toLowerCase();
        const matches = tokens.every(tok => searchable.includes(tok));
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedCollegeId, collegeFestCategory, searchQuery]);

  const filteredEvents = events.filter(ev => {
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const fullSearchable = `${ev.title} ${ev.organizer} ${ev.type} ${ev.location} ${ev.description}`.toLowerCase();
      const allMatch = tokens.every(tok => fullSearchable.includes(tok));
      if (!allMatch) return false;
    }
    return true;
  });

  // Team Finder state for Hackathon
  const [teams, setTeams] = useState<{ id: string; teamName: string; lookingFor: string; college: string; leader: string }[]>([
    { id: 't1', teamName: 'NeuroVision Tech', lookingFor: '1 UI/UX Designer (Figma)', college: 'RVCE Bengaluru', leader: 'Prajwal Kulkarni' },
    { id: 't2', teamName: 'AgroSense KA', lookingFor: '1 Embedded Systems / IoT Dev', college: 'SJCE Mysuru', leader: 'Varun Gowda' },
    { id: 't3', teamName: 'FinNova Squad', lookingFor: '1 Go / Cloud Backend Builder', college: 'PES University', leader: 'Ananya S.' },
  ]);
  const [newTeamName, setNewTeamName] = useState('');
  const [newLookingFor, setNewLookingFor] = useState('');

  const handleRegisterEvent = (id: string) => {
    setRegisteredEvents(prev => [...prev, id]);
  };

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamName.trim() || !newLookingFor.trim()) return;

    setTeams([
      ...teams,
      {
        id: 'team-' + Date.now(),
        teamName: newTeamName,
        lookingFor: newLookingFor,
        college: 'Karnataka Engineering Consortium',
        leader: 'You',
      },
    ]);
    setNewTeamName('');
    setNewLookingFor('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4" />
            <span>Karnataka Tech Competitions & Fests</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Technical Events & Hackathons Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Compete in statewide hackathons, form cross-campus teams, and win prizes.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeTab === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveTab('college_fests')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'college_fests' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>🎪 College Fests & Hackathons ({COLLEGE_EVENTS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('hackathon_portal')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
              activeTab === 'hackathon_portal' ? 'bg-amber-500 text-black shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Annual Hackathon 2025</span>
          </button>
        </div>
      </div>

      {/* ANNUAL HACKATHON 2025 FLAGSHIP SECTION */}
      <div className="rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-purple-600/15 to-blue-600/15 p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider">
                FLAGSHIP ANNUAL EVENT
              </span>
              <span className="text-xs font-bold text-amber-500">₹2,50,000 Cash Prize Pool</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Student Connect Annual Hackathon 2025
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Karnataka’s premier 36-hour hackathon. 4 Major Tracks: Smart Karnataka & Governance, AgriTech for Regional Farmers, AI in Healthcare, and Campus Productivity.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>June 14 - 15, 2025</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>RVCE Auditorium / Hybrid Online</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-blue-500" />
                <span>840+ Students Registered</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card text-center space-y-3 shrink-0 shadow-xl">
            <span className="text-xs font-bold uppercase text-slate-400">Team Size: 2 - 4 Members</span>
            <div className="text-2xl font-black text-amber-500">Registration Open</div>
            {registeredEvents.includes('event-hackathon-2025') ? (
              <span className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Registered Successfully</span>
              </span>
            ) : (
              <button
                onClick={() => handleRegisterEvent('event-hackathon-2025')}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Trophy className="w-4 h-4" />
                <span>Register for Hackathon</span>
              </button>
            )}
          </div>
        </div>

        {/* Cross-Campus Team Formation Board */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>Cross-College Team Formation Board</span>
            </h3>
            <span className="text-xs text-slate-400">Find teammates from other colleges</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teams.map((t) => (
              <div key={t.id} className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.teamName}</h4>
                  <span className="text-[10px] text-blue-600 font-bold">{t.college}</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold">
                  Looking for: {t.lookingFor}
                </div>
                <div className="flex justify-between items-center pt-1 text-[11px] text-slate-500">
                  <span>Leader: {t.leader}</span>
                  <button
                    onClick={() => alert(`Request sent to team leader ${t.leader}! Check your Study Room notifications.`)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Request to Join →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Create Team Form */}
          <form onSubmit={handleCreateTeam} className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2 text-xs">
            <input
              type="text"
              required
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Your Team Name (e.g. CodeWarriors KA)..."
              className="flex-1 p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
            <input
              type="text"
              required
              value={newLookingFor}
              onChange={(e) => setNewLookingFor(e.target.value)}
              placeholder="Role Needed (e.g. 1 UI Designer or 1 Backend Dev)..."
              className="flex-1 p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              Post Team Request
            </button>
          </form>
        </div>
      </div>

      {/* ALL EVENTS LIST */}
      {activeTab === 'all' && (
        <div className="space-y-6">
          {/* Featured College Fests Hub Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-amber-900/20 border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider">
                  COLLEGE EVENTS HUB
                </span>
                <span className="text-xs font-bold text-amber-500">
                  CIT Buildathon 2.0 • Advith 2K26 • Kannada Rajyotsava & more
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Institutional Technical & Cultural Fests Across Karnataka
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore college-hosted hackathons, robotics workshops, and cultural extravanganzas with downloadable circulars, official brochures, and direct team registrations.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('college_fests')}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Explore {COLLEGE_EVENTS.length} College Fests</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-extrabold text-lg text-slate-900 dark:text-white">
              Upcoming Technical Fests & Ideathons
            </h2>
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, tracks, fests..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="p-10 rounded-2xl glass-card text-center text-xs text-slate-400">
              No technical events found matching "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-900">
                    <img src={ev.bannerUrl} alt={ev.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-extrabold">
                        {ev.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] text-slate-400 font-semibold">{ev.organizer}</div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">{ev.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {ev.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Prize Pool</span>
                        <div className="font-black text-amber-500">₹{ev.prizePoolINR.toLocaleString()}</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Date & Mode</span>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{ev.date}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleRegisterEvent(ev.id)}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{registeredEvents.includes(ev.id) ? 'Registered ✓' : 'Register Now'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      )}

      {/* COLLEGE FESTS & HACKATHONS TAB */}
      {activeTab === 'college_fests' && (
        <div className="space-y-6">
          {/* Header & Filter Controls */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <span>College-Hosted Technical & Cultural Events</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Showing official competitions, hackathons, workshops, and fests from individual colleges across Karnataka.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold shrink-0">
                <button
                  onClick={() => setCollegeFestCategory('ALL')}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    collegeFestCategory === 'ALL'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  All ({COLLEGE_EVENTS.length})
                </button>
                <button
                  onClick={() => setCollegeFestCategory('Technical')}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                    collegeFestCategory === 'Technical'
                      ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>⚡ Technical</span>
                </button>
                <button
                  onClick={() => setCollegeFestCategory('Non-Technical')}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                    collegeFestCategory === 'Non-Technical'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>🎭 Non-Tech & Fests</span>
                </button>
              </div>
            </div>

            {/* College Selection Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-400 text-[11px] uppercase tracking-wider mr-1">Filter College:</span>
              <button
                onClick={() => setSelectedCollegeId('ALL')}
                className={`px-3 py-1 rounded-xl transition-all ${
                  selectedCollegeId === 'ALL'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                All Colleges
              </button>
              {collegeList.map((col) => (
                <button
                  key={col.id}
                  onClick={() => setSelectedCollegeId(col.id)}
                  className={`px-3 py-1 rounded-xl transition-all ${
                    selectedCollegeId === col.id
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {col.name.split(' ')[0]}... ({COLLEGE_EVENTS.filter(e => e.collegeId === col.id).length})
                </button>
              ))}
            </div>
          </div>

          {/* Special Banner for CIT BUILDATHON-2.0 2K26 */}
          {(selectedCollegeId === 'ALL' || selectedCollegeId === 'cit-tumkur') && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 border-2 border-amber-500/40 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                    🚨 REGISTRATION DEADLINE: 25th OCTOBER 2026
                  </span>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                    Channabasaveshwara Institute of Technology (CIT Gubbi)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  BUILDATHON-2.0 2K26 — National Level 24-Hour Hackathon
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  "Building Intelligent Solutions for a Smarter, Sustainable & Secure Tomorrow". 24 Hours continuous building with ₹30,000 worth prize pool. Official brochure and online registration are now open!
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
                  <span>📅 <strong>Dates:</strong> 30–31 October 2026</span>
                  <span>•</span>
                  <span>📍 <strong>Venue:</strong> CIT Campus, Gubbi, Tumakuru</span>
                  <span>•</span>
                  <span>💳 <strong>Fee:</strong> ₹500 / Team (3–4 Members)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <Link
                  href="/colleges/cit-tumkur?tab=events"
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>View Brochure & Register</span>
                </Link>
                <a
                  href="/images/events/cit-buildathon-2026.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-2xl border border-amber-500/50 hover:bg-amber-500/10 text-amber-800 dark:text-amber-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Official Circular</span>
                </a>
              </div>
            </div>
          )}

          {/* Grid of College Events */}
          {filteredCollegeEvents.length === 0 ? (
            <div className="p-12 text-center glass-card rounded-3xl border border-slate-200 dark:border-slate-800 text-xs text-slate-400">
              No college events match the selected criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCollegeEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                      <img
                        src={ev.bannerUrl}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          ev.category === 'Technical'
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-purple-600 text-white'
                        }`}>
                          {ev.category === 'Technical' ? '⚡ Tech' : '🎭 Non-Tech'}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                          {ev.eventType}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-[10px] text-blue-300 font-mono font-bold block truncate">
                          {ev.collegeName}
                        </span>
                        <h3 className="font-extrabold text-sm line-clamp-1">
                          {ev.title}
                        </h3>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 space-y-3 text-xs">
                      {ev.theme && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 italic line-clamp-2">
                          "{ev.theme}"
                        </p>
                      )}

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Dates</span>
                          <span className="font-extrabold text-slate-800 dark:text-slate-200 line-clamp-1">{ev.eventDate}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                          <span className="text-[9px] uppercase font-bold text-rose-500 block">Deadline</span>
                          <span className="font-extrabold text-rose-700 dark:text-rose-300 line-clamp-1">{ev.registrationDeadline}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                        <span><strong>Prize:</strong> {ev.prizePool}</span>
                        <span><strong>Fee:</strong> {ev.registrationFee}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="p-4 pt-0 space-y-2">
                    <Link
                      href={`/colleges/${ev.collegeId}?tab=events`}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>View College Portal & Register</span>
                    </Link>

                    {ev.brochureUrl && (
                      <a
                        href={ev.brochureUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center gap-1"
                      >
                        <FileText className="w-3 h-3 text-blue-500" />
                        <span>View Official Brochure Circular</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
