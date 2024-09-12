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
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0A2647] to-[#1E3A5F] text-white py-4 relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.svg" alt="Insight Property Tax Logo" className="h-16 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-white hover:text-[#d7b971]">
                {item.title}
              </Link>
            ))}
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
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="text-white hover:bg-[#1E3A5F] hover:text-[#d7b971]">
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
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