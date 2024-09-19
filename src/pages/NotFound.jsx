import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077]">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-2xl text-white mb-8">Oops! Page not found.</p>
          <Link to="/">
            <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-6 py-3">
              Go Back Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;