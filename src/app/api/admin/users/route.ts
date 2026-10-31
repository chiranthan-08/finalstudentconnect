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
    const search = searchParams.get('search') || undefined;
    const role = searchParams.get('role') || undefined;
    const status = searchParams.get('status') || undefined;

    const result = await AdminService.getUsers({
      page,
      limit,
      search,
      role,
      status,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching users list' },
      { status: 500 }
    );
  }
}
