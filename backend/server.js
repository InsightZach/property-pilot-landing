const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
const async = require('async');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));

// SQLite database setup
let db;
(async () => {
  db = await open({
    filename: path.join(__dirname, 'submissions.db'),
    driver: sqlite3.Database
  });
  await db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    phone TEXT,
    propertyId TEXT,
    propertyDetails TEXT,
    date TEXT
  )`);
})();

// Create a queue for database operations
const dbQueue = async.queue(async (task, callback) => {
  try {
    await db.run(
      `INSERT INTO submissions (firstName, lastName, email, phone, propertyId, propertyDetails, date) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [task.firstName, task.lastName, task.email, task.phone, task.propertyId, task.propertyDetails, task.date]
    );
    callback();
  } catch (error) {
    console.error('Error inserting into database:', error);
    callback(error);
  }
}, 1);  // concurrency of 1 to ensure sequential processing

app.post('/api/contact', [
  body('firstName').notEmpty().trim().escape(),
  body('lastName').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim().escape(),
  body('propertyId').optional().trim().escape(),
  body('propertyDetails').optional().trim().escape(),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phone, propertyId, propertyDetails } = req.body;

    // Configure nodemailer transporter for Office 365
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      requireTLS: true, // Ensure STARTTLS is used
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

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');

    // Add to database queue
    dbQueue.push({
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyDetails,
      date: new Date().toISOString()
    }, (err) => {
      if (err) {
        throw new Error('Failed to record submission');
      }
      res.status(200).send({ message: 'Submission received' });
    });
  } catch (error) {
    next(error);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
