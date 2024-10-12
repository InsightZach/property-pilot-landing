import React from 'react';

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0A2647]">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Step 1: Consultation</h3>
          <p>We start with a free consultation to understand your property and assess your needs.</p>
        </div>
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Step 2: Analysis</h3>
          <p>Our team conducts a thorough analysis of your property assessment and identifies potential savings.</p>
        </div>
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Step 3: Appeal</h3>
          <p>We file the necessary appeals on your behalf, ensuring all documentation is accurate and timely.</p>
        </div>
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Step 4: Resolution</h3>
          <p>We work diligently to resolve your appeal, keeping you informed every step of the way.</p>
        </div>
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Step 5: Savings</h3>
          <p>Once the appeal is successful, you enjoy the savings on your property taxes.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
