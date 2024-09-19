const { MongoClient } = require('mongodb');
const axios = require('axios');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { firstName, lastName, email, phone, propertyId, propertyDetails } = JSON.parse(event.body);

    // Power Automate HTTP trigger URL
    const powerAutomateUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;

    // Send data to Power Automate
    await axios.post(powerAutomateUrl, {
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyDetails,
      submissionDate: new Date().toISOString()
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
