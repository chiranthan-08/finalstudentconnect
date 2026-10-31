'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  MapPin, 
  Bookmark, 
  SlidersHorizontal, 
  Check, 
  X, 
  ArrowUpDown, 
  Building2, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Layers,
  ChevronRight,
  ChevronLeft,
  Camera,
  Eye,
  CheckCircle2,
  Info
} from 'lucide-react';
import { COLLEGES_DATA, KARNATAKA_DISTRICTS, ENGINEERING_BRANCHES, getEventsByCollegeId } from '@/data/mockData';
import { College } from '@/types';

function CollegesDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const { savedColleges, toggleSaveCollege } = useAuth();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedAffiliation, setSelectedAffiliation] = useState('ALL');
  const [selectedNaac, setSelectedNaac] = useState('ALL');
  const [maxCutoffRank, setMaxCutoffRank] = useState<number>(300000);
  const [maxFees, setMaxFees] = useState<number>(2000000);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rank' | 'highest_pkg' | 'placement' | 'fees' | 'rating'>('rank');

  // Clear Campus View Preview Modal State
  const [previewCollege, setPreviewCollege] = useState<College | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Comparison State
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // All 31 Karnataka Districts
  const districts = useMemo(() => {
    return ['ALL', ...KARNATAKA_DISTRICTS];
  }, []);

  // Compute live count of institutions per district
  const collegeCountByDistrict = useMemo(() => {
    const counts: Record<string, number> = {};
    COLLEGES_DATA.forEach(c => {
      counts[c.location.district] = (counts[c.location.district] || 0) + 1;
    });
    return counts;
  }, []);

  // Popular / Key district chips featuring Tumakuru prominently
  const quickDistricts = useMemo(() => [
    { id: 'ALL', name: 'All Karnataka', count: COLLEGES_DATA.length },
    { id: 'Tumakuru', name: 'Tumakuru', count: collegeCountByDistrict['Tumakuru'] || 4, isFeatured: true },
    { id: 'Bengaluru Urban', name: 'Bengaluru Urban', count: collegeCountByDistrict['Bengaluru Urban'] || 0 },
    { id: 'Mysuru', name: 'Mysuru', count: collegeCountByDistrict['Mysuru'] || 0 },
    { id: 'Dakshina Kannada', name: 'Dakshina Kannada', count: collegeCountByDistrict['Dakshina Kannada'] || 0 },
    { id: 'Belagavi', name: 'Belagavi', count: collegeCountByDistrict['Belagavi'] || 0 },
    { id: 'Dharwad', name: 'Dharwad / Hubballi', count: collegeCountByDistrict['Dharwad'] || 0 },
    { id: 'Davanagere', name: 'Davanagere', count: collegeCountByDistrict['Davanagere'] || 0 },
    { id: 'Hassan', name: 'Hassan', count: collegeCountByDistrict['Hassan'] || 0 },
    { id: 'Shivamogga', name: 'Shivamogga', count: collegeCountByDistrict['Shivamogga'] || 0 },
    { id: 'Kalaburagi', name: 'Kalaburagi', count: collegeCountByDistrict['Kalaburagi'] || 0 },
    { id: 'Ballari', name: 'Ballari', count: collegeCountByDistrict['Ballari'] || 0 },
    { id: 'Mandya', name: 'Mandya', count: collegeCountByDistrict['Mandya'] || 0 },
    { id: 'Bagalkote', name: 'Bagalkote', count: collegeCountByDistrict['Bagalkote'] || 0 },
    { id: 'Udupi', name: 'Udupi', count: collegeCountByDistrict['Udupi'] || 0 },
    { id: 'Chikkamagaluru', name: 'Chikkamagaluru', count: collegeCountByDistrict['Chikkamagaluru'] || 0 },
    { id: 'Chikkaballapura', name: 'Chikkaballapura', count: collegeCountByDistrict['Chikkaballapura'] || 0 },
    { id: 'Chitradurga', name: 'Chitradurga', count: collegeCountByDistrict['Chitradurga'] || 0 },
    { id: 'Kolar', name: 'Kolar', count: collegeCountByDistrict['Kolar'] || 0 },
    { id: 'Bidar', name: 'Bidar', count: collegeCountByDistrict['Bidar'] || 0 },
  ], [collegeCountByDistrict]);

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(prev => prev.filter(item => item !== id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 colleges simultaneously.');
        return;
      }
      setCompareList(prev => [...prev, id]);
    }
  };

  // Filtered & Sorted Colleges
  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter(col => {
      // Intelligent Multi-token Query filter (searches name, city, district, code, branches, recruiters)
      if (searchQuery.trim()) {
        const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const branchKeywords = col.branches.map(b => `${b.branchCode} ${b.branchName}`).join(' ');
        const recruiterKeywords = col.placements.topRecruiters.join(' ');
        const fullSearchable = `${col.name} ${col.shortName} ${col.code} ${col.location.city} ${col.location.district} ${col.affiliation} ${col.collegeType} ${col.accreditations.naacGrade} ${branchKeywords} ${recruiterKeywords}`.toLowerCase();

        const allTokensMatch = tokens.every(token => fullSearchable.includes(token));
        if (!allTokensMatch) return false;
      }

      // District Filter
      if (selectedDistrict !== 'ALL' && col.location.district.toLowerCase() !== selectedDistrict.toLowerCase()) {
        return false;
      }

      // Type
      if (selectedType !== 'ALL' && col.collegeType !== selectedType) return false;

      // Affiliation
      if (selectedAffiliation !== 'ALL' && col.affiliation !== selectedAffiliation) return false;

      // NAAC
      if (selectedNaac !== 'ALL' && col.accreditations.naacGrade !== selectedNaac) return false;

      // Hostel
      if (hostelOnly && !col.hostelAvailable) return false;

      // Fees
      if (col.fees.kcetAnnual > maxFees) return false;

      // Branch Check
      if (selectedBranch !== 'ALL') {
        const branchMatch = col.branches.find(b => b.branchCode.toUpperCase() === selectedBranch.toUpperCase());
        if (!branchMatch) return false;
      }

      return true;
    }).sort((a, b) => {
      // If Tumakuru is selected, ensure the 4 requested colleges are prominently prioritized
      if (selectedDistrict === 'Tumakuru') {
        const tumakuruPriority: Record<string, number> = {
          'cit-tumkur': 1,
          'ssit-tumkur': 2,
          'sit-tumkur': 3,
          'siet-tumkur': 4,
        };
        const pA = tumakuruPriority[a.id] || 99;
        const pB = tumakuruPriority[b.id] || 99;
        if (pA !== pB && sortBy === 'rank') return pA - pB;
      }

      if (sortBy === 'rank') return a.accreditations.karnatakaRank - b.accreditations.karnatakaRank;
      if (sortBy === 'highest_pkg') return b.placements.highestPackageLPA - a.placements.highestPackageLPA;
      if (sortBy === 'placement') return b.placements.placementPercentage - a.placements.placementPercentage;
      if (sortBy === 'fees') return a.fees.kcetAnnual - b.fees.kcetAnnual;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [
    searchQuery,
    selectedDistrict,
    selectedType,
    selectedAffiliation,
    selectedNaac,
    hostelOnly,
    maxFees,
    selectedBranch,
    sortBy,
  ]);

  const collegesInComparison = COLLEGES_DATA.filter(c => compareList.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Source Note */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Karnataka Engineering Colleges Directory • 31 Districts</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Discover & Compare Engineering Colleges
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Verified Karnataka KCET / COMEDK cutoffs, fees, placement statistics, branches, and accreditation across all Karnataka districts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            {filteredColleges.length} Institutions Found
          </span>
          {compareList.length > 0 && (
            <button
              onClick={() => setShowCompareModal(true)}
              className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 animate-bounce"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare ({compareList.length}/3)</span>
            </button>
          )}
        </div>
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by college name (e.g. Siddaganga, CIT, SSIT, Shridevi, RVCE), code (E009), or city (Tumakuru, Bengaluru, Mysuru)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rank">Karnataka Ranking</option>
              <option value="highest_pkg">Highest Package (LPA)</option>
              <option value="placement">Placement Rate (%)</option>
              <option value="fees">Lowest KCET Fees</option>
              <option value="rating">Student Rating</option>
            </select>
          </div>
        </div>

        {/* Primary Filter Row: Branch, District, Type, Affiliation, NAAC, Hostel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
          
          {/* Branch (All Engineering Branches) */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Engineering Branch ({ENGINEERING_BRANCHES.length - 1})
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
            >
              {ENGINEERING_BRANCHES.map(b => (
                <option key={b.code} value={b.code}>{b.name}</option>
              ))}
            </select>
          </div>

          {/* District Dropdown (All 31 Karnataka Districts) */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              District (31 KA Districts)
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
            >
              <option value="ALL">All Districts ({KARNATAKA_DISTRICTS.length})</option>
              {KARNATAKA_DISTRICTS.map(d => (
                <option key={d} value={d}>
                  {d} {collegeCountByDistrict[d] ? `(${collegeCountByDistrict[d]})` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
            >
              <option value="ALL">All Types</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
              <option value="Aided">Aided</option>
            </select>
          </div>

          {/* Affiliation */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Affiliation</label>
            <select
              value={selectedAffiliation}
              onChange={(e) => setSelectedAffiliation(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
            >
              <option value="ALL">All Affiliations</option>
              <option value="Autonomous">Autonomous</option>
              <option value="VTU Affiliated">VTU Affiliated</option>
              <option value="State University">State University</option>
            </select>
          </div>

          {/* NAAC */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">NAAC Grade</label>
            <select
              value={selectedNaac}
              onChange={(e) => setSelectedNaac(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
            >
              <option value="ALL">Any Grade</option>
              <option value="A++">A++ Grade</option>
              <option value="A+">A+ Grade</option>
              <option value="A">A Grade</option>
            </select>
          </div>

          {/* Hostel Toggle */}
          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer py-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors">
              <input
                type="checkbox"
                checked={hostelOnly}
                onChange={(e) => setHostelOnly(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Hostel Required</span>
            </label>
          </div>

        </div>

        {/* Dedicated Location / District Bar (Requested: Positioned below Hostel Required) */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Location / Karnataka District Selection:</span>
            </div>

            {/* District Dropdown Selector Bar */}
            <div className="flex items-center gap-2">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-emerald-400 dark:border-emerald-600 bg-white dark:bg-slate-800 text-xs font-bold text-emerald-700 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              >
                <option value="ALL">All Karnataka Districts (31 Districts)</option>
                {KARNATAKA_DISTRICTS.map((d) => (
                  <option key={d} value={d}>
                    📍 {d} {collegeCountByDistrict[d] ? `(${collegeCountByDistrict[d]} colleges)` : ''}
                  </option>
                ))}
              </select>

              {selectedDistrict !== 'ALL' && (
                <button
                  onClick={() => setSelectedDistrict('ALL')}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-700 transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear Filter</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick-Click Location Chips with Tumakuru Featured Prominently */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0">Quick Districts:</span>
            {quickDistricts.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDistrict(d.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedDistrict === d.id
                    ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400/50 scale-105'
                    : d.isFeatured
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-400 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600'
                }`}
              >
                <MapPin className="w-3 h-3 text-emerald-500" />
                <span>{d.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedDistrict === d.id ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  {d.count}
                </span>
              </button>
            ))}
          </div>

          {/* District Filter Active Notification */}
          {selectedDistrict !== 'ALL' && (
            <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-900 dark:text-emerald-200 animate-in fade-in">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  📍 Showing <strong>{filteredColleges.length}</strong> Engineering College(s) in <strong>{selectedDistrict}</strong> district
                  {selectedDistrict === 'Tumakuru' 
                    ? ': Channabasaveshwara Institute of Technology, Sri Siddhartha Institute of Technology, Siddaganga Institute of Technology & Shridevi Institute of Engineering and Technology' 
                    : ''}.
                </span>
              </div>
              <button
                onClick={() => setSelectedDistrict('ALL')}
                className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 underline hover:no-underline shrink-0 ml-2"
              >
                Show All Districts ({COLLEGES_DATA.length})
              </button>
            </div>
          )}
        </div>

      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => {
          const isSaved = savedColleges.includes(college.id);
          const isCompared = compareList.includes(college.id);
          const cseBranch = college.branches.find(b => b.branchCode === 'CSE');
          const collegeEvents = getEventsByCollegeId(college.id);
          const topEvent = collegeEvents[0];

          return (
            <div
              key={college.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Clear, Unobstructed Campus Image Area */}
                <div 
                  onClick={() => { setPreviewCollege(college); setActivePhotoIndex(0); }}
                  className="relative h-48 sm:h-52 w-full bg-slate-900 cursor-pointer overflow-hidden"
                  title="Click to view full clear campus view & photos"
                >
                  <img
                    src={college.heroImage}
                    alt={college.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle, soft gradient only at the corners so campus architecture is completely clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:from-black/60 transition-colors" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold shadow-sm">
                      Rank #{college.accreditations.karnatakaRank} in KA
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                      NAAC {college.accreditations.naacGrade}
                    </span>
                    {college.accreditations.nirfRank && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold">
                        NIRF #{college.accreditations.nirfRank}
                      </span>
                    )}
                  </div>

                  {/* Bookmark & Compare buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => toggleCompare(college.id)}
                      className={`p-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                        isCompared
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-white'
                      }`}
                      title={isCompared ? 'Remove from compare' : 'Add to compare'}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleSaveCollege(college.id)}
                      className={`p-1.5 rounded-full text-xs transition-all shadow-md ${
                        isSaved
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-white'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save college'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* Interactive Clear View Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewCollege(college);
                        setActivePhotoIndex(0);
                      }}
                      className="px-2.5 py-1 rounded-full bg-slate-950/75 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-lg transition-all"
                    >
                      <Camera className="w-3.5 h-3.5 text-amber-300" />
                      <span>Clear View {college.campusPhotos ? `(${college.campusPhotos.length} HD Photos)` : 'Photo'}</span>
                    </button>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-mono text-[10px]">
                      {college.code}
                    </span>
                  </div>
                </div>

                {/* Body Content - College Title is clearly readable and does not block photo */}
                <div className="p-4 space-y-3">
                  <div>
                    <Link href={`/colleges/${college.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                        {college.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{college.location.city}, {college.location.district}</span>
                      <span>•</span>
                      <span className="truncate">{college.collegeType} • {college.affiliation}</span>
                    </div>

                    {/* Active College Events Teaser (Technical & Fests) */}
                    {topEvent && (
                      <Link
                        href={`/colleges/${college.id}?tab=events`}
                        className="mt-2.5 p-2 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-purple-500/15 border border-amber-500/35 hover:border-amber-500/60 transition-all flex items-center justify-between gap-2 group/ev"
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                          </span>
                          <span className="font-extrabold text-[11px] text-amber-900 dark:text-amber-300 truncate">
                            🎪 {topEvent.title}
                          </span>
                          {collegeEvents.length > 1 && (
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold shrink-0">
                              +{collegeEvents.length - 1} more
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 shrink-0 flex items-center group-hover/ev:translate-x-0.5 transition-transform">
                          Brochure & Reg →
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* Placement Grid */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Highest CTC</div>
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
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Placement</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {college.placements.placementPercentage}%
                      </div>
                    </div>
                  </div>

                  {/* KCET Cutoff & Fees Info */}
                  <div className="text-xs space-y-1.5">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>CSE KCET Cutoff (GM):</span>
                      <span className="font-extrabold text-blue-600 dark:text-blue-400">
                        ~{cseBranch ? cseBranch.cutoffs.kcet.gm.toLocaleString() : 'N/A'} Rank
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>Annual Govt Fee:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        ₹{college.fees.kcetAnnual.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                      <span>Top Recruiters:</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[170px]">
                        {college.placements.topRecruiters.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 space-y-2">
                {collegeEvents.length > 0 && (
                  <Link
                    href={`/colleges/${college.id}?tab=events`}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-purple-500/15 hover:from-amber-500/25 hover:to-purple-500/25 border border-amber-500/40 text-amber-900 dark:text-amber-300 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>View {collegeEvents.length} Active Events & Official Brochure</span>
                  </Link>
                )}
                <div className="flex gap-2">
                  <Link
                    href={`/colleges/${college.id}`}
                    className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Full Profile & Cutoffs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => {
                      setPreviewCollege(college);
                      setActivePhotoIndex(0);
                    }}
                    className="px-3 py-2 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/40 hover:bg-blue-100 text-xs font-semibold text-blue-700 dark:text-blue-300 transition-colors flex items-center gap-1"
                    title="View clear campus photos and tour"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>Clear View</span>
                  </button>

                  <Link
                    href={`/predictor?college=${college.id}`}
                    className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                    title="Predict admission probability"
                  >
                    Predict
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear Campus View High-Definition Modal */}
      {previewCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-700">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-extrabold">
                    Rank #{previewCollege.accreditations.karnatakaRank} in Karnataka
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                    Code: {previewCollege.code}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[11px]">
                    NAAC {previewCollege.accreditations.naacGrade}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-semibold text-[11px]">
                    {previewCollege.affiliation}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5">
                  {previewCollege.name}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{previewCollege.location.address}</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewCollege(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Spotlight */}
            <div className="space-y-3">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
                <img
                  src={
                    previewCollege.campusPhotos && previewCollege.campusPhotos[activePhotoIndex]
                      ? previewCollege.campusPhotos[activePhotoIndex].url
                      : previewCollege.heroImage
                  }
                  alt={previewCollege.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Active Photo Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm sm:text-base font-extrabold flex items-center gap-2">
                    <Camera className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>
                      {previewCollege.campusPhotos && previewCollege.campusPhotos[activePhotoIndex]
                        ? previewCollege.campusPhotos[activePhotoIndex].title
                        : `${previewCollege.name} - Daylight Campus View`}
                    </span>
                  </div>
                  {previewCollege.campusPhotos && previewCollege.campusPhotos[activePhotoIndex]?.caption && (
                    <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                      {previewCollege.campusPhotos[activePhotoIndex].caption}
                    </p>
                  )}
                </div>

                {/* Prev/Next arrows if multiple photos */}
                {previewCollege.campusPhotos && previewCollege.campusPhotos.length > 1 && (
                  <>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : previewCollege.campusPhotos!.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all shadow-lg"
                      title="Previous campus photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev < previewCollege.campusPhotos!.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all shadow-lg"
                      title="Next campus photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Selector Strip */}
              {previewCollege.campusPhotos && previewCollege.campusPhotos.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {previewCollege.campusPhotos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activePhotoIndex === idx
                          ? 'border-blue-500 scale-95 shadow-md ring-2 ring-blue-500/50'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85';
                        }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white truncate text-center drop-shadow">
                        {photo.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description & Overview */}
            {previewCollege.description && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {previewCollege.description}
              </div>
            )}

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
                <div className="text-[10px] uppercase font-bold text-slate-400">Highest Package</div>
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  ₹{previewCollege.placements.highestPackageLPA} LPA
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
                <div className="text-[10px] uppercase font-bold text-slate-400">Avg CTC</div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                  ₹{previewCollege.placements.averagePackageLPA} LPA
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900">
                <div className="text-[10px] uppercase font-bold text-slate-400">Placement Rate</div>
                <div className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
                  {previewCollege.placements.placementPercentage}%
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
                <div className="text-[10px] uppercase font-bold text-slate-400">KCET Annual Fee</div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                  ₹{previewCollege.fees.kcetAnnual.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Highlights & Facilities */}
            {previewCollege.highlights && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {previewCollege.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href={previewCollege.location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Open Campus on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setPreviewCollege(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <Link
                  href={`/colleges/${previewCollege.id}`}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Full Detailed Profile</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  College Side-by-Side Comparison ({collegesInComparison.length})
                </h3>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {collegesInComparison.length === 0 ? (
              <p className="text-center text-xs text-slate-400 py-8">
                No colleges selected for comparison. Click the layers icon on any college card to add it!
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3 font-bold text-slate-400 uppercase text-[10px]">Metric</th>
                      {collegesInComparison.map(col => (
                        <th key={col.id} className="p-3 font-bold text-slate-900 dark:text-white">
                          <div>{col.shortName}</div>
                          <span className="text-[10px] text-slate-400 font-normal">{col.location.city}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">State Ranking</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold text-blue-600">#{col.accreditations.karnatakaRank}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">NAAC Grade</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold text-emerald-600">{col.accreditations.naacGrade}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Highest CTC</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold text-emerald-500">₹{col.placements.highestPackageLPA} LPA</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Average CTC</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold">₹{col.placements.averagePackageLPA} LPA</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Placement %</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold">{col.placements.placementPercentage}%</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Annual KCET Fee</td>
                      {collegesInComparison.map(col => (
                        <td key={col.id} className="p-3 font-bold">₹{col.fees.kcetAnnual.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">CSE GM Cutoff</td>
                      {collegesInComparison.map(col => {
                        const cse = col.branches.find(b => b.branchCode === 'CSE');
                        return (
                          <td key={col.id} className="p-3 font-bold text-indigo-500">
                            ~{cse ? cse.cutoffs.kcet.gm.toLocaleString() : 'N/A'} Rank
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default function CollegesDirectoryPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading College Directory...</div>}>
      <CollegesDirectoryContent />
    </Suspense>
  );
}
