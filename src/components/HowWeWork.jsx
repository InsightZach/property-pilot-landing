import React from 'react';

const HowWeWork = () => (
  <section className="py-16 bg-[#f8f9fa]">
    <div className="container mx-auto px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0A2647]">How We Work</h2>
      <div className="text-lg text-[#0A2647] mb-4">
        <p>At Insight Property Tax, we follow a streamlined process to ensure that your property tax appeals are handled efficiently and effectively. Here’s how we work:</p>
      </div>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Initial Consultation:</strong> We start with a free consultation to understand your property and discuss your specific needs.
        </li>
        <li>
          <strong>Property Assessment Review:</strong> Our team conducts a thorough review of your property assessment to identify potential over-assessments.
        </li>
        <li>
          <strong>Filing the Appeal:</strong> We handle all the paperwork and file the appeal on your behalf, ensuring all deadlines are met.
        </li>
        <li>
          <strong>Negotiation:</strong> Our experts negotiate with the local tax authorities to secure the best possible outcome for your appeal.
        </li>
        <li>
          <strong>Results:</strong> We keep you informed throughout the process and deliver the results directly to you.
        </li>
      </ol>
      <div className="mt-8 text-center">
        <p className="text-lg">Let us help you save on your property taxes!</p>
      </div>
    </div>
  </section>
);

export default HowWeWork;
