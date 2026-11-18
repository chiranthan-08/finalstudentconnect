import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ClassroomMessageModel } from '@/models/ClassroomMessage';

export interface ClassroomMessageItem {
  _id: string;
  roomId: string;
  senderRole: 'student' | 'teacher';
  senderName: string;
  inputMethod: 'sign_camera' | 'sign_card' | 'aac_speech' | 'text' | 'voice' | 'teacher_reply';
  signEmoji?: string;
  signLanguage?: 'ISL' | 'ASL' | 'CUSTOM';
  confidence?: number;
  message: string;
  teacherReply?: string;
  teacherReplyMode?: 'text' | 'speech' | 'sign_visual';
  resolved: boolean;
  createdAt: string;
}

const seedMessages: ClassroomMessageItem[] = [
  {
    _id: 'msg_seed_1',
    roomId: 'live-math-101',
    senderRole: 'student',
    senderName: 'Aarav (Student)',
    inputMethod: 'sign_camera',
    signEmoji: '❓',
    signLanguage: 'ISL',
    confidence: 94,
    message: "I don't understand this step. Could you please explain it again?",
    teacherReply: 'Of course! Let me break down the base case step by step with a visual diagram on the board.',
    teacherReplyMode: 'sign_visual',
    resolved: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 6).toISOString(),
  },
];

let memoryMessages: ClassroomMessageItem[] = [...seedMessages];

export async function GET(req: NextRequest) {
  const roomId = req.nextUrl.searchParams.get('roomId') || 'live-math-101';

  try {
    const db = await connectToDatabase();
    if (db.isConnected) {
      const docs = await ClassroomMessageModel.find({ roomId })
        .sort({ createdAt: -1 })
        .limit(40)
        .lean();
      if (docs.length > 0) {
        return NextResponse.json({ messages: docs, storage: 'mongodb' });
      }
      // Return seed sample if room is brand new
      return NextResponse.json({
        messages: memoryMessages.filter((m) => m.roomId === roomId),
        storage: 'mongodb',
      });
    }
  } catch (err) {
    console.warn('[Classroom Messages GET] Falling back to memory:', err);
  }

  return NextResponse.json({
    messages: memoryMessages.filter((m) => m.roomId === roomId),
    storage: 'memory',
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const roomId = (body.roomId as string) || 'live-math-101';
    const message = ((body.message as string) || '').trim();
    if (!message) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    const payload = {
      roomId,
      senderRole: body.senderRole === 'teacher' ? ('teacher' as const) : ('student' as const),
      senderName: (body.senderName as string) || 'Student',
      inputMethod: body.inputMethod || 'sign_card',
      signEmoji: body.signEmoji,
      signLanguage: body.signLanguage || 'ISL',
      confidence: typeof body.confidence === 'number' ? body.confidence : undefined,
      message,
      resolved: false,
    };

    try {
      const db = await connectToDatabase();
      if (db.isConnected) {
        const created = await ClassroomMessageModel.create(payload);
        return NextResponse.json({ message: created, storage: 'mongodb' }, { status: 201 });
      }
    } catch (err) {
      console.warn('[Classroom Messages POST] Falling back to memory:', err);
    }

    const item: ClassroomMessageItem = {
      _id: 'msg_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      ...payload,
      createdAt: new Date().toISOString(),
    };
    memoryMessages = [item, ...memoryMessages].slice(0, 60);
    return NextResponse.json({ message: item, storage: 'memory' }, { status: 201 });
  } catch (err) {
    console.error('[Classroom Messages POST] Error:', err);
    return NextResponse.json({ error: 'Failed to send classroom message' }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const id = body.id as string;
    const teacherReply = ((body.teacherReply as string) || '').trim();
    const teacherReplyMode = body.teacherReplyMode || 'text';
    const resolved = typeof body.resolved === 'boolean' ? body.resolved : true;

    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }

    try {
      const db = await connectToDatabase();
      if (db.isConnected && !id.startsWith('msg_')) {
        const updated = await ClassroomMessageModel.findByIdAndUpdate(
          id,
          {
            $set: {
              ...(teacherReply ? { teacherReply, teacherReplyMode } : {}),
              resolved,
            },
          },
          { new: true }
        ).lean();
        if (updated) {
          return NextResponse.json({ message: updated, storage: 'mongodb' });
        }
      }
    } catch (err) {
      console.warn('[Classroom Messages PATCH] Falling back to memory:', err);
    }

    memoryMessages = memoryMessages.map((m) =>
      m._id === id
        ? {
            ...m,
            ...(teacherReply ? { teacherReply, teacherReplyMode } : {}),
            resolved,
          }
        : m
    );
    const updatedItem = memoryMessages.find((m) => m._id === id);
    return NextResponse.json({ message: updatedItem || null, storage: 'memory' });
  } catch (err) {
    console.error('[Classroom Messages PATCH] Error:', err);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const roomId = req.nextUrl.searchParams.get('roomId');

  try {
    const db = await connectToDatabase();
    if (db.isConnected) {
      if (id && !id.startsWith('msg_')) {
        await ClassroomMessageModel.findByIdAndDelete(id);
      } else if (roomId) {
        await ClassroomMessageModel.deleteMany({ roomId });
      }
    }
  } catch (err) {
    console.warn('[Classroom Messages DELETE] Fallback memory delete:', err);
  }

  if (id) {
    memoryMessages = memoryMessages.filter((m) => m._id !== id);
  } else if (roomId) {
    memoryMessages = memoryMessages.filter((m) => m.roomId !== roomId);
  }

  return NextResponse.json({ deleted: true });
}
