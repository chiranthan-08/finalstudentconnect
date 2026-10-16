'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Award, 
  Star, 
  Lock, 
  FileText, 
  HelpCircle, 
  Clock, 
  Search, 
  Sparkles, 
  X,
  Bot,
  ArrowRight
} from 'lucide-react';
import { COURSES_DATA } from '@/data/mockData';
import { Course } from '@/types';

export default function CoursesPage() {
  const { enrolledCourses, enrollCourse } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const categories = [
    'ALL',
    'Python',
    'Web Development',
    'Interview Preparation',
    'Generative AI',
    'Cloud Computing',
    'Cybersecurity',
    'Data Science',
    'DevOps',
  ];

  const filteredCourses = COURSES_DATA.filter(course => {
    if (selectedCategory !== 'ALL' && course.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchDesc = course.description.toLowerCase().includes(q);
      const matchSkill = course.skills.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchSkill) return false;
    }
    return true;
  });

  const handleOpenCourse = (course: Course) => {
    setActiveCourseModal(course);
    setActiveLessonIndex(0);
    setQuizScore(null);
    setSelectedQuizOption(null);
    setShowCertificate(false);
    if (course.isFreeStarter) {
      enrollCourse(course.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Free Starter Banner */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Skill Up for Karnataka Campus Drives</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Student Connect Course Academy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Industry-aligned technical courses, VTU curriculum companions, and placement preparation.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 text-xs">
            <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
              🎉 3 Free Starter Courses Unlocked!
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Python for Engineers, Full-Stack Web Dev & VTU Mathematics are 100% Free.
            </span>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Chips */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses by technology (Python, Docker, React, Generative AI, VTU Math)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'ALL' ? 'All Domains' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourses.includes(course.id);

          return (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Free vs Premium Badge */}
                  <div className="absolute top-3 left-3">
                    {course.isFreeStarter ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>FREE STARTER</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold shadow-md">
                        PREMIUM • ₹{course.priceINR}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] text-slate-300 font-semibold">{course.category} • {course.level}</div>
                    <h3 className="font-bold text-sm line-clamp-1">{course.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 text-[10px]">({course.enrolledCount.toLocaleString()} students)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.durationHours} hrs</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 4).map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleOpenCourse(course)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    isEnrolled
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : course.isFreeStarter
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isEnrolled ? 'Resume Learning' : course.isFreeStarter ? 'Enroll 100% Free' : `Enroll for ₹${course.priceINR}`}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Course Player & Quiz Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold uppercase">
                  {activeCourseModal.isFreeStarter ? 'Free Starter Course' : 'Enrolled Course'}
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {activeCourseModal.title}
                </h2>
                <div className="text-xs text-slate-500">
                  Instructor: {activeCourseModal.instructor.name} ({activeCourseModal.instructor.role})
                </div>
              </div>

              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Interactive Video Lesson Player */}
            <div className="space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center border border-slate-800 shadow-xl">
                <div className="text-center space-y-2 p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white flex items-center justify-center mx-auto cursor-pointer shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Module 1: Core Fundamentals & Interactive Code Walkthrough
                  </h4>
                  <p className="text-xs text-slate-400 max-w-md">
                    Watch HD lesson streaming, follow along with Jupyter Notebooks, and complete the instant check.
                  </p>
                </div>
              </div>

              {/* Course Features Tabs: Notes, Quiz, Certificate, AI Doubt Bot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                {/* Interactive Quiz Check */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                    <HelpCircle className="w-4 h-4 text-blue-500" />
                    <span>Quick Concept Check Quiz</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Which method in NumPy is used to create an array with linearly spaced numbers between two endpoints?
                  </p>
                  <div className="space-y-1.5">
                    {['np.arange()', 'np.linspace()', 'np.array_range()', 'np.interval()'].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedQuizOption(i)}
                        className={`w-full text-left p-2 rounded-xl text-xs border transition-colors ${
                          selectedQuizOption === i
                            ? 'bg-blue-600 text-white border-blue-600 font-bold'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (selectedQuizOption === 1) {
                        setQuizScore(100);
                      } else {
                        setQuizScore(0);
                      }
                    }}
                    className="w-full py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs"
                  >
                    Submit Answer
                  </button>

                  {quizScore !== null && (
                    <div className={`p-2 rounded-lg text-xs font-semibold ${quizScore === 100 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'}`}>
                      {quizScore === 100 ? 'Correct! np.linspace() generates linearly spaced values.' : 'Incorrect! The right answer is np.linspace().'}
                    </div>
                  )}
                </div>

                {/* AI Doubt Assistant & Certificate */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <Bot className="w-4 h-4 text-indigo-500" />
                      <span>Course AI Doubt Assistant</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Stuck on a syntax error or proof? Connect AI is active 24/7 to solve your course doubts in real-time.
                    </p>
                    <Link
                      href="/assistant"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <span>Ask Connect AI for this lesson</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Certificate Generation */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Award className="w-4 h-4" />
                      <span>Generate Completion Certificate</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Certificate Preview Card */}
            {showCertificate && (
              <div className="p-6 rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-slate-900 dark:via-slate-850 dark:to-amber-950/40 text-center space-y-3 shadow-xl animate-in zoom-in-95">
                <Award className="w-10 h-10 text-amber-500 mx-auto" />
                <h3 className="text-lg font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
                  Certificate of Achievement
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  This certifies that you have successfully completed the course curriculum for:
                </p>
                <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                  {activeCourseModal.title}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Verified by Student Connect Karnataka Ecosystem • ID: SC-CERT-{Date.now().toString().slice(-6)}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
