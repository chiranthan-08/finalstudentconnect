'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useAccessibility } from '@/components/accessibility/AccessibilityContext';
import { DEFAULT_AAC_CARDS } from '@/lib/accessibilityData';
import {
  MessageSquareText,
  Volume2,
  VolumeX,
  Send,
  Plus,
  Trash2,
  Pin,
  Sparkles,
  CheckCircle2,
  Sliders,
  BookmarkPlus,
  Eraser,
} from 'lucide-react';

const CATEGORIES = ['All', 'Classroom', 'Doubts', 'Technical', 'Group Study', 'Emergency'] as const;
const EMOJI_CHOICES = ['💬', '🙋', '📘', '💻', '📐', '💡', '🤝', '🙏', '⏸️', '✅', '❓', '🆘'];

export default function SpeechSupportPage() {
  const { user } = useAuth();
  const {
    profile,
    updateProfile,
    speakText,
    stopSpeech,
    isSpeaking,
    announce,
    addCustomPhrase,
    deleteCustomPhrase,
    togglePinPhrase,
  } = useAccessibility();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [composerText, setComposerText] = useState('');
  const [tapMode, setTapMode] = useState<'speak' | 'compose'>('speak');
  const [sentNotice, setSentNotice] = useState<string | null>(null);
  const [sendingToClass, setSendingToClass] = useState(false);

  // Add New Custom Phrase Form
  const [newPhraseText, setNewPhraseText] = useState('');
  const [newPhraseEmoji, setNewPhraseEmoji] = useState('💬');
  const [newPhraseCategory, setNewPhraseCategory] = useState('Classroom');

  const handleCardTap = (phrase: string) => {
    if (tapMode === 'speak') {
      setComposerText(phrase);
      speakText(phrase);
      announce(`Speaking: ${phrase}`);
    } else {
      setComposerText((prev) => (prev.trim() ? `${prev.trim()} ${phrase}` : phrase));
      announce(`Added to sentence builder: ${phrase}`);
    }
  };

  const handleSendToTeacher = async () => {
    const cleaned = composerText.trim();
    if (!cleaned) return;
    setSendingToClass(true);
    try {
      const res = await fetch('/api/accessibility/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: 'live-math-101',
          senderRole: 'student',
          senderName: `${user?.name || 'Student'} (AAC Speech)`,
          inputMethod: 'aac_speech',
          signEmoji: '🗣️',
          message: cleaned,
        }),
      });
      if (res.ok) {
        speakText(cleaned);
        setSentNotice('Sent to Live Classroom Teacher panel & spoken aloud!');
        setTimeout(() => setSentNotice(null), 4000);
      }
    } finally {
      setSendingToClass(false);
    }
  };

  const handleSaveNewPhrase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhraseText.trim()) return;
    addCustomPhrase({
      text: newPhraseText.trim(),
      emoji: newPhraseEmoji,
      category: newPhraseCategory,
      pinned: false,
    });
    setNewPhraseText('');
    announce('Saved to your personal communication dictionary.');
  };

  const filteredDefaultCards = DEFAULT_AAC_CARDS.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  const sortedCustomDictionary = [...profile.customDictionary].sort(
    (a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
            <MessageSquareText className="w-4 h-4" />
            <span>Dashboard B • Speech Support & AAC Communication Board</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Visual Gesture Cards & Natural Speech Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tap visual cards or type your questions to play them as clear audio, build sentences, save personal phrases, and communicate directly with teachers.
          </p>
        </div>

        {/* Tap Mode Switcher */}
        <div className="flex items-center gap-2 self-start md:self-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
          <button
            type="button"
            onClick={() => setTapMode('speak')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              tapMode === 'speak'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Tap = Speak Instantly
          </button>
          <button
            type="button"
            onClick={() => setTapMode('compose')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              tapMode === 'compose'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Tap = Build Sentence
          </button>
        </div>
      </div>

      {/* Sentence Builder & Audio Player Bar */}
      <section
        aria-labelledby="composer-heading"
        className="rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/40 bg-white dark:bg-slate-900 shadow-lg space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="composer-heading" className="text-sm sm:text-base font-extrabold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Speak or Type Your Question / Message</span>
          </h2>
          {sentNotice && (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              {sentNotice}
            </span>
          )}
        </div>

        <textarea
          rows={2}
          aria-label="Message to speak aloud or send to classroom"
          value={composerText}
          onChange={(e) => setComposerText(e.target.value)}
          placeholder="Tap any visual card below or type your question here to play as spoken audio..."
          className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={!composerText.trim()}
              onClick={() => speakText(composerText)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 disabled:opacity-50 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <Volume2 className="w-4 h-4" />
              <span>Play as Audio</span>
            </button>

            {isSpeaking && (
              <button
                type="button"
                onClick={stopSpeech}
                className="px-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5"
              >
                <VolumeX className="w-4 h-4" />
                <span>Stop</span>
              </button>
            )}

            <button
              type="button"
              disabled={!composerText.trim() || sendingToClass}
              onClick={handleSendToTeacher}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send to Classroom Teacher</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!composerText.trim()}
              onClick={() => {
                if (!composerText.trim()) return;
                addCustomPhrase({
                  text: composerText.trim(),
                  emoji: '⭐',
                  category: 'Classroom',
                  pinned: true,
                });
                setSentNotice('Saved phrase to your Personalized Dictionary!');
                setTimeout(() => setSentNotice(null), 3000);
              }}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-amber-500" />
              <span>Save Phrase</span>
            </button>

            <button
              type="button"
              onClick={() => setComposerText('')}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Clear composer text"
            >
              <Eraser className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid: Visual AAC Board + Right Side (Personalized Dictionary & Voice Settings) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Quick Communication Cards */}
        <section
          aria-labelledby="aac-cards-heading"
          className="lg:col-span-8 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 id="aac-cards-heading" className="text-base sm:text-lg font-extrabold">
              Quick Communication Cards
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredDefaultCards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => handleCardTap(card.phrase)}
                className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  card.category === 'Emergency'
                    ? 'border-rose-300 dark:border-rose-800 bg-rose-50/70 dark:bg-rose-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 hover:border-emerald-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-3xl">{card.emoji}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    {card.category}
                  </span>
                </div>
                <div className="text-sm font-extrabold">{card.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  “{card.phrase}”
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Right Column: Personalized Communication Dictionary & Voice Tuning */}
        <div className="lg:col-span-4 space-y-5">
          {/* Voice Settings */}
          <section
            aria-label="Voice Output Customization"
            className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3"
          >
            <h2 className="text-sm font-extrabold flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-500" />
              <span>Voice Output Settings</span>
            </h2>

            <div className="space-y-1">
              <label htmlFor="voice-lang" className="text-xs font-bold block">
                Voice Accent / Language
              </label>
              <select
                id="voice-lang"
                value={profile.ttsLang}
                onChange={(e) => updateProfile({ ttsLang: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold"
              >
                <option value="en-IN">English (India)</option>
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="kn-IN">Kannada (kn-IN)</option>
                <option value="hi-IN">Hindi (hi-IN)</option>
              </select>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="speech-rate">Speaking Speed</label>
                <span className="font-mono">{profile.ttsRate.toFixed(1)}x</span>
              </div>
              <input
                id="speech-rate"
                type="range"
                min="0.6"
                max="1.8"
                step="0.1"
                value={profile.ttsRate}
                onChange={(e) => updateProfile({ ttsRate: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="speech-pitch">Voice Pitch</label>
                <span className="font-mono">{profile.ttsPitch.toFixed(1)}</span>
              </div>
              <input
                id="speech-pitch"
                type="range"
                min="0.6"
                max="1.4"
                step="0.1"
                value={profile.ttsPitch}
                onChange={(e) => updateProfile({ ttsPitch: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600"
              />
            </div>
          </section>

          {/* Personalized Communication Dictionary */}
          <section
            aria-labelledby="personal-dict-heading"
            className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
          >
            <div>
              <h2 id="personal-dict-heading" className="text-sm font-extrabold">
                My Personalized Communication Dictionary
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Save your own frequently used class phrases for 1-tap speaking.
              </p>
            </div>

            <form onSubmit={handleSaveNewPhrase} className="space-y-2">
              <div className="flex gap-1 flex-wrap">
                {EMOJI_CHOICES.map((em) => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setNewPhraseEmoji(em)}
                    className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center border ${
                      newPhraseEmoji === em
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPhraseText}
                  onChange={(e) => setNewPhraseText(e.target.value)}
                  placeholder="Add custom phrase..."
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                />
                <select
                  aria-label="Custom phrase category"
                  value={newPhraseCategory}
                  onChange={(e) => setNewPhraseCategory(e.target.value)}
                  className="px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                >
                  <option value="Classroom">Classroom</option>
                  <option value="Doubts">Doubts</option>
                  <option value="Technical">Technical</option>
                  <option value="Group Study">Group Study</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={!newPhraseText.trim()}
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to My Dictionary</span>
              </button>
            </form>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {sortedCustomDictionary.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-start justify-between gap-2"
                >
                  <button
                    type="button"
                    onClick={() => handleCardTap(item.text)}
                    className="flex-1 text-left flex items-start gap-2"
                  >
                    <span className="text-lg shrink-0">{item.emoji}</span>
                    <div>
                      <div className="text-xs font-bold leading-snug">{item.text}</div>
                      <span className="text-[10px] text-slate-400">{item.category}</span>
                    </div>
                  </button>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => togglePinPhrase(item.id)}
                      className={`p-1 rounded-lg ${
                        item.pinned ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'
                      }`}
                      title={item.pinned ? 'Unpin phrase' : 'Pin phrase to top'}
                      aria-label={item.pinned ? 'Unpin phrase' : 'Pin phrase'}
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteCustomPhrase(item.id)}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-500"
                      title="Delete phrase"
                      aria-label="Delete custom phrase"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
