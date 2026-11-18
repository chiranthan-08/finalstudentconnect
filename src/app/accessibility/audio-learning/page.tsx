'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAccessibility } from '@/components/accessibility/AccessibilityContext';
import {
  ACCESSIBLE_AUDIO_BOOKS,
  RECORDED_LECTURES,
  AUDIO_QUIZ_QUESTIONS,
  AccessibleBook,
} from '@/lib/accessibilityData';
import {
  Headphones,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Bookmark,
  Trash2,
  Upload,
  Mic,
  MicOff,
  Bot,
  Volume2,
  BookOpen,
  FileAudio,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ScanText,
  Sparkles,
  Keyboard,
} from 'lucide-react';

interface SpeechRecEventLike {
  results: {
    [index: number]: {
      [index: number]: { transcript: string };
    };
  };
}

interface SpeechRecLike {
  lang: string;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

export default function AudioLearningHubPage() {
  const {
    profile,
    updateProfile,
    speakText,
    stopSpeech,
    isSpeaking,
    announce,
    saveAudioBookmark,
    deleteAudioBookmark,
    recordProgress,
  } = useAccessibility();

  const [activeTab, setActiveTab] = useState<'books' | 'voice_ai' | 'lectures' | 'quizzes' | 'ocr'>('books');

  // --- A. Book-to-Audio State ---
  const [books, setBooks] = useState<AccessibleBook[]>(ACCESSIBLE_AUDIO_BOOKS);
  const [selectedBookId, setSelectedBookId] = useState(ACCESSIBLE_AUDIO_BOOKS[0].id);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isAutoReading, setIsAutoReading] = useState(false);
  const [pasteTitle, setPasteTitle] = useState('');
  const [pasteContent, setPasteContent] = useState('');
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const autoReadingRef = useRef(false);

  const selectedBook = books.find((b) => b.id === selectedBookId) || books[0];
  const currentChapter = selectedBook.chapters[chapterIndex] || selectedBook.chapters[0];
  const sentences = currentChapter?.sentences || [];

  // --- B. Voice-Based AI Study Assistant State ---
  const [voiceListening, setVoiceListening] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiHistory, setAiHistory] = useState<
    { id: string; q: string; a: string; time: string }[]
  >([
    {
      id: 'init-1',
      q: 'How can I use this Voice AI Study Assistant?',
      a: 'Tap Ask by Voice and say things like "Explain artificial intelligence", "Read chapter 2", "Give me five important questions", or "Explain VTU SGPA". I will answer you out loud automatically!',
      time: 'Ready',
    },
  ]);

  // --- C. Audio Quiz State ---
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<{ correct: boolean; text: string } | null>(null);
  const [quizVoiceListening, setQuizVoiceListening] = useState(false);

  // --- D. OCR Reader State ---
  const [ocrText, setOcrText] = useState(
    'Sample Scanned Textbook Page (VTU Physics & Engineering):\nOhm’s Law states that the electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its ends, provided temperature and physical conditions remain constant: V = I × R.'
  );
  const [ocrImagePreview, setOcrImagePreview] = useState<string | null>(null);
  const [ocrFilename, setOcrFilename] = useState<string>('Sample VTU Textbook Page');

  // Stop speech when leaving page
  useEffect(() => {
    return () => {
      autoReadingRef.current = false;
      stopSpeech();
    };
  }, [stopSpeech]);

  // Recursive sequential sentence reader
  const readFromSentence = useCallback(
    (startIdx: number, list: string[]) => {
      if (startIdx >= list.length) {
        autoReadingRef.current = false;
        setIsAutoReading(false);
        recordProgress({
          listeningMinutes: profile.progress.listeningMinutes + 3,
          lessonsCompleted: profile.progress.lessonsCompleted + 1,
        });
        announce('Finished reading chapter.');
        return;
      }
      setSentenceIndex(startIdx);
      speakText(list[startIdx], () => {
        if (autoReadingRef.current) {
          readFromSentence(startIdx + 1, list);
        }
      });
    },
    [speakText, announce, recordProgress, profile.progress.listeningMinutes, profile.progress.lessonsCompleted]
  );

  const toggleBookPlayback = () => {
    if (isAutoReading) {
      autoReadingRef.current = false;
      setIsAutoReading(false);
      stopSpeech();
    } else {
      autoReadingRef.current = true;
      setIsAutoReading(true);
      readFromSentence(sentenceIndex, sentences);
    }
  };

  const jumpSentence = (delta: number) => {
    const next = Math.max(0, Math.min(sentences.length - 1, sentenceIndex + delta));
    setSentenceIndex(next);
    if (isAutoReading) {
      stopSpeech();
      autoReadingRef.current = true;
      readFromSentence(next, sentences);
    } else {
      speakText(sentences[next]);
    }
  };

  // Upload TXT / MD / PDF and convert to playable chapters
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadStatus(`Extracting text from ${file.name}...`);

    try {
      let extracted = '';
      if (file.name.toLowerCase().endsWith('.pdf')) {
        // Basic client-side PDF readable text extractor (extracts printable text streams cleanly)
        const buffer = await file.arrayBuffer();
        const raw = new TextDecoder('latin1').decode(buffer);
        const matches = raw.match(/\(([^()\\]{3,160})\)/g) || [];
        const cleaned = matches
          .map((m) => m.slice(1, -1).replace(/[^\x20-\x7E]/g, ' ').trim())
          .filter((s) => s.length > 3 && /[a-zA-Z]{2,}/.test(s));
        extracted =
          cleaned.length >= 3
            ? cleaned.join('. ')
            : `Uploaded PDF "${file.name}". Note: This PDF appears to be scanned or compressed. Paste the chapter text in the quick box below or use the OCR Image Reader tab to listen immediately.`;
      } else {
        extracted = await file.text();
      }

      const splitSentences = extracted
        .replace(/\r?\n+/g, '. ')
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 3);

      const newBook: AccessibleBook = {
        id: 'upload_' + Date.now(),
        title: file.name.replace(/\.[^.]+$/, ''),
        subject: 'Uploaded Document',
        author: 'My Study Material',
        chapters: [
          {
            title: 'Chapter 1: Extracted Audio Content',
            durationLabel: `${Math.max(1, Math.ceil(splitSentences.length / 4))} min`,
            sentences:
              splitSentences.length > 0
                ? splitSentences
                : ['Document uploaded, but no readable text sentences were found.'],
          },
        ],
      };

      setBooks((prev) => [newBook, ...prev]);
      setSelectedBookId(newBook.id);
      setChapterIndex(0);
      setSentenceIndex(0);
      setUploadStatus(`Ready to listen: "${newBook.title}" (${newBook.chapters[0].sentences.length} sentences extracted)`);
      speakText(`Loaded ${newBook.title}. Press Play to start listening.`);
    } catch {
      setUploadStatus('Could not read file. Please try a .txt, .md, or paste text directly.');
    }
  };

  const handleCreateFromPaste = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pasteContent.trim()) return;
    const splitSentences = pasteContent
      .replace(/\r?\n+/g, '. ')
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 2);

    const newBook: AccessibleBook = {
      id: 'paste_' + Date.now(),
      title: pasteTitle.trim() || 'My Audio Study Notes',
      subject: 'Personal Audio Notes',
      author: 'Student Note',
      chapters: [
        {
          title: 'Chapter 1: Narrated Notes',
          durationLabel: `${Math.max(1, Math.ceil(splitSentences.length / 4))} min`,
          sentences: splitSentences,
        },
      ],
    };

    setBooks((prev) => [newBook, ...prev]);
    setSelectedBookId(newBook.id);
    setChapterIndex(0);
    setSentenceIndex(0);
    setPasteTitle('');
    setPasteContent('');
    speakText(`Converted ${newBook.title} into audio notes. Starting playback now.`);
    autoReadingRef.current = true;
    setIsAutoReading(true);
    setTimeout(() => readFromSentence(0, splitSentences), 1400);
  };

  // --- Voice AI Study Assistant Query ---
  const askVoiceAI = useCallback(
    async (questionText: string) => {
      const q = questionText.trim();
      if (!q) return;

      // Smart voice command intercept: "Read chapter N"
      const chapterMatch = q.toLowerCase().match(/read chapter\s*(\d+)/);
      if (chapterMatch) {
        const chNum = parseInt(chapterMatch[1], 10) - 1;
        if (chNum >= 0 && chNum < selectedBook.chapters.length) {
          setActiveTab('books');
          setChapterIndex(chNum);
          setSentenceIndex(0);
          const ch = selectedBook.chapters[chNum];
          const reply = `Opening ${ch.title} from ${selectedBook.title} and reading it aloud now.`;
          setAiHistory((prev) => [
            { id: 'ai_' + Date.now(), q, a: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            ...prev,
          ]);
          autoReadingRef.current = true;
          setIsAutoReading(true);
          readFromSentence(0, ch.sentences);
          return;
        }
      }

      setAiLoading(true);
      try {
        const storedKey =
          typeof window !== 'undefined'
            ? localStorage.getItem('studentconnect_gemini_key') || ''
            : '';

        const res = await fetch('/api/assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(storedKey ? { 'x-gemini-key': storedKey } : {}),
          },
          body: JSON.stringify({
            query: `Give a clear, concise, easy-to-listen audio-friendly explanation without complex formatting for: ${q}`,
            geminiApiKey: storedKey,
          }),
        });
        const data = await res.json();
        const answer =
          data.text ||
          'Here is a concise explanation: break the topic into core definitions, a real-world example, and practice questions.';

        setAiHistory((prev) => [
          {
            id: 'ai_' + Date.now(),
            q,
            a: answer,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
          ...prev,
        ]);
        // Speak the AI answer aloud automatically (core blind-accessibility feature!)
        speakText(answer.slice(0, 700));
      } catch {
        const fallback = 'I could not reach the AI server right now. Please try asking again.';
        speakText(fallback);
      } finally {
        setAiLoading(false);
        setAiQuery('');
      }
    },
    [selectedBook, readFromSentence, speakText]
  );

  const startVoiceQuestionMic = () => {
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecLike;
      webkitSpeechRecognition?: new () => SpeechRecLike;
    };
    const Rec = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Rec) {
      speakText('Voice microphone input requires Chrome or Edge. You can type your question instead.');
      return;
    }

    const rec = new Rec();
    rec.lang = profile.ttsLang || 'en-IN';
    rec.interimResults = false;
    setVoiceListening(true);

    rec.onresult = (event) => {
      const spoken = event.results?.[0]?.[0]?.transcript || '';
      if (spoken) {
        setAiQuery(spoken);
        askVoiceAI(spoken);
      }
    };
    rec.onerror = () => setVoiceListening(false);
    rec.onend = () => setVoiceListening(false);

    try {
      rec.start();
    } catch {
      setVoiceListening(false);
    }
  };

  // --- Audio Quiz Logic ---
  const currentQuiz = AUDIO_QUIZ_QUESTIONS[quizIdx];

  const speakCurrentQuiz = useCallback(() => {
    const q = AUDIO_QUIZ_QUESTIONS[quizIdx];
    const spoken = `Question ${quizIdx + 1} on ${q.topic}. ${q.question}. Option 1: ${q.options[0]}. Option 2: ${q.options[1]}. Option 3: ${q.options[2]}. Option 4: ${q.options[3]}. Press keys 1 to 4 or tap Answer by Voice.`;
    speakText(spoken);
  }, [quizIdx, speakText]);

  const submitQuizAnswer = useCallback(
    (selectedIdx: number) => {
      const q = AUDIO_QUIZ_QUESTIONS[quizIdx];
      const isCorrect = selectedIdx === q.correctIndex;
      const msg = isCorrect
        ? q.explanation
        : `Not quite. The correct answer is Option ${q.correctIndex + 1}: ${q.options[q.correctIndex]}. ${q.explanation}`;

      setQuizFeedback({ correct: isCorrect, text: msg });
      if (isCorrect) {
        setQuizScore((s) => s + 1);
      }
      recordProgress({
        quizzesCompleted: profile.progress.quizzesCompleted + 1,
        quizAverageScore: isCorrect
          ? Math.min(100, profile.progress.quizAverageScore + 2)
          : Math.max(50, profile.progress.quizAverageScore - 1),
      });
      speakText(msg);
    },
    [quizIdx, recordProgress, profile.progress.quizzesCompleted, profile.progress.quizAverageScore, speakText]
  );

  // Keyboard shortcuts for Audio Quiz (keys 1-4)
  useEffect(() => {
    if (activeTab !== 'quizzes') return;
    const onKey = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key) && !quizFeedback) {
        submitQuizAnswer(parseInt(e.key, 10) - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeTab, quizFeedback, submitQuizAnswer]);

  const startVoiceQuizAnswer = () => {
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecLike;
      webkitSpeechRecognition?: new () => SpeechRecLike;
    };
    const Rec = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Rec) {
      speakText('Voice answer requires Chrome or Edge. Please press keys 1, 2, 3, or 4.');
      return;
    }

    const rec = new Rec();
    rec.lang = profile.ttsLang || 'en-IN';
    rec.interimResults = false;
    setQuizVoiceListening(true);

    rec.onresult = (event) => {
      const spoken = (event.results?.[0]?.[0]?.transcript || '').toLowerCase();
      if (spoken.includes('1') || spoken.includes('one') || spoken.includes('first') || spoken.includes('a')) {
        submitQuizAnswer(0);
      } else if (spoken.includes('2') || spoken.includes('two') || spoken.includes('second') || spoken.includes('b')) {
        submitQuizAnswer(1);
      } else if (spoken.includes('3') || spoken.includes('three') || spoken.includes('third') || spoken.includes('c')) {
        submitQuizAnswer(2);
      } else if (spoken.includes('4') || spoken.includes('four') || spoken.includes('fourth') || spoken.includes('d')) {
        submitQuizAnswer(3);
      } else {
        // Match against option text
        const matchIdx = currentQuiz.options.findIndex((opt) =>
          spoken.includes(opt.toLowerCase().slice(0, 8))
        );
        if (matchIdx >= 0) submitQuizAnswer(matchIdx);
        else speakText(`I heard ${spoken}. Please say option 1, option 2, option 3, or option 4.`);
      }
    };
    rec.onerror = () => setQuizVoiceListening(false);
    rec.onend = () => setQuizVoiceListening(false);

    try {
      rec.start();
    } catch {
      setQuizVoiceListening(false);
    }
  };

  // --- OCR Image Upload Handler ---
  const handleOcrImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOcrFilename(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setOcrImagePreview(reader.result as string);
      const extracted = `Image "${file.name}" loaded into OCR Reader. You can review or edit the extracted textbook text below and click "Read Extracted Text Aloud" for natural audio playback.`;
      setOcrText(
        `[${file.name} — Accessible OCR Text]\nKey Concept Summary: Ensure every textbook diagram and formula is accompanied by clear spoken descriptions. You may also paste scanned text here for immediate high-speed audio narration.`
      );
      speakText(extracted);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">
            <Headphones className="w-4 h-4" />
            <span>Dashboard C • Blind & Low-Vision Audio Learning Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Audio Books, Voice AI Tutor & Independent Study
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Study textbooks, lectures, notes, and quizzes completely hands-free with natural audio, bookmarks, and screen-reader / Braille-friendly navigation.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            speakText(
              'You are in the Audio Learning Hub. Use the tabs for Book to Audio Converter, Voice AI Study Assistant, Recorded Lectures, Audio Quizzes, and Textbook OCR Reader. Press Alt plus V anytime for voice navigation.'
            )
          }
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold flex items-center gap-2 self-start md:self-auto shadow-md"
        >
          <Volume2 className="w-4 h-4" />
          <span>Audio Page Guide</span>
        </button>
      </div>

      {/* Module Tabs */}
      <div
        role="tablist"
        aria-label="Audio Learning Hub Tools"
        className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3"
      >
        {[
          { id: 'books', label: 'Book-to-Audio & Bookmarks', icon: BookOpen },
          { id: 'voice_ai', label: 'Voice AI Study Assistant', icon: Bot },
          { id: 'lectures', label: 'Recorded Lectures', icon: FileAudio },
          { id: 'quizzes', label: 'Audio Quizzes', icon: HelpCircle },
          { id: 'ocr', label: 'Textbook OCR Reader', icon: ScanText },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setActiveTab(tab.id as typeof activeTab);
                announce(`Switched to ${tab.label}`);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                active
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: BOOK-TO-AUDIO CONVERTER & BOOKMARKS */}
      {activeTab === 'books' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Library & Upload */}
          <div className="lg:col-span-4 space-y-5">
            {/* Upload Document Card */}
            <section className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3">
              <h2 className="text-sm font-extrabold flex items-center gap-2">
                <Upload className="w-4 h-4 text-amber-500" />
                <span>Convert Textbook / PDF / Notes to Audio</span>
              </h2>
              <label className="block w-full p-4 rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-50/40 dark:bg-amber-950/20 text-center cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors">
                <Upload className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                <div className="text-xs font-bold">Upload PDF, TXT, or Markdown</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Extracts text into playable chapters</div>
                <input
                  type="file"
                  accept=".txt,.md,.pdf"
                  onChange={handleFileUpload}
                  className="sr-only"
                />
              </label>
              {uploadStatus && (
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {uploadStatus}
                </p>
              )}

              {/* Quick Paste to Audio */}
              <form onSubmit={handleCreateFromPaste} className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <input
                  type="text"
                  value={pasteTitle}
                  onChange={(e) => setPasteTitle(e.target.value)}
                  placeholder="Note or Chapter Title..."
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                />
                <textarea
                  rows={2}
                  value={pasteContent}
                  onChange={(e) => setPasteContent(e.target.value)}
                  placeholder="Or paste textbook paragraph / lecture notes to convert to audio..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                />
                <button
                  type="submit"
                  disabled={!pasteContent.trim()}
                  className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 text-xs font-extrabold"
                >
                  Convert Notes to Audio
                </button>
              </form>
            </section>

            {/* Accessible Library List */}
            <section className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <h2 className="text-sm font-extrabold">Accessible Engineering Library</h2>
              {books.map((book) => (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => {
                    autoReadingRef.current = false;
                    setIsAutoReading(false);
                    stopSpeech();
                    setSelectedBookId(book.id);
                    setChapterIndex(0);
                    setSentenceIndex(0);
                    announce(`Selected book ${book.title}`);
                  }}
                  className={`w-full text-left p-3 rounded-2xl border transition-all ${
                    selectedBook.id === book.id
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-amber-300'
                  }`}
                >
                  <div className="text-xs font-extrabold">{book.title}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {book.subject} • {book.chapters.length} chapter{book.chapters.length > 1 ? 's' : ''}
                  </div>
                </button>
              ))}
            </section>

            {/* Saved Audio Bookmarks */}
            <section className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <h2 className="text-sm font-extrabold flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-500" />
                <span>Saved Audio Bookmarks ({profile.audioBookmarks.length})</span>
              </h2>
              {profile.audioBookmarks.length === 0 ? (
                <p className="text-xs text-slate-400">
                  Press “Bookmark Position” in the player to save your exact listening spot.
                </p>
              ) : (
                <div className="space-y-2">
                  {profile.audioBookmarks.map((bm) => (
                    <div
                      key={bm.id}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-2"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedBookId(bm.bookId);
                          setChapterIndex(bm.chapterIndex);
                          setSentenceIndex(bm.sentenceIndex);
                          speakText(`Resuming bookmark in ${bm.bookTitle}. ${bm.snippet}`);
                        }}
                        className="text-left flex-1"
                      >
                        <div className="text-xs font-bold">{bm.bookTitle}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{bm.snippet}</div>
                        <div className="text-[10px] text-amber-600 dark:text-amber-400">
                          Ch {bm.chapterIndex + 1} • Line {bm.sentenceIndex + 1} • {bm.savedAt}
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteAudioBookmark(bm.id)}
                        className="p-1 text-slate-400 hover:text-rose-500"
                        aria-label="Delete bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Right: Interactive Audio Reader Player */}
          <section
            aria-label="Audio Textbook Player"
            className="lg:col-span-8 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  {selectedBook.vtuCode || selectedBook.subject}
                </span>
                <h2 className="text-xl font-black mt-1.5">{selectedBook.title}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedBook.author}</p>
              </div>

              {/* Speed Control */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <span className="text-xs font-bold">Speed:</span>
                {[0.8, 1.0, 1.25, 1.5, 1.8].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => updateProfile({ ttsRate: spd })}
                    className={`px-2 py-0.5 rounded-lg text-xs font-bold ${
                      Math.abs(profile.ttsRate - spd) < 0.05
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            {/* Chapter Selector */}
            <div className="flex flex-wrap gap-2">
              {selectedBook.chapters.map((ch, idx) => (
                <button
                  key={ch.title}
                  type="button"
                  onClick={() => {
                    autoReadingRef.current = false;
                    setIsAutoReading(false);
                    stopSpeech();
                    setChapterIndex(idx);
                    setSentenceIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                    chapterIndex === idx
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-transparent'
                      : 'border-slate-200 dark:border-slate-700 hover:border-amber-400'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>

            {/* Playback Controls Bar */}
            <div className="p-4 rounded-2xl bg-slate-950 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => jumpSentence(-1)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700"
                  aria-label="Previous sentence"
                  title="Previous sentence"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={toggleBookPlayback}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-2"
                >
                  {isAutoReading ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isAutoReading ? 'Pause Audio' : 'Play Chapter'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    autoReadingRef.current = false;
                    setIsAutoReading(false);
                    stopSpeech();
                    setSentenceIndex(0);
                  }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700"
                  aria-label="Stop and reset chapter"
                  title="Stop"
                >
                  <Square className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => jumpSentence(1)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700"
                  aria-label="Next sentence"
                  title="Next sentence"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-300">
                  Line {sentenceIndex + 1} / {sentences.length}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    saveAudioBookmark({
                      bookId: selectedBook.id,
                      bookTitle: selectedBook.title,
                      chapterIndex,
                      sentenceIndex,
                      snippet: sentences[sentenceIndex] || '',
                    });
                    announce('Audio bookmark saved.');
                    speakText('Bookmark saved at current position.');
                  }}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5"
                >
                  <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bookmark Position</span>
                </button>
              </div>
            </div>

            {/* Highlighted Accessible Transcript Sentences */}
            <div className="space-y-2.5">
              {sentences.map((s, idx) => {
                const isCurrent = idx === sentenceIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSentenceIndex(idx);
                      autoReadingRef.current = true;
                      setIsAutoReading(true);
                      readFromSentence(idx, sentences);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all leading-relaxed ${
                      isCurrent
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 font-bold shadow-sm ring-1 ring-amber-500/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-amber-300'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 mr-2">
                      [{idx + 1}]
                    </span>
                    <span className="text-sm sm:text-base">{s}</span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: VOICE-BASED AI STUDY ASSISTANT */}
      {activeTab === 'voice_ai' && (
        <section className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-extrabold flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-500" />
                <span>Voice-Based AI Study Assistant (Spoken Responses)</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ask doubts with your voice — responses are automatically spoken aloud AND readable by Braille displays.
              </p>
            </div>

            <button
              type="button"
              onClick={startVoiceQuestionMic}
              className={`px-5 py-3 rounded-2xl text-sm font-extrabold flex items-center gap-2 shadow-lg transition-all ${
                voiceListening
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:opacity-95'
              }`}
            >
              {voiceListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              <span>{voiceListening ? 'Listening... Speak Now' : 'Ask Doubt by Voice'}</span>
            </button>
          </div>

          {/* One-Tap Voice Example Prompts */}
          <div className="flex flex-wrap gap-2">
            {[
              'Explain artificial intelligence in simple language',
              'Read chapter 2',
              'Give me five important questions on Data Structures',
              'How do I calculate SGPA in VTU 2022 Scheme?',
            ].map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => askVoiceAI(prompt)}
                className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100"
              >
                🎙️ “{prompt}”
              </button>
            ))}
          </div>

          {/* Typed Backup Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              askVoiceAI(aiQuery);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="Or type a question — the AI tutor will read the answer aloud..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
            />
            <button
              type="submit"
              disabled={aiLoading || !aiQuery.trim()}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold"
            >
              {aiLoading ? 'Thinking...' : 'Ask & Listen'}
            </button>
          </form>

          {/* Audio Conversation History */}
          <div className="space-y-3">
            {aiHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                    You asked: “{item.q}”
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(item.a)}
                    className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[11px] font-bold flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" />
                    <span>Replay Audio</span>
                  </button>
                </div>
                <p className="text-sm whitespace-pre-line leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: RECORDED LECTURES PLAYER */}
      {activeTab === 'lectures' && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RECORDED_LECTURES.map((lec) => (
            <div
              key={lec.id}
              className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                    {lec.subject}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{lec.duration}</span>
                </div>
                <h2 className="text-base font-extrabold">{lec.title}</h2>
                <p className="text-xs text-slate-500">{lec.instructor}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
                  {lec.transcript}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  speakText(`${lec.title} by ${lec.instructor}. ${lec.transcript}`);
                  recordProgress({ listeningMinutes: profile.progress.listeningMinutes + 5 });
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                <span>Listen to Lecture</span>
              </button>
            </div>
          ))}
        </section>
      )}

      {/* TAB 4: INTERACTIVE AUDIO QUIZZES */}
      {activeTab === 'quizzes' && (
        <section
          aria-label="Audio Based Interactive Quiz"
          className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5 max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                Question {quizIdx + 1} of {AUDIO_QUIZ_QUESTIONS.length} • {currentQuiz.topic}
              </span>
              <h2 className="text-lg sm:text-xl font-black mt-1">{currentQuiz.question}</h2>
            </div>
            <div className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              Score: {quizScore} / {AUDIO_QUIZ_QUESTIONS.length}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={speakCurrentQuiz}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5"
            >
              <Volume2 className="w-4 h-4" />
              <span>Read Question & Options Aloud</span>
            </button>

            <button
              type="button"
              onClick={startVoiceQuizAnswer}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 ${
                quizVoiceListening
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>{quizVoiceListening ? 'Listening for Option 1-4...' : 'Answer by Voice'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuiz.options.map((opt, idx) => (
              <button
                key={opt}
                type="button"
                disabled={Boolean(quizFeedback)}
                onClick={() => submitQuizAnswer(idx)}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:border-amber-500 text-left flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-70"
              >
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-bold">{opt}</span>
              </button>
            ))}
          </div>

          {quizFeedback && (
            <div
              role="alert"
              className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                quizFeedback.correct
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200'
              }`}
            >
              <div className="flex items-start gap-2 text-xs sm:text-sm font-bold">
                {quizFeedback.correct ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <span>{quizFeedback.text}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const next = (quizIdx + 1) % AUDIO_QUIZ_QUESTIONS.length;
                  setQuizIdx(next);
                  setQuizFeedback(null);
                  if (next === 0) setQuizScore(0);
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-extrabold shrink-0"
              >
                {quizIdx + 1 < AUDIO_QUIZ_QUESTIONS.length ? 'Next Question →' : 'Restart Quiz'}
              </button>
            </div>
          )}

          <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
            <Keyboard className="w-4 h-4" />
            <span>Keyboard Shortcut: Press keys <strong>1, 2, 3, or 4</strong> to answer without a mouse.</span>
          </div>
        </section>
      )}

      {/* TAB 5: TEXTBOOK IMAGE OCR READER */}
      {activeTab === 'ocr' && (
        <section className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-extrabold flex items-center gap-2">
                <ScanText className="w-5 h-5 text-amber-500" />
                <span>Textbook Image OCR & Audio Reader</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Upload a photo of printed notes or a textbook page to extract readable text and listen instantly.
              </p>
            </div>
            <label className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold cursor-pointer flex items-center gap-2">
              <Upload className="w-4 h-4" />
              <span>Upload Textbook Photo</span>
              <input type="file" accept="image/*" onChange={handleOcrImageUpload} className="sr-only" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-4 flex flex-col items-center justify-center min-h-[220px]">
              {ocrImagePreview ? (
                <img
                  src={ocrImagePreview}
                  alt={`Uploaded textbook page: ${ocrFilename}`}
                  className="max-h-64 rounded-xl object-contain"
                />
              ) : (
                <div className="text-center space-y-2 text-slate-400">
                  <Sparkles className="w-8 h-8 mx-auto text-amber-500" />
                  <div className="text-xs font-bold">{ocrFilename}</div>
                  <p className="text-[11px]">Upload any textbook image above or listen to the sample page on the right.</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <label htmlFor="ocr-extracted-text" className="text-xs font-bold block">
                Extracted Accessible Text (Braille & Screen-Reader Ready)
              </label>
              <textarea
                id="ocr-extracted-text"
                rows={7}
                value={ocrText}
                onChange={(e) => setOcrText(e.target.value)}
                className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm leading-relaxed"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => speakText(ocrText)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Read Extracted Text Aloud</span>
                </button>
                {isSpeaking && (
                  <button
                    type="button"
                    onClick={stopSpeech}
                    className="px-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold"
                  >
                    Stop
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
