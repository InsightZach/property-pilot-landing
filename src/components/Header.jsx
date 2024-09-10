import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-[#0A2647] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Insight Property Tax Logo" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-4">
            {/* Add menu items here when future pages are added */}
          </nav>
          <Button 
            className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]"
            onClick={() => {
              // Add HubSpot contact form link here in the future
              console.log("Contact button clicked");
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;