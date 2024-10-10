import React from 'react';

const ExpertiseSection = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="flex items-center">
          <span className="text-lg font-medium">• Commercial</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-medium">• Industrial</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-medium">• Apartment</span>
        </div>
      </div>
      <p className="text-base text-gray-700 text-center max-w-2xl mx-auto mb-12">
        At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota. By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#0A2647] h-8">Why Choose Insight Property Tax?</h3>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <span><span className="font-bold">2024 Appeal Success:</span> On average, we've achieved a 17.9% reduction in assessed values, with clients saving $49k per property.</span>
            </li>
            <li>
              <span><span className="font-bold">Fast Results:</span> Most appeals are resolved within 90 days.</span>
            </li>
            <li>
              <span><span className="font-bold">100% Appeal Success Rate:</span> We've successfully reduced taxes for every client.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#0A2647] h-8">How We Work:</h3>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <span><span className="font-bold">Contingency Fee:</span> Pay $0 upfront—our fee is 30% of your tax savings, and you keep the rest.</span>
            </li>
            <li>
              <span><span className="font-bold">Full Service:</span> We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.</span>
            </li>
          </ul>
          <p className="text-base text-gray-700 mt-6">
            Whether you own commercial real estate, an industrial site, or an apartment building, trust our expertise to lower your tax burden and maximize savings.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;