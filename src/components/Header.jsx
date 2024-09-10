import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#0A2647] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Insight Property Tax Logo" className="h-16 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-[#d7b971]">Home</Link>
            <Link to="/why-insight" className="text-white hover:text-[#d7b971]">Why Insight?</Link>
            <Link to="/faq" className="text-white hover:text-[#d7b971]">FAQ</Link>
            <Link to="/contact" className="text-white hover:text-[#d7b971]">Contact</Link>
          </nav>
          <Link to="/contact">
            <Button 
              className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;