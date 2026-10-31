import { Router, Request, Response } from 'express';
import { AuthService } from '../../src/backend/services/authService';
import { checkRateLimit } from '../../src/backend/middleware/rateLimiter';
import { verifyToken } from '../../src/backend/utils/jwt';

const router = Router();

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(`register_${ip}`, 10, 60000);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        success: false,
        message: `Too many registration attempts. Please try again in ${rateCheck.resetInSec}s.`,
      });
    }

    const { name, email, password, role, college, branch, usn, year, skills, bio } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    const result = await AuthService.register({
      name,
      email,
      password,
      role,
      college,
      branch,
      usn,
      year,
      skills,
      bio,
      sessionId: (req.headers['x-session-id'] as string) || 'sess_' + Date.now(),
      ipAddress: ip,
      userAgent: req.headers['user-agent'],
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Server error' });
  }
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(`login_${ip}`, 15, 60000);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        success: false,
        message: `Too many login attempts. Please try again in ${rateCheck.resetInSec}s.`,
      });
    }

    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address is required.' });
    }

    const sessionId = (req.headers['x-session-id'] as string) || 'sess_' + Date.now();
    const result = await AuthService.login(email, password, sessionId, {
      ipAddress: ip,
      userAgent: req.headers['user-agent'],
    });

    if (!result.success) {
      return res.status(401).json(result);
    }

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Server error' });
  }
});

// GET /api/auth/me
router.get('/me', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }

    const user = await AuthService.getMe(decoded.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, user });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || 'Server error' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req: Request, res: Response) => {
  return res.json({ success: true, message: 'Successfully signed out' });
});

export default router;
