const { MongoClient } = require('mongodb');
const axios = require('axios');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { firstName, lastName, email, phone, propertyId, propertyDetails } = JSON.parse(event.body);

    // Retrieve the Power Automate webhook URL from environment variables
    const powerAutomateUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;

    if (!powerAutomateUrl) {
      throw new Error('Power Automate webhook URL is not configured.');
    }

    // Send data to Power Automate
    const powerAutomateResponse = await axios.post(powerAutomateUrl, {
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyDetails,
      submissionDate: new Date().toISOString()
    });

    if (powerAutomateResponse.status !== 200) {
      throw new Error(`Failed to send data to Power Automate. Status: ${powerAutomateResponse.status}`);
    }

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
