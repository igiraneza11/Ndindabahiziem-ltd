const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: './config.env' });

const app = express();  
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Adjust this to your frontend's URL
    credentials: true
}));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Note: We only validate email format. We do not attempt to verify
    // recipient existence, as SMTP cannot reliably check this without
    // actually sending mail and many providers block such checks.

    // Email content for the owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'igiranezashalom9@gmail.com, ndindabahiziemltd@gmail.com',// Direct email to specified address
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service Required:</strong> ${service || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Submission Details:</strong><br>
              Date: ${new Date().toLocaleString()}<br>
              IP: ${req.ip || req.connection.remoteAddress}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              This message was sent from the contact form on your website.
            </p>
          </div>
        </div>
      `
    };

    // Send email to owner
    await transporter.sendMail(mailOptions);

    // Send thank you email to the user
    const thankYouMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Us - Ndinda Bahizi EML Ltd',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">We've received your message and will get back to you soon.</p>
          </div>
          
          <div style="padding: 30px; background-color: white;">
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">Your Message Summary</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service Required:</strong> ${service || 'Not specified'}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
              <ul style="color: #1e40af; line-height: 1.6;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll contact you via phone or email to discuss your requirements</li>
                <li>We'll provide a detailed quote for your project</li>
                <li>If you have any urgent needs, please call us directly</li>
              </ul>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Need immediate assistance?</h3>
              <p style="color: #64748b; margin: 10px 0;">Call us directly for urgent matters:</p>
              <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <div style="text-align: center;">
                  <p style="margin: 5px 0; font-weight: bold; color: #1e293b;">+250 782 177 952</p>
                </div>
                <div style="text-align: center;">
                  <p style="margin: 5px 0; font-weight: bold; color: #1e293b;">+250 784 942 894</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style="background-color: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              <strong>Ndindabahiziem Ltd</strong><br>
              Medical Equipment Supply & Maintenance | Electrical Installations | Construction<br>
              Kigali, Rwanda | Email: ndindabahiziemltd@gmail.com
            </p>
          </div>
        </div>
      `
    };

    // Send thank you email to user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Check if it's an authentication error
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact administrator.'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Contact form endpoint: http://localhost:${port}/api/contact`);
  console.log(`Emails will be sent to: igiranezashalom9@gmail.com, ndindabahiziemltd@gmail.com`);
});