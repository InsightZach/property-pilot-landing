import React from 'react';
import { TrendingDown, Clock, CheckCircle, DollarSign, Building2, Factory, Home } from 'lucide-react';

const AboutInsightSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#0A2647]">Expert Minnesota Property Tax Appeals</h2>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex flex-row justify-center items-center mb-4">
          <div className="flex items-center mr-6">
            <Building2 className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Commercial</span>
          </div>
          <div className="flex items-center mr-6">
            <Factory className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Industrial</span>
          </div>
          <div className="flex items-center">
            <Home className="text-[#d7b971] w-6 h-6 mr-2" />
            <span className="text-lg text-[#0A2647]">Apartments</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <p className="text-xl text-[#0A2647] mb-6">
            At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota.
          </p>
          <p className="text-xl text-[#0A2647]">
            By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={TrendingDown}
              title="17.9% Average Reduction"
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
  <div className="bg-[#324E6E] text-white p-4 rounded-lg">
    <Icon className="text-[#d7b971] mb-2 h-8 w-8" />
    <h4 className="text-lg font-semibold mb-1">{title}</h4>
    <p className="text-sm">{description}</p>
  </div>
);

export default AboutInsightSection;