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

    const courseMetrics = {
      totalCourseEnrolments: overview.kpis.totalCourseEnrolments,
      activeLearners: overview.kpis.activeLearners,
      completedCourses: overview.kpis.completedCourses,
      completionRatePercent: overview.kpis.completionRatePercent,
    };

    return NextResponse.json({ success: true, period, courseMetrics });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching course analytics' },
      { status: 500 }
    );
  }
}
