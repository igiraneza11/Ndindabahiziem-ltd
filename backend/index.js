const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './config.env' });
}

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'https://www.ndindabahiziem.com',
  'https://ndindabahiziem.com',
  'https://ndindabahiziem-ltd-k4gm.vercel.app',
  'http://localhost:3000',
  'http://localhost:4173',
];

const ownerEmails = (process.env.OWNER_EMAIL || 'igiranezashalom9@gmail.com')
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

const THANK_YOU_TEXT =
  'Thank you for contacting Ndindabahiziem Ltd. Your application/request is under review. Our team will get back to you soon.';

const companyEmail = process.env.COMPANY_EMAIL || ownerEmails[0];
const companyName = process.env.COMPANY_NAME || 'Ndindabahiziem Ltd';
const companyPhone = process.env.COMPANY_PHONE || '+250 782 177 952';
const companyWebsite = process.env.COMPANY_WEBSITE || 'https://www.ndindabahiziem.com';
const requestCounts = new Map();
const FORM_SUBMIT_TIMEOUT_MS = 12000;

function cleanInput(value, maxLength) {
  return String(value || '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
}

function validateContact(body = {}) {
  const contact = {
    name: cleanInput(body.name, 120),
    email: cleanInput(body.email, 254).toLowerCase(),
    phone: cleanInput(body.phone, 40),
    subject: cleanInput(body.subject, 160),
    message: cleanInput(body.message, 5000),
  };
  const errors = {};
  if (!contact.name) errors.name = 'Full name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) errors.email = 'A valid email address is required.';
  if (!contact.phone) errors.phone = 'Phone number is required.';
  if (!contact.subject) errors.subject = 'Subject is required.';
  if (!contact.message) errors.message = 'Message is required.';
  return { contact, errors };
}

function isRateLimited(req) {
  const key = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const recent = (requestCounts.get(key) || []).filter((time) => now - time < 900000);
  recent.push(now);
  requestCounts.set(key, recent);
  return recent.length > 5;
}

function resolveDeliveryStrategy(env = process.env) {
  if (env.RESEND_API_KEY) return 'resend';

  const host = env.SMTP_HOST;
  const user = env.SMTP_USER;
  const password = env.SMTP_PASSWORD;

  if (host && user && password && (companyEmail || env.COMPANY_EMAIL || env.OWNER_EMAIL)) {
    return 'smtp';
  }

  return 'formsubmit';
}

function createSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (resolveDeliveryStrategy() !== 'smtp' || !host || !user || !password || !companyEmail) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || process.env.EMAIL_PORT || 587),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
    auth: { user, pass: password },
  });
}

function emailLayout(title, content) {
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1f2937;line-height:1.6"><header style="background:#0f766e;padding:28px 32px;color:#fff"><h1 style="margin:0;font-size:24px">${escapeHtml(companyName)}</h1><p style="margin:6px 0 0">${escapeHtml(title)}</p></header><main style="padding:28px 32px;background:#fff">${content}</main><footer style="padding:20px 32px;background:#f0fdfa;color:#475569;font-size:13px">${escapeHtml(companyName)}<br>${escapeHtml(companyPhone)} | ${escapeHtml(companyEmail)}<br>${escapeHtml(companyWebsite)}</footer></div>`;
}

function buildCompanyHtml(contact) {
  return emailLayout('New message/application received', `<p>A new message/application has been submitted through the website.</p><dl><dt><strong>Name</strong></dt><dd>${escapeHtml(contact.name)}</dd><dt><strong>Email</strong></dt><dd>${escapeHtml(contact.email)}</dd><dt><strong>Phone</strong></dt><dd>${escapeHtml(contact.phone)}</dd><dt><strong>Subject</strong></dt><dd>${escapeHtml(contact.subject)}</dd></dl><h3>Message</h3><div style="white-space:pre-wrap;background:#f8fafc;border-left:4px solid #0f766e;padding:16px">${escapeHtml(contact.message)}</div><p>Please review the message and respond to the user when appropriate.</p>`);
}

function buildConfirmationHtml(contact) {
  return emailLayout('We received your message/application', `<p>Dear ${escapeHtml(contact.name)},</p><p>Thank you for contacting us.</p><p>We are pleased to confirm that we have successfully received your message/application. Our team will review your request and get back to you as soon as possible.</p><h3>Your submitted information</h3><p><strong>Subject:</strong> ${escapeHtml(contact.subject)}</p><p><strong>Message:</strong></p><div style="white-space:pre-wrap;background:#f8fafc;border-left:4px solid #0f766e;padding:16px">${escapeHtml(contact.message)}</div><p>We appreciate your interest and patience.</p><p>Best regards,<br>${escapeHtml(companyName)}<br>${escapeHtml(companyEmail)}<br>${escapeHtml(companyPhone)}<br>${escapeHtml(companyWebsite)}</p>`);
}

app.use(bodyParser.json());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
}));

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      const error = new Error(`${label} timed out after ${ms}ms`);
      error.code = 'EMAIL_TIMEOUT';
      setTimeout(() => reject(error), ms);
    }),
  ]);
}

async function sendWithResend({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.EMAIL_FROM ||
    'Ndindabahiziem Ltd <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.message || 'Resend API request failed');
    error.code = 'RESEND_ERROR';
    error.status = response.status;
    error.details = payload;
    throw error;
  }

  return payload;
}

// HTTPS email (no SMTP). Sends owner notification + auto-reply to the customer.
async function sendWithFormSubmit({ name, email, phone, service, message }) {
  const target = ownerEmails[0];
  if (!target) {
    const error = new Error('OWNER_EMAIL is not configured');
    error.code = 'NO_EMAIL_PROVIDER';
    throw error;
  }

  const ccOwners = ownerEmails.slice(1).join(', ');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FORM_SUBMIT_TIMEOUT_MS);
  let response;

  try {
    response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(target)}`, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://www.ndindabahiziem.com',
        Referer: 'https://www.ndindabahiziem.com/contact',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Not provided',
        service: service || 'Not specified',
        message,
        _subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
        _template: 'table',
        _captcha: 'false',
        _cc: ccOwners || undefined,
        _replyto: email,
        _autoresponse: THANK_YOU_TEXT,
      }),
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      const timeoutError = new Error('FormSubmit request timed out');
      timeoutError.code = 'EMAIL_TIMEOUT';
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  const rawText = await response.text();
  let payload = {};
  try {
    payload = rawText ? JSON.parse(rawText) : {};
  } catch {
    payload = { message: rawText };
  }

  if (!response.ok || payload.success === 'false' || payload.success === false || payload.error) {
    const msg = payload.message || payload.error || `FormSubmit failed (${response.status})`;
    const error = new Error(msg);
    error.code = msg.toLowerCase().includes('activation')
      ? 'FORMSUBMIT_ACTIVATION'
      : 'FORMSUBMIT_ERROR';
    error.details = payload;
    throw error;
  }

  return payload;
}

function buildOwnerEmailHtml({ name, email, phone, service, message, req }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Service Required:</strong> ${escapeHtml(service || 'Not specified')}</p>
      </div>
      <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
        <p style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
      <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #1e40af; font-size: 14px;">
          <strong>Submission Details:</strong><br>
          Date: ${new Date().toLocaleString()}<br>
          IP: ${escapeHtml(req.ip || req.socket?.remoteAddress || 'unknown')}
        </p>
      </div>
    </div>
  `;
}

function buildThankYouEmailHtml({ name, email, phone, service, message }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
      <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${escapeHtml(name)}!</h1>
        <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">
          Your application/request is under review. Our team will get back to you soon.
        </p>
      </div>
      <div style="padding: 30px; background-color: white;">
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">Your Message Summary</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
          <p><strong>Service Required:</strong> ${escapeHtml(service || 'Not specified')}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      </div>
      <div style="background-color: #1e293b; padding: 20px; text-align: center;">
        <p style="color: #94a3b8; margin: 0; font-size: 14px;">
          <strong>Ndindabahiziem Ltd</strong><br>
          Medical Equipment Supply & Maintenance | Electrical Installations | Construction<br>
          Kigali, Rwanda | Email: bahizema@gmail.com
        </p>
      </div>
    </div>
  `;
}

async function deliverEmails(payload) {
  if (process.env.RESEND_API_KEY) {
    await Promise.all([
      sendWithResend({
        to: ownerEmails,
        subject: `New Contact Form Submission - ${payload.service || 'General Inquiry'}`,
        html: buildOwnerEmailHtml(payload),
      }),
      sendWithResend({
        to: [payload.email],
        subject: 'Thank You for Contacting Us - Ndindabahiziem Ltd',
        html: buildThankYouEmailHtml(payload),
      }),
    ]);
    return { provider: 'resend' };
  }

  await sendWithFormSubmit(payload);
  return { provider: 'formsubmit' };
}

app.post('/api/contact', async (req, res) => {
  if (isRateLimited(req)) {
    return res.status(429).json({ success: false, message: 'Too many messages. Please try again later.' });
  }

  const { contact, errors } = validateContact(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: 'Please correct the highlighted fields.', errors });
  }

  try {
    const transporter = createSmtpTransporter();

    if (!transporter) {
      await sendWithFormSubmit({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        service: contact.subject,
        message: contact.message,
      });

      return res.status(200).json({
        success: true,
        message: 'Your message has been successfully received. We will get back to you soon.',
      });
    }

    const from = process.env.SMTP_FROM || `"${companyName}" <${process.env.SMTP_USER || process.env.EMAIL_USER}>`;

    await withTimeout(transporter.sendMail({
      from,
      to: companyEmail,
      replyTo: contact.email,
      subject: `New Message/Application Received from ${contact.name}`,
      html: buildCompanyHtml(contact),
      text: `New message/application received\n\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\nSubject: ${contact.subject}\n\nMessage:\n${contact.message}`,
    }), FORM_SUBMIT_TIMEOUT_MS, 'SMTP notification');

    try {
      await withTimeout(transporter.sendMail({
        from,
        to: contact.email,
        subject: 'We Received Your Message/Application',
        html: buildConfirmationHtml(contact),
        text: `Dear ${contact.name},\n\nThank you for contacting us. We have successfully received your message/application and will respond as soon as possible.\n\nSubject: ${contact.subject}\nMessage:\n${contact.message}\n\nBest regards,\n${companyName}\n${companyEmail}\n${companyPhone}\n${companyWebsite}`,
      }), FORM_SUBMIT_TIMEOUT_MS, 'SMTP confirmation');
    } catch (confirmationError) {
      console.error('Confirmation email failed after company notification succeeded:', confirmationError.message);
      return res.status(502).json({
        success: false,
        companyReceived: true,
        message: 'Your message reached the company, but we could not send the confirmation email. Please verify your email address.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been successfully received. A confirmation email has been sent to your email address. We will get back to you soon.',
    });
  } catch (error) {
    console.error('Company notification email failed:', error.message);
    return res.status(error.code === 'EMAIL_NOT_CONFIGURED' ? 503 : 502).json({ success: false, message: 'Sorry, we could not send your message. Please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Ndindabahiziem backend is running. Use /api/health to check service health.',
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    emailProvider: resolveDeliveryStrategy(),
    timestamp: new Date().toISOString(),
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Contact form endpoint: /api/contact`);
    console.log(`Owner emails: ${ownerEmails.join(', ')}`);
    console.log(
      `Email provider: ${resolveDeliveryStrategy()}`
    );
  });
}

module.exports = {
  app,
  resolveDeliveryStrategy,
};
