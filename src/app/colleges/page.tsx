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
  ChevronRight
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';
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
  const [maxCutoffRank, setMaxCutoffRank] = useState<number>(50000);
  const [maxFees, setMaxFees] = useState<number>(300000);
  const [hostelOnly, setHostelOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rank' | 'highest_pkg' | 'placement' | 'fees' | 'rating'>('rank');

  // Comparison State
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Districts list from data
  const districts = useMemo(() => {
    const list = Array.from(new Set(COLLEGES_DATA.map(c => c.location.district)));
    return ['ALL', ...list];
  }, []);

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
      // Intelligent Multi-token Query filter
      if (searchQuery.trim()) {
        const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const branchKeywords = col.branches.map(b => `${b.branchCode} ${b.branchName}`).join(' ');
        const recruiterKeywords = col.placements.topRecruiters.join(' ');
        const fullSearchable = `${col.name} ${col.shortName} ${col.code} ${col.location.city} ${col.location.district} ${col.affiliation} ${col.collegeType} ${col.accreditations.naacGrade} ${branchKeywords} ${recruiterKeywords}`.toLowerCase();

        const allTokensMatch = tokens.every(token => fullSearchable.includes(token));
        if (!allTokensMatch) return false;
      }

      // District
      if (selectedDistrict !== 'ALL' && col.location.district !== selectedDistrict) return false;

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

      // Branch & Cutoff check
      if (selectedBranch !== 'ALL') {
        const branchMatch = col.branches.find(b => b.branchCode === selectedBranch);
        if (!branchMatch) return false;
        if (branchMatch.cutoffs.kcet.gm > maxCutoffRank) return false;
      }

      return true;
    }).sort((a, b) => {
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
    maxCutoffRank,
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
            <span>Karnataka Engineering Colleges Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Discover & Compare Engineering Colleges
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Verified Karnataka KCET / COMEDK cutoffs, fees, placement statistics, and accreditation.
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
      <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by college name, code (e.g. E001), or city (Bengaluru, Mysuru)..."
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

        {/* Filter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
          {/* Branch */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
            >
              <option value="ALL">All Branches</option>
              <option value="CSE">CSE</option>
              <option value="ISE">ISE</option>
              <option value="AIML">AIML</option>
              <option value="ECE">ECE</option>
              <option value="MECH">Mechanical</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
            >
              {districts.map(d => (
                <option key={d} value={d}>{d === 'ALL' ? 'All Districts' : d}</option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
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
              className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
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
              className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
            >
              <option value="ALL">Any Grade</option>
              <option value="A++">A++ Grade</option>
              <option value="A+">A+ Grade</option>
              <option value="A">A Grade</option>
            </select>
          </div>

          {/* Hostel Toggle */}
          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer py-1.5">
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
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => {
          const isSaved = savedColleges.includes(college.id);
          const isCompared = compareList.includes(college.id);
          const cseBranch = college.branches.find(b => b.branchCode === 'CSE');

          return (
            <div
              key={college.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image and Badges */}
                <div className="relative h-44 w-full bg-slate-900">
                  <img
                    src={college.heroImage}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

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
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={() => toggleCompare(college.id)}
                      className={`p-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                        isCompared
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-white'
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
                          : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-white'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save college'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* College Title on Hero */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-extrabold line-clamp-1">{college.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-mono">
                        {college.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                      <span>{college.location.city} • {college.collegeType} • {college.affiliation}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3">
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
              <div className="p-4 pt-0 flex gap-2">
                <Link
                  href={`/colleges/${college.id}`}
                  className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Full Profile & Cutoffs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/predictor?college=${college.id}`}
                  className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                  title="Predict admission probability"
                >
                  Predict
                </Link>
              </div>
            </div>
          );
        })}
      </div>

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
