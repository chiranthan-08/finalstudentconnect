import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/backend/services/paymentService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = body;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return NextResponse.json(
        { success: false, message: 'razorpay_order_id and razorpay_payment_id are required' },
        { status: 400 }
      );
    }

    const verificationResult = await PaymentService.verifyRazorpayPayment({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature || 'simulated_signature',
      userId,
    });

    if (!verificationResult.success) {
      return NextResponse.json(verificationResult, { status: 400 });
    }

    return NextResponse.json(verificationResult);
  } catch (error: any) {
    console.error('[Razorpay verify error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error verifying Razorpay payment' },
      { status: 500 }
    );
  }
}
