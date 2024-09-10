import React from 'react';
import { Building2, LineChart, FileText, Handshake, ArrowRight } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center bg-[#0A2647] text-white p-6 rounded-full w-48 h-48 justify-center relative">
    <div className="absolute -top-8 bg-[#D4AF37] p-4 rounded-full">
      <Icon className="w-8 h-8 text-[#0A2647]" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-center mt-4">{title}</h3>
    <p className="text-xs text-center">{description}</p>
  </div>
);

const Arrow = () => (
  <div className="flex-1 flex items-center justify-center">
    <ArrowRight className="w-8 h-8 text-[#D4AF37]" />
  </div>
);

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Our Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
        <ProcessStep
          icon={Building2}
          title="Property Review"
          description="We analyze your property details and assessment history."
        />
        <Arrow />
        <ProcessStep
          icon={LineChart}
          title="Value Analysis"
          description="Our experts determine if your property is over-assessed."
        />
        <Arrow />
        <ProcessStep
          icon={FileText}
          title="Appeal Strategy"
          description="We develop a customized strategy for your appeal."
        />
        <Arrow />
        <ProcessStep
          icon={Handshake}
          title="Negotiation & Resolution"
          description="We represent you throughout the appeal process."
        />
      </div>
    </div>
  </section>
);

export default ProcessSection;