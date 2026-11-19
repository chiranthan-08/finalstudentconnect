'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink, 
  ShieldCheck, 
  Bookmark, 
  Star, 
  TrendingUp, 
  Users, 
  Building2, 
  ArrowLeft,
  Sparkles,
  Award,
  CheckCircle2, 
  Calendar, 
  AlertCircle,
  Camera,
  Eye,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Trophy,
  Tag,
  FileText,
  Download,
  QrCode,
  Send,
  Share2,
  AlertTriangle,
  Filter,
  Search,
  Navigation
} from 'lucide-react';
import { COLLEGES_DATA, getEventsByCollegeId } from '@/data/mockData';
import { CollegeGoogleMap } from '@/components/colleges/CollegeGoogleMap';
import { CollegeEvent } from '@/types';

function CollegeDetailContent() {
  const params = useParams();
  const router = useRouter();
  const rawCollegeId = params.id as string;
  const collegeId = rawCollegeId === 'ssit-tumakuru' ? 'ssit-tumkur' : rawCollegeId;
  const { savedColleges, toggleSaveCollege } = useAuth();

  const college = COLLEGES_DATA.find(c => c.id === collegeId || c.id === rawCollegeId) || COLLEGES_DATA[0];
  const isSaved = savedColleges.includes(college.id);

  // College Events (Technical & Non-Technical)
  const collegeEvents = useMemo(() => {
    return getEventsByCollegeId(college.id);
  }, [college.id]);

  const searchParams = useSearchParams();
  const validTabs = ['events', 'gallery', 'directions', 'cutoffs', 'placements', 'branches', 'admission'];
  const urlTab = searchParams.get('tab') as 'events' | 'gallery' | 'directions' | 'cutoffs' | 'placements' | 'branches' | 'admission' | null;
  const defaultTab = (urlTab && validTabs.includes(urlTab))
    ? urlTab
    : (collegeEvents.length > 0 ? 'events' : 'gallery');
  const [activeTab, setActiveTab] = useState<'events' | 'gallery' | 'directions' | 'cutoffs' | 'placements' | 'branches' | 'admission'>(defaultTab);

  React.useEffect(() => {
    const tabFromUrl = searchParams.get('tab') as any;
    if (tabFromUrl && validTabs.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);
  const [eventCategoryFilter, setEventCategoryFilter] = useState<'ALL' | 'Technical' | 'Non-Technical'>('ALL');
  const [cutoffCategory, setCutoffCategory] = useState<'gm' | 'twoA' | 'twoB' | 'threeA' | 'threeB' | 'sc' | 'st'>('gm');
  
  // Lightbox & Modal States
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<{ url: string; title: string; category?: string; caption?: string } | null>(null);
  const [selectedBrochure, setSelectedBrochure] = useState<CollegeEvent | null>(null);
  const [registeringEvent, setRegisteringEvent] = useState<CollegeEvent | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState<{
    eventId: string;
    regId: string;
    teamName: string;
    leadName: string;
  } | null>(null);

  // Direct Registration Form State
  const [regForm, setRegForm] = useState({
    teamName: '',
    leadName: '',
    leadUsn: '',
    leadCollege: college.name,
    leadEmail: '',
    leadPhone: '',
    branch: '',
    semester: '5th Semester',
    member2: '',
    member3: '',
    member4: '',
    domain: '',
    ideaSummary: '',
  });

  const technicalCount = useMemo(() => collegeEvents.filter(e => e.category === 'Technical').length, [collegeEvents]);
  const nonTechnicalCount = useMemo(() => collegeEvents.filter(e => e.category === 'Non-Technical').length, [collegeEvents]);

  const filteredCollegeEvents = useMemo(() => {
    if (eventCategoryFilter === 'ALL') return collegeEvents;
    return collegeEvents.filter(ev => ev.category === eventCategoryFilter);
  }, [collegeEvents, eventCategoryFilter]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeringEvent) return;
    const generatedId = `REG-${registeringEvent.collegeId.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-4)}`;
    setRegistrationSuccess({
      eventId: registeringEvent.id,
      regId: generatedId,
      teamName: regForm.teamName || 'Solo Participant',
      leadName: regForm.leadName,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to College Directory</span>
        </button>
      </div>

      {/* College Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="relative h-80 sm:h-96 w-full">
          <img
            src={college.heroImage}
            alt={college.name}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85';
            }}
            className="w-full h-full object-cover"
          />
          {/* Soft, crystal-clear gradient that keeps the college campus photo vivid */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-extrabold shadow-sm">
                Rank #{college.accreditations.karnatakaRank} in Karnataka
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-bold">
                NAAC {college.accreditations.naacGrade}
              </span>
              {college.accreditations.nirfRank && (
                <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-xs font-bold">
                  NIRF #{college.accreditations.nirfRank}
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
                Code: {college.code}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {college.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>{college.location.city}, {college.location.district}</span>
              </div>
              <span>•</span>
              <span>{college.collegeType} Institution</span>
              <span>•</span>
              <span>{college.affiliation}</span>
              <span>•</span>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{college.rating} ({college.reviewCount} student reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {collegeEvents.length > 0 && (
              <button
                onClick={() => setActiveTab('events')}
                className="px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-lg border border-amber-300 animate-pulse"
                title="View college running & featured events"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>🎪 {collegeEvents.length} Active Events</span>
              </button>
            )}

            {college.campusPhotos && college.campusPhotos.length > 0 && (
              <button
                onClick={() => setActiveTab('gallery')}
                className="px-3.5 py-2.5 rounded-2xl bg-white/20 hover:bg-blue-600 text-white backdrop-blur-md text-xs font-bold transition-all flex items-center gap-1.5 shadow-md border border-white/20"
              >
                <Camera className="w-4 h-4 text-amber-300" />
                <span>Campus Photos ({college.campusPhotos.length} HD)</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('directions')}
              className="px-3.5 py-2.5 rounded-2xl bg-white/20 hover:bg-emerald-600 text-white backdrop-blur-md text-xs font-bold transition-all flex items-center gap-1.5 shadow-md border border-white/20"
              title="Interactive Google Map & Directions"
            >
              <Navigation className="w-4 h-4 text-emerald-300" />
              <span>Map & Directions</span>
            </button>

            <button
              onClick={() => toggleSaveCollege(college.id)}
              className={`p-2.5 sm:p-3 rounded-2xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 ${
                isSaved ? 'bg-rose-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <Link
              href={`/predictor?college=${college.id}`}
              className="px-4 py-2.5 sm:py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Predict Admission</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid: Quick Overview & Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Highest CTC (2024)</div>
          <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            ₹{college.placements.highestPackageLPA} LPA
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">Top product offer</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Average CTC</div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            ₹{college.placements.averagePackageLPA} LPA
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">Campus batch average</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Placement %</div>
          <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
            {college.placements.placementPercentage}%
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">{college.placements.studentsPlaced} / {college.placements.totalEligible} placed</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Govt Quota Fee (KCET)</div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            ₹{college.fees.kcetAnnual.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">Annual tuition fee</div>
        </div>
      </div>

      {/* About Institution Card */}
      {college.description && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
            <Building2 className="w-4 h-4" />
            <span>About {college.name}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {college.description}
          </p>

          {college.highlights && college.highlights.length > 0 && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">
                Key Campus Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {college.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-6 text-xs sm:text-sm font-bold overflow-x-auto">
        {[
          { id: 'events', label: `🎪 Running Events (${collegeEvents.length})`, badge: collegeEvents.length > 0 ? 'ACTIVE' : null },
          { id: 'gallery', label: '🏛️ Campus View & HD Photos', badge: null },
          { id: 'directions', label: '📍 Google Map & GPS Directions', badge: 'LIVE GPS' },
          { id: 'cutoffs', label: '📊 KCET & COMEDK Cutoffs', badge: null },
          { id: 'placements', label: '💼 Placement Analytics', badge: null },
          { id: 'branches', label: '⚙️ Branches & Seat Matrix', badge: null },
          { id: 'admission', label: '💰 Fees & Admission', badge: null },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-black tracking-wider animate-pulse">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* TAB CONTENT: RUNNING & FEATURED COLLEGE EVENTS */}
      {activeTab === 'events' && (
        <div className="space-y-6">
          {/* Events Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Current Running & Featured Events at {college.shortName || college.name}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Discover technical hackathons, workshops, cultural fests (Advith 2K26), and state festivals (Kannada Rajyotsava) with official brochures and direct registration.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold shrink-0">
              <button
                onClick={() => setEventCategoryFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  eventCategoryFilter === 'ALL'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                All ({collegeEvents.length})
              </button>
              <button
                onClick={() => setEventCategoryFilter('Technical')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                  eventCategoryFilter === 'Technical'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>⚡ Technical ({technicalCount})</span>
              </button>
              <button
                onClick={() => setEventCategoryFilter('Non-Technical')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                  eventCategoryFilter === 'Non-Technical'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>🎭 Non-Tech & Fests ({nonTechnicalCount})</span>
              </button>
            </div>
          </div>

          {/* Featured Deadline Alert Banner for CIT */}
          {college.id === 'cit-tumkur' && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-red-500/10 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in">
              <div className="flex items-start sm:items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <span className="font-extrabold text-amber-900 dark:text-amber-200 text-sm">
                    🚨 Registration Deadline: 25th October 2026 for BUILDATHON-2.0 2K26!
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-xs mt-0.5">
                    National Level 24-Hour Hackathon on <strong>30–31 October 2026</strong> at CIT Campus. Prize Pool: ₹30,000 Worth. Registration Fee: ₹500 / Team (3–4 Members).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    const ev = collegeEvents.find(e => e.id === 'cit-buildathon-2026');
                    if (ev) setSelectedBrochure(ev);
                  }}
                  className="px-3.5 py-2 rounded-xl border border-amber-500/40 hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold text-xs transition-colors"
                >
                  View Brochure
                </button>
                <button
                  onClick={() => {
                    const ev = collegeEvents.find(e => e.id === 'cit-buildathon-2026');
                    if (ev) setRegisteringEvent(ev);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-all"
                >
                  Register Directly
                </button>
              </div>
            </div>
          )}

          {/* Event Cards Grid */}
          {filteredCollegeEvents.length === 0 ? (
            <div className="p-12 text-center glass-card rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <Calendar className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">No events found in this category</h4>
              <p className="text-xs text-slate-500">Select "All" to view technical competitions or cultural celebrations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCollegeEvents.map((event) => (
                <div
                  key={event.id}
                  className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Event Visual Banner & Brochure Teaser */}
                    <div className="relative h-60 sm:h-72 w-full bg-slate-950 overflow-hidden">
                      <img
                        src={event.bannerUrl}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md border ${
                          event.category === 'Technical'
                            ? 'bg-amber-500 text-slate-950 border-amber-300'
                            : 'bg-purple-600 text-white border-purple-400'
                        }`}>
                          {event.category === 'Technical' ? '⚡ Technical' : '🎭 Non-Technical'}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                          {event.eventType}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black shadow-md flex items-center gap-1 ${
                          event.status === 'Closing Soon'
                            ? 'bg-red-500 text-white animate-pulse'
                            : event.status === 'Open'
                            ? 'bg-emerald-500 text-white'
                            : 'bg-blue-600 text-white'
                        }`}>
                          {event.status === 'Closing Soon' ? '🚨 Deadline Soon' : event.status === 'Open' ? '🟢 Open Now' : 'Upcoming'}
                        </span>
                      </div>

                      {/* Brochure Preview Overlay Button */}
                      {event.brochureUrl && (
                        <button
                          onClick={() => setSelectedBrochure(event)}
                          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 text-[11px] font-bold flex items-center gap-1.5 shadow-lg transition-all"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-300" />
                          <span>View Official Brochure</span>
                        </button>
                      )}

                      {/* Title on Banner */}
                      <div className="absolute bottom-3 left-3 right-28 text-white">
                        <h3 className="text-lg sm:text-xl font-extrabold line-clamp-1 drop-shadow-md">
                          {event.title}
                        </h3>
                        {event.tagline && (
                          <p className="text-[11px] text-amber-300 font-bold uppercase tracking-wider drop-shadow-sm">
                            {event.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Event Body */}
                    <div className="p-5 space-y-4">
                      {/* Department & Association */}
                      {event.department && (
                        <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                          <div className="font-semibold text-slate-800 dark:text-slate-200">
                            {event.department}
                          </div>
                          {event.inAssociationWith && event.inAssociationWith.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
                              <span className="font-bold text-slate-400">In Association With:</span>
                              {event.inAssociationWith.map((assoc, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-mono font-medium">
                                  {assoc}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Theme Box */}
                      {event.theme && (
                        <div className="p-3 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/60 text-xs">
                          <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-0.5">
                            Theme
                          </span>
                          <span className="font-bold text-slate-800 dark:text-slate-200 italic">
                            "{event.theme}"
                          </span>
                        </div>
                      )}

                      {/* 4 Key Details Tiles */}
                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        {/* Event Dates */}
                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800">
                          <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-blue-500" />
                            <span>Event Dates</span>
                          </div>
                          <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                            {event.eventDate}
                          </div>
                          {event.duration && (
                            <div className="text-[10px] text-slate-500">{event.duration}</div>
                          )}
                        </div>

                        {/* Registration Deadline - Urgency Highlight */}
                        <div className="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-950/25 border border-rose-200 dark:border-rose-900/60">
                          <div className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-rose-500" />
                            <span>Registration Deadline</span>
                          </div>
                          <div className="font-extrabold text-rose-700 dark:text-rose-300 mt-0.5">
                            {event.registrationDeadline}
                          </div>
                          <div className="text-[10px] text-rose-500 font-semibold">Last Date to Register</div>
                        </div>

                        {/* Prize Pool */}
                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800">
                          <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                            <Trophy className="w-3 h-3 text-amber-500" />
                            <span>Prize Pool</span>
                          </div>
                          <div className="font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {event.prizePool || 'Awards & Medals'}
                          </div>
                          <div className="text-[10px] text-slate-500">Trophies + Certificates</div>
                        </div>

                        {/* Registration Fee */}
                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800">
                          <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                            <Tag className="w-3 h-3 text-indigo-500" />
                            <span>Registration Fee</span>
                          </div>
                          <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                            {event.registrationFee}
                          </div>
                          <div className="text-[10px] text-slate-500">{event.teamSize || 'Team / Solo'}</div>
                        </div>
                      </div>

                      {/* Venue & Eligibility */}
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span><strong>Venue: </strong> {event.venue}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
                          <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span><strong>Eligibility: </strong> {event.eligibility}</span>
                        </div>
                      </div>

                      {/* Domains Covered */}
                      {event.domains && event.domains.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Real-World Domains & Tracks
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {event.domains.map((dom, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                {dom}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Coordinators & Contacts */}
                      {event.coordinators && event.coordinators.length > 0 && (
                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            <span>Event Coordinators & Helpline</span>
                            {event.instagramHandle && (
                              <span className="text-pink-600 dark:text-pink-400 font-mono font-bold lowercase">
                                {event.instagramHandle}
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                            {event.coordinators.map((c, cIdx) => (
                              <div key={cIdx} className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-slate-200">{c.name}</span>
                                  <span className="text-[9px] text-slate-400 block">{c.type} Coordinator</span>
                                </div>
                                {c.phone && (
                                  <a
                                    href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`}
                                    className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-bold hover:bg-blue-100 transition-colors"
                                  >
                                    {c.phone}
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-5 pt-0 flex flex-wrap gap-2.5">
                    <button
                      onClick={() => setRegisteringEvent(event)}
                      className="flex-1 min-w-[170px] py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Register Directly Online</span>
                    </button>

                    {event.brochureUrl && (
                      <button
                        onClick={() => setSelectedBrochure(event)}
                        className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
                        title="View Official Brochure & QR Code"
                      >
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span>Official Brochure</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 0: CAMPUS VIEW & GALLERY */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-500" />
                <span>High-Definition Campus Tour & Infrastructure Gallery</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Click any campus photo below to inspect in high-definition full-screen clear view.
              </p>
            </div>

            <a
              href={college.location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Campus Map & Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(college.campusPhotos || [
              {
                title: `${college.name} Main Campus`,
                category: 'Campus Architecture',
                url: college.heroImage,
                caption: 'Main entrance and academic complex of the institution.'
              }
            ]).map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedLightboxPhoto(photo)}
                className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 transition-all hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 group-hover:from-black/80 transition-colors" />

                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                    {photo.category}
                  </span>

                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white group-hover:bg-blue-600 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {photo.title}
                  </h4>
                  {photo.caption && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Campus Facilities Grid */}
          {college.facilities && college.facilities.length > 0 && (
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Campus Facilities & Student Amenities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {college.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Google Map & Directions Card in Campus View */}
          <CollegeGoogleMap college={college} />
        </div>
      )}

      {/* TAB CONTENT: DIRECTIONS & LIVE GOOGLE MAP */}
      {activeTab === 'directions' && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Live Campus Navigation & Google Maps</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore the physical campus of {college.name}, get real-time driving or bus transit routes, and locate student housing nearby.
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(college.name + ', ' + college.location.address)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <CollegeGoogleMap college={college} />
        </div>
      )}

      {/* TAB CONTENT 1: CUTOFFS */}
      {activeTab === 'cutoffs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Historical KCET Cutoff Matrix by Category
              </h3>
              <p className="text-[11px] text-slate-500">
                Official Demo Data compiled from Karnataka Examinations Authority (KEA) archives.
              </p>
            </div>

            {/* Category Selector */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
              <span className="text-[11px] text-slate-400 px-2">Category:</span>
              {(['gm', 'twoA', 'twoB', 'threeA', 'threeB', 'sc', 'st'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCutoffCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg uppercase ${
                    cutoffCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase">
                  <th className="p-3.5">Branch Code</th>
                  <th className="p-3.5">Engineering Branch</th>
                  <th className="p-3.5">KCET Round 2 Cutoff ({cutoffCategory.toUpperCase()})</th>
                  <th className="p-3.5">COMEDK GM Cutoff</th>
                  <th className="p-3.5">Intake Seats</th>
                  <th className="p-3.5">Avg Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {college.branches.map(b => {
                  const kcetRank = b.cutoffs.kcet[cutoffCategory];
                  return (
                    <tr key={b.branchCode} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-3.5 font-mono font-bold text-blue-600">{b.branchCode}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{b.branchName}</td>
                      <td className="p-3.5 font-extrabold text-indigo-600 dark:text-indigo-400">
                        {kcetRank ? `~${kcetRank.toLocaleString()} Rank` : 'N/A'}
                      </td>
                      <td className="p-3.5 font-medium">
                        {b.cutoffs.comedk ? `~${b.cutoffs.comedk.gm.toLocaleString()} Rank` : 'KCET Only'}
                      </td>
                      <td className="p-3.5 font-semibold">{b.intakeSeats}</td>
                      <td className="p-3.5 font-bold text-emerald-600">₹{b.avgPackage} LPA</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: PLACEMENTS */}
      {activeTab === 'placements' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top Recruiters */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span>Top Campus Recruiting Partners</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {college.placements.topRecruiters.map((rec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {rec}
                  </span>
                ))}
              </div>
            </div>

            {/* Historical Growth */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>3-Year Placement CTC Growth</span>
              </h3>
              <div className="space-y-3">
                {college.placements.historicalTrend.map(trend => (
                  <div key={trend.year} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Year {trend.year}</span>
                      <span className="font-extrabold text-emerald-500">₹{trend.avgPackage} LPA Avg ({trend.placementRate}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${(trend.avgPackage / 20) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB CONTENT 3: BRANCHES & SEATS */}
      {activeTab === 'branches' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {college.branches.map(b => (
            <div key={b.branchCode} className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {b.branchCode}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">{b.branchName}</h4>
                </div>
                <span className="text-xs font-bold text-slate-500">{b.intakeSeats} Seats</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] text-slate-400 block font-semibold">Highest Branch Offer</span>
                  <span className="font-bold text-emerald-600">₹{b.highestPackage} LPA</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] text-slate-400 block font-semibold">Branch Average CTC</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">₹{b.avgPackage} LPA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 4: FEES & ADMISSION */}
      {activeTab === 'admission' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Fee Structure Breakdown</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="font-semibold text-slate-600 dark:text-slate-400">KCET Govt Quota Tuition:</span>
                <span className="font-extrabold text-blue-600">₹{college.fees.kcetAnnual.toLocaleString()} / year</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="font-semibold text-slate-600 dark:text-slate-400">COMEDK Quota Tuition:</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">
                  {college.fees.comedkAnnual ? `₹${college.fees.comedkAnnual.toLocaleString()} / year` : 'Not Applicable (Govt Only)'}
                </span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="font-semibold text-slate-600 dark:text-slate-400">Hostel & Mess Charges:</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">₹{college.fees.hostelAnnual.toLocaleString()} / year</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Eligibility & Counselling</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {college.admissionInfo.eligibility}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Admissions Process: </strong> {college.admissionInfo.process}
            </p>
            {college.admissionInfo.managementQuotaDetails && (
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong>Management Quota: </strong> {college.admissionInfo.managementQuotaDetails}
              </p>
            )}
            
            {/* Campus Google Maps Integration */}
            <div className="pt-2">
              <a
                href={college.location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-semibold text-blue-600 dark:text-blue-400"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Open Campus on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Verification Transparency Footer */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs flex items-center justify-between text-slate-500">
        <div>
          <span className="font-semibold">Source: </span> {college.sourceInfo.source}
          <span className="mx-2">•</span>
          <span>Last Audited: {college.sourceInfo.lastUpdated}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">
          {college.sourceInfo.verificationStatus}
        </span>
      </div>

      {/* Full-Screen Lightbox Modal for Crystal-Clear Campus View */}
      {selectedLightboxPhoto && (
        <div 
          onClick={() => setSelectedLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
          >
            <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black flex items-center justify-center">
              <img
                src={selectedLightboxPhoto.url}
                alt={selectedLightboxPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedLightboxPhoto(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 bg-slate-950 border-t border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold uppercase tracking-wider">
                  {selectedLightboxPhoto.category || 'Campus Photo'}
                </span>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber-300" />
                  <span>{selectedLightboxPhoto.title}</span>
                </h3>
              </div>
              {selectedLightboxPhoto.caption && (
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  {selectedLightboxPhoto.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Official Brochure Lightbox Modal */}
      {selectedBrochure && (
        <div
          onClick={() => setSelectedBrochure(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Official Event Brochure & Notification
                </span>
                <h3 className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                  <span>{selectedBrochure.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-600 font-mono">
                    {selectedBrochure.eventType}
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedBrochure.brochureUrl || selectedBrochure.bannerUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Download / Open Full Image"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Brochure Body */}
            <div className="relative overflow-y-auto max-h-[68vh] p-4 bg-slate-950/80 flex items-center justify-center">
              <img
                src={selectedBrochure.brochureUrl || selectedBrochure.bannerUrl}
                alt={selectedBrochure.title}
                className="w-auto max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-slate-800"
              />
            </div>

            {/* Footer with Registration Shortcut */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-slate-300 text-center sm:text-left">
                <span>Registration Deadline: <strong className="text-rose-400">{selectedBrochure.registrationDeadline}</strong></span>
                <span className="mx-2">•</span>
                <span>Fee: <strong className="text-emerald-400">{selectedBrochure.registrationFee}</strong></span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const ev = selectedBrochure;
                    setSelectedBrochure(null);
                    setRegisteringEvent(ev);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Register Directly Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Online Event Registration Modal */}
      {registeringEvent && (
        <div
          onClick={() => {
            if (!registrationSuccess) setRegisteringEvent(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    registeringEvent.category === 'Technical'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                      : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                  }`}>
                    {registeringEvent.category} • {registeringEvent.eventType}
                  </span>
                  <span className="text-xs text-rose-600 font-bold">
                    Last Date: {registeringEvent.registrationDeadline}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  Register for {registeringEvent.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Hosted by {registeringEvent.collegeName} ({registeringEvent.venue})
                </p>
              </div>
              <button
                onClick={() => {
                  setRegisteringEvent(null);
                  setRegistrationSuccess(null);
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Event Quick Facts Bar */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center text-xs">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Dates</div>
                <div className="font-extrabold text-slate-900 dark:text-white mt-0.5 text-[11px]">
                  {registeringEvent.eventDate}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Registration Fee</div>
                <div className="font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 text-[11px]">
                  {registeringEvent.registrationFee}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Team Size</div>
                <div className="font-extrabold text-blue-600 dark:text-blue-400 mt-0.5 text-[11px]">
                  {registeringEvent.teamSize || 'Solo / Team'}
                </div>
              </div>
            </div>

            {/* Registration Confirmation Success Screen */}
            {registrationSuccess ? (
              <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-emerald-700 dark:text-emerald-300">
                    Registration Successfully Confirmed!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Your team has been registered for <strong>{registeringEvent.title}</strong> at {registeringEvent.collegeName}.
                  </p>
                </div>

                {/* Registration Receipt Pass */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-slate-400 font-bold text-[10px] uppercase">Official Registration ID</span>
                    <span className="font-mono font-black text-blue-600 dark:text-blue-400 text-sm">{registrationSuccess.regId}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500">Team / Participant:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{registrationSuccess.teamName}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500">Team Lead:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{registrationSuccess.leadName}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500">Venue & Time:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{registeringEvent.venue} ({registeringEvent.eventDate})</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500">Fee Payment Note:</span>
                    <span className="font-bold text-emerald-600">{registeringEvent.registrationFee} (Payable at desk / UPI QR on brochure)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    onClick={() => {
                      setRegisteringEvent(null);
                      setRegistrationSuccess(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                  >
                    Done & Return to College Profile
                  </button>
                  {registeringEvent.brochureUrl && (
                    <button
                      onClick={() => {
                        const ev = registeringEvent;
                        setRegisteringEvent(null);
                        setRegistrationSuccess(null);
                        setSelectedBrochure(ev);
                      }}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      View Brochure & QR Code
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Registration Input Form */
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                {/* Team & Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regForm.teamName}
                      onChange={(e) => setRegForm({ ...regForm, teamName: e.target.value })}
                      placeholder="e.g. CodeCraft Tumakuru"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {registeringEvent.domains && registeringEvent.domains.length > 0 && (
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Select Problem Domain Track *
                      </label>
                      <select
                        required
                        value={regForm.domain}
                        onChange={(e) => setRegForm({ ...regForm, domain: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">-- Choose Domain --</option>
                        {registeringEvent.domains.map((dom: string, dIdx: number) => (
                          <option key={dIdx} value={dom}>{dom}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Team Leader Information */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] text-blue-600 dark:text-blue-400">
                    Team Leader Details
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regForm.leadName}
                        onChange={(e) => setRegForm({ ...regForm, leadName: e.target.value })}
                        placeholder="Leader Full Name"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
                        USN / Roll Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={regForm.leadUsn}
                        onChange={(e) => setRegForm({ ...regForm, leadUsn: e.target.value })}
                        placeholder="e.g. 1CG22CS045"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={regForm.leadPhone}
                        onChange={(e) => setRegForm({ ...regForm, leadPhone: e.target.value })}
                        placeholder="e.g. 9845012345"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={regForm.leadEmail}
                        onChange={(e) => setRegForm({ ...regForm, leadEmail: e.target.value })}
                        placeholder="name@gmail.com"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] text-blue-600 dark:text-blue-400">
                    Additional Team Members (For Teams 3-4 Members)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-500 mb-1">Member 2 (Name & USN)</label>
                      <input
                        type="text"
                        value={regForm.member2}
                        onChange={(e) => setRegForm({ ...regForm, member2: e.target.value })}
                        placeholder="Supriya (1CG22CS...)"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-500 mb-1">Member 3 (Name & USN)</label>
                      <input
                        type="text"
                        value={regForm.member3}
                        onChange={(e) => setRegForm({ ...regForm, member3: e.target.value })}
                        placeholder="Siri (1CG22CS...)"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-500 mb-1">Member 4 (Optional)</label>
                      <input
                        type="text"
                        value={regForm.member4}
                        onChange={(e) => setRegForm({ ...regForm, member4: e.target.value })}
                        placeholder="Name & USN"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Brief Idea */}
                <div>
                  <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Brief Project / Problem Idea (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={regForm.ideaSummary}
                    onChange={(e) => setRegForm({ ...regForm, ideaSummary: e.target.value })}
                    placeholder="Briefly state what problem your team is building a solution for..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Notice & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] text-slate-500 text-center sm:text-left">
                    Deadline: <strong className="text-rose-600">{registeringEvent.registrationDeadline}</strong>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setRegisteringEvent(null)}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-lg transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Official Registration</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BROCHURE LIGHTBOX MODAL */}
      {selectedBrochure && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedBrochure(null)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  selectedBrochure.category === 'Technical'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-purple-600 text-white'
                }`}>
                  {selectedBrochure.category} • {selectedBrochure.eventType}
                </span>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1">
                    {selectedBrochure.title} — Official Brochure & Circular
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {selectedBrochure.collegeName} • {selectedBrochure.department}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedBrochure(null)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-400 transition-colors"
                title="Close brochure"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Split Image & Event Facts */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left / Top: High-Res Brochure Display */}
              <div className="lg:col-span-7 flex flex-col items-center justify-start space-y-3">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center shadow-lg group">
                  <img
                    src={selectedBrochure.brochureUrl}
                    alt={`${selectedBrochure.title} Brochure`}
                    className="max-h-[65vh] w-auto object-contain select-none"
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <a
                      href={selectedBrochure.brochureUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Full Resolution</span>
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 text-center">
                  Official event poster & brochure issued by {selectedBrochure.collegeName}.
                </p>
              </div>

              {/* Right / Bottom: Structured Event Summary & Direct Registration */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3.5 text-xs">
                  {/* Tagline & Theme */}
                  {selectedBrochure.theme && (
                    <div className="p-3.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60">
                      <div className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">
                        Theme / Focal Subject
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                        "{selectedBrochure.theme}"
                      </div>
                    </div>
                  )}

                  {/* Dates & Deadline Banner */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>Event Dates</span>
                      </div>
                      <div className="font-extrabold text-slate-900 dark:text-white mt-1">
                        {selectedBrochure.eventDate}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{selectedBrochure.duration}</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50">
                      <div className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Registration Deadline</span>
                      </div>
                      <div className="font-extrabold text-rose-700 dark:text-rose-300 mt-1">
                        {selectedBrochure.registrationDeadline}
                      </div>
                      <div className="text-[10px] text-rose-600/80 font-semibold mt-0.5">Seats strictly limited</div>
                    </div>
                  </div>

                  {/* Prize & Fee */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                      <div className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        <span>Prize Pool</span>
                      </div>
                      <div className="font-black text-amber-600 dark:text-amber-400 text-sm mt-0.5">
                        {selectedBrochure.prizePool}
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Registration Fee</span>
                      </div>
                      <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {selectedBrochure.registrationFee}
                      </div>
                      <div className="text-[10px] text-slate-500">{selectedBrochure.teamSize}</div>
                    </div>
                  </div>

                  {/* Venue & Eligibility */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span><strong>Venue: </strong> {selectedBrochure.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
                      <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span><strong>Eligibility: </strong> {selectedBrochure.eligibility}</span>
                    </div>
                  </div>

                  {/* Domains */}
                  {selectedBrochure.domains && selectedBrochure.domains.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Tracks / Challenge Domains:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {selectedBrochure.domains.map((dom: string, dIdx: number) => (
                          <span
                            key={dIdx}
                            className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {dom}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Coordinators Hotline */}
                  {selectedBrochure.coordinators && selectedBrochure.coordinators.length > 0 && (
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>Official Coordinators</span>
                        {selectedBrochure.instagramHandle && (
                          <span className="text-pink-600 font-mono font-bold">{selectedBrochure.instagramHandle}</span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        {selectedBrochure.coordinators.map((c: any, idx: number) => (
                          <div key={idx} className="p-1.5 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700">
                            <div className="font-bold text-slate-800 dark:text-slate-200">{c.name}</div>
                            <div className="text-slate-400 text-[9px]">{c.type} Coordinator</div>
                            {c.phone && (
                              <a href={`tel:${c.phone}`} className="text-blue-600 dark:text-blue-400 font-mono font-bold hover:underline">
                                {c.phone}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Action CTA */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                  <button
                    onClick={() => {
                      const ev = selectedBrochure;
                      setSelectedBrochure(null);
                      setRegisteringEvent(ev);
                    }}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Proceed to Direct Online Registration</span>
                  </button>

                  <a
                    href={selectedBrochure.brochureUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
                    title="Open full image in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAMPUS PHOTO LIGHTBOX MODAL */}
      {selectedLightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedLightboxPhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  {selectedLightboxPhoto.category || 'Campus Infrastructure'}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  {selectedLightboxPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLightboxPhoto(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedLightboxPhoto.url}
                alt={selectedLightboxPhoto.title}
                className="max-h-[70vh] w-auto object-contain select-none"
              />
            </div>

            {selectedLightboxPhoto.caption && (
              <div className="p-4 bg-slate-50 dark:bg-slate-850 text-xs text-slate-600 dark:text-slate-300">
                {selectedLightboxPhoto.caption}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default function CollegeDetailPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading College Profile...</div>}>
      <CollegeDetailContent />
    </Suspense>
  );
}
