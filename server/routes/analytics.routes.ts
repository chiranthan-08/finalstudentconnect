import { Router, Request, Response } from 'express';
import { AnalyticsService } from '../../src/backend/services/analyticsService';
import { AnalyticsEventModel } from '../../src/models/AnalyticsEvent';
import { connectToDatabase } from '../../src/lib/mongodb';
import { verifyToken } from '../../src/backend/utils/jwt';

const router = Router();

// Middleware to verify admin token
function requireAdminExpress(req: Request, res: Response, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Admin authentication required.' });
  }

  const token = authHeader.substring(7);
  const decoded = verifyToken(token);
  if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'super_admin')) {
    return res.status(403).json({ success: false, message: 'Forbidden. Admin privileges required.' });
  }

  (req as any).adminUser = decoded;
  next();
}

// POST /api/analytics/events
router.post('/events', async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    const { sessionId, userId, userRole, eventType, pageUrl, pageName, category, metadata } = req.body;

    if (!sessionId || !pageUrl) {
      return res.status(400).json({ success: false, message: 'sessionId and pageUrl are required.' });
    }

    const event = await AnalyticsEventModel.create({
      sessionId,
      userId,
      userRole: userRole || 'guest',
      eventType: eventType || 'page_view',
      pageUrl,
      pageName: pageName || 'Student Connect',
      category: category || 'General',
      metadata: metadata || {},
      ipAddress: req.ip || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
    });

    return res.status(201).json({ success: true, eventId: event._id.toString() });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Analytics event error' });
  }
});

// GET /api/admin/analytics/overview
router.get('/overview', requireAdminExpress, async (req: Request, res: Response) => {
  try {
    const period = (req.query.period as any) || 'last_30_days';
    const startDate = req.query.startDate as string;
    const endDate = req.query.endDate as string;

    const result = await AnalyticsService.getOverviewKPIs({
      period,
      startDate,
      endDate,
    });

    return res.json({ success: true, ...result });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Error fetching analytics overview' });
  }
});

// GET /api/admin/analytics/trends
router.get('/trends', requireAdminExpress, async (req: Request, res: Response) => {
  try {
    const days = Number(req.query.days) || 7;
    const trends = await AnalyticsService.getChartTrends(days);
    return res.json({ success: true, trends });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Error fetching chart trends' });
  }
});

export default router;
