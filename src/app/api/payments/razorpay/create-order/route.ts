import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/backend/services/paymentService';
import { getAuthUser } from '@/backend/middleware/authMiddleware';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, planName, amountINR, itemType, itemId, guestUser } = body;

    if (!amountINR || amountINR <= 0) {
      return NextResponse.json(
        { success: false, message: 'Valid amountINR is required.' },
        { status: 400 }
      );
    }

    // Attempt JWT extraction, fallback to guest/provided student data
    const auth = getAuthUser(req);
    const userId = auth?.userId || guestUser?.id || `student_${Date.now()}`;
    const userEmail = auth?.email || guestUser?.email || 'student@rvce.edu.in';

    const orderData = await PaymentService.createRazorpayOrder({
      userId,
      userEmail,
      amountINR: Number(amountINR),
      plan: plan || 'pro_student',
      planName: planName || 'Karnataka Student Pro Access',
      itemType: itemType || 'subscription',
      itemId,
    });

    return NextResponse.json(orderData);
  } catch (error: any) {
    console.error('[Razorpay create-order error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error creating Razorpay order' },
      { status: 500 }
    );
  }
}
