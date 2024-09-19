import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Expert Property Tax Appeals in Minnesota
        </h1>
        <p className="text-xl mb-8">
          Maximize your savings on commercial, industrial, and apartment property taxes with Insight Property Tax. Specializing in Minneapolis property tax appeals and serving all of Minnesota.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
            Get Started <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;