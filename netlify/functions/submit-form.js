const axios = require('axios');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);

    // Server-side validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Retrieve the Power Automate webhook URL from environment variables
    const powerAutomateUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;

    if (!powerAutomateUrl) {
      throw new Error('Power Automate webhook URL is not configured.');
    }

    // Send data to Power Automate
    const powerAutomateResponse = await axios.post(powerAutomateUrl, {
      ...formData,
      submissionDate: new Date().toISOString()
    });

    // Check for successful response (including 202 Accepted)
    if (powerAutomateResponse.status === 200 || powerAutomateResponse.status === 202) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' }),
      };
    } else {
      throw new Error(`Unexpected response from Power Automate. Status: ${powerAutomateResponse.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
};
