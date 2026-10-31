import { NextRequest, NextResponse } from 'next/server';
import { requireAdminFromRequest } from '@/backend/middleware/authMiddleware';
import { AnalyticsService } from '@/backend/services/analyticsService';

export async function GET(req: NextRequest) {
  try {
    const authCheck = await requireAdminFromRequest(req);
    if (!authCheck.authenticated) {
      return NextResponse.json(
        { success: false, message: authCheck.error || 'Administrator access required' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const period = (searchParams.get('period') as any) || 'last_30_days';
    const overview = await AnalyticsService.getOverviewKPIs({ period });

    const engagementMetrics = {
      totalPageViews: overview.kpis.totalPageViews,
      uniqueVisitors: overview.kpis.uniqueVisitors,
      chatbotSessions: overview.kpis.chatbotSessions,
      chatbotInteractions: overview.kpis.chatbotInteractions,
      avgChatbotLatencyMs: overview.kpis.avgChatbotLatencyMs,
      sportsOpportunitiesViewed: overview.kpis.sportsOpportunitiesViewed,
      sportsRegistrationClicks: overview.kpis.sportsRegistrationClicks,
    };

    return NextResponse.json({ success: true, period, engagementMetrics });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching engagement analytics' },
      { status: 500 }
    );
  }
}
