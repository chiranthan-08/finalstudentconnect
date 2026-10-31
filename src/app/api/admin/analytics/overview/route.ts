import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/backend/middleware/authMiddleware';
import { AnalyticsService } from '@/backend/services/analyticsService';

export async function GET(req: NextRequest) {
  const auth = requireAdmin(req);
  if ('errorResponse' in auth) return auth.errorResponse;

  try {
    const { searchParams } = new URL(req.url);
    const period = (searchParams.get('period') as any) || 'last_30_days';
    const startDate = searchParams.get('startDate') || undefined;
    const endDate = searchParams.get('endDate') || undefined;

    const result = await AnalyticsService.getOverviewKPIs({
      period,
      startDate,
      endDate,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching analytics overview' },
      { status: 500 }
    );
  }
}
