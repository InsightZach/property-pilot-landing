import React from 'react';
import { TrendingDown, Clock, CheckCircle, DollarSign, Building2, Factory, Home } from 'lucide-react';

const AboutInsightSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#0A2647]">Expert Minnesota Property Tax Appeals</h2>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex flex-wrap justify-center items-center mb-4">
          <div className="flex items-center mr-4 mb-2">
            <Building2 className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Commercial</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <Factory className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Industrial</span>
          </div>
          <div className="flex items-center mb-2">
            <Home className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Apartments</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <p className="text-lg text-[#0A2647] mb-6">
            At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota.
          </p>
          <p className="text-lg text-[#0A2647]">
            By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon={TrendingDown}
              title="-17.9% Average Reduction"
              description="In 2024, we've achieved significant assessment reductions."
            />
            <StatCard
              icon={Clock}
              title="90-Day Resolution"
              description="Most appeals are resolved quickly, saving you time and resources."
            />
            <StatCard
              icon={CheckCircle}
              title="100% Success Rate"
              description="We've successfully reduced taxes for every client we've worked with."
            />
            <StatCard
              icon={DollarSign}
              title="$49k Tax Savings"
              description="Average tax savings per property for our clients in 2024."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#324E6E] text-white p-4 sm:p-6 rounded-lg flex items-center shadow-lg">
    <Icon className="text-[#d7b971] h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4 flex-shrink-0" />
    <div className="flex-grow">
      <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{title}</h4>
      <p className="text-xs sm:text-sm md:text-base">{description}</p>
    </div>
  </div>
);

export default AboutInsightSection;
