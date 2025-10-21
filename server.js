const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: [
    'https://shadowgear-website.vercel.app',
    'https://shadowgear-website-git-main-majedzamzami1.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Pre-order endpoint
app.post('/api/preorder', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    console.log('Received form data:', { name, email, phone });

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'ShadowGear Pre-Order Confirmation',
      html: `
        <h2>Thank you for your pre-order!</h2>
        <p>Hi ${name},</p>
        <p>We've received your pre-order for ShadowGear smart boxing equipment.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>We'll contact you soon with more details about your order.</p>
        <p>Best regards,<br>The ShadowGear Team</p>
      `
    };

    // Send notification email to founders
    const foundersMailOptions = {
      from: process.env.EMAIL_USER,
      to: ['majed.zamzami@kaust.edu.sa', 'mahdi.almosa@kaust.edu.sa'],
      subject: 'New ShadowGear Pre-Order',
      html: `
        <h2>New Pre-Order Received</h2>
        <p><strong>Customer Details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>Please follow up with this customer.</p>
      `
    };

    // Send emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(foundersMailOptions);

    res.status(200).json({ message: 'Pre-order submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
