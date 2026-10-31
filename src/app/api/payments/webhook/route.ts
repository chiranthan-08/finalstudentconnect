import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/backend/services/paymentService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { paymentId, providerTransactionId, verified = true, provider } = body;

    if (!paymentId) {
      return NextResponse.json({ success: false, message: 'paymentId is required' }, { status: 400 });
    }

    const result = await PaymentService.processWebhook({
      paymentId,
      providerTransactionId: providerTransactionId || 'txn_' + Date.now(),
      verified: !!verified,
      provider: provider || 'upi_gateway',
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error processing payment webhook' },
      { status: 500 }
    );
  }
}
