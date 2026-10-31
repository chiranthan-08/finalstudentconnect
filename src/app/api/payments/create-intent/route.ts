import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/backend/services/paymentService';
import { getAuthUser } from '@/backend/middleware/authMiddleware';

export async function POST(req: NextRequest) {
  try {
    const { plan, planName, amountINR, provider } = await req.json();

    const auth = getAuthUser(req);
    if (!auth) {
      return NextResponse.json(
        { success: false, message: 'Please sign in to proceed with subscription.' },
        { status: 401 }
      );
    }

    if (!plan || !amountINR) {
      return NextResponse.json(
        { success: false, message: 'plan and amountINR are required.' },
        { status: 400 }
      );
    }

    const result = await PaymentService.createPaymentIntent({
      userId: auth.userId,
      userEmail: auth.email,
      plan,
      planName: planName || 'Karnataka Student Pro Access',
      amountINR: Number(amountINR),
      provider,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error creating payment intent' },
      { status: 500 }
    );
  }
}
