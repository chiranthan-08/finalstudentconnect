import { NextRequest, NextResponse } from 'next/server';
import { SportsService } from '@/backend/services/sportsService';

export async function POST(req: NextRequest) {
  try {
    const { sportsId, sportTitle, outboundUrl, userId, sessionId } = await req.json();

    if (!sportsId || !outboundUrl) {
      return NextResponse.json(
        { success: false, message: 'sportsId and outboundUrl are required' },
        { status: 400 }
      );
    }

    const result = await SportsService.trackReferralClick({
      sportsId,
      sportTitle: sportTitle || 'Sports Competition',
      outboundUrl,
      userId,
      sessionId: sessionId || req.headers.get('x-session-id') || 'sess_' + Date.now(),
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error tracking sports referral click' },
      { status: 500 }
    );
  }
}
