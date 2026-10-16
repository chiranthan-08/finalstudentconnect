'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  Award, 
  FileCheck, 
  Sparkles, 
  Search, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { COLLEGES_DATA } from '@/data/mockData';

export default function PlacementHubPage() {
  const [selectedCollegeId, setSelectedCollegeId] = useState('rvce-bangalore');
  
  // Resume Analyzer State
  const [resumeText, setResumeText] = useState('');
  const [targetRole, setTargetRole] = useState('Frontend Engineer (Next.js / React)');
  const [resumeScore, setResumeScore] = useState<number | null>(null);
  const [atsFeedback, setAtsFeedback] = useState<string[]>([]);

  const college = COLLEGES_DATA.find(c => c.id === selectedCollegeId) || COLLEGES_DATA[0];

  const handleAnalyzeResume = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    const lower = resumeText.toLowerCase();
    let score = 65;
    const feedback: string[] = [];

    if (lower.includes('next.js') || lower.includes('react')) {
      score += 10;
      feedback.push('✓ Strong match for Modern Web Frameworks (Next.js/React)');
    } else {
      feedback.push('⚠️ Missing crucial keyword: "Next.js" or "React.js"');
    }

    if (lower.includes('typescript')) {
      score += 10;
      feedback.push('✓ Explicit TypeScript proficiency mentioned');
    } else {
      feedback.push('⚠️ Modern tech recruiters look for TypeScript typing experience');
    }

    if (lower.includes('github') || lower.includes('http')) {
      score += 8;
      feedback.push('✓ Live project or GitHub links detected for code verification');
    }

    if (lower.includes('vtu') || lower.includes('cgpa') || lower.includes('sgpa')) {
      score += 7;
      feedback.push('✓ Academic credentials and engineering background clear');
    }

    setResumeScore(Math.min(96, score));
    setAtsFeedback(feedback);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Karnataka Engineering Placement Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Placement Hub & Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Compare campus placement statistics, package distributions, and run AI ATS resume analysis.
          </p>
        </div>

        {/* College Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">Institution:</span>
          <select
            value={selectedCollegeId}
            onChange={(e) => setSelectedCollegeId(e.target.value)}
            className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold"
          >
            {COLLEGES_DATA.map(c => (
              <option key={c.id} value={c.id}>{c.shortName} - {c.location.city}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected College Placement Snapshot */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Highest Package Offer</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            ₹{college.placements.highestPackageLPA} LPA
          </div>
          <div className="text-xs text-slate-500">Batch 2024 Tier-1 product offer</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Average Campus Package</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            ₹{college.placements.averagePackageLPA} LPA
          </div>
          <div className="text-xs text-slate-500">Across all engineering branches</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Overall Placement Rate</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
            {college.placements.placementPercentage}%
          </div>
          <div className="text-xs text-slate-500">{college.placements.studentsPlaced} students placed out of {college.placements.totalEligible}</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Median Package</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            ₹{college.placements.medianPackageLPA} LPA
          </div>
          <div className="text-xs text-slate-500">Consistent median CTC</div>
        </div>
      </div>

      {/* Top Recruiters & Branch-Wise Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Branch CTC Matrix */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>Branch-Wise Placement Performance ({college.shortName})</span>
            </h3>
          </div>

          <div className="space-y-3">
            {college.branches.map(b => (
              <div key={b.branchCode} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {b.branchName} ({b.branchCode})
                  </span>
                  <span className="font-extrabold text-emerald-600">
                    ₹{b.avgPackage} LPA Avg • Max ₹{b.highestPackage} LPA
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${Math.min(100, (b.avgPackage / 20) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Recruiters Marquee */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-500" />
            <span>Top Tier-1 Campus Recruiters</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {college.placements.topRecruiters.map((rec, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* AI RESUME ATS ANALYZER TOOL */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-indigo-200 dark:border-indigo-950 space-y-6">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>AI Powered Placement Assistant</span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Resume ATS Compatibility Analyzer
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Check if your resume passes applicant tracking systems for Bangalore campus drives.
          </p>
        </div>

        <form onSubmit={handleAnalyzeResume} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Role</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
            >
              <option value="Frontend Engineer (Next.js / React)">Frontend Engineer (Next.js / React)</option>
              <option value="Backend Developer (Node.js / Java)">Backend Developer (Node.js / Java)</option>
              <option value="Machine Learning / AI Engineer">Machine Learning / AI Engineer</option>
              <option value="DevOps & Cloud Engineer">DevOps & Cloud Engineer</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Paste Your Resume Text or Skills Summary
            </label>
            <textarea
              rows={5}
              required
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="e.g. 3rd year CSE student at RVCE with 8.9 CGPA. Built fullstack web apps using Next.js, React, TypeScript, and MongoDB. GitHub: https://github.com/..."
              className="w-full p-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Analyze Resume with AI</span>
          </button>
        </form>

        {resumeScore !== null && (
          <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-indigo-600">Calculated ATS Score</span>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {resumeScore} / 100
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                resumeScore >= 80 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700' : 'bg-amber-100 dark:bg-amber-950 text-amber-700'
              }`}>
                {resumeScore >= 80 ? 'High ATS Match' : 'Moderate Match'}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">AI Suggestions:</span>
              {atsFeedback.map((fb, idx) => (
                <div key={idx} className="text-slate-700 dark:text-slate-300">
                  {fb}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
