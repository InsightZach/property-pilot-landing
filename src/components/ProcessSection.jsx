import React from 'react';
import { Building2, LineChart, FileText, Handshake } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description, color }) => (
  <div className={`flex flex-col items-center ${color} p-6 rounded-lg shadow-md`}>
    <div className="bg-white p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-gray-800" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <ProcessStep
          icon={Building2}
          title="Property Review"
          description="We analyze your property details and assessment history."
          color="bg-[#FF9999]"
        />
        <ProcessStep
          icon={LineChart}
          title="Value Analysis"
          description="Our experts determine if your property is over-assessed."
          color="bg-[#99FF99]"
        />
        <ProcessStep
          icon={FileText}
          title="Appeal Strategy"
          description="We develop a customized strategy for your appeal."
          color="bg-[#9999FF]"
        />
        <ProcessStep
          icon={Handshake}
          title="Negotiation & Resolution"
          description="We represent you throughout the appeal process."
          color="bg-[#FFFF99]"
        />
        <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
          <div className="border-t-2 border-dashed border-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;