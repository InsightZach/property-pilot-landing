import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Our Process</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <CheckCircle className="mr-4 text-[#d7b971] h-6 w-6" />
          <div>
            <h3 className="text-xl font-semibold">Step 1: Assessment Review</h3>
            <p className="text-gray-700">We review your property’s assessed value and identify potential over-assessments.</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 text-[#d7b971] h-6 w-6" />
          <div>
            <h3 className="text-xl font-semibold">Step 2: Appeal Strategy</h3>
            <p className="text-gray-700">We develop a tailored appeal strategy based on your property’s unique circumstances.</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 text-[#d7b971] h-6 w-6" />
          <div>
            <h3 className="text-xl font-semibold">Step 3: Documentation</h3>
            <p className="text-gray-700">We prepare all necessary documentation to support your appeal.</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 text-[#d7b971] h-6 w-6" />
          <div>
            <h3 className="text-xl font-semibold">Step 4: Negotiation</h3>
            <p className="text-gray-700">We negotiate with tax authorities on your behalf to achieve the best possible outcome.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
