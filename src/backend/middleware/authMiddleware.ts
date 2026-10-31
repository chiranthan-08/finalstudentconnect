import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, TokenPayload } from '../utils/jwt';
import { UserRole } from '@/types';

/**
 * Extract and verify JWT token from NextRequest
 */
export function getAuthUser(req: NextRequest | Request): TokenPayload | null {
  const authHeader = req.headers.get('authorization');
  let token = '';

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else {
    // Check cookie fallback if present
    const cookieHeader = req.headers.get('cookie');
    if (cookieHeader) {
      const match = cookieHeader.match(/sc_token=([^;]+)/);
      if (match) token = match[1];
    }
  }

  if (!token) return null;
  return verifyToken(token);
}

/**
 * Require valid authentication for Next.js App Router API route
 */
export function requireAuth(req: NextRequest | Request): { user: TokenPayload } | { errorResponse: NextResponse } {
  const user = getAuthUser(req);
  if (!user) {
    return {
      errorResponse: NextResponse.json(
        { success: false, message: 'Authentication required. Please sign in.' },
        { status: 401 }
      ),
    };
  }
  return { user };
}

/**
 * Require specific role or administrator privileges
 */
export function requireRole(
  req: NextRequest | Request,
  allowedRoles: UserRole[]
): { user: TokenPayload } | { errorResponse: NextResponse } {
  const authResult = requireAuth(req);
  if ('errorResponse' in authResult) return authResult;

  const { user } = authResult;
  if (!allowedRoles.includes(user.role) && user.role !== 'super_admin') {
    return {
      errorResponse: NextResponse.json(
        { success: false, message: 'Forbidden. You lack sufficient permissions to perform this action.' },
        { status: 403 }
      ),
    };
  }

  return { user };
}

/**
 * Require Admin or Super Admin role
 */
export function requireAdmin(req: NextRequest | Request) {
  return requireRole(req, ['admin', 'super_admin']);
}

export async function requireAdminFromRequest(req: NextRequest | Request) {
  const auth = requireAdmin(req);
  if ('errorResponse' in auth) {
    return { authenticated: false, error: 'Unauthorized administrator access' };
  }
  return { authenticated: true, user: auth.user };
}

