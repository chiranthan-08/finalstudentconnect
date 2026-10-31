import { Router, Request, Response } from 'express';
import { CourseService } from '../../src/backend/services/courseService';
import { verifyToken } from '../../src/backend/utils/jwt';

const router = Router();

// GET /api/courses
router.get('/', async (_req: Request, res: Response) => {
  try {
    const courses = await CourseService.getCourses();
    return res.json({ success: true, courses });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/courses/enroll
router.post('/enroll', async (req: Request, res: Response) => {
  try {
    const { courseId, userId, userEmail } = req.body;
    if (!courseId) {
      return res.status(400).json({ success: false, message: 'courseId is required.' });
    }

    let resolvedUserId = userId;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const decoded = verifyToken(authHeader.substring(7));
      if (decoded) resolvedUserId = decoded.userId;
    }

    if (!resolvedUserId) {
      resolvedUserId = 'guest_' + Date.now();
    }

    const result = await CourseService.enroll(resolvedUserId, courseId, userEmail);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/courses/progress
router.post('/progress', async (req: Request, res: Response) => {
  try {
    const { userId, courseId, lessonId, totalLessons } = req.body;
    if (!userId || !courseId || !lessonId) {
      return res.status(400).json({ success: false, message: 'userId, courseId, and lessonId are required.' });
    }

    const result = await CourseService.updateProgress(
      userId,
      courseId,
      lessonId,
      Number(totalLessons) || 10
    );
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
