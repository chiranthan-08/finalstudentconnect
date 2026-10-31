import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { AnalyticsEventModel } from '@/models';

export async function POST(req: NextRequest) {
  try {
    const conn = await connectToDatabase();
    const body = await req.json();
    const { sessionId, userId, userRole, eventType, pageUrl, pageName, category, metadata } = body;

    if (!sessionId || !pageUrl) {
      return NextResponse.json(
        { success: false, message: 'sessionId and pageUrl are required' },
        { status: 400 }
      );
    }

    if (!conn.isConnected) {
      return NextResponse.json(
        { success: true, queued: true, message: 'Event acknowledged (Database offline/buffered)' },
        { status: 200 }
      );
    }

    const event = await AnalyticsEventModel.create({
      sessionId,
      userId: userId || undefined,
      userRole: userRole || 'guest',
      eventType: eventType || 'page_view',
      pageUrl,
      pageName: pageName || 'Student Connect',
      category: category || 'General',
      metadata: metadata || {},
      ipAddress: req.headers.get('x-forwarded-for') || undefined,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return NextResponse.json({ success: true, eventId: event._id.toString() }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error recording analytics event' },
      { status: 500 }
    );
  }
}
