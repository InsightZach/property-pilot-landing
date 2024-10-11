import React from 'react';
import { TrendingDown, Clock, CheckCircle } from 'lucide-react';

const AboutInsightSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#0A2647]">Expert Minnesota Property Tax Appeals</h2>
      <div className="max-w-3xl mx-auto mb-12 text-left">
        <p className="text-lg mb-4">
          At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota.
        </p>
        <p className="text-lg mb-8">
          By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
        </p>
        <p className="text-lg mb-6">
          <span className="font-bold">What our clients receive:</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard
          icon={TrendingDown}
          title="17.9% Average Reduction"
          description="In 2024, we've achieved significant assessment reductions, saving our clients $49k per property."
          badge="Best in Market"
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
      </div>
    </div>
  </section>
);

const StatCard = ({ icon: Icon, title, description, badge }) => (
  <div className="bg-[#324E6E] text-white p-6 rounded-lg relative">
    {badge && (
      <span className="absolute top-2 right-2 bg-[#d7b971] text-[#0A2647] text-xs font-bold py-1 px-2 rounded">
        {badge}
      </span>
    )}
    <Icon className="text-[#d7b971] mb-4 h-12 w-12 mx-auto" />
    <h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
    <p className="text-sm text-center">{description}</p>
  </div>
);

export default AboutInsightSection;