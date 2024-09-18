const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { url, referrer, userAgent } = JSON.parse(event.body);

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('insightpropertytax');
    const collection = db.collection('pageviews');
    
    await collection.insertOne({
      url,
      referrer,
      userAgent,
      timestamp: new Date().toISOString()
    });

    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Pageview tracked successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};