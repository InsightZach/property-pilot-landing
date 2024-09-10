import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0A2647] to-[#1E3A5F] text-white py-4 relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">
                  <Menu className="h-5 w-5" />
                  <span className="ml-2">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#0A2647] border-[#1E3A5F]">
                <DropdownMenuItem asChild>
                  <Link to="/" className="text-white hover:bg-[#1E3A5F] hover:text-[#d7b971]">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/why-insight" className="text-white hover:bg-[#1E3A5F] hover:text-[#d7b971]">Why Insight?</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="text-white hover:bg-[#1E3A5F] hover:text-[#d7b971]">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="text-white hover:bg-[#1E3A5F] hover:text-[#d7b971]">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/contact" className="hidden md:block">
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