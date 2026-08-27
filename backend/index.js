const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
require('dotenv').config();

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

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(target)}`, {
    method: 'POST',
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
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Keep total email work under ~4s so the API can respond within 5s.
    await withTimeout(
      deliverEmails({ name, email, phone, service, message, req }),
      4000,
      'Email delivery'
    );

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Email sending error:', error);

    if (error.code === 'NO_EMAIL_PROVIDER') {
      return res.status(503).json({
        success: false,
        message: 'Email service is not configured yet. Please try again later.',
      });
    }

    if (error.code === 'FORMSUBMIT_ACTIVATION') {
      return res.status(502).json({
        success: false,
        message:
          'Email delivery needs a one-time activation. Check igiranezashalom9@gmail.com (and spam) for the FormSubmit "Activate Form" link, click it, then submit again.',
      });
    }

    if (error.code === 'EMAIL_TIMEOUT') {
      return res.status(504).json({
        success: false,
        message: 'Email service took too long. Please try again in a few seconds.',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    emailProvider: process.env.RESEND_API_KEY ? 'resend' : 'formsubmit',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Contact form endpoint: /api/contact`);
  console.log(`Owner emails: ${ownerEmails.join(', ')}`);
  console.log(
    `Email provider: ${process.env.RESEND_API_KEY ? 'resend' : 'formsubmit-https'}`
  );
});
