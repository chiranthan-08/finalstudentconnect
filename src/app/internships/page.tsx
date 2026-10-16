'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  DollarSign, 
  Search, 
  ExternalLink,
  ShieldCheck,
  Bookmark
} from 'lucide-react';
import { INTERNSHIPS_DATA } from '@/data/mockData';
import { Internship } from '@/types';

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>(INTERNSHIPS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRemote, setFilterRemote] = useState(false);
  const [appliedList, setAppliedList] = useState<{ [id: string]: 'Applied' | 'Under Review' | 'Interview' }>({
    'intern-1': 'Applied',
  });

  const filteredInternships = internships.filter(item => {
    if (filterRemote && !item.isRemote) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchRole = item.role.toLowerCase().includes(q);
      const matchComp = item.companyName.toLowerCase().includes(q);
      const matchLoc = item.location.toLowerCase().includes(q);
      if (!matchRole && !matchComp && !matchLoc) return false;
    }
    return true;
  });

  const handleApply = (id: string) => {
    setAppliedList(prev => ({
      ...prev,
      [id]: 'Applied',
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Verified Student Opportunities</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Karnataka Engineering Internships Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            High-stipend internships in Bengaluru & remote, with 1-click application tracking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Verified Paid Opportunities</span>
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by role (Full-Stack, AI, Cloud), company name, or tech stack..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer shrink-0">
          <input
            type="checkbox"
            checked={filterRemote}
            onChange={(e) => setFilterRemote(e.target.checked)}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <span>Remote Roles Only</span>
        </label>
      </div>

      {/* Internships Grid */}
      <div className="space-y-4">
        {filteredInternships.map((intern) => {
          const applicationStatus = appliedList[intern.id];

          return (
            <div
              key={intern.id}
              className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img
                    src={intern.companyLogo}
                    alt={intern.companyName}
                    className="w-12 h-12 rounded-2xl object-cover shadow-sm shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{intern.role}</h3>
                      {intern.isVerified && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                      {intern.companyName}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{intern.location}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{intern.durationMonths} Months</span>
                      </div>
                      <span>•</span>
                      <span>Apply by {intern.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                    ₹{intern.stipendMonthlyINR.toLocaleString()} / mo
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">Fixed Monthly Stipend</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {intern.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {intern.skillsRequired.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                <span className="text-slate-500">{intern.applicantsCount} applicants applied</span>

                {applicationStatus ? (
                  <span className="px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Status: {applicationStatus}</span>
                  </span>
                ) : (
                  <button
                    onClick={() => handleApply(intern.id)}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>1-Click Apply</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
