import { NextRequest, NextResponse } from 'next/server';
import { requireAdminFromRequest } from '@/backend/middleware/authMiddleware';
import { connectToDatabase } from '@/lib/mongodb';
import { AnalyticsEventModel } from '@/models';

export async function GET(req: NextRequest) {
  try {
    const authCheck = await requireAdminFromRequest(req);
    if (!authCheck.authenticated) {
      return NextResponse.json(
        { success: false, message: authCheck.error || 'Administrator access required' },
        { status: 403 }
      );
    }

    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const days = parseInt(searchParams.get('days') || '30', 10);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const featureUsage = await AnalyticsEventModel.aggregate([
      { $match: { createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: {
            category: { $ifNull: ['$category', 'General'] },
            eventType: '$eventType',
          },
          count: { $sum: 1 },
          uniqueSessions: { $addToSet: '$sessionId' },
        },
      },
      {
        $project: {
          category: '$_id.category',
          eventType: '$_id.eventType',
          count: 1,
          uniqueUsers: { $size: '$uniqueSessions' },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 20 },
    ]);

    return NextResponse.json({ success: true, days, featureUsage });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching feature analytics' },
      { status: 500 }
    );
  }
}
