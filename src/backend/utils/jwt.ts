import jwt from 'jsonwebtoken';
import { UserRole } from '@/types';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_studentconnect_2025_karnataka_key';
const JWT_EXPIRES_IN = '7d';

export interface TokenPayload {
  userId: string;
  email: string;
  role: UserRole;
  name: string;
}

/**
 * Generate a signed JWT token
 */
export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}
