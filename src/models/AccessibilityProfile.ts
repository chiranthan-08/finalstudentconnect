import mongoose, { Schema, Document } from 'mongoose';

export interface CustomPhraseItem {
  id: string;
  text: string;
  emoji: string;
  category: string;
  pinned?: boolean;
}

export interface AudioBookmarkItem {
  id: string;
  bookId: string;
  bookTitle: string;
  chapterIndex: number;
  sentenceIndex: number;
  snippet: string;
  savedAt: string;
}

export interface AccessibilityProfileDocument extends Document {
  userId: string;
  preferredModes: string[]; // 'sign' | 'captions' | 'aac_speech' | 'audio_reader' | 'voice_nav'
  signLanguage: 'ISL' | 'ASL' | 'CUSTOM';
  fontSizeScale: number; // 100 - 150
  highContrast: boolean;
  dyslexiaSpacing: boolean;
  reducedMotion: boolean;
  alwaysShowCaptions: boolean;
  ttsRate: number; // 0.5 - 2.0
  ttsPitch: number; // 0.5 - 1.5
  ttsLang: string;
  customDictionary: CustomPhraseItem[];
  audioBookmarks: AudioBookmarkItem[];
  progress: {
    lessonsCompleted: number;
    listeningMinutes: number;
    quizzesCompleted: number;
    quizAverageScore: number;
    signsPracticed: number;
    difficultTopics: string[];
  };
  updatedAt: Date;
  createdAt: Date;
}

const AccessibilityProfileSchema = new Schema<AccessibilityProfileDocument>(
  {
    userId: { type: String, required: true, unique: true, index: true },
    preferredModes: { type: [String], default: ['captions'] },
    signLanguage: { type: String, enum: ['ISL', 'ASL', 'CUSTOM'], default: 'ISL' },
    fontSizeScale: { type: Number, default: 100 },
    highContrast: { type: Boolean, default: false },
    dyslexiaSpacing: { type: Boolean, default: false },
    reducedMotion: { type: Boolean, default: false },
    alwaysShowCaptions: { type: Boolean, default: true },
    ttsRate: { type: Number, default: 1.0 },
    ttsPitch: { type: Number, default: 1.0 },
    ttsLang: { type: String, default: 'en-IN' },
    customDictionary: {
      type: [
        {
          id: String,
          text: String,
          emoji: String,
          category: String,
          pinned: Boolean,
        },
      ],
      default: [],
    },
    audioBookmarks: {
      type: [
        {
          id: String,
          bookId: String,
          bookTitle: String,
          chapterIndex: Number,
          sentenceIndex: Number,
          snippet: String,
          savedAt: String,
        },
      ],
      default: [],
    },
    progress: {
      lessonsCompleted: { type: Number, default: 3 },
      listeningMinutes: { type: Number, default: 42 },
      quizzesCompleted: { type: Number, default: 2 },
      quizAverageScore: { type: Number, default: 85 },
      signsPracticed: { type: Number, default: 14 },
      difficultTopics: { type: [String], default: ['Recursion & Trees', 'Laplace Transforms'] },
    },
  },
  { timestamps: true }
);

export const AccessibilityProfileModel =
  mongoose.models.AccessibilityProfile ||
  mongoose.model<AccessibilityProfileDocument>(
    'AccessibilityProfile',
    AccessibilityProfileSchema
  );
