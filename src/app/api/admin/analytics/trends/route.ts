import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/backend/middleware/authMiddleware';
import { AnalyticsService } from '@/backend/services/analyticsService';

export async function GET(req: NextRequest) {
  const auth = requireAdmin(req);
  if ('errorResponse' in auth) return auth.errorResponse;

  try {
    const { searchParams } = new URL(req.url);
    const days = Number(searchParams.get('days')) || 7;

    const trends = await AnalyticsService.getChartTrends(days);
    return NextResponse.json({ success: true, trends });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching chart trends' },
      { status: 500 }
    );
  }
}
