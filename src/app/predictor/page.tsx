'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldAlert, 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle, 
  ArrowRight, 
  Sliders,
  Search
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';

function CollegePredictorContent() {
  const searchParams = useSearchParams();
  const initialRank = searchParams.get('rank') || '4500';
  const initialBranch = searchParams.get('branch') || 'CSE';
  const preselectedCollege = searchParams.get('college') || '';

  const [examType, setExamType] = useState<'kcet' | 'comedk'>('kcet');
  const [rank, setRank] = useState<number>(parseInt(initialRank) || 4500);
  const [category, setCategory] = useState<'gm' | 'twoA' | 'twoB' | 'threeA' | 'threeB' | 'sc' | 'st'>('gm');
  const [branch, setBranch] = useState(initialBranch);
  const [district, setDistrict] = useState('ALL');
  const [collegeType, setCollegeType] = useState('ALL');
  const [maxBudget, setMaxBudget] = useState<number>(300000);
  const [hasCalculated, setHasCalculated] = useState(true);
  const [resultsFilter, setResultsFilter] = useState('');

  // Compute predictions
  const results = React.useMemo(() => {
    const safe: any[] = [];
    const moderate: any[] = [];
    const dream: any[] = [];

    COLLEGES_DATA.forEach(college => {
      // District filter
      if (district !== 'ALL' && college.location.district !== district) return;
      // Type filter
      if (collegeType !== 'ALL' && college.collegeType !== collegeType) return;
      // Budget
      if (college.fees.kcetAnnual > maxBudget) return;

      // Find matching branches
      college.branches.forEach(b => {
        if (branch !== 'ALL' && b.branchCode !== branch) return;

        let cutoff = b.cutoffs.kcet[category] || b.cutoffs.kcet.gm;
        if (examType === 'comedk') {
          cutoff = b.cutoffs.comedk ? b.cutoffs.comedk.gm : 0;
        }

        if (!cutoff) return;

        const rankDiff = cutoff - rank;
        // Calculation of probability:
        // If student rank is far better (lower number) than cutoff -> high safe
        // If student rank is close to cutoff -> moderate
        // If student rank is higher (worse) than cutoff by a bit -> dream
        let probability = 50;
        let type: 'safe' | 'moderate' | 'dream' = 'moderate';

        if (rank <= cutoff * 0.75) {
          probability = Math.min(95, Math.round(85 + (cutoff - rank) / cutoff * 15));
          type = 'safe';
        } else if (rank <= cutoff * 1.1) {
          probability = Math.round(55 + (cutoff - rank) / (cutoff * 0.35) * 20);
          probability = Math.max(45, Math.min(78, probability));
          type = 'moderate';
        } else if (rank <= cutoff * 1.4) {
          probability = Math.round(20 + (cutoff * 1.4 - rank) / (cutoff * 0.3) * 20);
          probability = Math.max(10, Math.min(38, probability));
          type = 'dream';
        } else {
          return; // Beyond reach
        }

        const item = {
          college,
          branch: b,
          cutoff,
          rankDiff,
          probability,
          type,
          trend: rankDiff > 0 ? 'Favorable' : 'Competitive',
        };

        if (type === 'safe') safe.push(item);
        else if (type === 'moderate') moderate.push(item);
        else if (type === 'dream') dream.push(item);
      });
    });

    return { safe, moderate, dream };
  }, [rank, category, branch, district, collegeType, maxBudget, examType]);

  // Instant filter for predicted results
  const filteredResults = React.useMemo(() => {
    if (!resultsFilter.trim()) return results;
    const tokens = resultsFilter.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const filterFn = (item: any) => {
      const full = `${item.college.name} ${item.college.shortName} ${item.college.code} ${item.college.location.city} ${item.college.location.district} ${item.branch.branchName} ${item.branch.branchCode}`.toLowerCase();
      return tokens.every(tok => full.includes(tok));
    };

    return {
      safe: results.safe.filter(filterFn),
      moderate: results.moderate.filter(filterFn),
      dream: results.dream.filter(filterFn),
    };
  }, [results, resultsFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Karnataka AI Admission Forecaster</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          AI College Admission Predictor
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Get realistic probability estimates across Karnataka Engineering colleges based on historical KEA & COMEDK cutoffs.
        </p>
      </div>

      {/* Official Disclaimer Banner */}
      <div className="p-4 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/20 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Official Transparency Policy: </strong> Predictions are estimates based on historical Karnataka Examinations Authority (KEA) round cutoffs (2021-2024) and do not guarantee admission. Final seat allocations depend strictly on current year seat matrices, student choice filling, and official KEA rounds.
        </div>
      </div>

      {/* Controls & Inputs Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
            <Sliders className="w-4 h-4 text-blue-500" />
            <span>Enter Your Exam & Preference Details</span>
          </div>

          {/* Exam Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
            <button
              onClick={() => setExamType('kcet')}
              className={`px-3 py-1 rounded-lg uppercase ${
                examType === 'kcet' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              KCET CET
            </button>
            <button
              onClick={() => setExamType('comedk')}
              className={`px-3 py-1 rounded-lg uppercase ${
                examType === 'comedk' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              COMEDK UGET
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
          {/* Rank */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              {examType.toUpperCase()} Rank
            </label>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-extrabold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="e.g. 5200"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Reservation Category
            </label>
            <select
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="gm">General Merit (GM)</option>
              <option value="twoA">Category 2A</option>
              <option value="twoB">Category 2B</option>
              <option value="threeA">Category 3A</option>
              <option value="threeB">Category 3B</option>
              <option value="sc">Scheduled Caste (SC)</option>
              <option value="st">Scheduled Tribe (ST)</option>
            </select>
          </div>

          {/* Preferred Branch */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Target Branch
            </label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">Any Branch</option>
              <option value="CSE">Computer Science (CSE)</option>
              <option value="AIML">AI & ML (AIML)</option>
              <option value="ISE">Information Science (ISE)</option>
              <option value="ECE">Electronics (ECE)</option>
              <option value="MECH">Mechanical</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              District / Location
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Karnataka</option>
              <option value="Bengaluru Urban">Bengaluru Urban</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Tumakuru">Tumakuru</option>
            </select>
          </div>

          {/* College Type */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              College Type
            </label>
            <select
              value={collegeType}
              onChange={(e) => setCollegeType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">Any (Govt / Pvt)</option>
              <option value="Government">Government Only</option>
              <option value="Private">Private Autonomous</option>
              <option value="Aided">Aided Autonomous</option>
            </select>
          </div>

          {/* Max Budget */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Max Govt Quota Fee: ₹{(maxBudget / 1000).toFixed(0)}k
            </label>
            <input
              type="range"
              min="40000"
              max="350000"
              step="10000"
              value={maxBudget}
              onChange={(e) => setMaxBudget(parseInt(e.target.value))}
              className="w-full accent-blue-600 mt-2"
            />
          </div>
        </div>
      </div>

      {/* PREDICTION RESULTS 3-TIER COLUMNS */}
      <div className="space-y-6">
        
        {/* Instant Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Predicted College Options</h3>
            <p className="text-xs text-slate-500">Filtered across Safe, Moderate, and Dream probability bands</p>
          </div>
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-blue-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={resultsFilter}
              onChange={(e) => setResultsFilter(e.target.value)}
              placeholder="Search in results (RVCE, BMSCE, Bengaluru, CSE)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Safe Colleges (85%+) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Safe Colleges (80% - 95% Probability)
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                {filteredResults.safe.length} Options
              </span>
            </div>
            <span className="text-xs text-slate-500">Historical cutoff is comfortably higher than your rank</span>
          </div>

          {filteredResults.safe.length === 0 ? (
            <div className="p-6 rounded-2xl glass-card text-center text-xs text-slate-400">
              No safe colleges found matching this filter. Try clearing the search or adjusting target branch.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResults.safe.map((item, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-emerald-500/30 hover:border-emerald-500 transition-all space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                        {item.probability}% Probability
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1.5">{item.college.name}</h4>
                      <div className="text-[11px] text-slate-500">{item.college.location.city} • Rank #{item.college.accreditations.karnatakaRank}</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/40 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-emerald-800 dark:text-emerald-300">
                      <span>{item.branch.branchName}</span>
                      <span>Cutoff: ~{item.cutoff.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                      <span>Rank Gap Margin:</span>
                      <span className="font-semibold text-emerald-600">+{item.rankDiff.toLocaleString()} ranks safe</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-1 text-xs">
                    <span className="font-semibold text-slate-500">Avg CTC: ₹{item.branch.avgPackage} LPA</span>
                    <Link href={`/colleges/${item.college.id}`} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                      <span>View College</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Moderate Chance (50% - 75%) */}
        <div className="space-y-3 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Moderate Chance Colleges (50% - 75% Probability)
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">
                {filteredResults.moderate.length} Options
              </span>
            </div>
            <span className="text-xs text-slate-500">Your rank is close to the cutoff borderline</span>
          </div>

          {filteredResults.moderate.length === 0 ? (
            <div className="p-6 rounded-2xl glass-card text-center text-xs text-slate-400">
              No moderate options under current search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResults.moderate.map((item, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-amber-500/30 hover:border-amber-500 transition-all space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">
                        {item.probability}% Probability
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1.5">{item.college.name}</h4>
                      <div className="text-[11px] text-slate-500">{item.college.location.city} • Rank #{item.college.accreditations.karnatakaRank}</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-amber-800 dark:text-amber-300">
                      <span>{item.branch.branchName}</span>
                      <span>Cutoff: ~{item.cutoff.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                      <span>Difference:</span>
                      <span className="font-semibold text-amber-600">
                        {item.rankDiff >= 0 ? `+${item.rankDiff}` : item.rankDiff} ranks
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-1 text-xs">
                    <span className="font-semibold text-slate-500">Avg CTC: ₹{item.branch.avgPackage} LPA</span>
                    <Link href={`/colleges/${item.college.id}`} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                      <span>View College</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dream Colleges (15% - 40%) */}
        <div className="space-y-3 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Dream Colleges (15% - 40% Probability)
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">
                {filteredResults.dream.length} Options
              </span>
            </div>
            <span className="text-xs text-slate-500">Ambitious choices worth entering in Round 1/2 Option Entry</span>
          </div>

          {filteredResults.dream.length === 0 ? (
            <div className="p-6 rounded-2xl glass-card text-center text-xs text-slate-400">
              No dream colleges found for this search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResults.dream.map((item, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-purple-500/30 hover:border-purple-500 transition-all space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">
                        {item.probability}% Probability
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1.5">{item.college.name}</h4>
                      <div className="text-[11px] text-slate-500">{item.college.location.city} • Rank #{item.college.accreditations.karnatakaRank}</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/40 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-purple-800 dark:text-purple-300">
                      <span>{item.branch.branchName}</span>
                      <span>Cutoff: ~{item.cutoff.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                      <span>Reach Gap:</span>
                      <span className="font-semibold text-purple-600">{item.rankDiff} ranks away</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-1 text-xs">
                    <span className="font-semibold text-slate-500">Highest CTC: ₹{item.branch.highestPackage} LPA</span>
                    <Link href={`/colleges/${item.college.id}`} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                      <span>View College</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default function CollegePredictorPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading AI Predictor...</div>}>
      <CollegePredictorContent />
    </Suspense>
  );
}
