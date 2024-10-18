import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A2647] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            <img src="/logo.svg" alt="Insight Property Tax Logo" className="h-8" />
          </div>
          <div className="w-1/3 text-center">
            <a href="mailto:zach@insightpropertytax.com" className="hover:text-[#d7b971]">zach@insightpropertytax.com</a>
          </div>
          <div className="w-1/3 flex justify-end">
            <a href="https://www.linkedin.com/in/zach-hepburn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d7b971]">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Insight Property Tax. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover:text-[#d7b971]">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;