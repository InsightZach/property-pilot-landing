const express = require('express');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const workbook = new ExcelJS.Workbook();
const excelFilePath = path.join(__dirname, 'submissions.xlsx');

(async () => {
  try {
    await workbook.xlsx.readFile(excelFilePath);
    console.log('Excel file loaded.');
  } catch (err) {
    console.log('Creating new Excel file.');
    const worksheet = workbook.addWorksheet('Submissions');
    worksheet.columns = [
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Property ID', key: 'propertyId' },
      { header: 'Property Details', key: 'propertyDetails' },
      { header: 'Date', key: 'date' },
    ];
    await workbook.xlsx.writeFile(excelFilePath);
  }
})();

app.post('/api/contact', [
  body('firstName').notEmpty().trim().escape(),
  body('lastName').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim().escape(),
  body('propertyId').optional().trim().escape(),
  body('propertyDetails').optional().trim().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, phone, propertyId, propertyDetails } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: 'zach@insightpropertytax.com',
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Property ID: ${propertyId}
      Property Details: ${propertyDetails}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send({ error: 'Failed to send email' });
  }

  // Record to Excel file
  const worksheet = workbook.getWorksheet('Submissions');
  worksheet.addRow({
    firstName,
    lastName,
    email,
    phone,
    propertyId,
    propertyDetails,
    date: new Date().toLocaleString(),
  });

  try {
    await workbook.xlsx.writeFile(excelFilePath);
    console.log('Submission recorded to Excel file.');
  } catch (error) {
    console.error('Error writing to Excel file:', error);
    return res.status(500).send({ error: 'Failed to record submission' });
  }

  res.status(200).send({ message: 'Submission received' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
