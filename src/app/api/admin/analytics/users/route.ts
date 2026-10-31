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

    const userMetrics = {
      totalRegisteredUsers: overview.kpis.totalRegisteredUsers,
      newRegistrationsToday: overview.kpis.newRegistrationsToday,
      newRegistrationsThisWeek: overview.kpis.newRegistrationsThisWeek,
      newRegistrationsThisMonth: overview.kpis.newRegistrationsThisMonth,
      dailyActiveUsers: overview.kpis.dailyActiveUsers,
      weeklyActiveUsers: overview.kpis.weeklyActiveUsers,
      monthlyActiveUsers: overview.kpis.monthlyActiveUsers,
      returningUsers: overview.kpis.returningUsers,
    };

    return NextResponse.json({ success: true, period, userMetrics });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching user analytics' },
      { status: 500 }
    );
  }
}
