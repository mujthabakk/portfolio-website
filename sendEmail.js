require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTestEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'recipient@example.com', // Replace with the recipient's email
        subject: 'Test Email',
        text: 'Hello, this is a test email!',
        html: '<b>Hello, this is a test email!</b>'
    });

    console.log('Message sent: %s', info.messageId);
}

sendTestEmail().catch(console.error);
