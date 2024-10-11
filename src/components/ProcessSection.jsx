import React from 'react';
import { CheckCircle, FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';

const ProcessStep = ({ number, icon: Icon, title, description }) => (
  <div className="flex items-start mb-12 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d7b971] flex items-center justify-center text-[#0A2647] font-bold text-xl mr-4 z-10">
      {number}
    </div>
    <div className="flex-grow">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-[#d7b971] mr-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
    {number < 4 && (
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#d7b971] -z-10"></div>
    )}
  </div>
);

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0A2647]">Our Property Tax Appeal Process</h2>
      <div className="max-w-3xl mx-auto">
        <ProcessStep
          number={1}
          icon={FileSearch}
          title="Assessment Review"
          description="We thoroughly review your property's assessed value and identify potential over-assessments."
        />
        <ProcessStep
          number={2}
          icon={BarChart3}
          title="Appeal Strategy"
          description="We develop a tailored appeal strategy based on your property's unique circumstances and market conditions."
        />
        <ProcessStep
          number={3}
          icon={FileText}
          title="Documentation"
          description="We prepare all necessary documentation and evidence to support your appeal, ensuring a strong case."
        />
        <ProcessStep
          number={4}
          icon={HandshakeIcon}
          title="Negotiation"
          description="We negotiate with tax authorities on your behalf to achieve the best possible outcome for your property tax appeal."
        />
      </div>
    </div>
  </section>
);

export default ProcessSection;