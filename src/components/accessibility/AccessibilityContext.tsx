'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';

export interface CustomPhrase {
  id: string;
  text: string;
  emoji: string;
  category: string;
  pinned?: boolean;
}

export interface AudioBookmark {
  id: string;
  bookId: string;
  bookTitle: string;
  chapterIndex: number;
  sentenceIndex: number;
  snippet: string;
  savedAt: string;
}

export interface AccessibilityProgress {
  lessonsCompleted: number;
  listeningMinutes: number;
  quizzesCompleted: number;
  quizAverageScore: number;
  signsPracticed: number;
  difficultTopics: string[];
}

export interface AccessibilityProfileState {
  preferredModes: string[];
  signLanguage: 'ISL' | 'ASL' | 'CUSTOM';
  fontSizeScale: number;
  highContrast: boolean;
  dyslexiaSpacing: boolean;
  reducedMotion: boolean;
  alwaysShowCaptions: boolean;
  ttsRate: number;
  ttsPitch: number;
  ttsLang: string;
  customDictionary: CustomPhrase[];
  audioBookmarks: AudioBookmark[];
  progress: AccessibilityProgress;
}

const DEFAULT_PROFILE: AccessibilityProfileState = {
  preferredModes: ['captions'],
  signLanguage: 'ISL',
  fontSizeScale: 100,
  highContrast: false,
  dyslexiaSpacing: false,
  reducedMotion: false,
  alwaysShowCaptions: true,
  ttsRate: 1.0,
  ttsPitch: 1.0,
  ttsLang: 'en-IN',
  customDictionary: [
    {
      id: 'custom-1',
      emoji: '📘',
      text: 'Please share the VTU module notes in accessible text format.',
      category: 'Classroom',
      pinned: true,
    },
    {
      id: 'custom-2',
      emoji: '🧑‍💻',
      text: 'I am ready to present my code screen now.',
      category: 'Technical',
      pinned: false,
    },
  ],
  audioBookmarks: [],
  progress: {
    lessonsCompleted: 3,
    listeningMinutes: 42,
    quizzesCompleted: 2,
    quizAverageScore: 85,
    signsPracticed: 14,
    difficultTopics: ['Recursion & Call Stack', 'Laplace Transforms'],
  },
};

interface AccessibilityContextValue {
  profile: AccessibilityProfileState;
  updateProfile: (patch: Partial<AccessibilityProfileState>) => void;
  togglePreferredMode: (mode: string) => void;
  speakText: (text: string, onEnd?: () => void) => void;
  stopSpeech: () => void;
  isSpeaking: boolean;
  announcement: string;
  announce: (msg: string) => void;
  addCustomPhrase: (phrase: Omit<CustomPhrase, 'id'>) => void;
  deleteCustomPhrase: (id: string) => void;
  togglePinPhrase: (id: string) => void;
  saveAudioBookmark: (bm: Omit<AudioBookmark, 'id' | 'savedAt'>) => void;
  deleteAudioBookmark: (id: string) => void;
  recordProgress: (patch: Partial<AccessibilityProgress>) => void;
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const STORAGE_KEY = 'studentconnect_accessibility_profile_v1';

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const userId = user?.email || user?.id || 'guest-inclusive-student';

  const [profile, setProfile] = useState<AccessibilityProfileState>(DEFAULT_PROFILE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  // Load from localStorage & backend API
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setProfile((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore parse errors
    }

    fetch(`/api/accessibility/profile?userId=${encodeURIComponent(userId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.profile) {
          setProfile((prev) => {
            const merged = { ...prev, ...data.profile };
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch {}
            return merged;
          });
        }
      })
      .catch(() => {});
  }, [userId]);

  const persistProfile = useCallback(
    (next: AccessibilityProfileState) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}

      fetch('/api/accessibility/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, profile: next }),
      }).catch(() => {});
    },
    [userId]
  );

  const updateProfile = useCallback(
    (patch: Partial<AccessibilityProfileState>) => {
      setProfile((prev) => {
        const next = { ...prev, ...patch };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const togglePreferredMode = useCallback(
    (mode: string) => {
      setProfile((prev) => {
        const exists = prev.preferredModes.includes(mode);
        const preferredModes = exists
          ? prev.preferredModes.filter((m) => m !== mode)
          : [...prev.preferredModes, mode];
        const next = { ...prev, preferredModes };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const announce = useCallback((msg: string) => {
    setAnnouncement('');
    setTimeout(() => setAnnouncement(msg), 50);
  }, []);

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speakText = useCallback(
    (text: string, onEnd?: () => void) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        onEnd?.();
        return;
      }
      const cleaned = text.replace(/[#*_`]/g, '').trim();
      if (!cleaned) {
        onEnd?.();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleaned);
      utterance.rate = profile.ttsRate;
      utterance.pitch = profile.ttsPitch;
      utterance.lang = profile.ttsLang || 'en-IN';
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      window.speechSynthesis.speak(utterance);
    },
    [profile.ttsRate, profile.ttsPitch, profile.ttsLang]
  );

  const addCustomPhrase = useCallback(
    (phrase: Omit<CustomPhrase, 'id'>) => {
      setProfile((prev) => {
        const item: CustomPhrase = {
          ...phrase,
          id: 'phrase_' + Date.now(),
        };
        const next = { ...prev, customDictionary: [item, ...prev.customDictionary] };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const deleteCustomPhrase = useCallback(
    (id: string) => {
      setProfile((prev) => {
        const next = {
          ...prev,
          customDictionary: prev.customDictionary.filter((p) => p.id !== id),
        };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const togglePinPhrase = useCallback(
    (id: string) => {
      setProfile((prev) => {
        const next = {
          ...prev,
          customDictionary: prev.customDictionary.map((p) =>
            p.id === id ? { ...p, pinned: !p.pinned } : p
          ),
        };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const saveAudioBookmark = useCallback(
    (bm: Omit<AudioBookmark, 'id' | 'savedAt'>) => {
      setProfile((prev) => {
        const item: AudioBookmark = {
          ...bm,
          id: 'bm_' + Date.now(),
          savedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        const next = { ...prev, audioBookmarks: [item, ...prev.audioBookmarks].slice(0, 20) };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const deleteAudioBookmark = useCallback(
    (id: string) => {
      setProfile((prev) => {
        const next = {
          ...prev,
          audioBookmarks: prev.audioBookmarks.filter((b) => b.id !== id),
        };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  const recordProgress = useCallback(
    (patch: Partial<AccessibilityProgress>) => {
      setProfile((prev) => {
        const next = {
          ...prev,
          progress: { ...prev.progress, ...patch },
        };
        persistProfile(next);
        return next;
      });
    },
    [persistProfile]
  );

  return (
    <AccessibilityContext.Provider
      value={{
        profile,
        updateProfile,
        togglePreferredMode,
        speakText,
        stopSpeech,
        isSpeaking,
        announcement,
        announce,
        addCustomPhrase,
        deleteCustomPhrase,
        togglePinPhrase,
        saveAudioBookmark,
        deleteAudioBookmark,
        recordProgress,
      }}
    >
      {children}
      {/* Screen Reader Live Region */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return ctx;
}
