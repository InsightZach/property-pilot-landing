import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Insight Property Tax",
  "description": "Get in touch with Insight Property Tax for expert property tax appeal services in Minnesota.",
  "url": "https://insightpropertytax.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Insight Property Tax",
    "telephone": "+16122084419",
    "email": "zach@insightpropertytax.com"
  }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Contact Us | Insight Property Tax</title>
        <meta name="description" content="Get in touch with Insight Property Tax for expert property tax appeal services in Minnesota." />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0A2647] mb-4">Insight Property Tax</h2>
            <p className="mb-4">Expert property tax appeal services in Minnesota</p>
            <ul className="space-y-2">
              <li>Phone: (612) 208-4419</li>
              <li>Email: zach@insightpropertytax.com</li>
              <li>Address: Minneapolis, MN</li>
            </ul>
          </div>
          <form className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Your Phone Number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;