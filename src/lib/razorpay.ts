import Razorpay from 'razorpay';
import crypto from 'crypto';

// Initialize Razorpay server instance
export function getRazorpayClient(): Razorpay | null {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret || keyId.includes('placeholder')) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export function isRazorpayConfigured(): boolean {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  return Boolean(keyId && keySecret && !keyId.includes('placeholder') && !keySecret.includes('placeholder'));
}

export function getRazorpayKeyId(): string {
  return process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder_key';
}

/**
 * Verify Razorpay payment signature
 * HMAC SHA256 of (order_id + '|' + payment_id) with key_secret
 */
export function verifyRazorpaySignature(params: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret || keySecret.includes('placeholder')) {
    // In simulated sandbox mode without live keys, permit testing
    return true;
  }

  const generatedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${params.orderId}|${params.paymentId}`)
    .digest('hex');

  return generatedSignature === params.signature;
}

/**
 * Verify Razorpay webhook signature
 */
export function verifyRazorpayWebhookSignature(
  rawBody: string,
  signature: string,
  webhookSecret?: string
): boolean {
  const secret = webhookSecret || process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret || secret.includes('placeholder')) {
    return true; // Allow local test payloads
  }

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  return expectedSignature === signature;
}
