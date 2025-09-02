# ShadowGear Server Setup

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create .env file**
   Create a `.env` file in the root directory with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   PORT=3001
   ```

3. **Gmail App Password Setup**
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this password in EMAIL_PASS

4. **Start the Server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

## API Endpoint

- **POST** `/api/preorder`
- **Body**: `{ name, email, phone, package }`
- **Response**: Success/error message

## Email Functionality

The server will send:
1. **Confirmation email** to the customer
2. **Notification email** to:
   - majed.zamzami@kaust.edu.sa
   - mahdi.almosa@kaust.edu.sa

## Dependencies

- Express.js - Web server
- Nodemailer - Email sending
- CORS - Cross-origin requests
- Dotenv - Environment variables
