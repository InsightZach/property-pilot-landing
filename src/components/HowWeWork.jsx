import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const HowWeWork = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">How We Work</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#0A2647] p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Contingency Fee</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Pay $0 upfront
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Our fee is 30% of tax savings
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> You pocket the rest
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> We handle everything
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#0A2647]">Full Service</h3>
            <p className="text-lg text-[#0A2647] mb-4">
              We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.
            </p>
            <ul className="space-y-2 text-[#0A2647]">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Property assessment review
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Appeal strategy development
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Documentation preparation
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971]" /> Negotiation with tax authorities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;