'use client';

import React, { useState } from 'react';
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
  Award
} from 'lucide-react';
import { TECHNICAL_EVENTS } from '@/data/mockData';
import { TechnicalEvent } from '@/types';

export default function EventsPage() {
  const [events, setEvents] = useState<TechnicalEvent[]>(TECHNICAL_EVENTS);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'hackathon_portal'>('all');

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
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-xl transition-all ${
              activeTab === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveTab('hackathon_portal')}
            className={`px-4 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
              activeTab === 'hackathon_portal' ? 'bg-amber-500 text-black shadow-sm' : 'text-slate-600 dark:text-slate-400'
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
        <div className="space-y-4">
          <h2 className="font-extrabold text-lg text-slate-900 dark:text-white">
            Upcoming Technical Fests & Ideathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((ev) => (
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
        </div>
      )}

    </div>
  );
}
