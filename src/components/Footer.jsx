import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 bg-[#0A2647] text-white">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Insight Property Tax Logo" 
            className="h-12 w-auto" 
            width="192" 
            height="48"
          />
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:zach@insightpropertytax.com" className="hover:text-[#d7b971]">
            zach@insightpropertytax.com
          </a>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full bg-[#D4AF37] text-[#0A2647] hover:bg-[#D4AF37]/90"
            onClick={() => window.open('https://www.linkedin.com/in/zach-hepburn', '_blank')}
          >
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
