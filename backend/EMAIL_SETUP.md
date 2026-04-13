# Email Setup Guide for Contact Form

This guide will help you set up the email functionality for the contact form to send messages to `igiranezashalom9@gmail.com`.

## Prerequisites

1. A Gmail account
2. Gmail App Password (2-factor authentication must be enabled)

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

## Step 2: Generate App Password

1. In your Google Account security settings, find "App passwords"
2. Click on "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Click "Generate"
5. Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

## Step 3: Update Configuration

1. Open `backend/config.env`
2. Update the following values:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important:** 
- Replace `your-gmail-address@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated
- Do NOT use your regular Gmail password
- Do NOT commit this file to version control

## Step 4: Test the Setup

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. The server will log:
   ```
   Server is running on port 5000
   Contact form endpoint: http://localhost:5000/api/contact
   Emails will be sent to: igiranezashalom9@gmail.com
   ```

3. Test the contact form from the frontend

## Troubleshooting

### Common Issues

1. **Authentication Error (EAUTH)**
   - Verify your Gmail address is correct
   - Ensure you're using the app password, not your regular password
   - Check that 2-factor authentication is enabled

2. **Connection Refused**
   - Ensure the backend server is running
   - Check that port 5000 is not blocked by firewall

3. **Emails Not Received**
   - Check your spam folder
   - Verify the recipient email address is correct
   - Check server logs for any errors

### Gmail Security Settings

If you're still having issues, you may need to:

1. Allow less secure app access (not recommended for production)
2. Check if your Gmail account has any security restrictions
3. Ensure your IP address is not blocked by Gmail

## Production Considerations

For production deployment:

1. Use environment variables instead of config files
2. Consider using a professional email service (SendGrid, Mailgun, etc.)
3. Implement rate limiting to prevent spam
4. Add CAPTCHA or other anti-spam measures
5. Use HTTPS for all communications

## Support

If you continue to have issues:
1. Check the server console for error messages
2. Verify your Gmail settings
3. Test with a different Gmail account
4. Check network connectivity and firewall settings
