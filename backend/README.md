# Contact Form Backend

This backend handles contact form submissions and sends emails to the company owner.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings
Edit the `config.env` file with your email credentials:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
OWNER_EMAIL=igiranezashalom9@gmail.com, ndindabahiziemltd@gmail.com

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Gmail App Password Setup
To use Gmail for sending emails, you need to:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in the `EMAIL_PASS` field

### 4. Start the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+250 788 123 456",
  "service": "medical",
  "message": "I need medical equipment maintenance services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

### GET /api/health
Health check endpoint.

## Features

- ✅ Sends detailed email to company owner (igiranezashalom9@gmail.com, ndinabahiziemltd@gmail.com)
- ✅ Sends confirmation email to the user
- ✅ Form validation
- ✅ Error handling
- ✅ Professional email templates
- ✅ CORS enabled for frontend integration

## Email Templates

The backend sends two emails:

1. **To Company Owner**: Detailed submission with all form data
2. **To User**: Confirmation email with copy of their message

Both emails use professional HTML templates with company branding.

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check your Gmail app password and 2FA settings
2. **CORS errors**: Ensure the frontend is calling the correct backend URL
3. **Port conflicts**: Change the PORT in config.env if 5000 is in use

### Testing:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

