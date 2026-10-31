import { Router, Request, Response } from 'express';
import { SportsService } from '../../src/backend/services/sportsService';

const router = Router();

// GET /api/sports
router.get('/', async (_req: Request, res: Response) => {
  try {
    const opportunities = await SportsService.getOpportunities();
    return res.json({ success: true, opportunities });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/sports/track
router.post('/track', async (req: Request, res: Response) => {
  try {
    const { sportsId, sportTitle, outboundUrl, userId, sessionId } = req.body;
    if (!sportsId || !outboundUrl) {
      return res.status(400).json({ success: false, message: 'sportsId and outboundUrl are required.' });
    }

    const result = await SportsService.trackReferralClick({
      sportsId,
      sportTitle: sportTitle || 'Sports Competition',
      outboundUrl,
      userId,
      sessionId: sessionId || 'sess_' + Date.now(),
    });

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
