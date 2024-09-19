import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-[#0A2647] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src="/logo.svg" alt="Insight Property Tax Logo" className="h-12" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-[#d7b971]">
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-[#d7b971]"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A2647] text-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.to} to={item.to} className="hover:text-[#d7b971]">
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
