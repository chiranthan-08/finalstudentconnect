'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAccessibility } from '@/components/accessibility/AccessibilityContext';
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
  BookOpen,
  Bot,
  Subtitles,
  Mic,
  Lightbulb,
  Layers,
  Wand2,
  Check,
  ChevronRight,
} from 'lucide-react';

export default function AccessibilityHubPage() {
  const { profile, updateProfile, speakText, announce } = useAccessibility();
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // 1-Click Profile Presets for effortless setup
  const applyPreset = (preset: 'deaf' | 'speech' | 'blind') => {
    setActivePreset(preset);
    if (preset === 'deaf') {
      updateProfile({
        preferredModes: ['sign', 'captions'],
        alwaysShowCaptions: true,
        highContrast: false,
        fontSizeScale: 105,
      });
      speakText('Deaf and Hard of Hearing preset applied. Live captions and sign doubt features are active.');
      announce('Deaf preset active.');
    } else if (preset === 'speech') {
      updateProfile({
        preferredModes: ['aac_speech'],
        alwaysShowCaptions: false,
        ttsRate: 1.0,
      });
      speakText('Speech Support preset applied. Instant voice cards and sentence composer are ready.');
      announce('Speech preset active.');
    } else if (preset === 'blind') {
      updateProfile({
        preferredModes: ['audio_reader', 'voice_nav'],
        fontSizeScale: 125,
        highContrast: true,
        ttsRate: 1.1,
      });
      speakText('Low Vision and Audio Learning preset applied. High contrast enabled, text size enlarged, audio reader active.');
      announce('Audio learning preset active.');
    }
  };

  const experienceCards = [
    {
      id: 'sign',
      badge: 'Deaf & Hard-of-Hearing',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      title: 'Sign Language & Live Subtitles',
      simpleFor: 'For students who communicate with sign language or prefer reading real-time captions.',
      href: '/accessibility/sign-communication',
      icon: Hand,
      buttonText: 'Open Sign Classroom',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25',
      points: [
        'Live speech-to-text subtitles for teacher lectures',
        '1-tap doubt cards (✋ I have a doubt, ❓ Explain again)',
        'Camera sign recognition (camera is completely optional)',
        'Searchable Indian & American Sign Language dictionary',
      ],
    },
    {
      id: 'speech',
      badge: 'Speech & Non-Verbal Support',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      title: 'Tap-to-Speak & Visual Cards',
      simpleFor: 'For students who prefer communicating by tapping picture cards or typing aloud.',
      href: '/accessibility/speech-support',
      icon: MessageSquareText,
      buttonText: 'Open Speech Cards',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25',
      points: [
        'Large, colorful picture cards that speak aloud instantly',
        'Simple sentence builder to combine multiple cards',
        'Sends your questions directly to the teacher’s screen',
        'Personal communication dictionary saved to your account',
      ],
    },
    {
      id: 'audio',
      badge: 'Blind & Low-Vision',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      title: 'Audio Textbooks & Voice AI',
      simpleFor: 'For students who learn by listening to textbooks, voice navigation, and spoken AI.',
      href: '/accessibility/audio-learning',
      icon: Headphones,
      buttonText: 'Open Audio Hub',
      buttonBg: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/25',
      points: [
        'Listen to VTU engineering textbooks & uploaded PDFs',
        'Voice AI Study Assistant — ask any question aloud',
        'Spoken audio quizzes with keyboard (1-4) answers',
        'Image OCR reader to listen to textbook screenshots',
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      {/* Friendly Hero Banner */}
      <section
        aria-labelledby="hub-hero-heading"
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border shadow-lg transition-all ${
          profile.highContrast
            ? 'bg-black border-yellow-400 text-yellow-100'
            : 'bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white border-indigo-500/30'
        }`}
      >
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-200">
            <Accessibility className="w-4 h-4 text-cyan-300" />
            <span>Inclusive Learning Platform</span>
          </div>

          <h1 id="hub-hero-heading" className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
            StudentConnect Accessibility Hub
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            Learn, communicate, attend classes, and study independently. Choose the experience below that fits the way you learn best.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                speakText(
                  'Welcome to StudentConnect Accessibility Hub. Choose from three simple platforms: Sign Language and Live Subtitles for deaf students, Tap to Speak cards for speech support, or Audio Textbooks and Voice AI for low vision students. You can press Alt plus V at any time to give a voice command.'
                )
              }
              className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:bg-blue-50 transition-all"
            >
              <Volume2 className="w-4 h-4 text-blue-600" />
              <span>🔊 Listen to Voice Guide</span>
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 text-xs font-semibold text-slate-300 border border-white/10">
              <Mic className="w-3.5 h-3.5 text-cyan-300" />
              <span>Shortcut: Press <kbd className="px-1.5 py-0.5 rounded bg-black/40 font-mono text-[11px] text-white">Alt + V</kbd> to speak commands</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1-Tap Quick Setup Bar */}
      <section
        aria-labelledby="preset-heading"
        className={`rounded-2xl p-5 border shadow-xs transition-all ${
          profile.highContrast
            ? 'bg-black border-yellow-400'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-purple-500" />
            <h2 id="preset-heading" className="text-sm font-extrabold text-slate-900 dark:text-white">
              1-Tap Quick Setup (Optional)
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Automatically adjusts text size, subtitles, and contrast for you
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => applyPreset('deaf')}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
              activePreset === 'deaf'
                ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 ring-1 ring-blue-500'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🦻</span>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Deaf / Hard-of-Hearing</div>
                <div className="text-[10px] text-slate-500">Live subtitles & sign doubt cards</div>
              </div>
            </div>
            {activePreset === 'deaf' && <Check className="w-4 h-4 text-blue-600" />}
          </button>

          <button
            type="button"
            onClick={() => applyPreset('speech')}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
              activePreset === 'speech'
                ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 ring-1 ring-emerald-500'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🗣️</span>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Speech Support</div>
                <div className="text-[10px] text-slate-500">Tap cards to speak out loud</div>
              </div>
            </div>
            {activePreset === 'speech' && <Check className="w-4 h-4 text-emerald-600" />}
          </button>

          <button
            type="button"
            onClick={() => applyPreset('blind')}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
              activePreset === 'blind'
                ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 ring-1 ring-amber-500'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl">👁️</span>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Blind / Low-Vision</div>
                <div className="text-[10px] text-slate-500">Big font, audiobooks & voice AI</div>
              </div>
            </div>
            {activePreset === 'blind' && <Check className="w-4 h-4 text-amber-600" />}
          </button>
        </div>
      </section>

      {/* The 3 Core Dashboards (Large, Easy to Understand Cards) */}
      <section aria-labelledby="choose-experience-heading" className="space-y-4">
        <div>
          <h2 id="choose-experience-heading" className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span>Choose Your Learning Dashboard</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Click any dashboard below to start learning. Everything is designed to be simple, self-explanatory, and independent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-3xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 ${
                  profile.highContrast
                    ? 'bg-black border-yellow-400'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {card.simpleFor}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {card.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={card.href}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all ${card.buttonBg}`}
                  >
                    <span>{card.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works in 3 Simple Steps */}
      <section
        aria-labelledby="how-it-works-heading"
        className={`rounded-3xl p-6 sm:p-8 border shadow-xs ${
          profile.highContrast
            ? 'bg-black border-yellow-400'
            : 'bg-gradient-to-r from-blue-50/60 via-slate-50 to-indigo-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-850 border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="max-w-2xl mb-6">
          <h2 id="how-it-works-heading" className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>How Live Classroom Communication Works</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Designed so students and teachers communicate naturally in real-time without barriers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 font-black text-xs flex items-center justify-center">
              1
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Teacher Teaches Online</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Teacher speaks naturally. Real-time subtitles appear on student screens instantly.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 font-black text-xs flex items-center justify-center">
              2
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Student Asks Doubts</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Sign with camera, tap 1-click cards (✋ ❓ 👍), or tap speech buttons.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 font-black text-xs flex items-center justify-center">
              3
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Instant Explanation</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Teacher sees your doubt immediately on the side of their screen and explains again.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Privacy & Autonomy Assurance */}
      <section className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            <strong>Your Privacy: </strong> Cameras and microphones only start when you click them. All 1-tap doubt cards work 100% without a camera.
          </span>
        </div>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline shrink-0"
        >
          Return to Regular StudentConnect Dashboard →
        </Link>
      </section>
    </div>
  );
}
