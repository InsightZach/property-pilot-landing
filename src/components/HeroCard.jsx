import React from 'react';
import { TrendingDown, DollarSign, Award } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-sm mx-auto">
      <div className="flex flex-col items-center justify-center mb-6">
        <Award className="text-[#d7b971] w-16 h-16 mb-2" />
        <h3 className="text-2xl font-bold text-white">Best in Market</h3>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <TrendingDown className="text-[#d7b971] w-12 h-12 mb-2" />
          <p className="text-3xl font-bold text-white">17.9%</p>
          <p className="text-sm text-white/80">Average Reduction</p>
        </div>
        <div className="flex flex-col items-center">
          <DollarSign className="text-[#d7b971] w-12 h-12 mb-2" />
          <p className="text-3xl font-bold text-white">$49k</p>
          <p className="text-sm text-white/80">Savings per Property</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;