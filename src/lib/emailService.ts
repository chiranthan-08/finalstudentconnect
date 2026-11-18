import nodemailer from 'nodemailer';

export interface EmailSendResult {
  emailSent: boolean;
  provider: 'GMAIL_SMTP' | 'CUSTOM_SMTP' | 'NONE';
  messageId?: string;
  error?: string;
}

function getSmtpConfig() {
  const user = (process.env.GMAIL_USER || process.env.SMTP_USER || '').trim();
  // Automatically remove spaces from Google's 16-character App Password (e.g. "abcd efgh ijkl mnop")
  const rawPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || '';
  const pass = rawPass.replace(/\s+/g, '').trim();
  const host = (process.env.SMTP_HOST || (user ? 'smtp.gmail.com' : '')).trim();
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;

  return { host, port, user, pass };
}

export function isGmailSmtpConfigured(): boolean {
  const { host, user, pass } = getSmtpConfig();
  return Boolean(host && user && pass && !pass.includes('your_app_specific_password'));
}

export async function sendMailViaSmtp(options: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<EmailSendResult> {
  const { host, port, user, pass } = getSmtpConfig();

  if (!host || !user || !pass || pass.includes('your_app_specific_password')) {
    return {
      emailSent: false,
      provider: 'NONE',
      error: 'Gmail SMTP is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD in .env.local.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM_SMTP || `"StudentConnect" <${user}>`,
      to: options.to.trim().toLowerCase(),
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    const provider = host.includes('gmail') ? 'GMAIL_SMTP' : 'CUSTOM_SMTP';
    console.log(`[EmailService] Sent "${options.subject}" to ${options.to} via ${provider} (${info.messageId})`);

    return {
      emailSent: true,
      provider,
      messageId: info.messageId,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown SMTP error';
    console.error('[EmailService] SMTP Delivery Failed:', message);
    return {
      emailSent: false,
      provider: host.includes('gmail') ? 'GMAIL_SMTP' : 'CUSTOM_SMTP',
      error: message,
    };
  }
}

/**
 * 1. Account Registration & Verification Welcome Email
 */
export async function sendRegistrationWelcomeEmail(params: {
  to: string;
  name: string;
  role?: string;
  college?: string;
  verificationCode?: string;
}): Promise<EmailSendResult> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const code = params.verificationCode || `SC-${Math.floor(100000 + Math.random() * 900000)}`;
  const roleLabel = (params.role || 'student').replace('_', ' ').toUpperCase();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 28px 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800;">Welcome to StudentConnect!</h1>
        <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.92;">Karnataka Inclusive Engineering & Learning Ecosystem</p>
      </div>
      <div style="padding: 32px 24px; color: #1e293b;">
        <h2 style="margin: 0 0 12px; font-size: 18px;">Hello ${params.name}, your account is created!</h2>
        <p style="margin: 0 0 16px; font-size: 14px; color: #475569; line-height: 1.6;">
          Thank you for registering on <strong>StudentConnect</strong> as a <strong>${roleLabel}</strong>${params.college ? ` (${params.college})` : ''}.
          Your registered email address is <strong>${params.to}</strong>.
        </p>

        <div style="background: #f8fafc; border: 2px dashed #93c5fd; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700;">Account Verification Code</div>
          <div style="font-family: monospace; font-size: 30px; font-weight: 900; letter-spacing: 5px; color: #1d4ed8; margin-top: 6px;">${code}</div>
          <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">Keep this confirmation for your StudentConnect account records.</p>
        </div>

        <div style="text-align: center; margin: 24px 0;">
          <a href="${appUrl}/accessibility" style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 10px;">
            Explore StudentConnect &amp; Accessibility Hub
          </a>
        </div>

        <p style="margin: 0; font-size: 12px; color: #64748b;">
          If you did not create this account, please ignore this message.
        </p>
      </div>
      <div style="background: #f1f5f9; padding: 14px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
        StudentConnect • One Platform. Every Student. Equal Learning Opportunities.
      </div>
    </div>
  `;

  return sendMailViaSmtp({
    to: params.to,
    subject: `Welcome to StudentConnect — Account Verification (${code})`,
    html,
    text: `Welcome to StudentConnect, ${params.name}! Your account (${params.to}) has been created. Verification Code: ${code}. Visit ${appUrl}`,
  });
}

/**
 * 2. Premium / Pro Upgrade Confirmation & Receipt Email
 */
export async function sendPremiumUpgradeEmail(params: {
  to: string;
  name?: string;
  planName: string;
  amountINR: number;
  paymentId: string;
  validUntil: Date;
}): Promise<EmailSendResult> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const displayName = params.name || params.to.split('@')[0];
  const expiryStr = params.validUntil.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #059669, #0d9488); padding: 28px 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800;">🎉 Premium Upgrade Confirmed!</h1>
        <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.95;">StudentConnect Pro Membership Activated</p>
      </div>
      <div style="padding: 32px 24px; color: #1e293b;">
        <h2 style="margin: 0 0 12px; font-size: 18px;">Congratulations, ${displayName}!</h2>
        <p style="margin: 0 0 20px; font-size: 14px; color: #475569; line-height: 1.6;">
          Your upgrade to <strong>${params.planName}</strong> is now active. You now have full premium access across StudentConnect, verified certificates, priority mentor guidance, and uncapped AI learning tools.
        </p>

        <table style="width: 100%; border-collapse: collapse; background: #f8fafc; border-radius: 12px; overflow: hidden; margin: 20px 0; font-size: 13px;">
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">Plan Activated</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; text-align: right;">${params.planName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">Amount Paid</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 800; color: #059669; text-align: right;">₹${params.amountINR.toLocaleString('en-IN')} INR</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">Transaction / Order ID</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-family: monospace; text-align: right;">${params.paymentId}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; color: #64748b;">Active Until</td>
            <td style="padding: 12px 16px; font-weight: 700; text-align: right;">${expiryStr}</td>
          </tr>
        </table>

        <div style="text-align: center; margin: 24px 0;">
          <a href="${appUrl}/courses" style="display: inline-block; background: #059669; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 10px;">
            Start Learning with Premium Access
          </a>
        </div>
      </div>
      <div style="background: #f1f5f9; padding: 14px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
        StudentConnect Billing &amp; Subscriptions • Thank you for supporting inclusive education!
      </div>
    </div>
  `;

  return sendMailViaSmtp({
    to: params.to,
    subject: `🎉 StudentConnect Premium Activated — ${params.planName} (₹${params.amountINR})`,
    html,
    text: `Congratulations ${displayName}! Your upgrade to ${params.planName} (₹${params.amountINR}) is active until ${expiryStr}. Transaction ID: ${params.paymentId}.`,
  });
}
