import React from 'react';
import { CheckCircle, FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';

const HowWeWork = () => (
  <section className="py-16 md:py-24 relative">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/Property-Tax-Consultant-working.png')" }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12 shadow-text">How We Work</h2>
      <div className="max-w-3xl mx-auto backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 bg-[#0A2647]/90 text-white">
            <h3 className="text-2xl font-bold mb-4">Contingency Fee</h3>
            <p className="mb-4">Our contingency fee model ensures zero risk for you: you only pay if we successfully reduce your property taxes.</p>
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
          <div className="md:w-1/2 p-8 bg-[#324E6E]/90 text-white">
            <h3 className="text-2xl font-bold mb-4">Full Service Assessment Appeals</h3>
            <p className="text-lg mb-4">
              We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileSearch className="mr-2 text-[#d7b971] w-5 h-5" /> Assessment Review
              </li>
              <li className="flex items-center">
                <BarChart3 className="mr-2 text-[#d7b971] w-5 h-5" /> Appeal Strategy
              </li>
              <li className="flex items-center">
                <FileText className="mr-2 text-[#d7b971] w-5 h-5" /> Documentation
              </li>
              <li className="flex items-center">
                <HandshakeIcon className="mr-2 text-[#d7b971] w-5 h-5" /> Negotiation & Resolution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;