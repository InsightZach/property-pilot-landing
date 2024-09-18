import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="mb-4">
            When you visit or log into our website, we use cookies and similar technologies to collect certain information about your visit. This includes:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Usage Data (Information about how you use our site, such as pages visited, time spent on pages, and links clicked.)</li>
            <li>Device Information (Details about the device you use to access our site, including IP address, browser type, and operating system.)</li>
            <li>Personal Data (If you provide it, we may collect information such as your email address, phone number, or other contact details.)</li>
          </ul>
          <p className="mb-4">
            We may also combine this information collected automatically with other data we receive from third-party sources, such as data providers and marketing partners, to create a more complete profile of you. We then use this profile to communicate with you, including providing personalized advertising and promotional content based on your interests and browsing behavior. You may opt out of this at any time.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), you have the right to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Know what personal information is being collected about you.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt-out of the sale or sharing of your personal information.</li>
            <li>Non-discrimination for exercising your privacy rights.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Opting Out</h2>
          <p className="mb-4">
            To opt out of data collection or marketing communications, please contact us at zach@insightpropertytax.com. We will honor your request promptly.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at zach@insightpropertytax.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
