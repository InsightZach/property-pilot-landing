import React from 'react';
import { Building, Factory, Home, Percent, Clock, Award, DollarSign, FileText } from 'lucide-react';

const ExpertiseSection = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="flex items-center">
          <Building className="text-[#d7b971] mr-2" />
          <span className="text-lg font-medium">Commercial</span>
        </div>
        <div className="flex items-center">
          <Factory className="text-[#d7b971] mr-2" />
          <span className="text-lg font-medium">Industrial</span>
        </div>
        <div className="flex items-center">
          <Home className="text-[#d7b971] mr-2" />
          <span className="text-lg font-medium">Apartment</span>
        </div>
      </div>
      <p className="text-base text-gray-700 text-center max-w-2xl mx-auto mb-8">
        At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota. Our strategic appeals process targets over-assessed property values, leading to significant tax savings.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#0A2647]">Why Choose Insight Property Tax?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Percent className="text-[#d7b971] mr-2 mt-1 flex-shrink-0" />
              <span><span className="font-bold">2024 Appeal Success:</span> On average, we've achieved a 17.9% reduction in assessed values, with clients saving $49k per property.</span>
            </li>
            <li className="flex items-start">
              <Clock className="text-[#d7b971] mr-2 mt-1 flex-shrink-0" />
              <span><span className="font-bold">Fast Results:</span> Most appeals are resolved within 90 days.</span>
            </li>
            <li className="flex items-start">
              <Award className="text-[#d7b971] mr-2 mt-1 flex-shrink-0" />
              <span><span className="font-bold">100% Appeal Success Rate:</span> We've successfully reduced taxes for every client.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#0A2647]">How We Work:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <DollarSign className="text-[#d7b971] mr-2 mt-1 flex-shrink-0" />
              <span><span className="font-bold">Contingency Fee:</span> Pay $0 upfront—our fee is 30% of your tax savings, and you keep the rest.</span>
            </li>
            <li className="flex items-start">
              <FileText className="text-[#d7b971] mr-2 mt-1 flex-shrink-0" />
              <span><span className="font-bold">Full Service:</span> We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.</span>
            </li>
          </ul>
          <p className="text-base text-gray-700 mt-4">
            Whether you own commercial real estate, an industrial site, or an apartment building, trust our expertise to lower your tax burden and maximize savings.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;