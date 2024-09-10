import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => (
  <section className="bg-[#1E3A5F] text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#d7b971]">Get Started</h2>
      <p className="text-xl mb-8">
        We'll review your property and provide an appeal recommendation. If an appeal benefits you, we'll take care of everything.
      </p>
      <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-xl px-8 py-4">
        Get Started
      </Button>
    </div>
  </section>
);

export default CallToAction;