import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A2647] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Insight Property Tax</h3>
            <p>Expert property tax appeal services in Minnesota.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#d7b971]">Home</Link></li>
              <li><Link to="/why-insight" className="hover:text-[#d7b971]">Why Insight?</Link></li>
              <li><Link to="/faq" className="hover:text-[#d7b971]">FAQ</Link></li>
              <li><Link to="/resources" className="hover:text-[#d7b971]">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-[#d7b971]">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-[#d7b971]">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:zach@insightpropertytax.com" className="hover:text-[#d7b971]">zach@insightpropertytax.com</a></p>
            <p>Phone: <a href="tel:612-208-4419" className="hover:text-[#d7b971]">612-208-4419</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Insight Property Tax. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-[#d7b971]">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;