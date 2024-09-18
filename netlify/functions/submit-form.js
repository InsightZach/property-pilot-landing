const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { firstName, lastName, email, phone, propertyId, propertyDetails } = JSON.parse(event.body);

    // Email sending logic
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      requireTLS: true,
    });

    await transporter.sendMail({
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
    });

    // Database storage logic
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('insightpropertytax');
    const collection = db.collection('submissions');
    
    await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyDetails,
      date: new Date().toISOString()
    });

    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};