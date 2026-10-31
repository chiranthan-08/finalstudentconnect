import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/backend/middleware/authMiddleware';
import { AdminService } from '@/backend/services/adminService';

export async function GET(req: NextRequest) {
  const auth = requireAdmin(req);
  if ('errorResponse' in auth) return auth.errorResponse;

  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    const result = await AdminService.getSubscriptions(page, limit);
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching subscriptions' },
      { status: 500 }
    );
  }
}
