import React from 'react';
import { TrendingDown, DollarSign, Award } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-sm mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Award className="text-[#d7b971] w-8 h-8 mr-2" />
        <h3 className="text-xl font-bold text-white">Best in Market</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <TrendingDown className="text-[#d7b971] w-6 h-6 mr-2" />
          <div>
            <p className="text-2xl font-bold text-white">17.9%</p>
            <p className="text-sm text-white/80">Average Reduction</p>
          </div>
        </div>
        <div className="flex items-center">
          <DollarSign className="text-[#d7b971] w-6 h-6 mr-2" />
          <div>
            <p className="text-2xl font-bold text-white">$49k</p>
            <p className="text-sm text-white/80">Savings per Property</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/90">
        In 2024, we've achieved significant assessment reductions, saving our clients substantially.
      </p>
    </div>
  );
};

export default HeroCard;