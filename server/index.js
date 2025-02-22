const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received email data:', { name, email, message }); // Log received data

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response); // Log email response
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
