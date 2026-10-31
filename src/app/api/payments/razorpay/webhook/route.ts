import { NextRequest, NextResponse } from 'next/server';
import { verifyRazorpayWebhookSignature } from '@/lib/razorpay';
import { PaymentService } from '@/backend/services/paymentService';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature') || '';

    const isValid = verifyRazorpayWebhookSignature(rawBody, signature);
    if (!isValid) {
      return NextResponse.json({ success: false, message: 'Invalid webhook signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === 'payment.captured' || event.event === 'order.paid') {
      const paymentEntity = event.payload?.payment?.entity;
      const orderId = paymentEntity?.order_id;
      const paymentId = paymentEntity?.id;

      if (orderId && paymentId) {
        await PaymentService.processWebhook({
          paymentId: orderId,
          providerTransactionId: paymentId,
          verified: true,
          provider: 'razorpay',
        });
      }
    }

    return NextResponse.json({ status: 'ok', received: true });
  } catch (error: any) {
    console.error('[Razorpay webhook error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error processing webhook' },
      { status: 500 }
    );
  }
}
