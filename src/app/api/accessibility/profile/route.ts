import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { AccessibilityProfileModel } from '@/models/AccessibilityProfile';

interface ProfileRecord {
  userId: string;
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
  customDictionary: {
    id: string;
    text: string;
    emoji: string;
    category: string;
    pinned?: boolean;
  }[];
  audioBookmarks: {
    id: string;
    bookId: string;
    bookTitle: string;
    chapterIndex: number;
    sentenceIndex: number;
    snippet: string;
    savedAt: string;
  }[];
  progress: {
    lessonsCompleted: number;
    listeningMinutes: number;
    quizzesCompleted: number;
    quizAverageScore: number;
    signsPracticed: number;
    difficultTopics: string[];
  };
}

const memoryProfiles = new Map<string, ProfileRecord>();

function defaultProfile(userId: string): ProfileRecord {
  return {
    userId,
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
}

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId') || 'guest-inclusive-student';

  try {
    const db = await connectToDatabase();
    if (db.isConnected) {
      let doc = await AccessibilityProfileModel.findOne({ userId }).lean();
      if (!doc) {
        const created = await AccessibilityProfileModel.create(defaultProfile(userId));
        doc = created.toObject();
      }
      return NextResponse.json({ profile: doc, storage: 'mongodb' });
    }
  } catch (err) {
    console.warn('[Accessibility Profile GET] Falling back to in-memory store:', err);
  }

  if (!memoryProfiles.has(userId)) {
    memoryProfiles.set(userId, defaultProfile(userId));
  }
  return NextResponse.json({ profile: memoryProfiles.get(userId), storage: 'memory' });
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const userId = (body.userId as string) || 'guest-inclusive-student';
    const updates = body.profile || body;

    // Sanitize updatable fields
    const allowed: Partial<ProfileRecord> = {};
    if (Array.isArray(updates.preferredModes)) allowed.preferredModes = updates.preferredModes;
    if (['ISL', 'ASL', 'CUSTOM'].includes(updates.signLanguage)) allowed.signLanguage = updates.signLanguage;
    if (typeof updates.fontSizeScale === 'number') {
      allowed.fontSizeScale = Math.min(150, Math.max(90, updates.fontSizeScale));
    }
    if (typeof updates.highContrast === 'boolean') allowed.highContrast = updates.highContrast;
    if (typeof updates.dyslexiaSpacing === 'boolean') allowed.dyslexiaSpacing = updates.dyslexiaSpacing;
    if (typeof updates.reducedMotion === 'boolean') allowed.reducedMotion = updates.reducedMotion;
    if (typeof updates.alwaysShowCaptions === 'boolean') allowed.alwaysShowCaptions = updates.alwaysShowCaptions;
    if (typeof updates.ttsRate === 'number') allowed.ttsRate = Math.min(2.0, Math.max(0.5, updates.ttsRate));
    if (typeof updates.ttsPitch === 'number') allowed.ttsPitch = Math.min(1.5, Math.max(0.5, updates.ttsPitch));
    if (typeof updates.ttsLang === 'string') allowed.ttsLang = updates.ttsLang;
    if (Array.isArray(updates.customDictionary)) allowed.customDictionary = updates.customDictionary;
    if (Array.isArray(updates.audioBookmarks)) allowed.audioBookmarks = updates.audioBookmarks;
    if (updates.progress && typeof updates.progress === 'object') allowed.progress = updates.progress;

    try {
      const db = await connectToDatabase();
      if (db.isConnected) {
        const updated = await AccessibilityProfileModel.findOneAndUpdate(
          { userId },
          { $set: allowed },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        ).lean();
        return NextResponse.json({ profile: updated, storage: 'mongodb' });
      }
    } catch (err) {
      console.warn('[Accessibility Profile PUT] Falling back to in-memory store:', err);
    }

    const current = memoryProfiles.get(userId) || defaultProfile(userId);
    const merged: ProfileRecord = { ...current, ...allowed, userId };
    memoryProfiles.set(userId, merged);
    return NextResponse.json({ profile: merged, storage: 'memory' });
  } catch (err) {
    console.error('[Accessibility Profile PUT] Error:', err);
    return NextResponse.json({ error: 'Invalid profile update payload' }, { status: 400 });
  }
}
