'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAccessibility } from '@/components/accessibility/AccessibilityContext';
import { VISUAL_CONCEPT_GUIDES } from '@/lib/accessibilityData';
import {
  Accessibility,
  Hand,
  MessageSquareText,
  Headphones,
  ArrowRight,
  Volume2,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Sliders,
  BookOpen,
  BarChart3,
  Bot,
  Eye,
  Subtitles,
  Mic,
  Lightbulb,
  Layers,
} from 'lucide-react';

const COMMUNICATION_MODES = [
  { id: 'sign', label: 'Sign Language Camera', icon: Hand, desc: 'Detect hand signs into text & speech' },
  { id: 'captions', label: 'Live Lecture Captions', icon: Subtitles, desc: 'Real-time subtitles during classes' },
  { id: 'aac_speech', label: 'Gesture Cards & TTS', icon: MessageSquareText, desc: 'Tap visual cards or type to speak aloud' },
  { id: 'audio_reader', label: 'Book-to-Audio Reader', icon: Headphones, desc: 'Listen to textbooks, PDFs & notes' },
  { id: 'voice_nav', label: 'Voice AI & Navigation', icon: Mic, desc: 'Speak commands & ask voice doubts' },
];

export default function AccessibilityHubPage() {
  const { profile, updateProfile, togglePreferredMode, speakText } = useAccessibility();
  const [activeVisualId, setActiveVisualId] = useState(VISUAL_CONCEPT_GUIDES[0].id);

  const activeVisual =
    VISUAL_CONCEPT_GUIDES.find((g) => g.id === activeVisualId) || VISUAL_CONCEPT_GUIDES[0];

  const dashboards = [
    {
      href: '/accessibility/sign-communication',
      badge: 'Deaf & Hard-of-Hearing',
      title: 'Sign Communication & Live Classroom',
      subtitle: 'Camera sign-to-text, real-time lecture captions, teacher doubt panel & ISL/ASL library',
      icon: Hand,
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      border: 'border-blue-200 dark:border-blue-900/60',
      features: [
        'Camera hand-gesture recognition with student confirm/correct bar',
        '1-click non-camera sign cards (✋ ❓ 👍 🆘) sent live to teacher',
        'Real-time speech-to-text lecture subtitles & sign-to-speech output',
        'Searchable ISL/ASL Educational Sign Language Dictionary',
      ],
    },
    {
      href: '/accessibility/speech-support',
      badge: 'Speech Support & AAC',
      title: 'Visual Gesture & Speech Communication',
      subtitle: 'Communicate confidently with visual cards, sentence builder & natural voice synthesis',
      icon: MessageSquareText,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      border: 'border-emerald-200 dark:border-emerald-900/60',
      features: [
        'Categorized visual communication cards that speak aloud instantly',
        'Sentence composer: combine cards or type custom doubts to play audio',
        'Personalized communication dictionary saved across sessions',
        'Direct bridge to send questions to the Live Classroom teacher panel',
      ],
    },
    {
      href: '/accessibility/audio-learning',
      badge: 'Blind & Low-Vision',
      title: 'Audio Learning Hub & Voice AI Tutor',
      subtitle: 'Independent study with book-to-audio converter, voice AI assistant, OCR & audio quizzes',
      icon: Headphones,
      gradient: 'from-amber-500 via-orange-500 to-rose-600',
      border: 'border-amber-200 dark:border-amber-900/60',
      features: [
        'Upload PDF/TXT or open VTU textbooks with speed, rewind & bookmarks',
        'Voice-based AI Study Assistant that answers aloud via Connect AI',
        'Interactive Audio Quizzes accepting spoken or keyboard (1-4) answers',
        'Textbook Image OCR reader & narrated recorded lectures',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section
        aria-labelledby="hub-hero-heading"
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border shadow-xl ${
          profile.highContrast
            ? 'bg-black border-yellow-400 text-yellow-100'
            : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-indigo-500/30'
        }`}
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
              <Accessibility className="w-4 h-4 text-cyan-300" />
              <span>StudentConnect — Inclusive Learning Platform</span>
            </div>

            <h1 id="hub-hero-heading" className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              StudentConnect Accessibility Hub
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-medium">
              One platform. Every student. Equal learning opportunities. Learn, communicate, ask doubts,
              attend live classes, and study educational materials independently in the way that works best for you.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  speakText(
                    'Welcome to StudentConnect Accessibility Hub. One platform, every student, equal learning opportunities. Choose Sign Communication for live captions and camera sign to text, Speech Support for visual gesture cards and text to speech, or Audio Learning for textbook audio conversion, voice AI tutor, and audio quizzes. Press Alt plus V anytime for voice navigation.'
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Volume2 className="w-4 h-4 text-blue-600" />
                <span>Listen to Hub Overview</span>
              </button>

              <Link
                href="/accessibility/sign-communication"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-colors"
              >
                <Hand className="w-4 h-4" />
                <span>Launch Live Sign Classroom</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Live Stats Card */}
          <div className="grid grid-cols-2 gap-3 shrink-0 lg:w-80">
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-300">{profile.progress.lessonsCompleted}</div>
              <div className="text-xs text-slate-200 mt-0.5">Inclusive Lessons</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-300">{profile.progress.listeningMinutes}m</div>
              <div className="text-xs text-slate-200 mt-0.5">Audio Study Time</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="text-2xl font-black text-amber-300">{profile.progress.quizAverageScore}%</div>
              <div className="text-xs text-slate-200 mt-0.5">Audio Quiz Avg</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="text-2xl font-black text-purple-300">{profile.progress.signsPracticed}</div>
              <div className="text-xs text-slate-200 mt-0.5">Signs Practiced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomy-First Communication Preference Selector */}
      <section
        aria-labelledby="comm-prefs-heading"
        className={`rounded-3xl p-5 sm:p-6 border ${
          profile.highContrast
            ? 'bg-black border-yellow-400'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 id="comm-prefs-heading" className="text-base sm:text-lg font-extrabold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>Choose How You Prefer to Communicate & Learn</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              We never assume your abilities from your profile. Select any combination of tools below — your choice is saved automatically.
            </p>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 self-start sm:self-auto">
            {profile.preferredModes.length} Active Mode{profile.preferredModes.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {COMMUNICATION_MODES.map((mode) => {
            const Icon = mode.icon;
            const selected = profile.preferredModes.includes(mode.id);
            return (
              <button
                key={mode.id}
                type="button"
                aria-pressed={selected}
                onClick={() => togglePreferredMode(mode.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selected
                    ? profile.highContrast
                      ? 'bg-yellow-400 text-black border-yellow-300'
                      : 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 ring-1 ring-blue-500/30'
                    : profile.highContrast
                      ? 'bg-black text-yellow-100 border-yellow-400/50 hover:bg-yellow-400/10'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-4 h-4 ${selected ? (profile.highContrast ? 'text-black' : 'text-blue-600 dark:text-blue-400') : 'text-slate-500'}`} />
                  {selected && <CheckCircle2 className={`w-4 h-4 ${profile.highContrast ? 'text-black' : 'text-blue-600'}`} />}
                </div>
                <div className="text-xs font-extrabold">{mode.label}</div>
                <div className={`text-[11px] mt-0.5 ${selected && profile.highContrast ? 'text-black/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {mode.desc}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Three Dedicated Inclusive Dashboards */}
      <section aria-labelledby="three-dashboards-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="three-dashboards-heading" className="text-lg sm:text-xl font-black">
              Three Specialized Accessibility Dashboards
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Dedicated experiences engineered for independent learning — completely separate from the standard StudentConnect dashboard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {dashboards.map((dash) => {
            const Icon = dash.icon;
            return (
              <div
                key={dash.href}
                className={`rounded-3xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl ${
                  profile.highContrast
                    ? 'bg-black border-yellow-400'
                    : `bg-white dark:bg-slate-900 ${dash.border} shadow-sm`
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dash.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      {dash.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold">{dash.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{dash.subtitle}</p>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {dash.features.map((feat) => (
                      <li key={feat} className="text-xs flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={dash.href}
                  className={`mt-6 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r ${dash.gradient} text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity`}
                >
                  <span>Open Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Concept Explainer + Smart Progress & Quick Links */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual Concept Explanation (Step-by-Step Accessible Diagrams) */}
        <div
          className={`lg:col-span-2 rounded-3xl border p-6 space-y-4 ${
            profile.highContrast
              ? 'bg-black border-yellow-400'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Visual Concept Explanations (AI-Simplified)</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Difficult engineering topics turned into step-by-step visual flows with audio narration.
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {VISUAL_CONCEPT_GUIDES.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveVisualId(g.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    activeVisual.id === g.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {g.topic}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs">
              <span className="font-extrabold text-indigo-700 dark:text-indigo-300">Simple Analogy: </span>
              <span>{activeVisual.analogy}</span>
            </div>
            <button
              type="button"
              onClick={() =>
                speakText(
                  `${activeVisual.topic}. ${activeVisual.analogy}. ` +
                    activeVisual.steps.map((s) => `${s.title}: ${s.detail}`).join(' ')
                )
              }
              className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Read Steps</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeVisual.steps.map((step) => (
              <div
                key={step.title}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-2"
              >
                <div className="text-xs font-extrabold text-blue-600 dark:text-blue-400">{step.title}</div>
                <div className="px-2.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-xs font-bold text-center">
                  {step.visual}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Learning Tools & Accessibility Preferences Summary */}
        <div
          className={`rounded-3xl border p-6 space-y-4 ${
            profile.highContrast
              ? 'bg-black border-yellow-400'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
          }`}
        >
          <h2 className="text-base font-extrabold flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-500" />
            <span>Accessibility Settings & My Tools</span>
          </h2>

          {/* Sign Language Standard */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold block">Preferred Sign Language Standard</label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['ISL', 'ASL', 'CUSTOM'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => updateProfile({ signLanguage: lang })}
                  className={`py-1.5 rounded-xl text-xs font-bold border ${
                    profile.signLanguage === lang
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Speech Speed */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <label htmlFor="tts-rate-slider">Audio Speech Speed</label>
              <span className="font-mono">{profile.ttsRate.toFixed(1)}x</span>
            </div>
            <input
              id="tts-rate-slider"
              type="range"
              min="0.6"
              max="2.0"
              step="0.1"
              value={profile.ttsRate}
              onChange={(e) => updateProfile({ ttsRate: parseFloat(e.target.value) })}
              className="w-full accent-blue-600"
            />
          </div>

          {/* Quick Links to Connected StudentConnect Modules */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-500">My Accessible Learning Tools</div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/courses"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>My Courses</span>
              </Link>
              <Link
                href="/study-materials"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span>Accessible Notes</span>
              </Link>
              <Link
                href="/assistant"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <Bot className="w-3.5 h-3.5 text-purple-500" />
                <span>Connect AI</span>
              </Link>
              <Link
                href="/accessibility/audio-learning"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
                <span>Audio Quizzes</span>
              </Link>
            </div>
          </div>

          {/* Privacy & Safety Commitments */}
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-[11px] space-y-1">
            <div className="font-extrabold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inclusive Privacy & Consent First</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Camera & microphone start only on explicit click. Non-camera alternatives are always available. Low-confidence signs always ask for your confirmation before sending.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Accessibility Guide Footer Note */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-500" />
          <span>Keyboard Shortcut: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[11px]">Alt + V</kbd> anywhere in Accessibility Hub for Voice Navigation.</span>
        </div>
        <span>Standard StudentConnect dashboard remains untouched at <Link href="/" className="underline font-bold text-blue-600 dark:text-blue-400">Home</Link>.</span>
      </div>
    </div>
  );
}
