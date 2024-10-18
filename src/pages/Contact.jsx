import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Contact Insight Property Tax | Minnesota Tax Appeal Experts</title>
        <meta name="description" content="Get in touch with Insight Property Tax for expert assistance with your Minnesota property tax appeal. We're here to help you reduce your commercial, industrial, or apartment property taxes." />
        <meta name="keywords" content="contact property tax experts, Minnesota tax appeal consultation, commercial property tax, industrial property tax, apartment property tax" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
        <p className="text-lg text-center text-white mb-4">Have questions or need assistance? We're here to help!</p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input className="border border-gray-300 p-2 w-full" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input className="border border-gray-300 p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea className="border border-gray-300 p-2 w-full" id="message" rows="4" required></textarea>
          </div>
          <button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] px-4 py-2 rounded" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
