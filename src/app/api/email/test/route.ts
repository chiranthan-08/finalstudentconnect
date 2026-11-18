import { NextRequest, NextResponse } from 'next/server';
import {
  isGmailSmtpConfigured,
  sendRegistrationWelcomeEmail,
  sendPremiumUpgradeEmail,
} from '@/lib/emailService';

export async function GET() {
  return NextResponse.json({
    gmailSmtpConfigured: isGmailSmtpConfigured(),
    gmailUser: process.env.GMAIL_USER || process.env.SMTP_USER || null,
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || '465',
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const to = (body.email || process.env.GMAIL_USER || process.env.SMTP_USER || '').trim();
    const type = body.type === 'premium' ? 'premium' : 'welcome';

    if (!to) {
      return NextResponse.json(
        { success: false, message: 'Provide an email address in the request body or set GMAIL_USER in .env.local.' },
        { status: 400 }
      );
    }

    const result =
      type === 'premium'
        ? await sendPremiumUpgradeEmail({
            to,
            name: body.name || 'StudentConnect User',
            planName: 'StudentConnect Pro (Monthly)',
            amountINR: 199,
            paymentId: 'pay_test_' + Date.now(),
            validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          })
        : await sendRegistrationWelcomeEmail({
            to,
            name: body.name || 'StudentConnect User',
            role: 'student',
            college: 'Karnataka Engineering College',
          });

    return NextResponse.json({
      success: result.emailSent,
      type,
      to,
      ...result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Test email failed';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
