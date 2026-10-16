'use client';

import React, { useState } from 'react';
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
  Trash2
} from 'lucide-react';

interface SubjectEntry {
  id: string;
  name: string;
  credits: number;
  gradePoint: number;
}

export default function VtuToolsPage() {
  const [activeTool, setActiveTool] = useState<'sgpa' | 'cgpa' | 'percentage' | 'attendance' | 'cie'>('sgpa');
  
  // Scheme & Semester selection for SGPA
  const [selectedScheme, setSelectedScheme] = useState('2022 Scheme');
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState('4');

  // SGPA subjects list
  const [subjects, setSubjects] = useState<SubjectEntry[]>([
    { id: '1', name: 'Design & Analysis of Algorithms (BCS401)', credits: 4, gradePoint: 9 },
    { id: '2', name: 'Operating Systems (BCS402)', credits: 4, gradePoint: 9 },
    { id: '3', name: 'Microcontrollers & Embedded Systems (BCS403)', credits: 3, gradePoint: 8 },
    { id: '4', name: 'Database Management Systems (BCS404)', credits: 3, gradePoint: 9 },
    { id: '5', name: 'Algorithms Laboratory (BCSL405)', credits: 1.5, gradePoint: 10 },
    { id: '6', name: 'Constitution of India & Cyber Law (BCIK406)', credits: 1, gradePoint: 8 },
    { id: '7', name: 'Biology for Engineers (BBOK407)', credits: 2, gradePoint: 8 },
    { id: '8', name: 'Universal Human Values (BUHK408)', credits: 1, gradePoint: 9 },
  ]);

  // CGPA Calculator State
  const [semestersList, setSemestersList] = useState<{ sem: number; sgpa: number; credits: number }[]>([
    { sem: 1, sgpa: 8.8, credits: 20 },
    { sem: 2, sgpa: 9.1, credits: 20 },
    { sem: 3, sgpa: 8.6, credits: 22 },
  ]);

  // Percentage Calc State
  const [inputCgpa, setInputCgpa] = useState<number>(8.75);

  // Attendance Calc State
  const [totalClassesConducted, setTotalClassesConducted] = useState<number>(45);
  const [classesAttended, setClassesAttended] = useState<number>(38);
  const [targetPercentage, setTargetPercentage] = useState<number>(75);

  // CIE Internal Marks State
  const [cie1, setCie1] = useState<number>(24); // out of 30
  const [cie2, setCie2] = useState<number>(27); // out of 30
  const [assignment, setAssignment] = useState<number>(10); // out of 10
  const [quiz, setQuiz] = useState<number>(10); // out of 10

  // 1. Calculate SGPA
  const calculatedSGPA = React.useMemo(() => {
    let totalCreditPoints = 0;
    let totalCredits = 0;
    subjects.forEach(s => {
      totalCreditPoints += s.credits * s.gradePoint;
      totalCredits += s.credits;
    });
    if (totalCredits === 0) return '0.00';
    return (totalCreditPoints / totalCredits).toFixed(2);
  }, [subjects]);

  // 2. Calculate CGPA
  const calculatedCGPA = React.useMemo(() => {
    let totalWeightedSgpa = 0;
    let totalCredits = 0;
    semestersList.forEach(s => {
      totalWeightedSgpa += s.sgpa * s.credits;
      totalCredits += s.credits;
    });
    if (totalCredits === 0) return '0.00';
    return (totalWeightedSgpa / totalCredits).toFixed(2);
  }, [semestersList]);

  // 3. VTU Formula: Percentage = (CGPA - 0.75) * 10
  const calculatedPercentage = React.useMemo(() => {
    if (inputCgpa < 0.75) return '0.00';
    return ((inputCgpa - 0.75) * 10).toFixed(2);
  }, [inputCgpa]);

  // 4. Attendance Analysis
  const attendanceResults = React.useMemo(() => {
    if (totalClassesConducted === 0) return { currentPct: 0, canBunk: 0, needToAttend: 0 };
    const currentPct = ((classesAttended / totalClassesConducted) * 100).toFixed(1);
    
    // Can bunk?
    // (classesAttended) / (totalClassesConducted + X) >= target / 100
    let canBunk = 0;
    while ((classesAttended / (totalClassesConducted + canBunk + 1)) * 100 >= targetPercentage) {
      canBunk++;
    }

    // Need to attend?
    // (classesAttended + Y) / (totalClassesConducted + Y) >= target / 100
    let needToAttend = 0;
    while (((classesAttended + needToAttend) / (totalClassesConducted + needToAttend)) * 100 < targetPercentage) {
      needToAttend++;
      if (needToAttend > 100) break;
    }

    return { currentPct, canBunk, needToAttend };
  }, [totalClassesConducted, classesAttended, targetPercentage]);

  // 5. CIE 50/50 Internal Marks Calc
  const calculatedCie = React.useMemo(() => {
    // Average of 2 CIEs (scaled to 20 or 30 depending on scheme)
    // VTU 2022 Scheme: CIE test avg (out of 25) + Assignment & Quizzes (25) = 50 Marks Total
    const testAvg = ((cie1 + cie2) / 60) * 30; // scaled out of 30
    const totalInternal = Math.min(50, Math.round(testAvg + assignment + quiz));
    return totalInternal;
  }, [cie1, cie2, assignment, quiz]);

  const handleAddSubject = () => {
    const newId = (subjects.length + 1).toString();
    setSubjects([...subjects, { id: newId, name: `Elective / Open Course ${newId}`, credits: 3, gradePoint: 8 }]);
  };

  const handleRemoveSubject = (id: string) => {
    setSubjects(subjects.filter(s => s.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5 text-blue-500" />
          <span>VTU Belagavi & Autonomous Academic Suite</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          VTU Academic Calculators & Forecasters
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Configurable for 2022 Scheme, 2021 Scheme, and 2018 Scheme.
        </p>
      </div>

      {/* Tool Navigation Switcher */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          { id: 'sgpa', label: 'SGPA Calculator', icon: Calculator },
          { id: 'cgpa', label: 'CGPA Calculator', icon: Award },
          { id: 'percentage', label: 'CGPA to Percentage', icon: Percent },
          { id: 'attendance', label: 'Attendance Bunk Forecaster', icon: Calendar },
          { id: 'cie', label: 'CIE Internal 50/50 Marks', icon: BookOpen },
        ].map(tool => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeTool === tool.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tool.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. SGPA CALCULATOR */}
      {activeTool === 'sgpa' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Semester Grade Point Average (SGPA)
              </h2>
              <p className="text-xs text-slate-500">
                Formula: SGPA = Σ (Credit × Grade Point) / Σ Total Credits
              </p>
            </div>

            {/* Config Selectors */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={selectedScheme}
                onChange={(e) => setSelectedScheme(e.target.value)}
                className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
              >
                <option value="2022 Scheme">2022 Scheme (NEP)</option>
                <option value="2021 Scheme">2021 Scheme</option>
                <option value="2018 Scheme">2018 Scheme (CBCS)</option>
              </select>

              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
              >
                <option value="CSE">CSE / ISE</option>
                <option value="AIML">AIML</option>
                <option value="ECE">ECE</option>
                <option value="MECH">Mechanical</option>
              </select>
            </div>
          </div>

          {/* SGPA Score Hero Card */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Calculated SGPA</span>
              <div className="text-4xl sm:text-5xl font-black">{calculatedSGPA} / 10.0</div>
              <p className="text-xs text-blue-100">
                Equivalent to approximately {((parseFloat(calculatedSGPA) - 0.75) * 10).toFixed(1)}% Marks under VTU conversion.
              </p>
            </div>

            <button
              onClick={handleAddSubject}
              className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-blue-50 transition-colors flex items-center gap-1.5 shadow-md shrink-0"
            >
              <Plus className="w-4 h-4 text-blue-600" />
              <span>Add Custom Subject</span>
            </button>
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400">
                  <th className="p-3">Course / Subject Name</th>
                  <th className="p-3">Credits</th>
                  <th className="p-3">Grade Awarded</th>
                  <th className="p-3">Points</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {subjects.map((sub, idx) => (
                  <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3 font-semibold text-slate-800 dark:text-slate-200">
                      <input
                        type="text"
                        value={sub.name}
                        onChange={(e) => {
                          const updated = [...subjects];
                          updated[idx].name = e.target.value;
                          setSubjects(updated);
                        }}
                        className="w-full bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-700 focus:outline-none"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        step="0.5"
                        min="1"
                        max="6"
                        value={sub.credits}
                        onChange={(e) => {
                          const updated = [...subjects];
                          updated[idx].credits = parseFloat(e.target.value) || 0;
                          setSubjects(updated);
                        }}
                        className="w-16 p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center font-bold"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={sub.gradePoint}
                        onChange={(e) => {
                          const updated = [...subjects];
                          updated[idx].gradePoint = parseInt(e.target.value);
                          setSubjects(updated);
                        }}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                      >
                        <option value="10">O (Outstanding) - 10</option>
                        <option value="9">A+ (Excellent) - 9</option>
                        <option value="8">A (Very Good) - 8</option>
                        <option value="7">B+ (Good) - 7</option>
                        <option value="6">B (Above Avg) - 6</option>
                        <option value="5">C (Average) - 5</option>
                        <option value="4">P (Pass) - 4</option>
                        <option value="0">F (Fail) - 0</option>
                      </select>
                    </td>
                    <td className="p-3 font-mono font-bold text-blue-600">
                      {sub.credits * sub.gradePoint}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleRemoveSubject(sub.id)}
                        className="text-slate-400 hover:text-red-500 p-1"
                        title="Remove subject"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. CGPA CALCULATOR */}
      {activeTool === 'cgpa' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Cumulative Grade Point Average (CGPA)
            </h2>
            <p className="text-xs text-slate-500">
              Weighted aggregate across completed engineering semesters.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">Cumulative CGPA</span>
              <div className="text-4xl sm:text-5xl font-black">{calculatedCGPA} / 10.0</div>
            </div>
            <div className="text-xs text-emerald-100 max-w-xs leading-relaxed">
              Based on {semestersList.length} semesters. Consistent CGPA above 8.5 qualifies for First Class with Distinction!
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {semestersList.map((item, i) => (
              <div key={item.sem} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">Semester {item.sem}</span>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-[11px]">SGPA:</span>
                  <input
                    type="number"
                    step="0.01"
                    value={item.sgpa}
                    onChange={(e) => {
                      const updated = [...semestersList];
                      updated[i].sgpa = parseFloat(e.target.value) || 0;
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

      {/* 3. PERCENTAGE CALCULATOR */}
      {activeTool === 'percentage' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Official VTU CGPA to Percentage Converter
            </h2>
            <p className="text-xs text-slate-500">
              Formula officially notified by Visvesvaraya Technological University: <code>Percentage (%) = (CGPA - 0.75) × 10</code>
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Enter Your CGPA (out of 10.0)
              </label>
              <input
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
                Class: {parseFloat(calculatedPercentage) >= 70 ? 'First Class with Distinction' : parseFloat(calculatedPercentage) >= 60 ? 'First Class' : 'Second Class'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. ATTENDANCE BUNK CALCULATOR */}
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
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Classes Held So Far</label>
                <input
                  type="number"
                  value={totalClassesConducted}
                  onChange={(e) => setTotalClassesConducted(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Classes You Attended</label>
                <input
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
                <span className={`text-xl font-extrabold ${parseFloat(attendanceResults.currentPct.toString()) >= 75 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {attendanceResults.currentPct}%
                </span>
              </div>

              {parseFloat(attendanceResults.currentPct.toString()) >= 75 ? (
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

      {/* 5. CIE INTERNAL MARKS CALCULATOR */}
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
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">CIE 1 Test (out of 30)</label>
                <input
                  type="number"
                  max="30"
                  value={cie1}
                  onChange={(e) => setCie1(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">CIE 2 Test (out of 30)</label>
                <input
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
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Assignment (out of 10)</label>
                <input
                  type="number"
                  max="10"
                  value={assignment}
                  onChange={(e) => setAssignment(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Seminar / Quiz (out of 10)</label>
                <input
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
