import React from 'react';
import { CheckCircle, FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';

const HowWeWork = () => (
  <section className="py-16 md:py-24 relative">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/Property-Tax-Consultant-working.png')" }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-12 shadow-text">How We Work</h2>
      <div className="max-w-3xl mx-auto backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 bg-[#0A2647]/90 text-white">
            <h3 className="text-3xl font-bold mb-4">Contingency Fee</h3>
            <p className="mb-4 text-lg">Our contingency fee model ensures zero risk for you: you only pay if we successfully reduce your property taxes.</p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971] w-6 h-6" /> Pay $0 upfront
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971] w-6 h-6" /> 
                <span className="md:hidden">Fee: 30% of tax savings</span>
                <span className="hidden md:inline">Our fee is 30% of tax savings</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971] w-6 h-6" /> You pocket the rest
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-[#d7b971] w-6 h-6" /> We handle everything
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8 bg-[#324E6E]/90 text-white">
            <h3 className="text-3xl font-bold mb-4">Full Service Appeals</h3>
            <p className="text-lg mb-4">
              We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <FileSearch className="mr-2 text-[#d7b971] w-6 h-6" /> Assessment Review
              </li>
              <li className="flex items-center">
                <BarChart3 className="mr-2 text-[#d7b971] w-6 h-6" /> Appeal Strategy
              </li>
              <li className="flex items-center">
                <FileText className="mr-2 text-[#d7b971] w-6 h-6" /> Documentation
              </li>
              <li className="flex items-center">
                <HandshakeIcon className="mr-2 text-[#d7b971] w-6 h-6" /> Negotiation & Resolution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;