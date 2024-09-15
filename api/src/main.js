const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config(); 

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
  },
});

app.use(cors());
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    console.log('Received email data:', { to, subject, text });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Email sent:', info);
      res.status(200).json({ message: 'Email sent successfully', info });
    });
  });
  

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
