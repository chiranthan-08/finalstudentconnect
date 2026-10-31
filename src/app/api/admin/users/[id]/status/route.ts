import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/backend/middleware/authMiddleware';
import { AdminService } from '@/backend/services/adminService';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(req);
  if ('errorResponse' in auth) return auth.errorResponse;

  try {
    const { id } = await params;
    const { status } = await req.json();

    if (status !== 'active' && status !== 'suspended') {
      return NextResponse.json(
        { success: false, message: 'Status must be "active" or "suspended".' },
        { status: 400 }
      );
    }

    const result = await AdminService.updateUserStatus(id, status, {
      id: auth.user.userId,
      email: auth.user.email,
      ip: req.headers.get('x-forwarded-for') || undefined,
      ua: req.headers.get('user-agent') || undefined,
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error updating user status' },
      { status: 500 }
    );
  }
}
