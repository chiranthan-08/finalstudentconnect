import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/backend/middleware/authMiddleware';
import { AuthService } from '@/backend/services/authService';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if ('errorResponse' in auth) return auth.errorResponse;

  const user = await AuthService.getMe(auth.user.userId);
  if (!user) {
    return NextResponse.json({ success: false, message: 'User profile not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, user });
}
