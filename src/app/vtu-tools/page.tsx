'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calculator, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Calendar, 
  AlertCircle,
  Percent,
  Plus,
  Trash2,
  Printer,
  Share2,
  Check,
  RefreshCw,
  User,
  Hash,
  FileText,
  ChevronDown,
  Info
} from 'lucide-react';
import {
  VTU_SCHEMES,
  VTU_BRANCHES,
  VTU_SEMESTERS,
  VtuSubject,
  EvaluatedSubject,
  getVtuSubjects,
  getGradeAndPoints,
  calculateSgpa,
  validateVtuUsn,
} from '@/data/vtuSubjectsData';

interface SubjectFormEntry extends VtuSubject {
  userMarks: number | '';
  isPassed: boolean;
  selectedElectiveId?: string;
}

export default function VtuToolsPage() {
  const [activeTool, setActiveTool] = useState<'sgpa' | 'cgpa' | 'percentage' | 'attendance' | 'cie'>('sgpa');
  
  // Scheme, Branch & Semester Cascading Selectors (VTU Circle Reference)
  const [selectedScheme, setSelectedScheme] = useState<string>('2022');
  const [selectedBranch, setSelectedBranch] = useState<string>('cse');
  const [selectedSemester, setSelectedSemester] = useState<string>('4');

  // Student Details
  const [studentName, setStudentName] = useState<string>('Chiranthan S');
  const [studentUsn, setStudentUsn] = useState<string>('1CG22CS045');
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // Subject Entries
  const [subjectEntries, setSubjectEntries] = useState<SubjectFormEntry[]>([]);

  // Load subjects dynamically whenever Scheme, Branch, or Semester changes
  useEffect(() => {
    const rawSubjects = getVtuSubjects(selectedScheme, selectedBranch, selectedSemester);
    const initialForms: SubjectFormEntry[] = rawSubjects.map((sub, idx) => {
      // Pre-fill realistic sample marks for quick preview
      const sampleMarks = [88, 82, 79, 91, 95, 84, 86, 90][idx % 8];
      let selectedElectiveId = '';
      if (sub.isElective && sub.electiveOptions && sub.electiveOptions.length > 0) {
        selectedElectiveId = sub.electiveOptions[0].id;
      }
      return {
        ...sub,
        userMarks: sampleMarks,
        isPassed: true,
        selectedElectiveId,
      };
    });
    setSubjectEntries(initialForms);
    setHasCalculated(false);
  }, [selectedScheme, selectedBranch, selectedSemester]);

  // Real-time USN validation
  const usnValidation = useMemo(() => {
    return validateVtuUsn(studentUsn);
  }, [studentUsn]);

  // Evaluated Subjects for SGPA calculation
  const evaluatedSubjects: EvaluatedSubject[] = useMemo(() => {
    return subjectEntries.map(entry => {
      let code = entry.code;
      let name = entry.name;
      let credits = entry.credits;

      // Handle elective selection
      if (entry.isElective && entry.electiveOptions && entry.selectedElectiveId) {
        const chosen = entry.electiveOptions.find(o => o.id === entry.selectedElectiveId);
        if (chosen) {
          code = chosen.code;
          name = `${entry.name} (${chosen.name})`;
          credits = chosen.credits;
        }
      }

      const numMarks = typeof entry.userMarks === 'number' ? entry.userMarks : 0;
      const { grade, gradePoint } = getGradeAndPoints(numMarks, entry.isPassed);

      return {
        id: entry.id,
        code,
        name,
        credits,
        marks: numMarks,
        grade,
        gradePoint,
        creditPoints: parseFloat((credits * gradePoint).toFixed(2)),
        isPassed: entry.isPassed && gradePoint > 0,
      };
    });
  }, [subjectEntries]);

  // Calculated SGPA result
  const sgpaResult = useMemo(() => {
    return calculateSgpa(evaluatedSubjects);
  }, [evaluatedSubjects]);

  // CGPA Calculator State
  const [semestersList, setSemestersList] = useState<{ sem: number; sgpa: number; credits: number }[]>([
    { sem: 1, sgpa: 8.8, credits: 20 },
    { sem: 2, sgpa: 9.1, credits: 20 },
    { sem: 3, sgpa: 8.6, credits: 22 },
    { sem: 4, sgpa: 8.9, credits: 22 },
  ]);

  // Percentage Calc State
  const [inputCgpa, setInputCgpa] = useState<number>(8.75);

  // Attendance Calc State
  const [totalClassesConducted, setTotalClassesConducted] = useState<number>(50);
  const [classesAttended, setClassesAttended] = useState<number>(42);
  const [targetPercentage, setTargetPercentage] = useState<number>(75);

  // CIE Internal Marks State
  const [cie1, setCie1] = useState<number>(26); // out of 30
  const [cie2, setCie2] = useState<number>(27); // out of 30
  const [assignment, setAssignment] = useState<number>(10); // out of 10
  const [quiz, setQuiz] = useState<number>(9); // out of 10

  // CGPA result calculation
  const calculatedCGPA = useMemo(() => {
    let totalWeightedSgpa = 0;
    let totalCredits = 0;
    semestersList.forEach(s => {
      totalWeightedSgpa += s.sgpa * s.credits;
      totalCredits += s.credits;
    });
    if (totalCredits === 0) return '0.00';
    return (totalWeightedSgpa / totalCredits).toFixed(2);
  }, [semestersList]);

  // VTU Formula: Percentage = (CGPA - 0.75) * 10
  const calculatedPercentage = useMemo(() => {
    if (inputCgpa < 0.75) return '0.00';
    return ((inputCgpa - 0.75) * 10).toFixed(2);
  }, [inputCgpa]);

  // Attendance Analysis
  const attendanceResults = useMemo(() => {
    if (totalClassesConducted === 0) return { currentPct: '0.0', canBunk: 0, needToAttend: 0 };
    const currentPct = ((classesAttended / totalClassesConducted) * 100).toFixed(1);
    
    // Can bunk?
    let canBunk = 0;
    while (((classesAttended) / (totalClassesConducted + canBunk + 1)) * 100 >= targetPercentage) {
      canBunk++;
      if (canBunk > 200) break;
    }

    // Need to attend?
    let needToAttend = 0;
    while (((classesAttended + needToAttend) / (totalClassesConducted + needToAttend)) * 100 < targetPercentage) {
      needToAttend++;
      if (needToAttend > 200) break;
    }

    return { currentPct, canBunk, needToAttend };
  }, [totalClassesConducted, classesAttended, targetPercentage]);

  // CIE Internal Marks Calc (VTU 2022 Scheme: CIE test scaled out of 30 + 20 for Assignments/Quizzes = 50 Marks)
  const calculatedCie = useMemo(() => {
    const testAvg = ((cie1 + cie2) / 60) * 30;
    const totalInternal = Math.min(50, Math.round(testAvg + assignment + quiz));
    return totalInternal;
  }, [cie1, cie2, assignment, quiz]);

  // Subject Manipulation Handlers
  const handleMarksChange = (idx: number, val: string) => {
    const updated = [...subjectEntries];
    if (val === '') {
      updated[idx].userMarks = '';
    } else {
      const parsed = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
      updated[idx].userMarks = parsed;
    }
    setSubjectEntries(updated);
  };

  const handleStatusToggle = (idx: number, isPassed: boolean) => {
    const updated = [...subjectEntries];
    updated[idx].isPassed = isPassed;
    setSubjectEntries(updated);
  };

  const handleElectiveChange = (idx: number, electiveId: string) => {
    const updated = [...subjectEntries];
    updated[idx].selectedElectiveId = electiveId;
    setSubjectEntries(updated);
  };

  const handleAddCustomSubject = () => {
    const newId = `custom_${Date.now()}`;
    const nextNumber = subjectEntries.length + 1;
    setSubjectEntries([
      ...subjectEntries,
      {
        id: newId,
        code: `ELECT${nextNumber}`,
        name: `Custom / Open Elective Course ${nextNumber}`,
        credits: 3,
        maxMarks: 100,
        userMarks: 80,
        isPassed: true,
      },
    ]);
  };

  const handleRemoveSubject = (id: string) => {
    setSubjectEntries(subjectEntries.filter(s => s.id !== id));
  };

  const handleCalculateSgpa = () => {
    setHasCalculated(true);
    // Smooth scroll to the provisional grade card
    const element = document.getElementById('vtu-grade-card-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopySummary = () => {
    const schemeObj = VTU_SCHEMES.find(s => s.id === selectedScheme);
    const branchObj = VTU_BRANCHES.find(b => b.id === selectedBranch);
    const text = `🎓 VTU SGPA Report Card\n` +
      `Student: ${studentName || 'VTU Student'} (${studentUsn.toUpperCase()})\n` +
      `Scheme: ${schemeObj?.name || selectedScheme}\n` +
      `Branch: ${branchObj?.name || selectedBranch} | Sem: ${selectedSemester}\n` +
      `--------------------------------\n` +
      `📊 SGPA: ${sgpaResult.sgpa.toFixed(2)} / 10.0\n` +
      `📈 Equivalent Percentage: ${sgpaResult.percentage.toFixed(2)}%\n` +
      `🏆 Class: ${sgpaResult.classAward}\n` +
      `Credits: ${sgpaResult.earnedCredits} / ${sgpaResult.totalCredits}\n` +
      `Calculated via StudentConnect VTU Academic Suite`;
    
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900/50">
          <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>VTU Belagavi & Autonomous Academic Suite</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          VTU SGPA Calculator & Academic Suite
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Officially calibrated for <strong>2021 Scheme</strong>, <strong>2022 Scheme (NEP CBCS)</strong>, and <strong>2025 Scheme</strong>. Generates instant provisional grade cards with printable PDF statements.
        </p>
      </div>

      {/* Tool Navigation Switcher */}
      <div className="flex items-center justify-center gap-2 flex-wrap no-print">
        {[
          { id: 'sgpa', label: 'VTU SGPA Calculator', icon: Calculator, badge: 'Official' },
          { id: 'cgpa', label: 'CGPA Calculator', icon: Award },
          { id: 'percentage', label: 'CGPA to Percentage', icon: Percent },
          { id: 'attendance', label: 'Attendance Bunk Forecaster', icon: Calendar },
          { id: 'cie', label: 'CIE Internal 50/50 Marks', icon: BookOpen },
        ].map(tool => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tool.label}</span>
              {tool.badge && (
                <span className="text-[10px] uppercase px-1.5 py-0.5 rounded-md bg-blue-400/20 text-blue-200 border border-blue-400/30">
                  {tool.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 1. SGPA CALCULATOR (VTU CIRCLE REFERENCE) */}
      {/* ========================================================================= */}
      {activeTool === 'sgpa' && (
        <div className="space-y-8">
          
          {/* Main Input Form Container */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 no-print">
            
            {/* Step 1: Scheme, Branch & Semester Cascade */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    <span>Step 1: Choose Scheme, Branch & Semester</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Syllabi and course credits automatically configure based on VTU regulations.
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  VTU NEP / CBCS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Scheme */}
                <div>
                  <label htmlFor="scheme-select" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Choose your Scheme:
                  </label>
                  <div className="relative">
                    <select
                      id="scheme-select"
                      value={selectedScheme}
                      onChange={(e) => setSelectedScheme(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 font-bold text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-8 cursor-pointer"
                    >
                      {VTU_SCHEMES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Branch */}
                <div>
                  <label htmlFor="branch-select" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Choose your Branch:
                  </label>
                  <div className="relative">
                    <select
                      id="branch-select"
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 font-bold text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-8 cursor-pointer"
                    >
                      {VTU_BRANCHES.map(b => (
                        <option key={b.id} value={b.id}>{b.name} ({b.code})</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Semester */}
                <div>
                  <label htmlFor="sem-select" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Choose your Semester:
                  </label>
                  <div className="relative">
                    <select
                      id="sem-select"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 font-bold text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-8 cursor-pointer"
                    >
                      {VTU_SEMESTERS.map(sem => (
                        <option key={sem.id} value={sem.id}>{sem.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Student Details Section */}
            <div className="space-y-4 pt-2">
              <div className="pb-2 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Step 2: Enter Student Details (for Official Grade Card)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Student Name */}
                <div>
                  <label htmlFor="student-name-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Enter Your Name:
                  </label>
                  <div className="relative">
                    <input
                      id="student-name-input"
                      type="text"
                      placeholder="e.g. Chiranthan S"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full p-3 pl-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* USN with live validation */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="usn-input" className="font-bold text-slate-700 dark:text-slate-300">
                      Enter your USN (10 Characters):
                    </label>
                    {usnValidation.isValid ? (
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Valid VTU USN
                      </span>
                    ) : (
                      <span className="text-[11px] text-amber-500">
                        e.g. 1CG22CS045 / 1ME21CS017
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="usn-input"
                      type="text"
                      maxLength={10}
                      placeholder="e.g. 1CG22CS045"
                      value={studentUsn}
                      onChange={(e) => setStudentUsn(e.target.value.toUpperCase())}
                      className={`w-full p-3 pl-9 rounded-xl border font-mono font-bold tracking-wider text-slate-900 dark:text-white focus:ring-2 focus:outline-none ${
                        usnValidation.isValid
                          ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 focus:ring-emerald-500'
                          : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 focus:ring-blue-500'
                      }`}
                    />
                    <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>

                  {/* USN details parser pill */}
                  {usnValidation.isValid && usnValidation.parsed && (
                    <div className="mt-2 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 flex flex-wrap gap-2">
                      <span><strong>Region:</strong> {usnValidation.parsed.region}</span>
                      <span>•</span>
                      <span><strong>College:</strong> {usnValidation.parsed.collegeCode}</span>
                      <span>•</span>
                      <span><strong>Year:</strong> 20{usnValidation.parsed.year}</span>
                      <span>•</span>
                      <span><strong>Dept:</strong> {usnValidation.parsed.branchCode}</span>
                      <span>•</span>
                      <span><strong>Roll:</strong> {usnValidation.parsed.rollNumber}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Important Note (VTU Circle Reference Callout) */}
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border-l-4 border-rose-500 border-y border-r border-rose-200 dark:border-rose-900 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-700 dark:text-rose-400">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span>Important Note:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-rose-800 dark:text-rose-300/90 leading-relaxed text-[11px] sm:text-xs">
                <li>If a subject has not been attempted or has no marks, please enter <strong>&ldquo;0&rdquo;</strong> only.</li>
                <li>Subjects with <strong>0 credits</strong> will <strong>not</strong> be included in the calculation of your SGPA.</li>
                <li><strong>For elective or other dropdown-based subjects</strong>, if none of the listed options are applicable, kindly select the <strong>&ldquo;X&rdquo;</strong> option from the dropdown menu and enter the appropriate marks.</li>
              </ul>
            </div>

            {/* Step 4: Enter Your Marks (Subject List) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Step 3: Enter your Marks & Status</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Input marks obtained out of 100 for each course. Letter grades and credit points update instantly.
                  </p>
                </div>
                
                <button
                  onClick={handleAddCustomSubject}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center gap-1.5 transition-colors border border-blue-200 dark:border-blue-800 self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Subject / Elective</span>
                </button>
              </div>

              {/* Subject Cards / Rows */}
              <div className="space-y-3">
                {subjectEntries.map((sub, idx) => {
                  const evalSub = evaluatedSubjects[idx];
                  const isElective = sub.isElective && sub.electiveOptions && sub.electiveOptions.length > 0;

                  return (
                    <div
                      key={sub.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        !sub.isPassed || evalSub.grade === 'F'
                          ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                          : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        
                        {/* Course Name & Details */}
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                              {evalSub.code}
                            </span>
                            <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              Credit: {evalSub.credits}
                            </span>
                            {isElective && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                Elective Choice
                              </span>
                            )}
                          </div>

                          <div className="font-semibold text-xs text-slate-900 dark:text-slate-100">
                            {sub.name}
                          </div>

                          {/* Elective Dropdown Selector */}
                          {isElective && (
                            <div className="pt-1">
                              <select
                                value={sub.selectedElectiveId}
                                onChange={(e) => handleElectiveChange(idx, e.target.value)}
                                className="w-full sm:w-auto max-w-md p-1.5 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 text-xs font-semibold text-purple-900 dark:text-purple-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                              >
                                {sub.electiveOptions?.map(opt => (
                                  <option key={opt.id} value={opt.id}>
                                    {opt.name} ({opt.code}) - {opt.credits} Cr
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>

                        {/* Marks Input & Pass/Fail Segmented Toggle */}
                        <div className="flex flex-wrap items-center gap-3">
                          
                          {/* Numeric Marks */}
                          <div className="flex items-center gap-1.5">
                            <label htmlFor={`marks-${sub.id}`} className="text-xs font-bold text-slate-500">Marks:</label>
                            <input
                              id={`marks-${sub.id}`}
                              type="number"
                              min={0}
                              max={100}
                              placeholder={sub.code}
                              value={sub.userMarks}
                              onChange={(e) => handleMarksChange(idx, e.target.value)}
                              className="w-20 p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-center font-bold text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <span className="text-xs text-slate-400">/ 100</span>
                          </div>

                          {/* Live Grade Badge */}
                          <div className="min-w-[80px] text-center px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <span className="text-[10px] block uppercase text-slate-400 font-bold">Grade</span>
                            <span className={`text-xs font-black ${
                              evalSub.grade === 'F' ? 'text-rose-500' : 'text-blue-600 dark:text-blue-400'
                            }`}>
                              {evalSub.grade} (GP: {evalSub.gradePoint})
                            </span>
                          </div>

                          {/* VTU Circle Pass / Fail Segmented Toggle */}
                          <div className="inline-flex rounded-xl p-1 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                            <button
                              type="button"
                              onClick={() => handleStatusToggle(idx, true)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                sub.isPassed
                                  ? 'bg-emerald-600 text-white shadow-md'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                              }`}
                            >
                              Pass
                            </button>
                            <button
                              type="button"
                              onClick={() => handleStatusToggle(idx, false)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                !sub.isPassed
                                  ? 'bg-rose-600 text-white shadow-md'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'
                              }`}
                            >
                              Fail
                            </button>
                          </div>

                          {/* Trash button for custom entries */}
                          {sub.id.startsWith('custom_') && (
                            <button
                              type="button"
                              onClick={() => handleRemoveSubject(sub.id)}
                              className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                              title="Remove custom course"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calculate CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Verified against VTU notification No. VTU/BGM/ACA-OS/2022-23/NEP guidelines.
              </div>

              <button
                type="button"
                onClick={handleCalculateSgpa}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transform active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate VTU SGPA</span>
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* OFFICIAL VTU PROVISIONAL GRADE CARD & REPORT (VTU CIRCLE REFERENCE) */}
          {/* ========================================================================= */}
          <div id="vtu-grade-card-section" className="space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 no-print">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Provisional VTU Grade Card Statement</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Ready to download, print, or share with classmates and faculty.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2 rounded-xl glass-card text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4 text-blue-500" />}
                  <span>{copiedSummary ? 'Copied to Clipboard!' : 'Share Summary'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Download PDF</span>
                </button>
              </div>
            </div>

            {/* Printable Grade Card Component */}
            <div
              id="vtu-printable-gradecard"
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-slate-300 dark:border-slate-700 shadow-2xl space-y-6 print-border"
            >
              
              {/* Official VTU University Header */}
              <div className="text-center pb-6 border-b-2 border-slate-900 dark:border-slate-100 space-y-1">
                <div className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  <span>State Technological University of Karnataka</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white uppercase tracking-tight">
                  Visvesvaraya Technological University, Belagavi
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  &ldquo;Jnana Sangama&rdquo;, Belagavi - 590018, Karnataka, India
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold text-xs uppercase tracking-wide">
                    Provisional Semester Grade Point Average (SGPA) Card
                  </span>
                </div>
              </div>

              {/* Student Identification Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Student Name</span>
                  <span className="font-extrabold text-slate-900 dark:text-white uppercase">
                    {studentName || 'VTU Candidate'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">University Seat No (USN)</span>
                  <span className="font-mono font-extrabold text-blue-600 dark:text-blue-400 uppercase">
                    {studentUsn || '1ME21CS001'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Scheme & Semester</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {selectedScheme} Scheme • {selectedSemester} Sem
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Branch / Program</span>
                  <span className="font-extrabold text-slate-900 dark:text-white uppercase">
                    {VTU_BRANCHES.find(b => b.id === selectedBranch)?.code || selectedBranch.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Grade Card Subject Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 dark:border-slate-100 text-[10px] uppercase font-black text-slate-700 dark:text-slate-300">
                      <th className="py-2.5 px-3">Sl. No.</th>
                      <th className="py-2.5 px-3">Course Code</th>
                      <th className="py-2.5 px-3">Course Title</th>
                      <th className="py-2.5 px-3 text-center">Credits (C)</th>
                      <th className="py-2.5 px-3 text-center">Marks (100)</th>
                      <th className="py-2.5 px-3 text-center">Grade</th>
                      <th className="py-2.5 px-3 text-center">Grade Point (G)</th>
                      <th className="py-2.5 px-3 text-right">Credit Points (C &times; G)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {evaluatedSubjects.map((sub, idx) => (
                      <tr key={sub.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-bold text-slate-400">{idx + 1}</td>
                        <td className="py-2.5 px-3 font-mono font-extrabold text-slate-900 dark:text-slate-200">{sub.code}</td>
                        <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200">{sub.name}</td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-900 dark:text-slate-100">{sub.credits}</td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-900 dark:text-slate-100">{sub.marks}</td>
                        <td className="py-2.5 px-3 text-center font-black">
                          <span className={`px-2 py-0.5 rounded text-[11px] ${
                            sub.grade === 'F'
                              ? 'bg-rose-100 dark:bg-rose-950 text-rose-600 font-black'
                              : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          }`}>
                            {sub.grade}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-center font-extrabold text-slate-900 dark:text-slate-100">{sub.gradePoint}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-extrabold text-blue-600 dark:text-blue-400">{sub.creditPoints.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-900 dark:border-slate-100 font-black text-slate-900 dark:text-white">
                      <td colSpan={3} className="py-3 px-3 uppercase text-right">Total Aggregate:</td>
                      <td className="py-3 px-3 text-center font-bold">{sgpaResult.totalCredits.toFixed(1)}</td>
                      <td colSpan={3} className="py-3 px-3 text-right uppercase text-slate-500">Total Credit Points:</td>
                      <td className="py-3 px-3 text-right font-mono text-blue-600 dark:text-blue-400">{sgpaResult.totalCreditPoints.toFixed(1)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* VTU Result Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                
                {/* SGPA Score Hero */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Semester SGPA</span>
                  <div className="text-3xl sm:text-4xl font-black">{sgpaResult.sgpa.toFixed(2)}</div>
                  <span className="text-[11px] text-blue-100 block">Scale: 10.00 Points</span>
                </div>

                {/* Percentage Equivalent */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Equivalent Percentage</span>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">
                    {sgpaResult.percentage.toFixed(2)}%
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono">
                    (SGPA - 0.75) &times; 10
                  </span>
                </div>

                {/* Credits Earned */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Credits Registered / Earned</span>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">
                    {sgpaResult.earnedCredits} <span className="text-base text-slate-400">/ {sgpaResult.totalCredits}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Points: {sgpaResult.totalCreditPoints.toFixed(1)}
                  </span>
                </div>

                {/* Class Distinction */}
                <div className={`p-5 rounded-2xl border space-y-1 ${
                  sgpaResult.hasBacklogs
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
                }`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">Classification</span>
                  <div className="text-base font-black leading-tight pt-1">
                    {sgpaResult.classAward}
                  </div>
                  <span className="text-[11px] block pt-1 font-semibold">
                    Status: {sgpaResult.hasBacklogs ? 'Backlogs in Sem' : 'PASSED (Regular)'}
                  </span>
                </div>

              </div>

              {/* Official Disclaimer & Verification Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 leading-relaxed flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  * Note: This provisional SGPA statement is computed strictly following Visvesvaraya Technological University (VTU) guidelines.
                </div>
                <div className="font-mono text-slate-400 shrink-0">
                  Generated via StudentConnect Academic Suite
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CGPA CALCULATOR */}
      {/* ========================================================================= */}
      {activeTool === 'cgpa' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Cumulative Grade Point Average (CGPA)
              </h2>
              <p className="text-xs text-slate-500">
                Formula: CGPA = &Sigma; (Credits_i &times; SGPA_i) / &Sigma; Total Credits
              </p>
            </div>
            
            <button
              onClick={() => {
                const nextSem = semestersList.length + 1;
                setSemestersList([...semestersList, { sem: nextSem, sgpa: 8.5, credits: 22 }]);
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 font-bold text-xs flex items-center gap-1 border border-emerald-200 dark:border-emerald-800"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Semester</span>
            </button>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">Cumulative CGPA</span>
              <div className="text-4xl sm:text-5xl font-black">{calculatedCGPA} / 10.0</div>
            </div>
            <div className="text-xs text-emerald-100 max-w-xs leading-relaxed">
              Based on {semestersList.length} semesters. Consistent CGPA above 7.75 qualifies for First Class with Distinction under VTU!
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {semestersList.map((item, i) => (
              <div key={item.sem} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Semester {item.sem}</span>
                  {semestersList.length > 1 && (
                    <button
                      onClick={() => setSemestersList(semestersList.filter((_, idx) => idx !== i))}
                      className="text-slate-400 hover:text-rose-500 p-1"
                      title="Remove semester"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-[11px]">SGPA:</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={item.sgpa}
                    onChange={(e) => {
                      const updated = [...semestersList];
                      updated[i].sgpa = parseFloat(e.target.value) || 0;
                      setSemestersList(updated);
                    }}
                    className="w-16 p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center font-bold"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-[11px]">Credits:</span>
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    value={item.credits}
                    onChange={(e) => {
                      const updated = [...semestersList];
                      updated[i].credits = parseFloat(e.target.value) || 0;
                      setSemestersList(updated);
                    }}
                    className="w-16 p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center font-bold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. CGPA TO PERCENTAGE CONVERTER */}
      {/* ========================================================================= */}
      {activeTool === 'percentage' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Official VTU CGPA to Percentage Converter
            </h2>
            <p className="text-xs text-slate-500">
              Formula officially notified by Visvesvaraya Technological University: <code>Percentage (%) = (CGPA - 0.75) &times; 10</code>
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label htmlFor="cgpa-to-pct-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Enter Your CGPA (out of 10.0)
              </label>
              <input
                id="cgpa-to-pct-input"
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={inputCgpa}
                onChange={(e) => setInputCgpa(parseFloat(e.target.value) || 0)}
                className="w-full p-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-lg font-extrabold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white text-center space-y-1 shadow-lg">
              <span className="text-xs font-semibold text-blue-100 uppercase">Equivalent VTU Percentage</span>
              <div className="text-4xl font-black">{calculatedPercentage}%</div>
              <span className="text-[11px] text-blue-100 block mt-1">
                Class: {parseFloat(calculatedPercentage) >= 70 ? 'First Class with Distinction (FCD)' : parseFloat(calculatedPercentage) >= 60 ? 'First Class (FC)' : 'Second Class (SC)'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. ATTENDANCE BUNK FORECASTER */}
      {/* ========================================================================= */}
      {activeTool === 'attendance' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              VTU 75% / 85% Attendance Bunk Forecaster
            </h2>
            <p className="text-xs text-slate-500">
              Calculate precisely how many classes you can afford to skip without being detained.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="conducted-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Classes Held So Far</label>
                <input
                  id="conducted-input"
                  type="number"
                  value={totalClassesConducted}
                  onChange={(e) => setTotalClassesConducted(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label htmlFor="attended-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Classes You Attended</label>
                <input
                  id="attended-input"
                  type="number"
                  value={classesAttended}
                  onChange={(e) => setClassesAttended(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-blue-600"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-600 dark:text-slate-400">Current Attendance:</span>
                <span className={`text-xl font-extrabold ${parseFloat(attendanceResults.currentPct) >= 75 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {attendanceResults.currentPct}%
                </span>
              </div>

              {parseFloat(attendanceResults.currentPct) >= 75 ? (
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold text-xs">
                  🎉 You are safe! You can bunk the next <strong>{attendanceResults.canBunk} classes</strong> and still maintain 75% attendance.
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-semibold text-xs">
                  ⚠️ Danger Zone! You must attend the next <strong>{attendanceResults.needToAttend} consecutive classes</strong> to reach 75%.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. CIE INTERNAL 50/50 MARKS CALCULATOR */}
      {/* ========================================================================= */}
      {activeTool === 'cie' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              CIE Internal Marks Calculator (50 Scale)
            </h2>
            <p className="text-xs text-slate-500">
              VTU 2022 Scheme continuous internal evaluation marks computation.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="cie1-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">CIE 1 Test (out of 30)</label>
                <input
                  id="cie1-input"
                  type="number"
                  max="30"
                  value={cie1}
                  onChange={(e) => setCie1(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label htmlFor="cie2-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">CIE 2 Test (out of 30)</label>
                <input
                  id="cie2-input"
                  type="number"
                  max="30"
                  value={cie2}
                  onChange={(e) => setCie2(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="assignment-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Assignment (out of 10)</label>
                <input
                  id="assignment-input"
                  type="number"
                  max="10"
                  value={assignment}
                  onChange={(e) => setAssignment(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label htmlFor="quiz-input" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Seminar / Quiz (out of 10)</label>
                <input
                  id="quiz-input"
                  type="number"
                  max="10"
                  value={quiz}
                  onChange={(e) => setQuiz(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center space-y-1 shadow-lg">
              <span className="text-xs font-semibold text-blue-100 uppercase">Estimated Total Internal Marks</span>
              <div className="text-4xl font-black">{calculatedCie} / 50</div>
              <span className="text-[11px] text-blue-100 block">
                Minimum passing marks in VTU CIE is 20/50 (40%).
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
