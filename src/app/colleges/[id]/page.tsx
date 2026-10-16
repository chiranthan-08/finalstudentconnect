'use client';

import React, { useState, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  AlertCircle
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';

function CollegeDetailContent() {
  const params = useParams();
  const router = useRouter();
  const collegeId = params.id as string;
  const { savedColleges, toggleSaveCollege } = useAuth();

  const college = COLLEGES_DATA.find(c => c.id === collegeId) || COLLEGES_DATA[0];
  const isSaved = savedColleges.includes(college.id);

  const [activeTab, setActiveTab] = useState<'cutoffs' | 'placements' | 'branches' | 'admission'>('cutoffs');
  const [cutoffCategory, setCutoffCategory] = useState<'gm' | 'twoA' | 'twoB' | 'threeA' | 'threeB' | 'sc' | 'st'>('gm');

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
        <div className="relative h-64 sm:h-80 w-full">
          <img
            src={college.heroImage}
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30" />
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-extrabold">
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
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleSaveCollege(college.id)}
              className={`p-3 rounded-2xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 ${
                isSaved ? 'bg-rose-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <Link
              href={`/predictor?college=${college.id}`}
              className="px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
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

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-6 text-xs sm:text-sm font-bold">
        {[
          { id: 'cutoffs', label: 'KCET & COMEDK Cutoffs' },
          { id: 'placements', label: 'Placement Analytics' },
          { id: 'branches', label: 'Branches & Seat Matrix' },
          { id: 'admission', label: 'Fees & Admission Details' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

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
