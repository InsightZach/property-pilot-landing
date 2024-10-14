import React from 'react';
import { TrendingDown, Award } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-sm mx-auto">
      <div className="flex flex-col items-center justify-center mb-8">
        <Award className="text-[#d7b971] w-24 h-24 mb-4" />
        <h3 className="text-2xl font-bold text-white">Best in Market</h3>
      </div>
      <div className="flex flex-col items-center">
        <TrendingDown className="text-[#d7b971] w-20 h-20 mb-4" />
        <p className="text-4xl font-bold text-white">17.9%</p>
        <p className="text-lg text-white/80">Average Reduction</p>
      </div>
    </div>
  );
};

export default HeroCard;