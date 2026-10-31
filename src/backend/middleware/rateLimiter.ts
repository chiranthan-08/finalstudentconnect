interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Clean up expired rate limit entries every 5 minutes
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Check if a client has exceeded their allowed request limit
 * @param key Identifier (e.g. client IP or email)
 * @param maxRequests Maximum requests allowed within window
 * @param windowMs Window duration in milliseconds (default 60 seconds)
 */
export function checkRateLimit(
  key: string,
  maxRequests: number = 10,
  windowMs: number = 60 * 1000
): { allowed: boolean; remaining: number; resetInSec: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetInSec: Math.ceil(windowMs / 1000) };
  }

  if (entry.count >= maxRequests) {
    const resetInSec = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, resetInSec };
  }

  entry.count += 1;
  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetInSec: Math.ceil((entry.resetAt - now) / 1000),
  };
}
