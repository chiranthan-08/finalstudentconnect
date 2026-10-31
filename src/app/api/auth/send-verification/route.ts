import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, code, type, name } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { success: false, message: 'Email and code are required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const isGoogle = type === 'google' || code.startsWith('G-');
    const formattedCode = code.startsWith('G-') || code.startsWith('SC-') ? code : (isGoogle ? `G-${code}` : `SC-${code}`);
    const recipientName = name || cleanEmail.split('@')[0];

    // Check if real SMTP credentials are provided in environment
    const smtpHost = process.env.SMTP_HOST || (process.env.GMAIL_USER ? 'smtp.gmail.com' : undefined);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;

    let emailSent = false;
    let deliveryError = null;

    if (smtpHost && smtpUser && smtpPass) {
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

        const subject = isGoogle 
          ? `Google Verification Code: ${formattedCode} - Student Connect Karnataka` 
          : `Student Connect Verification Code: ${formattedCode}`;

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Student Connect Karnataka</h1>
              <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">Karnataka Engineering Higher Education Ecosystem</p>
            </div>
            <div style="padding: 32px 24px;">
              <h2 style="margin: 0 0 12px; font-size: 18px; color: #0f172a;">${isGoogle ? 'Google 2-Step Identity Verification' : 'Email Address Verification'}</h2>
              <p style="margin: 0 0 20px; font-size: 14px; color: #475569; line-height: 1.5;">
                Hello <strong>${recipientName}</strong>,<br/>
                We received a sign-in or registration request for your verified account (<strong>${cleanEmail}</strong>). Please use the security code below to complete your authentication:
              </p>
              <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
                <span style="font-family: monospace; font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #1d4ed8;">${formattedCode}</span>
                <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">This verification code is valid for 10 minutes. Do not share this code with anyone.</p>
              </div>
              <p style="margin: 0 0 16px; font-size: 13px; color: #64748b; line-height: 1.5;">
                If you did not initiate this request, you can safely ignore this email. Your account remains protected.
              </p>
            </div>
            <div style="background: #f1f5f9; padding: 16px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
              Student Connect Karnataka • Technical Education Governance Cell, Bengaluru • KEA / VTU Academic Node
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Student Connect Security" <${smtpUser}>`,
          to: cleanEmail,
          subject,
          html: htmlContent,
        });

        emailSent = true;
      } catch (err: any) {
        deliveryError = err.message;
        console.error('[Email Dispatch Error]:', err);
      }
    }

    console.log(`[Security Dispatch] Verification code ${formattedCode} for ${cleanEmail} (Real Email Sent: ${emailSent})`);

    return NextResponse.json({
      success: true,
      delivered: emailSent ? 'REAL_EMAIL_DELIVERED' : 'LOCAL_SECURITY_CODE',
      code: formattedCode,
      cleanCode: formattedCode.replace(/^(G-|SC-)/i, ''),
      email: cleanEmail,
      realEmailSent: emailSent,
      deliveryError,
      message: emailSent
        ? `Verification email successfully sent to ${cleanEmail}`
        : `Verification code ${formattedCode} generated for ${cleanEmail}. (To send actual emails to your Gmail inbox, add SMTP_USER & SMTP_PASS in .env.local)`
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
