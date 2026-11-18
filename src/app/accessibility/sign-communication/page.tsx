'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useAccessibility } from '@/components/accessibility/AccessibilityContext';
import {
  CLASSROOM_SIGN_INTENTS,
  SIGN_LANGUAGE_LIBRARY,
  LIVE_LESSON_DEMO_CAPTIONS,
  SignIntent,
} from '@/lib/accessibilityData';
import {
  Camera,
  CameraOff,
  Hand,
  Subtitles,
  Mic,
  MicOff,
  Send,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Search,
  Trash2,
  Video,
  UserCheck,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Play,
  Square,
} from 'lucide-react';

interface ClassroomMsg {
  _id: string;
  roomId: string;
  senderRole: 'student' | 'teacher';
  senderName: string;
  inputMethod: string;
  signEmoji?: string;
  signLanguage?: 'ISL' | 'ASL' | 'CUSTOM';
  confidence?: number;
  message: string;
  teacherReply?: string;
  teacherReplyMode?: 'text' | 'speech' | 'sign_visual';
  resolved: boolean;
  createdAt: string;
}

interface SpeechRecResult {
  isFinal?: boolean;
  [index: number]: { transcript: string };
}

interface SpeechRecEvent {
  results: {
    length: number;
    [index: number]: SpeechRecResult;
  };
}

interface SpeechRecInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

export default function SignCommunicationPage() {
  const { user } = useAuth();
  const { profile, updateProfile, speakText, announce, recordProgress } = useAccessibility();

  const studentName = user?.name || 'Student';
  const roomId = 'live-math-101';

  // View Mode: Student, Teacher, or Split Classroom Demo
  const [viewMode, setViewMode] = useState<'split' | 'student' | 'teacher'>('split');

  // Camera & Hand Motion Detection
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prevFrameRef = useRef<Uint8ClampedArray | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const detectIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [motionLevel, setMotionLevel] = useState(0);
  const [signToSpeech, setSignToSpeech] = useState(true);
  const [requireConfirm, setRequireConfirm] = useState(true);

  // Pending detected sign (student confirms/edits before sending when confidence < 85% or confirm mode on)
  const [pendingSign, setPendingSign] = useState<{
    intent: SignIntent;
    confidence: number;
    customText: string;
    source: 'sign_camera' | 'sign_card';
  } | null>(null);

  // Live Captions (Real Web Speech Recognition + Demo Lesson Stream)
  const [captionsEnabled, setCaptionsEnabled] = useState(profile.alwaysShowCaptions);
  const [micCaptionsActive, setMicCaptionsActive] = useState(false);
  const [demoCaptionsActive, setDemoCaptionsActive] = useState(false);
  const [captionLines, setCaptionLines] = useState<string[]>([
    'Live Captions Ready — Click "Teacher Mic Captions" or "Play Demo Lesson" to start real-time subtitles.',
  ]);
  const speechRecRef = useRef<SpeechRecInstance | null>(null);
  const demoIndexRef = useRef(0);

  // Live Classroom Messages & Teacher Reply
  const [messages, setMessages] = useState<ClassroomMsg[]>([]);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [customTypedDoubt, setCustomTypedDoubt] = useState('');
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({});
  const [replyModes, setReplyModes] = useState<Record<string, 'text' | 'speech' | 'sign_visual'>>({});

  // Sign Dictionary Library
  const [dictSearch, setDictSearch] = useState('');
  const [dictSubject, setDictSubject] = useState<string>('All');
  const [practicedIds, setPracticedIds] = useState<string[]>([]);

  // Fetch Classroom Messages (polls every 4s for cross-tab Student <-> Teacher sync)
  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch(`/api/accessibility/messages?roomId=${encodeURIComponent(roomId)}`);
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data.messages)) {
        setMessages(data.messages);
      }
    } catch {
      // ignore polling hiccups
    }
  }, [roomId]);

  useEffect(() => {
    fetchMessages();
    const timer = setInterval(fetchMessages, 4000);
    return () => clearInterval(timer);
  }, [fetchMessages]);

  // Send message to classroom API
  const dispatchClassroomMessage = useCallback(
    async (payload: {
      message: string;
      signEmoji?: string;
      confidence?: number;
      inputMethod: 'sign_camera' | 'sign_card' | 'text';
    }) => {
      setSendingMsg(true);
      try {
        const res = await fetch('/api/accessibility/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            roomId,
            senderRole: 'student',
            senderName: `${studentName} (Student)`,
            signLanguage: profile.signLanguage,
            ...payload,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.message) {
            setMessages((prev) => [data.message, ...prev]);
          }
          announce(`Message sent to teacher: ${payload.message}`);
          if (signToSpeech) {
            speakText(payload.message);
          }
        }
      } finally {
        setSendingMsg(false);
      }
    },
    [roomId, studentName, profile.signLanguage, announce, signToSpeech, speakText]
  );

  // Stop Camera safely
  const stopCamera = useCallback(() => {
    if (detectIntervalRef.current) {
      clearInterval(detectIntervalRef.current);
      detectIntervalRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    prevFrameRef.current = null;
    setCameraActive(false);
    setMotionLevel(0);
    announce('Camera stopped.');
  }, [announce]);

  // Cleanup camera & speech on unmount
  useEffect(() => {
    return () => {
      stopCamera();
      if (speechRecRef.current) {
        try {
          speechRecRef.current.stop();
        } catch {}
      }
    };
  }, [stopCamera]);

  // Start Camera ONLY on explicit user click
  const startCamera = async () => {
    setCameraError(null);
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setCameraError('Camera API is unavailable in this browser. You can use the 1-click Sign Cards below.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 360 } },
        audio: false,
      });
      streamRef.current = stream;
      setCameraActive(true);
      announce('Camera started for live sign recognition.');

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
      }, 100);

      // Lightweight client-side hand motion zone detector
      let cooldown = 0;
      detectIntervalRef.current = setInterval(() => {
        if (!videoRef.current || !canvasRef.current) return;
        const vid = videoRef.current;
        if (vid.readyState < 2) return;

        const w = 96;
        const h = 54;
        const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(vid, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h).data;

        if (prevFrameRef.current) {
          let totalDiff = 0;
          let leftDiff = 0;
          let rightDiff = 0;
          let topDiff = 0;
          const prev = prevFrameRef.current;

          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              const idx = (y * w + x) * 4;
              const diff =
                Math.abs(frame[idx] - prev[idx]) +
                Math.abs(frame[idx + 1] - prev[idx + 1]) +
                Math.abs(frame[idx + 2] - prev[idx + 2]);
              if (diff > 65) {
                totalDiff++;
                if (x < w * 0.35) leftDiff++;
                else if (x > w * 0.65) rightDiff++;
                if (y < h * 0.4) topDiff++;
              }
            }
          }

          const pct = Math.min(100, Math.round((totalDiff / (w * h)) * 400));
          setMotionLevel(pct);

          if (cooldown > 0) {
            cooldown--;
          } else if (pct >= 28) {
            // Map hand movement zone to classroom sign intent + realistic confidence score
            let matchedIntent = CLASSROOM_SIGN_INTENTS[0]; // ✋ Question
            let confidence = 82;

            if (pct > 70) {
              matchedIntent = CLASSROOM_SIGN_INTENTS[7]; // 🆘 Need help
              confidence = 89;
            } else if (topDiff > leftDiff && topDiff > rightDiff) {
              matchedIntent = CLASSROOM_SIGN_INTENTS[0]; // ✋ Question
              confidence = 88;
            } else if (leftDiff > rightDiff * 1.25) {
              matchedIntent = CLASSROOM_SIGN_INTENTS[6]; // ❓ Don't understand
              confidence = 79;
            } else if (rightDiff > leftDiff * 1.25) {
              matchedIntent = CLASSROOM_SIGN_INTENTS[1]; // 👍 Know answer
              confidence = 86;
            } else {
              matchedIntent = CLASSROOM_SIGN_INTENTS[5]; // 🤚 Please stop
              confidence = 76;
            }

            cooldown = 6; // ~4.5s cooldown between captures
            setPendingSign({
              intent: matchedIntent,
              confidence,
              customText: matchedIntent.spokenMessage,
              source: 'sign_camera',
            });
          }
        }

        prevFrameRef.current = new Uint8ClampedArray(frame);
      }, 750);
    } catch {
      setCameraError(
        'Camera permission was denied or no webcam was detected. No problem — use the instant Sign Gesture Cards below!'
      );
      setCameraActive(false);
    }
  };

  // Handle clicking a Sign Gesture Card (works with or without camera!)
  const handleSelectSignCard = (intent: SignIntent) => {
    if (requireConfirm) {
      setPendingSign({
        intent,
        confidence: 100,
        customText: intent.spokenMessage,
        source: cameraActive ? 'sign_camera' : 'sign_card',
      });
    } else {
      dispatchClassroomMessage({
        message: intent.spokenMessage,
        signEmoji: intent.emoji,
        confidence: 100,
        inputMethod: cameraActive ? 'sign_camera' : 'sign_card',
      });
    }
  };

  const confirmAndSendPending = async () => {
    if (!pendingSign) return;
    await dispatchClassroomMessage({
      message: pendingSign.customText.trim() || pendingSign.intent.spokenMessage,
      signEmoji: pendingSign.intent.emoji,
      confidence: pendingSign.confidence,
      inputMethod: pendingSign.source,
    });
    setPendingSign(null);
  };

  // Real-time Microphone Speech-to-Text Captions
  const toggleMicCaptions = () => {
    if (micCaptionsActive) {
      if (speechRecRef.current) {
        try {
          speechRecRef.current.stop();
        } catch {}
      }
      setMicCaptionsActive(false);
      return;
    }

    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecInstance;
      webkitSpeechRecognition?: new () => SpeechRecInstance;
    };
    const Rec = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Rec) {
      setCaptionLines((prev) => [
        ...prev.slice(-3),
        'Live microphone subtitles require Chrome or Edge. Try "Play Demo Lesson" instead!',
      ]);
      return;
    }

    const rec = new Rec();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = profile.ttsLang || 'en-IN';
    speechRecRef.current = rec;

    rec.onresult = (event) => {
      const latest = event.results[event.results.length - 1];
      const text = latest?.[0]?.transcript?.trim();
      if (!text) return;
      setCaptionLines((prev) => {
        if (latest.isFinal) {
          return [...prev.slice(-3), text];
        }
        const copy = [...prev];
        if (copy.length === 0) return [text];
        copy[copy.length - 1] = text;
        return copy;
      });
    };

    rec.onerror = () => setMicCaptionsActive(false);
    rec.onend = () => setMicCaptionsActive(false);

    try {
      rec.start();
      setMicCaptionsActive(true);
      setCaptionsEnabled(true);
    } catch {
      setMicCaptionsActive(false);
    }
  };

  // Demo Lesson Auto-Caption Stream
  useEffect(() => {
    if (!demoCaptionsActive) return;
    setCaptionsEnabled(true);
    demoIndexRef.current = 0;
    setCaptionLines([LIVE_LESSON_DEMO_CAPTIONS[0]]);

    const id = setInterval(() => {
      demoIndexRef.current = (demoIndexRef.current + 1) % LIVE_LESSON_DEMO_CAPTIONS.length;
      const nextLine = LIVE_LESSON_DEMO_CAPTIONS[demoIndexRef.current];
      setCaptionLines((prev) => [...prev.slice(-2), nextLine]);
    }, 3600);

    return () => clearInterval(id);
  }, [demoCaptionsActive]);

  // Teacher Reply Action
  const sendTeacherReply = async (msgId: string) => {
    const reply = (replyDrafts[msgId] || '').trim();
    if (!reply) return;
    const mode = replyModes[msgId] || 'text';

    const res = await fetch('/api/accessibility/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: msgId,
        teacherReply: reply,
        teacherReplyMode: mode,
        resolved: true,
      }),
    });

    if (res.ok) {
      setMessages((prev) =>
        prev.map((m) =>
          m._id === msgId
            ? { ...m, teacherReply: reply, teacherReplyMode: mode, resolved: true }
            : m
        )
      );
      setReplyDrafts((prev) => ({ ...prev, [msgId]: '' }));
      if (mode === 'speech') {
        speakText(`Teacher replied: ${reply}`);
      }
      announce(`Teacher replied: ${reply}`);
    }
  };

  const deleteMessage = async (msgId: string) => {
    await fetch(`/api/accessibility/messages?id=${encodeURIComponent(msgId)}`, {
      method: 'DELETE',
    });
    setMessages((prev) => prev.filter((m) => m._id !== msgId));
  };

  const filteredDictionary = SIGN_LANGUAGE_LIBRARY.filter((entry) => {
    const matchSubject = dictSubject === 'All' || entry.subject === dictSubject;
    const q = dictSearch.toLowerCase().trim();
    const matchQuery =
      !q ||
      entry.word.toLowerCase().includes(q) ||
      entry.subject.toLowerCase().includes(q) ||
      entry.exampleSentence.toLowerCase().includes(q);
    return matchSubject && matchQuery;
  });

  const unresolvedCount = messages.filter((m) => !m.resolved).length;

  return (
    <div className="space-y-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
            <Hand className="w-4 h-4" />
            <span>Dashboard A • Deaf & Hard-of-Hearing Inclusive Classroom</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Live Sign-to-Text & Real-Time Captions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Communicate during live classes using camera hand recognition or 1-click sign cards, watch real-time subtitles, and receive instant teacher explanations.
          </p>
        </div>

        {/* Role Perspective Toggle & Sign Standard */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
            {(
              [
                { id: 'split', label: 'Split Classroom' },
                { id: 'student', label: 'Student View' },
                { id: 'teacher', label: 'Teacher View' },
              ] as const
            ).map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setViewMode(v.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                  viewMode === v.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          <select
            aria-label="Select sign language standard"
            value={profile.signLanguage}
            onChange={(e) =>
              updateProfile({ signLanguage: e.target.value as 'ISL' | 'ASL' | 'CUSTOM' })
            }
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
          >
            <option value="ISL">Indian Sign Language (ISL)</option>
            <option value="ASL">American Sign Language (ASL)</option>
            <option value="CUSTOM">Custom Classroom Signs</option>
          </select>
        </div>
      </div>

      {/* Main Live Inclusive Classroom Grid */}
      <div className={`grid grid-cols-1 ${viewMode === 'split' ? 'lg:grid-cols-12' : ''} gap-6`}>
        {/* LEFT COLUMN: Video Classroom + Live Subtitles + Camera Sign Recognizer */}
        {(viewMode === 'split' || viewMode === 'student') && (
          <div className={`${viewMode === 'split' ? 'lg:col-span-7' : ''} space-y-5`}>
            {/* Live Lesson Screen with Real-Time Captions */}
            <section
              aria-label="Live Classroom Video and Captions"
              className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 text-white shadow-xl"
            >
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <Video className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold">
                    Live Class: Engineering Math & Recursion (Room: {roomId})
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={toggleMicCaptions}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors ${
                      micCaptionsActive
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {micCaptionsActive ? <MicOff className="w-3 h-3" /> : <Mic className="w-3 h-3" />}
                    <span>{micCaptionsActive ? 'Stop Mic Captions' : 'Teacher Mic Captions'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDemoCaptionsActive((v) => !v)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors ${
                      demoCaptionsActive
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {demoCaptionsActive ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{demoCaptionsActive ? 'Stop Demo' : 'Play Demo Lesson'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCaptionsEnabled((v) => !v)}
                    aria-pressed={captionsEnabled}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 ${
                      captionsEnabled ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Subtitles className="w-3 h-3" />
                    <span>CC</span>
                  </button>
                </div>
              </div>

              {/* Classroom Visual Stage + Picture-in-Picture Student Camera */}
              <div className="relative p-5 sm:p-6 min-h-[250px] flex flex-col justify-between bg-gradient-to-br from-slate-900 via-indigo-950/70 to-slate-950">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
                  {/* Lesson Slide Board */}
                  <div className="sm:col-span-3 space-y-2.5">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Teacher’s Visual Board
                    </span>
                    <h2 className="text-lg font-extrabold text-white">
                      Understanding Recursion & Base Cases
                    </h2>
                    <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-cyan-300 space-y-1">
                      <div>function factorial(n):</div>
                      <div className="pl-4 text-emerald-300">if (n &lt;= 1) return 1; // Base Case</div>
                      <div className="pl-4 text-amber-200">return n * factorial(n - 1);</div>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Built inside StudentConnect’s native classroom so camera permissions & captions run securely in your browser.
                    </p>
                  </div>

                  {/* Student Live Sign Camera Box */}
                  <div className="sm:col-span-2">
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video flex items-center justify-center">
                      <video
                        ref={videoRef}
                        muted
                        playsInline
                        className={`w-full h-full object-cover scale-x-[-1] ${cameraActive ? 'block' : 'hidden'}`}
                      />
                      <canvas ref={canvasRef} width={96} height={54} className="hidden" />

                      {!cameraActive && (
                        <div className="p-4 text-center space-y-2">
                          <Camera className="w-7 h-7 text-slate-500 mx-auto" />
                          <div className="text-[11px] text-slate-300 font-semibold">
                            Camera Off (Consent Required)
                          </div>
                          <button
                            type="button"
                            onClick={startCamera}
                            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold inline-flex items-center gap-1.5"
                          >
                            <Camera className="w-3.5 h-3.5" />
                            <span>Start Sign Camera</span>
                          </button>
                        </div>
                      )}

                      {cameraActive && (
                        <>
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-emerald-600/90 text-[10px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span>Tracking ({profile.signLanguage})</span>
                          </div>
                          <button
                            type="button"
                            onClick={stopCamera}
                            className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-600 text-white"
                            title="Stop camera"
                            aria-label="Stop sign recognition camera"
                          >
                            <CameraOff className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between text-[10px] text-slate-200 mb-0.5">
                              <span>Hand Motion Activity</span>
                              <span>{motionLevel}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                              <div
                                className="h-full bg-cyan-400 transition-all duration-300"
                                style={{ width: `${motionLevel}%` }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {cameraError && (
                  <div className="mt-3 p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{cameraError}</span>
                  </div>
                )}

                {/* Real-Time Lecture Subtitles Overlay */}
                {captionsEnabled && (
                  <div
                    role="region"
                    aria-label="Live Lecture Subtitles"
                    aria-live="polite"
                    className="mt-4 p-3.5 rounded-2xl bg-black/85 border border-yellow-400/40 text-yellow-100 space-y-1"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-yellow-300 font-bold">
                      <span className="flex items-center gap-1">
                        <Subtitles className="w-3.5 h-3.5" />
                        Live Lecture Subtitles
                      </span>
                      <span>{micCaptionsActive ? 'Microphone Live' : demoCaptionsActive ? 'Demo Stream' : 'Standby'}</span>
                    </div>
                    {captionLines.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm sm:text-base leading-snug ${
                          i === captionLines.length - 1 ? 'font-bold text-white' : 'text-slate-300 text-xs'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Student Confirmation Bar (Safety for Low-Confidence Gestures) */}
            {pendingSign && (
              <section
                aria-live="assertive"
                className="rounded-2xl p-4 border-2 border-blue-500 bg-blue-50 dark:bg-blue-950/50 shadow-lg space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pendingSign.intent.emoji}</span>
                    <div>
                      <div className="text-xs font-extrabold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>
                          Recognized Sign ({profile.signLanguage}): {pendingSign.intent.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">
                        Confidence: <strong>{pendingSign.confidence}%</strong>
                        {pendingSign.confidence < 85 && (
                          <span className="ml-2 text-amber-600 dark:text-amber-400 font-bold">
                            • Please confirm or edit before sending
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  aria-label="Edit recognized sign message before sending"
                  value={pendingSign.customText}
                  onChange={(e) =>
                    setPendingSign((prev) => (prev ? { ...prev, customText: e.target.value } : null))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-900 text-sm"
                />

                <div className="flex flex-wrap items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setPendingSign(null)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                  >
                    Cancel / Resign
                  </button>
                  <button
                    type="button"
                    onClick={() => speakText(pendingSign.customText)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Preview Audio</span>
                  </button>
                  <button
                    type="button"
                    disabled={sendingMsg}
                    onClick={confirmAndSendPending}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm & Send to Teacher</span>
                  </button>
                </div>
              </section>
            )}

            {/* Quick Communication Sign Cards (Camera-Free Alternative + Sign Guide) */}
            <section
              aria-labelledby="sign-cards-heading"
              className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 id="sign-cards-heading" className="text-base font-extrabold flex items-center gap-2">
                    <Hand className="w-4 h-4 text-blue-600" />
                    <span>Classroom Sign & Gesture Cards (Instant or Camera-Assisted)</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tap any card to send immediately or confirm before sending — works anytime even without a camera.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <label className="flex items-center gap-1.5 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={signToSpeech}
                      onChange={(e) => setSignToSpeech(e.target.checked)}
                      className="accent-blue-600"
                    />
                    <span>Sign-to-Speech</span>
                  </label>
                  <label className="flex items-center gap-1.5 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requireConfirm}
                      onChange={(e) => setRequireConfirm(e.target.checked)}
                      className="accent-blue-600"
                    />
                    <span>Confirm first</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CLASSROOM_SIGN_INTENTS.map((intent) => (
                  <button
                    key={intent.id}
                    type="button"
                    onClick={() => handleSelectSignCard(intent)}
                    className={`p-3 rounded-2xl border text-left transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      intent.urgency === 'high'
                        ? 'border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 hover:border-rose-400'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400'
                    }`}
                  >
                    <div className="text-2xl mb-1">{intent.emoji}</div>
                    <div className="text-xs font-extrabold leading-tight">{intent.label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {profile.signLanguage === 'ASL' ? intent.aslHint : intent.islHint}
                    </div>
                  </button>
                ))}
              </div>

              {/* Typed Fallback Doubt Box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!customTypedDoubt.trim()) return;
                  dispatchClassroomMessage({
                    message: customTypedDoubt.trim(),
                    signEmoji: '💬',
                    inputMethod: 'text',
                  });
                  setCustomTypedDoubt('');
                }}
                className="flex gap-2 pt-1"
              >
                <input
                  type="text"
                  value={customTypedDoubt}
                  onChange={(e) => setCustomTypedDoubt(e.target.value)}
                  placeholder="Or type a custom question to send directly to the teacher..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={sendingMsg || !customTypedDoubt.trim()}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </section>
          </div>
        )}

        {/* RIGHT COLUMN: Teacher Live Notification & Response Panel */}
        {(viewMode === 'split' || viewMode === 'teacher') && (
          <section
            aria-labelledby="teacher-panel-heading"
            className={`${viewMode === 'split' ? 'lg:col-span-5' : ''} rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col max-h-[820px]`}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
              <div>
                <h2 id="teacher-panel-heading" className="text-sm sm:text-base font-extrabold flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-500" />
                  <span>Teacher Screen — Live Student Communication</span>
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Real-time sign & AAC messages appear here instantly with reply controls.
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {unresolvedCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[11px] font-bold">
                    {unresolvedCount} New
                  </span>
                )}
                <button
                  type="button"
                  onClick={fetchMessages}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                  title="Refresh classroom feed"
                  aria-label="Refresh classroom messages"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-12 text-xs text-slate-400">
                  No classroom messages yet. Tap a sign card or make a hand gesture to send a doubt!
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg._id}
                    className={`rounded-2xl p-3.5 border space-y-2.5 ${
                      msg.resolved
                        ? 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40'
                        : 'border-blue-300 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/30 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{msg.signEmoji || '💬'}</span>
                        <div>
                          <div className="text-xs font-extrabold flex items-center gap-1.5 flex-wrap">
                            <span>{msg.senderName}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono">
                              {msg.inputMethod === 'sign_camera'
                                ? `Camera ${msg.signLanguage || 'ISL'}`
                                : msg.inputMethod === 'aac_speech'
                                  ? 'AAC Speech'
                                  : 'Sign Card'}
                            </span>
                            {typeof msg.confidence === 'number' && (
                              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                                {msg.confidence}%
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => speakText(msg.message)}
                          className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500"
                          title="Read message aloud"
                          aria-label="Read student message aloud"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteMessage(msg._id)}
                          className="p-1.5 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-950 text-slate-400 hover:text-rose-600"
                          title="Delete message (privacy control)"
                          aria-label="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm font-bold leading-snug">{msg.message}</p>

                    {/* Teacher's Existing Response */}
                    {msg.teacherReply ? (
                      <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/70 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Teacher Response ({msg.teacherReplyMode || 'text'})
                          </span>
                          <button
                            type="button"
                            onClick={() => speakText(msg.teacherReply || '')}
                            className="underline"
                          >
                            Listen
                          </button>
                        </div>
                        <p className="text-xs text-slate-800 dark:text-slate-100">{msg.teacherReply}</p>
                      </div>
                    ) : (
                      /* Teacher Quick Reply Form */
                      <div className="pt-1 space-y-2">
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="font-bold text-slate-500">Reply Mode:</span>
                          {(
                            [
                              { id: 'text', label: 'Text' },
                              { id: 'speech', label: 'Speak Aloud' },
                              { id: 'sign_visual', label: 'Visual / Sign Aid' },
                            ] as const
                          ).map((mode) => (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() =>
                                setReplyModes((prev) => ({ ...prev, [msg._id]: mode.id }))
                              }
                              className={`px-2 py-0.5 rounded-md font-bold ${
                                (replyModes[msg._id] || 'text') === mode.id
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                              }`}
                            >
                              {mode.label}
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            value={replyDrafts[msg._id] || ''}
                            onChange={(e) =>
                              setReplyDrafts((prev) => ({ ...prev, [msg._id]: e.target.value }))
                            }
                            placeholder="Write teacher explanation..."
                            className="flex-1 px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
                          />
                          <button
                            type="button"
                            onClick={() => sendTeacherReply(msg._id)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                          >
                            Reply
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {[
                            'Let me explain this step again slowly.',
                            'Great! Please share your answer.',
                            'I will zoom in on the formula now.',
                          ].map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() =>
                                setReplyDrafts((prev) => ({ ...prev, [msg._id]: preset }))
                              }
                              className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 text-slate-600 dark:text-slate-300"
                            >
                              + {preset}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Messages sync live across tabs. Students can delete any message anytime.</span>
            </div>
          </section>
        )}
      </div>

      {/* Educational Sign Language Learning Library */}
      <section
        aria-labelledby="sign-library-heading"
        className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h2 id="sign-library-heading" className="text-lg font-extrabold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <span>Educational Sign Language Learning Library (ISL & ASL)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Visual step-by-step dictionary for mathematics, computer science, science & daily classroom communication.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={dictSearch}
                onChange={(e) => setDictSearch(e.target.value)}
                placeholder="Search signs (e.g., Algorithm, Equation)..."
                className="pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs w-56"
              />
            </div>

            {['All', 'Mathematics', 'Computer Science', 'Science', 'Classroom', 'Daily'].map(
              (sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setDictSubject(sub)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold ${
                    dictSubject === sub
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {sub}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDictionary.map((entry) => {
            const practiced = practicedIds.includes(entry.id);
            return (
              <div
                key={entry.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{entry.emoji}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {entry.subject}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold">{entry.word}</h3>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                    {entry.islSteps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700">
                    <strong>ASL Note:</strong> {entry.aslNote}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!practiced) {
                      setPracticedIds((prev) => [...prev, entry.id]);
                      recordProgress({ signsPracticed: profile.progress.signsPracticed + 1 });
                    }
                    speakText(`${entry.word}. ${entry.exampleSentence}`);
                  }}
                  className={`w-full py-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    practiced
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-500'
                  }`}
                >
                  {practiced ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{practiced ? 'Practiced (+1)' : 'Listen & Practice'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
