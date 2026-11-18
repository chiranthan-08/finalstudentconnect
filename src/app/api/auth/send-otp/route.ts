import { NextResponse } from 'next/server';
import dns from 'dns';
import nodemailer from 'nodemailer';
import { connectToDatabase } from '@/lib/mongodb';
import { OtpVerificationModel } from '@/models/OtpVerification';
import { isGmailSmtpConfigured, sendMailViaSmtp } from '@/lib/emailService';

// In-memory fallback store to ensure zero downtime if local MongoDB server is not running
declare global {
  // eslint-disable-next-line no-var
  var otpMemoryStore: Map<string, {
    otp: string;
    type: string;
    attempts: number;
    maxAttempts: number;
    expiresAt: number;
    isVerified: boolean;
    createdAt: number;
  }> | undefined;
}

if (!globalThis.otpMemoryStore) {
  globalThis.otpMemoryStore = new Map();
}

// RFC 5322 standard regex for email validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    const { email, type = 'google_auth', name } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 1. Validate Email Format
    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address format. Please enter a valid email.' },
        { status: 400 }
      );
    }

    // 2. Validate Domain & Mail Server (MX Record Lookup)
    const domain = cleanEmail.split('@')[1];
    let hasValidMx = true;
    try {
      const mxRecords = await dns.promises.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        hasValidMx = false;
      }
    } catch (dnsErr) {
      // In offline / restricted sandbox environments, DNS may fail.
      // If domain ends with standard domains (gmail.com, edu.in, ac.in, edu), allow it.
      const isKnownDomain = domain === 'gmail.com' || domain.endsWith('.edu.in') || domain.endsWith('.ac.in') || domain.endsWith('.edu') || domain === 'yahoo.com' || domain === 'outlook.com';
      if (!isKnownDomain) {
        hasValidMx = false;
      }
    }

    if (!hasValidMx) {
      return NextResponse.json(
        { success: false, message: `The email domain '@${domain}' does not appear to have active mail routing (MX) records.` },
        { status: 400 }
      );
    }

    // 3. Rate Limiting: Prevent spamming OTP requests (45s cooldown)
    const existingMemoryOtp = globalThis.otpMemoryStore?.get(cleanEmail);
    if (existingMemoryOtp && (Date.now() - existingMemoryOtp.createdAt) < 45000) {
      const waitSeconds = Math.ceil((45000 - (Date.now() - existingMemoryOtp.createdAt)) / 1000);
      return NextResponse.json(
        { success: false, message: `Please wait ${waitSeconds} seconds before requesting a new verification code.` },
        { status: 429 }
      );
    }

    // 4. Generate Secure 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry
    const isGoogle = type === 'google_auth';
    const formattedCode = isGoogle ? `G-${otp}` : `SC-${otp}`;
    const recipientName = name || cleanEmail.split('@')[0];

    // 5. Save OTP to MongoDB (if available) and in-memory fallback
    try {
      const db = await connectToDatabase();
      if (db.isConnected) {
        await OtpVerificationModel.deleteMany({ email: cleanEmail, isVerified: false });
        await OtpVerificationModel.create({
          email: cleanEmail,
          otp,
          type,
          attempts: 0,
          maxAttempts: 5,
          expiresAt,
          isVerified: false
        });
      }
    } catch (dbError) {
      console.warn('MongoDB OTP storage note: Saved in active memory cache.', dbError);
    }

    globalThis.otpMemoryStore?.set(cleanEmail, {
      otp,
      type,
      attempts: 0,
      maxAttempts: 5,
      expiresAt: expiresAt.getTime(),
      isVerified: false,
      createdAt: Date.now()
    });

    // 6. Email Dispatch Logic (Gmail SMTP Priority -> Resend -> Brevo)
    let emailSent = false;
    let providerUsed = 'LOCAL_CODE';
    let deliveryError: string | null = null;

    // Priority Option 1: Gmail SMTP (works for ANY recipient inbox without sandbox restrictions)
    if (isGmailSmtpConfigured()) {
      const smtpResult = await sendMailViaSmtp({
        to: cleanEmail,
        subject: isGoogle
          ? `Google 2-Step Verification Code: ${formattedCode}`
          : `Student Connect Verification Code: ${formattedCode}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 20px;">Student Connect Karnataka</h1>
              <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Secure Identity &amp; Verification System</p>
            </div>
            <div style="padding: 28px 24px;">
              <h2 style="margin: 0 0 10px; font-size: 18px; color: #0f172a;">${isGoogle ? 'Google 2-Step Verification' : 'Email Account Verification'}</h2>
              <p style="margin: 0 0 16px; font-size: 14px; color: #475569;">
                Hello <strong>${recipientName}</strong>,<br/>
                Please use the one-time verification code below to authorize your StudentConnect account:
              </p>
              <div style="background: #f8fafc; border: 2px dashed #93c5fd; border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0;">
                <span style="font-family: monospace; font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #1d4ed8;">${formattedCode}</span>
                <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">Valid for 10 minutes • 5 attempts permitted</p>
              </div>
            </div>
          </div>
        `,
        text: `Hello ${recipientName}, your Student Connect verification code is ${formattedCode}. Valid for 10 minutes.`,
      });

      if (smtpResult.emailSent) {
        emailSent = true;
        providerUsed = smtpResult.provider;
      } else {
        deliveryError = smtpResult.error || 'Gmail SMTP error';
      }
    }

    // Check Option A: Resend API Key (fallback if Gmail SMTP is not configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'Student Connect <onboarding@resend.dev>',
            to: [cleanEmail],
            subject: isGoogle ? `Google 2-Step Verification Code: ${formattedCode}` : `Student Connect Verification Code: ${formattedCode}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; text-align: center; color: #ffffff;">
                  <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Student Connect Karnataka</h1>
                  <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.95;">Karnataka Engineering Higher Education Ecosystem</p>
                </div>
                <div style="padding: 32px 24px;">
                  <h2 style="margin: 0 0 12px; font-size: 18px; color: #0f172a;">${isGoogle ? 'Google 2-Step Identity Verification' : 'Email Address Verification'}</h2>
                  <p style="margin: 0 0 20px; font-size: 14px; color: #475569; line-height: 1.5;">
                    Hello <strong>${recipientName}</strong>,<br/>
                    We received a sign-in or verification request for your verified account (<strong>${cleanEmail}</strong>). Please enter the one-time security code below to complete your authentication:
                  </p>
                  <div style="background: #f8fafc; border: 2px dashed #93c5fd; border-radius: 12px; padding: 22px; text-align: center; margin: 24px 0;">
                    <span style="font-family: monospace; font-size: 34px; font-weight: 900; letter-spacing: 6px; color: #1d4ed8;">${formattedCode}</span>
                    <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">This verification code is valid for 10 minutes • 5 attempts allowed</p>
                  </div>
                  <p style="margin: 0 0 16px; font-size: 13px; color: #64748b; line-height: 1.5;">
                    If you did not initiate this request, you can safely ignore this email. Your account remains protected.
                  </p>
                </div>
                <div style="background: #f1f5f9; padding: 16px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
                  Student Connect Karnataka • Technical Education Governance Cell, Bengaluru • VTU Academic Node
                </div>
              </div>
            `
          })
        });

        if (resendRes.ok) {
          emailSent = true;
          providerUsed = 'RESEND';
        } else {
          const errData = await resendRes.json();
          deliveryError = errData.message || 'Resend API returned error';
        }
      } catch (err: any) {
        deliveryError = err.message;
      }
    }

    // Check Option B: Brevo API Key
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!emailSent && brevoApiKey) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sender: { name: 'Student Connect', email: process.env.BREVO_SENDER || 'noreply@studentconnect.org' },
            to: [{ email: cleanEmail, name: recipientName }],
            subject: isGoogle ? `Google Verification Code: ${formattedCode}` : `Student Connect Verification Code: ${formattedCode}`,
            htmlContent: `
              <div style="font-family: sans-serif; padding: 20px;">
                <h2>Security Verification Code</h2>
                <p>Your one-time security code is <strong>${formattedCode}</strong>.</p>
                <p>Valid for 10 minutes.</p>
              </div>
            `
          })
        });

        if (brevoRes.ok) {
          emailSent = true;
          providerUsed = 'BREVO';
        }
      } catch (err: any) {
        deliveryError = err.message;
      }
    }

    // Check Option C: Nodemailer with Gmail SMTP / Standard SMTP
    const smtpHost = process.env.SMTP_HOST || (process.env.GMAIL_USER ? 'smtp.gmail.com' : undefined);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;

    if (!emailSent && smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Student Connect Security" <${smtpUser}>`,
          to: cleanEmail,
          subject: isGoogle ? `Google Verification Code: ${formattedCode}` : `Student Connect Verification Code: ${formattedCode}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
              <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 20px;">Student Connect Karnataka</h1>
                <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Secure Identity & Verification System</p>
              </div>
              <div style="padding: 28px 24px;">
                <h2 style="margin: 0 0 10px; font-size: 18px; color: #0f172a;">${isGoogle ? 'Google 2-Step Verification' : 'Email Account Verification'}</h2>
                <p style="margin: 0 0 16px; font-size: 14px; color: #475569;">
                  Hello <strong>${recipientName}</strong>,<br/>
                  Please use the one-time verification code below to authorize your session:
                </p>
                <div style="background: #f8fafc; border: 2px dashed #93c5fd; border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0;">
                  <span style="font-family: monospace; font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #1d4ed8;">${formattedCode}</span>
                  <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">Valid for 10 minutes • 5 attempts permitted</p>
                </div>
              </div>
            </div>
          `
        });

        emailSent = true;
        providerUsed = 'GMAIL_SMTP';
      } catch (smtpErr: any) {
        deliveryError = smtpErr.message;
        console.error('[Nodemailer SMTP Error]:', smtpErr);
      }
    }

    console.log(`[OTP Dispatch] Email: ${cleanEmail} | Code: ${formattedCode} | Provider: ${providerUsed} | EmailSent: ${emailSent}`);

    return NextResponse.json({
      success: true,
      emailSent,
      providerUsed,
      deliveryError,
      code: formattedCode,
      cleanOtp: otp,
      email: cleanEmail,
      expiresAt: expiresAt.toISOString(),
      message: emailSent
        ? `Verification code delivered directly to your inbox (${cleanEmail})!`
        : `Verification code ${formattedCode} generated for ${cleanEmail}. (To send actual emails to your live inbox, add GMAIL_APP_PASSWORD, RESEND_API_KEY, or BREVO_API_KEY in .env.local)`
    });

  } catch (error: any) {
    console.error('Send OTP Handler Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to dispatch verification OTP' },
      { status: 500 }
    );
  }
}
