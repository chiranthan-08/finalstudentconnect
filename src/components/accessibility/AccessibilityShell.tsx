'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAccessibility } from './AccessibilityContext';
import {
  Accessibility,
  Hand,
  MessageSquareText,
  Headphones,
  ArrowLeft,
  Contrast,
  Type,
  VolumeX,
  Mic,
  MicOff,
  Sparkles,
  Check,
} from 'lucide-react';

interface SpeechRecognitionEventLike {
  results: {
    [index: number]: {
      [index: number]: { transcript: string };
    };
  };
}

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

export function AccessibilityShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { profile, updateProfile, speakText, stopSpeech, isSpeaking, announce } =
    useAccessibility();

  const [listeningNav, setListeningNav] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState<string | null>(null);

  const navItems = [
    {
      href: '/accessibility',
      label: 'Hub Home',
      shortLabel: 'Home',
      icon: Accessibility,
      emoji: '🌟',
    },
    {
      href: '/accessibility/sign-communication',
      label: 'Sign & Captions',
      shortLabel: 'Sign',
      icon: Hand,
      emoji: '🦻',
    },
    {
      href: '/accessibility/speech-support',
      label: 'Speech & Cards',
      shortLabel: 'Speech',
      icon: MessageSquareText,
      emoji: '🗣️',
    },
    {
      href: '/accessibility/audio-learning',
      label: 'Audio Textbooks',
      shortLabel: 'Audio',
      icon: Headphones,
      emoji: '🎧',
    },
  ];

  const startVoiceNav = useCallback(() => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const Rec = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Rec) {
      const msg = 'Voice navigation requires a browser supporting Web Speech API (Chrome or Edge).';
      setVoiceFeedback(msg);
      speakText(msg);
      return;
    }

    const recognition = new Rec();
    recognition.lang = profile.ttsLang || 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListeningNav(true);
    setVoiceFeedback('Listening... Say "open sign", "open speech", "open audio", "high contrast", or "home"');
    announce('Voice navigation listening.');

    recognition.onresult = (event) => {
      const spoken = (event.results?.[0]?.[0]?.transcript || '').toLowerCase().trim();
      setVoiceFeedback(`Heard: "${spoken}"`);

      if (spoken.includes('sign') || spoken.includes('deaf') || spoken.includes('caption')) {
        speakText('Opening Sign Communication and Live Captions dashboard.');
        router.push('/accessibility/sign-communication');
      } else if (spoken.includes('speech') || spoken.includes('card') || spoken.includes('talk')) {
        speakText('Opening Speech Support and Communication Cards dashboard.');
        router.push('/accessibility/speech-support');
      } else if (spoken.includes('audio') || spoken.includes('blind') || spoken.includes('book') || spoken.includes('read')) {
        speakText('Opening Audio Learning Hub.');
        router.push('/accessibility/audio-learning');
      } else if (spoken.includes('hub') || spoken.includes('accessibility')) {
        speakText('Opening Accessibility Hub overview.');
        router.push('/accessibility');
      } else if (spoken.includes('normal') || spoken.includes('standard') || spoken.includes('home')) {
        speakText('Returning to main StudentConnect homepage.');
        router.push('/');
      } else if (spoken.includes('contrast')) {
        const next = !profile.highContrast;
        updateProfile({ highContrast: next });
        speakText(next ? 'High contrast mode enabled.' : 'High contrast mode disabled.');
      } else if (spoken.includes('bigger') || spoken.includes('increase font') || spoken.includes('larger')) {
        const next = Math.min(150, profile.fontSizeScale + 10);
        updateProfile({ fontSizeScale: next });
        speakText(`Font size increased to ${next} percent.`);
      } else if (spoken.includes('smaller') || spoken.includes('decrease font')) {
        const next = Math.max(90, profile.fontSizeScale - 10);
        updateProfile({ fontSizeScale: next });
        speakText(`Font size set to ${next} percent.`);
      } else {
        speakText(`Heard ${spoken}. Try saying open audio, open sign, open speech, or high contrast.`);
      }
    };

    recognition.onerror = () => {
      setListeningNav(false);
      setVoiceFeedback('Could not capture voice. Please check microphone permission.');
    };

    recognition.onend = () => {
      setListeningNav(false);
    };

    try {
      recognition.start();
    } catch {
      setListeningNav(false);
    }
  }, [profile.fontSizeScale, profile.highContrast, profile.ttsLang, router, speakText, updateProfile, announce]);

  // Keyboard shortcut Alt+V for Voice Navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        startVoiceNav();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [startVoiceNav]);

  const wrapperClasses = [
    'min-h-[calc(100vh-4rem)] transition-colors',
    profile.highContrast
      ? 'bg-black text-yellow-100 [&_*]:border-yellow-400/60'
      : 'bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100',
    profile.dyslexiaSpacing ? 'tracking-wide leading-relaxed' : '',
    profile.reducedMotion ? 'motion-reduce' : '',
  ].join(' ');

  return (
    <div
      className={wrapperClasses}
      style={{ fontSize: `${profile.fontSizeScale}%` }}
    >
      {/* Skip to Main Content (WCAG 2.1 AA) */}
      <a
        href="#accessibility-main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-xl focus:bg-blue-600 focus:text-white focus:font-bold focus:shadow-xl"
      >
        Skip to Accessibility Hub Content
      </a>

      {/* Dedicated Accessibility Hub Top Bar */}
      <div
        className={`sticky top-16 z-30 border-b backdrop-blur-md ${
          profile.highContrast
            ? 'bg-black/95 border-yellow-400'
            : 'bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Module Navigation */}
          <nav aria-label="Accessibility Hub Dashboards" className="flex items-center gap-1.5 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? profile.highContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                      : profile.highContrast
                        ? 'text-yellow-200 border border-yellow-400/50 hover:bg-yellow-400/20'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">{item.shortLabel}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Live Accessibility Controls */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Font Size Controls */}
            <div
              className={`flex items-center rounded-xl border px-1 py-0.5 ${
                profile.highContrast
                  ? 'border-yellow-400 bg-black'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
              }`}
              role="group"
              aria-label="Text size controls"
            >
              <button
                type="button"
                onClick={() => {
                  const next = Math.max(90, profile.fontSizeScale - 10);
                  updateProfile({ fontSizeScale: next });
                  announce(`Text size ${next} percent`);
                }}
                className="px-2 py-1 text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                title="Decrease text size"
                aria-label="Decrease text size"
              >
                A-
              </button>
              <span className="text-[11px] font-mono px-1.5 font-bold">
                {profile.fontSizeScale}%
              </span>
              <button
                type="button"
                onClick={() => {
                  const next = Math.min(150, profile.fontSizeScale + 10);
                  updateProfile({ fontSizeScale: next });
                  announce(`Text size ${next} percent`);
                }}
                className="px-2 py-1 text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                title="Increase text size"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>

            {/* High Contrast Toggle */}
            <button
              type="button"
              onClick={() => {
                const next = !profile.highContrast;
                updateProfile({ highContrast: next });
                announce(next ? 'High contrast mode on' : 'High contrast mode off');
              }}
              aria-pressed={profile.highContrast}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-colors ${
                profile.highContrast
                  ? 'bg-yellow-400 text-black border-yellow-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Toggle High Contrast Mode"
            >
              <Contrast className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Contrast</span>
            </button>

            {/* Dyslexia / Easy-Read Spacing Toggle */}
            <button
              type="button"
              onClick={() => {
                const next = !profile.dyslexiaSpacing;
                updateProfile({ dyslexiaSpacing: next });
                announce(next ? 'Wide reading spacing on' : 'Wide reading spacing off');
              }}
              aria-pressed={profile.dyslexiaSpacing}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-colors ${
                profile.dyslexiaSpacing
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Toggle Easy-Read Letter & Line Spacing"
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Spacing</span>
              {profile.dyslexiaSpacing && <Check className="w-3 h-3" />}
            </button>

            {/* Voice Navigation Button */}
            <button
              type="button"
              onClick={startVoiceNav}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                listeningNav
                  ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100'
              }`}
              title="Voice Navigation (Shortcut: Alt + V)"
              aria-label="Activate Voice Navigation"
            >
              {listeningNav ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline">{listeningNav ? 'Listening...' : 'Voice Nav'}</span>
            </button>

            {/* Stop Speech Button (visible when TTS is active) */}
            {isSpeaking && (
              <button
                type="button"
                onClick={stopSpeech}
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white flex items-center gap-1 shadow-sm hover:bg-rose-700"
                aria-label="Stop reading aloud"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>Stop Audio</span>
              </button>
            )}

            {/* Back to Regular StudentConnect */}
            <Link
              href="/"
              className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              title="Return to standard StudentConnect dashboard"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Standard Hub</span>
            </Link>
          </div>
        </div>

        {/* Voice Feedback Banner */}
        {voiceFeedback && (
          <div className="bg-indigo-600 text-white text-xs py-1.5 px-4 flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{voiceFeedback}</span>
            </div>
            <button
              type="button"
              onClick={() => setVoiceFeedback(null)}
              className="text-white/80 hover:text-white font-bold ml-4"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main id="accessibility-main-content" className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
