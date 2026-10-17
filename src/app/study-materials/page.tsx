'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Bookmark, 
  Star, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  BookOpen,
  X
} from 'lucide-react';
import { STUDY_MATERIALS } from '@/data/mockData';
import { StudyMaterial } from '@/types';

export default function StudyMaterialsPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>(STUDY_MATERIALS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSem, setSelectedSem] = useState('ALL');
  const [selectedScheme, setSelectedScheme] = useState('ALL');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const filteredMaterials = materials.filter(m => {
    if (selectedCategory !== 'ALL' && m.category !== selectedCategory) return false;
    if (selectedSem !== 'ALL' && m.semester.toString() !== selectedSem) return false;
    if (selectedScheme !== 'ALL' && m.scheme !== selectedScheme) return false;
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const fullSearchable = `${m.title} ${m.subject} ${m.subjectCode} ${m.scheme} ${m.branch} ${m.category} ${m.author}`.toLowerCase();
      const allMatch = tokens.every(tok => fullSearchable.includes(tok));
      if (!allMatch) return false;
    }
    return true;
  });

  const handleDownload = (mat: StudyMaterial) => {
    setDownloadNotice(`Downloading "${mat.title}" (${mat.fileSize})...`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3000);
  };

  const toggleSaveNote = (id: string) => {
    setSavedNotes(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>VTU & Autonomous Academic Library</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Study Material & PYQ Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Handwritten topper notes, previous year question papers with solutions, model papers, and lab manuals.
          </p>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
          Verified 2022 / 2021 Schemes
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{downloadNotice}</span>
          </div>
          <button onClick={() => setDownloadNotice(null)}>✕</button>
        </div>
      )}

      {/* Search & Filters */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by subject name, code (e.g. BCS401, BCS402), or topic..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
            >
              <option value="ALL">All Categories</option>
              <option value="Notes">Handwritten Notes</option>
              <option value="PYQ">Previous Year Questions (PYQs)</option>
              <option value="Model Paper">VTU Model Papers</option>
              <option value="Lab Manual">Lab Manuals</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Semester</label>
            <select
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
            >
              <option value="ALL">All Semesters</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Scheme</label>
            <select
              value={selectedScheme}
              onChange={(e) => setSelectedScheme(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
            >
              <option value="ALL">All Schemes</option>
              <option value="2022 Scheme">2022 Scheme (NEP)</option>
              <option value="2021 Scheme">2021 Scheme</option>
              <option value="2018 Scheme">2018 Scheme</option>
            </select>
          </div>
        </div>
      </div>

      {/* Materials List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMaterials.map((mat) => {
          const isBookmarked = savedNotes.includes(mat.id);

          return (
            <div
              key={mat.id}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {mat.subjectCode}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                      {mat.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{mat.scheme}</span>
                  </div>

                  <button
                    onClick={() => toggleSaveNote(mat.id)}
                    className={`p-1.5 rounded-lg text-slate-400 hover:text-rose-500 ${isBookmarked ? 'text-rose-500' : ''}`}
                    title="Bookmark"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {mat.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-0.5">
                  <div>Subject: <strong>{mat.subject}</strong> ({mat.branch} - Sem {mat.semester})</div>
                  <div>Contributed by: {mat.author}</div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{mat.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{mat.downloadsCount.toLocaleString()} downloads</span>
                  <span>•</span>
                  <span>{mat.fileSize}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                <button
                  onClick={() => handleDownload(mat)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => alert(`Report logged for: ${mat.title}. Our academic moderators will verify within 12 hours.`)}
                  className="text-[11px] text-slate-400 hover:text-amber-500 font-semibold flex items-center gap-1"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Report Error</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
