const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  console.log('Form data received:', req.body);
  
  const { name, email, phone, service, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required'
    });
  }
  
  // Log the submission
  console.log('=== CONTACT FORM SUBMISSION ===');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Service:', service);
  console.log('Message:', message);
  console.log('==============================');
  
  res.json({
    success: true,
    message: 'Message received successfully!'
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Test endpoint: http://localhost:5000/api/test');
  console.log('Contact endpoint: http://localhost:5000/api/contact');
});

//


