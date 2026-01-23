const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, '../build')));

// --- ADD THIS TRANSPORTER BLOCK ---
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // This should be an App Password, not your login password
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Serve the React app for all other routes (client-side routing)
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Adding 0.0.0.0 is perfect for Render
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});