'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Award, 
  Star, 
  HelpCircle, 
  Clock, 
  Search, 
  Sparkles, 
  X,
  Bot,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  SkipBack,
  SkipForward,
  ListVideo,
  FileText,
  Share2,
  Check
} from 'lucide-react';
import { COURSES_DATA } from '@/data/mockData';
import { Course, CourseLesson, CourseModule } from '@/types';

export default function CoursesPage() {
  const { user, enrolledCourses, enrollCourse } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal & Video Playback State
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<CourseLesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'notes' | 'quiz' | 'doubt' | 'certificate'>('notes');
  
  // Interactive Quiz & Certificate State
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Load saved completed lessons from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sc_completed_lessons');
      if (saved) {
        setCompletedLessons(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const saveCompletedLesson = (lessonId: string) => {
    setCompletedLessons(prev => {
      const updated = { ...prev, [lessonId]: !prev[lessonId] };
      try {
        localStorage.setItem('sc_completed_lessons', JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });

    if (activeCourseModal) {
      const allLessons = activeCourseModal.modules.flatMap(m => m.lessons);
      fetch('/api/courses/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id || 'guest_user',
          courseId: activeCourseModal.id,
          lessonId,
          totalLessons: allLessons.length || 10,
        }),
      }).catch(() => {});
    }
  };

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
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const fullSearchable = `${course.title} ${course.description} ${course.category} ${course.skills.join(' ')} ${course.instructor.name} ${course.level}`.toLowerCase();
      const allMatch = tokens.every(tok => fullSearchable.includes(tok));
      if (!allMatch) return false;
    }
    return true;
  });

  const handleOpenCourse = (course: Course, specificLesson?: CourseLesson) => {
    setActiveCourseModal(course);
    
    // Flatten lessons across modules
    const allLessons = course.modules.flatMap(m => m.lessons);
    
    if (specificLesson) {
      setSelectedLesson(specificLesson);
    } else {
      const firstVideoLesson = allLessons.find(l => l.videoUrl) || allLessons[0] || null;
      setSelectedLesson(firstVideoLesson);
    }

    // Expand all modules by default
    const initialExpanded: Record<string, boolean> = {};
    course.modules.forEach(m => {
      initialExpanded[m.id] = true;
    });
    setExpandedModules(initialExpanded);

    setQuizScore(null);
    setSelectedQuizOption(null);
    setShowCertificate(false);
    setActiveTab('notes');

    if (course.isFreeStarter) {
      enrollCourse(course.id);
      fetch('/api/courses/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id || 'guest_user',
          courseId: course.id,
          userEmail: user?.email,
        }),
      }).catch(() => {});
    }
  };


  const toggleModuleAccordion = (moduleId: string) => {
    setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  // Compute all flat lessons for active course
  const currentCourseLessons: CourseLesson[] = activeCourseModal
    ? activeCourseModal.modules.flatMap(m => m.lessons)
    : [];

  const currentLessonIndex = currentCourseLessons.findIndex(
    l => l.id === selectedLesson?.id
  );

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setSelectedLesson(currentCourseLessons[currentLessonIndex - 1]);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex >= 0 && currentLessonIndex < currentCourseLessons.length - 1) {
      setSelectedLesson(currentCourseLessons[currentLessonIndex + 1]);
    }
  };

  const completedCountInCurrentCourse = currentCourseLessons.filter(
    l => completedLessons[l.id]
  ).length;

  const currentCourseProgressPercent = currentCourseLessons.length > 0
    ? Math.round((completedCountInCurrentCourse / currentCourseLessons.length) * 100)
    : 0;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
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
              <span>Skill Up for Karnataka Campus Drives & Industry</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Student Connect Video Academy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Watch on-demand HD technical lectures, follow lab code walkthroughs, and earn shareable certificates.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 text-xs">
            <span className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-0.5">
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>All Video Lectures Unlocked & Playable!</span>
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Click any course or lecture below to stream instantly with HD playback.
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
          const totalLessonsCount = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
          const firstLesson = course.modules[0]?.lessons[0];

          return (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail with Click to Play Overlay */}
                <div 
                  onClick={() => handleOpenCourse(course)}
                  className="relative h-48 w-full bg-slate-900 overflow-hidden cursor-pointer group/thumb"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover/thumb:bg-black/50 transition-colors" />

                  {/* Big Play Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover/thumb:opacity-100 group-hover/thumb:scale-110 transition-all">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/30">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>

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

                  {/* Video Count & Duration */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1">
                      <ListVideo className="w-3 h-3 text-emerald-400" />
                      <span>{totalLessonsCount} Videos</span>
                    </span>
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
                      <span className="text-slate-400 text-[10px]">({course.enrolledCount.toLocaleString()} learners)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.durationHours} hrs</span>
                    </div>
                  </div>

                  {/* Instructor Pill */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      className="w-7 h-7 rounded-full object-cover" 
                    />
                    <div className="truncate">
                      <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                        {course.instructor.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {course.instructor.role}
                      </div>
                    </div>
                  </div>

                  {/* Clickable Lecture Previews */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                      <span>Curriculum Preview</span>
                      <span className="text-emerald-500 font-normal">Click to Play</span>
                    </div>
                    <div className="space-y-1">
                      {course.modules.flatMap(m => m.lessons).slice(0, 2).map((lesson, idx) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleOpenCourse(course, lesson)}
                          className="w-full text-left p-1.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 hover:bg-emerald-500/10 hover:border-emerald-500/40 border border-transparent transition-all flex items-center justify-between group/row text-xs"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <div className="w-5 h-5 rounded-full bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                              <Play className="w-2.5 h-2.5 ml-0.5 fill-current" />
                            </div>
                            <span className="truncate text-[11px] font-medium text-slate-700 dark:text-slate-300 group-hover/row:text-emerald-500">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                            {lesson.duration || 'Video'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-2">
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
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>
                    {isEnrolled ? 'Resume Watching' : course.isFreeStarter ? 'Watch Video Lectures Free' : `Enroll for ₹${course.priceINR}`}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Course Video Player & Syllabus Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-6xl w-full max-h-[96vh] flex flex-col overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 text-slate-100">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3 truncate pr-4">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase shrink-0">
                  {activeCourseModal.isFreeStarter ? 'Free Starter' : 'Enrolled'}
                </span>
                <div className="truncate">
                  <h2 className="text-base sm:text-lg font-extrabold text-white truncate">
                    {activeCourseModal.title}
                  </h2>
                  <div className="text-[11px] text-slate-400 truncate">
                    {activeCourseModal.category} • Instructor: {activeCourseModal.instructor.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Share Course"
                >
                  {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Two Columns (Video Player & Playlist) */}
            <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Column 1: Video Player & Controls (8 cols on large screens) */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* The Real Interactive Video Player */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
                    {selectedLesson?.videoUrl ? (
                      <iframe
                        key={selectedLesson.id}
                        src={`${selectedLesson.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                        title={selectedLesson.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gradient-to-br from-slate-900 to-black">
                        <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <Play className="w-8 h-8 ml-1 fill-emerald-400" />
                        </div>
                        <h4 className="text-base font-bold text-white">
                          {selectedLesson?.title || 'Interactive Course Lesson'}
                        </h4>
                        <p className="text-xs text-slate-400 max-w-sm">
                          {selectedLesson?.description || 'Select any video lecture from the syllabus playlist on the right to start playing.'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Playing Lecture Info & Navigation Controls */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          Now Playing Lecture {currentLessonIndex + 1} of {currentCourseLessons.length}
                        </span>
                        {selectedLesson?.duration && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                            {selectedLesson.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {selectedLesson?.title}
                      </h3>
                      {selectedLesson?.description && (
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {selectedLesson.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={handlePreviousLesson}
                        disabled={currentLessonIndex <= 0}
                        className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                          currentLessonIndex <= 0
                            ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            : 'bg-slate-800 hover:bg-slate-700 text-white'
                        }`}
                        title="Previous Lecture"
                      >
                        <SkipBack className="w-4 h-4" />
                        <span className="hidden sm:inline">Prev</span>
                      </button>

                      <button
                        onClick={handleNextLesson}
                        disabled={currentLessonIndex >= currentCourseLessons.length - 1}
                        className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                          currentLessonIndex >= currentCourseLessons.length - 1
                            ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            : 'bg-slate-800 hover:bg-slate-700 text-white'
                        }`}
                        title="Next Lecture"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <SkipForward className="w-4 h-4" />
                      </button>

                      {selectedLesson && (
                        <button
                          onClick={() => saveCompletedLesson(selectedLesson.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                            completedLessons[selectedLesson.id]
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-800 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{completedLessons[selectedLesson.id] ? 'Completed' : 'Mark Complete'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Tabs: Notes, Concept Quiz, AI Assistant, Certificate */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs">
                      <button
                        onClick={() => setActiveTab('notes')}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-colors flex items-center gap-1.5 ${
                          activeTab === 'notes'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Lecture Notes</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-colors flex items-center gap-1.5 ${
                          activeTab === 'quiz'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Quick Quiz</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('doubt')}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-colors flex items-center gap-1.5 ${
                          activeTab === 'doubt'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <Bot className="w-3.5 h-3.5" />
                        <span>AI Doubt Bot</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('certificate')}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-colors flex items-center gap-1.5 ${
                          activeTab === 'certificate'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Certificate</span>
                      </button>
                    </div>

                    {/* Tab 1: Notes & Lab Details */}
                    {activeTab === 'notes' && (
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-3">
                        <div className="font-bold text-white text-sm flex items-center justify-between">
                          <span>{selectedLesson?.title || 'Lecture Summary'}</span>
                          <span className="text-emerald-400 text-[11px]">Karnataka VTU Companion</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {selectedLesson?.description || 'Study along with the video, practice the coding constructs in your local terminal or Jupyter environment, and take the instant concept quiz.'}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="font-bold text-emerald-400 block mb-0.5">📌 Key Takeaway</span>
                            <span className="text-slate-400 text-[11px]">
                              All concepts demonstrated in this lecture are frequently tested in engineering lab exams and campus technical interview rounds.
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="font-bold text-blue-400 block mb-0.5">💻 Practice Exercises</span>
                            <span className="text-slate-400 text-[11px]">
                              Run the commands shown in the video locally. Use the AI Doubt Bot tab if you hit any errors.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Concept Quiz */}
                    {activeTab === 'quiz' && (
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-3">
                        <div className="flex items-center gap-1.5 font-bold text-white">
                          <HelpCircle className="w-4 h-4 text-blue-400" />
                          <span>Concept Check: {activeCourseModal.category}</span>
                        </div>
                        <p className="text-slate-300">
                          {activeCourseModal.category === 'Python'
                            ? 'Which method in NumPy is used to create an array with linearly spaced numbers between two endpoints?'
                            : activeCourseModal.category === 'Web Development'
                            ? 'Which CSS display property creates a two-dimensional grid layout?'
                            : activeCourseModal.category === 'Interview Preparation'
                            ? 'What is the trace of a matrix equal to?'
                            : activeCourseModal.category === 'Generative AI'
                            ? 'Which mechanism allows Transformers to weigh the relevance of different input tokens?'
                            : 'Which file is used by Docker Compose to define multi-container applications?'}
                        </p>
                        <div className="space-y-1.5">
                          {(activeCourseModal.category === 'Python'
                            ? ['np.arange()', 'np.linspace()', 'np.array_range()', 'np.interval()']
                            : activeCourseModal.category === 'Web Development'
                            ? ['display: flex', 'display: grid', 'display: inline-block', 'display: table']
                            : activeCourseModal.category === 'Interview Preparation'
                            ? ['Product of eigenvalues', 'Sum of eigenvalues', 'Determinant', 'Matrix rank']
                            : activeCourseModal.category === 'Generative AI'
                            ? ['Backpropagation', 'Self-Attention', 'Recurrent cell', 'Pooling']
                            : ['Dockerfile', 'docker-compose.yml', 'compose.json', 'container.config']
                          ).map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedQuizOption(i)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs border transition-colors ${
                                selectedQuizOption === i
                                  ? 'bg-blue-600 text-white border-blue-500 font-bold'
                                  : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-850'
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
                          className="w-full py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 transition-colors"
                        >
                          Submit Answer
                        </button>

                        {quizScore !== null && (
                          <div className={`p-2.5 rounded-xl text-xs font-semibold ${quizScore === 100 ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-300' : 'bg-rose-950/80 border border-rose-500 text-rose-300'}`}>
                            {quizScore === 100 
                              ? '🎉 Correct! You scored 100% on this concept check.' 
                              : '❌ Incorrect answer. Review the video lecture and try again!'}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: AI Doubt Bot */}
                    {activeTab === 'doubt' && (
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-3">
                        <div className="flex items-center gap-1.5 font-bold text-white">
                          <Bot className="w-4 h-4 text-indigo-400" />
                          <span>Student Connect AI Tutor</span>
                        </div>
                        <p className="text-slate-300">
                          Have a question about <span className="text-indigo-400 font-semibold">{selectedLesson?.title}</span>? Connect AI has ingested your VTU syllabus, lab manuals, and code exercises to answer questions instantly.
                        </p>
                        <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-200">
                          💡 Prompt suggestion: &ldquo;Explain the code demonstrated in {selectedLesson?.title} step by step with comments.&rdquo;
                        </div>
                        <Link
                          href={`/assistant?q=${encodeURIComponent(`I have a doubt in course ${activeCourseModal.title}, lecture: ${selectedLesson?.title}`)}`}
                          className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors"
                        >
                          <Bot className="w-4 h-4" />
                          <span>Open Connect AI for this Lesson</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}

                    {/* Tab 4: Certificate */}
                    {activeTab === 'certificate' && (
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-white text-sm">Course Completion Certificate</div>
                          <span className="text-amber-400 font-mono text-[11px]">
                            {currentCourseProgressPercent}% Watched
                          </span>
                        </div>
                        <p className="text-slate-400">
                          Complete all video lectures in this course curriculum to unlock your verified Student Connect certificate of achievement.
                        </p>

                        <button
                          onClick={() => setShowCertificate(true)}
                          className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Award className="w-4 h-4" />
                          <span>{showCertificate ? 'Refresh Certificate' : 'Generate Verified Certificate'}</span>
                        </button>

                        {showCertificate && (
                          <div className="p-6 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-slate-900 via-slate-850 to-amber-950/50 text-center space-y-3 shadow-2xl animate-in zoom-in-95 mt-3">
                            <Award className="w-12 h-12 text-amber-400 mx-auto" />
                            <h3 className="text-base font-extrabold uppercase tracking-widest text-amber-300">
                              Certificate of Achievement
                            </h3>
                            <p className="text-xs text-slate-300">
                              This certifies that <span className="font-bold text-white">{user?.name || 'Chiranthan Siddu'}</span> has completed the video lecture coursework for:
                            </p>
                            <div className="text-base font-extrabold text-emerald-400">
                              {activeCourseModal.title}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              Verified by Student Connect Karnataka Ecosystem • ID: SC-CERT-{activeCourseModal.id.slice(-6).toUpperCase()}-{Date.now().toString().slice(-4)}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>

                {/* Column 2: Curriculum & Video Playlist (4 cols on large screens) */}
                <div className="lg:col-span-4 space-y-3">
                  
                  {/* Playlist Card Header */}
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                        <ListVideo className="w-4 h-4 text-emerald-400" />
                        <span>Course Playlist</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {completedCountInCurrentCourse} / {currentCourseLessons.length} Done ({currentCourseProgressPercent}%)
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                        style={{ width: `${currentCourseProgressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Modules Accordion & Lecture List */}
                  <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
                    {activeCourseModal.modules.map((module, mIdx) => {
                      const isExpanded = expandedModules[module.id] ?? true;

                      return (
                        <div 
                          key={module.id}
                          className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden"
                        >
                          {/* Module Header (Click to toggle) */}
                          <button
                            onClick={() => toggleModuleAccordion(module.id)}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-slate-900 transition-colors"
                          >
                            <div className="space-y-0.5 truncate pr-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                                Module {mIdx + 1}
                              </span>
                              <div className="text-xs font-bold text-white truncate">
                                {module.title}
                              </div>
                              <span className="text-[10px] text-slate-400">
                                {module.lessons.length} lectures • {module.durationMinutes} mins
                              </span>
                            </div>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                          </button>

                          {/* Lessons inside Module */}
                          {isExpanded && (
                            <div className="border-t border-slate-800/80 divide-y divide-slate-850">
                              {module.lessons.map((lesson, lIdx) => {
                                const isCurrent = selectedLesson?.id === lesson.id;
                                const isDone = completedLessons[lesson.id];

                                return (
                                  <button
                                    key={lesson.id}
                                    onClick={() => setSelectedLesson(lesson)}
                                    className={`w-full text-left p-2.5 transition-all flex items-center justify-between gap-2.5 group ${
                                      isCurrent
                                        ? 'bg-emerald-950/40 border-l-4 border-emerald-500 text-white'
                                        : 'hover:bg-slate-900 text-slate-300'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 truncate">
                                      {/* Play / Check Icon */}
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                                        isCurrent
                                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                                          : isDone
                                          ? 'bg-emerald-500/20 text-emerald-400'
                                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                                      }`}>
                                        {isCurrent ? (
                                          <Play className="w-3 h-3 ml-0.5 fill-white" />
                                        ) : isDone ? (
                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                        ) : (
                                          <span>{lIdx + 1}</span>
                                        )}
                                      </div>

                                      <div className="truncate">
                                        <div className={`text-xs truncate ${isCurrent ? 'font-bold text-emerald-300' : 'font-medium group-hover:text-white'}`}>
                                          {lesson.title}
                                        </div>
                                        <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                                          <span>{lesson.duration || 'Video'}</span>
                                          {lesson.type === 'quiz' && (
                                            <span className="text-amber-400">• Quiz</span>
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    {isCurrent && (
                                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold uppercase shrink-0">
                                        Playing
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
