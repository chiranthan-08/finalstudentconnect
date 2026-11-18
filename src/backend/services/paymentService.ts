import { connectToDatabase } from '@/lib/mongodb';
import { PaymentModel, SubscriptionModel, UserModel, AnalyticsEventModel } from '@/models';
import { sendPremiumUpgradeEmail } from '@/lib/emailService';

export interface CreatePaymentIntentInput {
  userId: string;
  userEmail: string;
  plan: 'pro_student' | 'placement_pass' | 'institution_access';
  planName: string;
  amountINR: number;
  provider?: 'upi_gateway' | 'razorpay' | 'cashfree' | 'stripe' | 'test_gateway';
}

export class PaymentService {
  /**
   * Create a pending payment record with idempotency key
   */
  static async createPaymentIntent(input: CreatePaymentIntentInput) {
    await connectToDatabase();
    const paymentId = 'pay_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);

    const payment = await PaymentModel.create({
      paymentId,
      userId: input.userId,
      userEmail: input.userEmail.toLowerCase(),
      plan: input.plan,
      amountINR: input.amountINR,
      currency: 'INR',
      status: 'pending',
      provider: input.provider || 'upi_gateway',
      webhookVerified: false,
      refundStatus: 'none',
      metadata: { planName: input.planName },
    });

    return {
      success: true,
      paymentId: payment.paymentId,
      amountINR: payment.amountINR,
      status: payment.status,
    };
  }

  /**
   * Verify payment from provider webhook with idempotency check
   */
  static async processWebhook(data: {
    paymentId: string;
    providerTransactionId: string;
    verified: boolean;
    provider: any;
  }) {
    await connectToDatabase();

    const payment = await PaymentModel.findOne({ paymentId: data.paymentId });
    if (!payment) {
      return { success: false, message: 'Payment record not found' };
    }

    // Idempotency: prevent re-processing already verified payments
    if (payment.status === 'verified_success') {
      return { success: true, message: 'Payment already verified (idempotent)', paymentId: payment.paymentId };
    }

    if (!data.verified) {
      payment.status = 'failed';
      await payment.save();
      return { success: false, message: 'Payment verification failed' };
    }

    // 1. Mark payment as verified
    payment.status = 'verified_success';
    payment.webhookVerified = true;
    payment.providerTransactionId = data.providerTransactionId;
    payment.paidAt = new Date();
    await payment.save();

    // 2. Create or extend Subscription record
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(now.getDate() + 30); // 30-day access

    const subscription = await SubscriptionModel.create({
      userId: payment.userId,
      userEmail: payment.userEmail,
      plan: payment.plan as any,
      planName: payment.metadata?.planName || 'Karnataka Student Pro Plan',
      status: 'active',
      priceINR: payment.amountINR,
      startDate: now,
      endDate,
      renewalDate: endDate,
      paymentId: payment.paymentId,
    });

    // 3. Update User subscriptionStatus in MongoDB
    const updatedUser = await UserModel.findByIdAndUpdate(
      payment.userId,
      { subscriptionStatus: 'premium' },
      { new: true }
    ).catch(() => null);

    // 4. Send Premium Upgrade Confirmation Email via Gmail SMTP
    const emailResult = await sendPremiumUpgradeEmail({
      to: payment.userEmail,
      name: updatedUser?.name,
      planName: subscription.planName,
      amountINR: payment.amountINR,
      paymentId: payment.providerTransactionId || payment.paymentId,
      validUntil: endDate,
    }).catch((err) => ({
      emailSent: false,
      provider: 'NONE' as const,
      error: err?.message || 'Failed to dispatch premium confirmation email',
    }));

    // 5. Log conversion & revenue analytics event
    await AnalyticsEventModel.create({
      sessionId: 'session_' + payment.userId,
      userId: payment.userId,
      eventType: 'conversion_register',
      pageUrl: '/premium',
      pageName: 'Verified Premium Subscription',
      category: 'Revenue',
      metadata: {
        paymentId: payment.paymentId,
        amountINR: payment.amountINR,
        plan: payment.plan,
        subscriptionId: subscription._id.toString(),
      },
    }).catch(() => {});

    return {
      success: true,
      message: 'Payment verified and premium subscription activated',
      subscriptionId: subscription._id.toString(),
      paymentId: payment.paymentId,
      emailNotification: emailResult,
    };
  }

  /**
   * Create Razorpay order and register pending payment
   */
  static async createRazorpayOrder(input: {
    userId: string;
    userEmail: string;
    amountINR: number;
    plan: string;
    planName: string;
    itemType?: 'subscription' | 'course' | 'mentor_session';
    itemId?: string;
  }) {
    await connectToDatabase();
    const { getRazorpayClient, getRazorpayKeyId, isRazorpayConfigured } = await import('@/lib/razorpay');

    const razorpay = getRazorpayClient();
    const isConfigured = isRazorpayConfigured();
    const keyId = getRazorpayKeyId();
    const amountInPaise = Math.round(input.amountINR * 100);

    let razorpayOrderId: string;

    if (razorpay && isConfigured) {
      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt: `rcpt_${Date.now().toString(36)}`,
        notes: {
          userId: input.userId,
          userEmail: input.userEmail,
          plan: input.plan,
          itemType: input.itemType || 'subscription',
          itemId: input.itemId || '',
        },
      });
      razorpayOrderId = order.id;
    } else {
      // Development simulated order if keys are not yet configured
      razorpayOrderId = `order_sim_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    }

    // Register pending transaction in MongoDB
    const payment = await PaymentModel.create({
      paymentId: razorpayOrderId,
      userId: input.userId,
      userEmail: input.userEmail.toLowerCase(),
      plan: input.plan,
      amountINR: input.amountINR,
      currency: 'INR',
      status: 'pending',
      provider: 'razorpay',
      webhookVerified: false,
      refundStatus: 'none',
      metadata: {
        planName: input.planName,
        itemType: input.itemType || 'subscription',
        itemId: input.itemId || '',
        isSandbox: !isConfigured,
      },
    });

    return {
      success: true,
      orderId: razorpayOrderId,
      amount: amountInPaise,
      amountINR: input.amountINR,
      currency: 'INR',
      keyId,
      isSandbox: !isConfigured,
      paymentId: payment.paymentId,
    };
  }

  /**
   * Cryptographically verify Razorpay payment and activate student entitlement
   */
  static async verifyRazorpayPayment(data: {
    orderId: string;
    paymentId: string;
    signature: string;
    userId?: string;
  }) {
    await connectToDatabase();
    const { verifyRazorpaySignature } = await import('@/lib/razorpay');

    const isValidSignature = verifyRazorpaySignature({
      orderId: data.orderId,
      paymentId: data.paymentId,
      signature: data.signature,
    });

    if (!isValidSignature) {
      await PaymentModel.findOneAndUpdate(
        { paymentId: data.orderId },
        { status: 'failed', providerTransactionId: data.paymentId }
      );
      return { success: false, message: 'Invalid payment signature' };
    }

    // Call standard processWebhook logic with verified status
    return this.processWebhook({
      paymentId: data.orderId,
      providerTransactionId: data.paymentId,
      verified: true,
      provider: 'razorpay',
    });
  }
}
