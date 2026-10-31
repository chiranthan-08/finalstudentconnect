import { Router, Request, Response } from 'express';
import { AdminService } from '../../src/backend/services/adminService';
import { getDatabaseStatus } from '../../src/lib/mongodb';
import { verifyToken } from '../../src/backend/utils/jwt';

const router = Router();

function requireAdmin(req: Request, res: Response, next: any) {
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

router.use(requireAdmin);

// GET /api/admin/users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const { page, limit, search, role, status } = req.query;
    const result = await AdminService.getUsers({
      page: Number(page),
      limit: Number(limit),
      search: search as string,
      role: role as string,
      status: status as string,
    });
    return res.json({ success: true, ...result });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/admin/users/:id/status
router.patch('/users/:id/status', async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    if (status !== 'active' && status !== 'suspended') {
      return res.status(400).json({ success: false, message: 'Status must be active or suspended.' });
    }

    const admin = (req as any).adminUser;
    const result = await AdminService.updateUserStatus(String(req.params.id), status, {
      id: admin.userId,
      email: admin.email,
      ip: req.ip,
      ua: req.headers['user-agent'],
    });

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/admin/users/:id/role
router.patch('/users/:id/role', async (req: Request, res: Response) => {
  try {
    const { role } = req.body;
    if (!role) {
      return res.status(400).json({ success: false, message: 'Role is required.' });
    }

    const admin = (req as any).adminUser;
    const result = await AdminService.updateUserRole(String(req.params.id), role, {
      id: admin.userId,
      email: admin.email,
      ip: req.ip,
      ua: req.headers['user-agent'],
    });

    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/admin/subscriptions
router.get('/subscriptions', async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await AdminService.getSubscriptions(page, limit);
    return res.json({ success: true, ...result });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/admin/audit-logs
router.get('/audit-logs', async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 15;
    const search = req.query.search as string;
    const result = await AdminService.getAuditLogs(page, limit, search);
    return res.json({ success: true, ...result });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/admin/database-status
router.get('/database-status', async (_req: Request, res: Response) => {
  const status = getDatabaseStatus();
  return res.json({ success: true, database: status });
});

export default router;
