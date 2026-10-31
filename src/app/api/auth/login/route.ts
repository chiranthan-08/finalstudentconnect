import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/backend/services/authService';
import { checkRateLimit } from '@/backend/middleware/rateLimiter';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'local_ip';
    const rateCheck = checkRateLimit(`login_${ip}`, 15, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, message: `Too many login attempts. Please retry in ${rateCheck.resetInSec}s.` },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { email, password } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email address is required.' },
        { status: 400 }
      );
    }

    const sessionId = req.headers.get('x-session-id') || 'sess_' + Date.now();
    const result = await AuthService.login(email, password, sessionId, {
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 401 });
    }

    const response = NextResponse.json(result);
    response.cookies.set('sc_token', result.token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Internal login error' },
      { status: 500 }
    );
  }
}
