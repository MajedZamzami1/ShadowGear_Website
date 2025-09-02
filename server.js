const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Preorder endpoint
app.post('/api/preorder', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    console.log('Received form data:', { name, email, phone }); // Debug log

    // Email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'ShadowGear Pre-Order Confirmation',
      html: `
        <h2>Thank you for your pre-order!</h2>
        <p>Dear ${name},</p>
        <p>We've received your pre-order request for ShadowGear.</p>
        <p>We'll be in touch soon with more details about our products and packages.</p>
        <br>
        <p>Best regards,</p>
        <p>The ShadowGear Team</p>
      `
    };

    // Email to you and your friend
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: ['majed.zamzami@kaust.edu.sa', 'mahdi.almosa@kaust.edu.sa'],
      subject: 'New ShadowGear Pre-Order Request',
      html: `
        <h2>New Pre-Order Request Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Pre-order request submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error submitting pre-order request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
