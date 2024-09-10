import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 bg-[#0A2647] text-white">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Insight Property Tax Logo" className="h-12 w-auto" />
        </div>
        <Button 
          variant="outline" 
          className="bg-[#D4AF37] text-[#0A2647] hover:bg-[#D4AF37]/90"
          onClick={() => window.open('https://www.linkedin.com/in/zach-hepburn', '_blank')}
        >
          <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
        </Button>
      </div>
    </div>
  </footer>
);

export default Footer;