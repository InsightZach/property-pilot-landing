import React from 'react';
import { TrendingDown } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-sm mx-auto">
      <div className="flex items-center">
        <TrendingDown className="text-[#d7b971] w-16 h-16 mr-4" />
        <div>
          <p className="text-4xl font-bold text-white">17.9%</p>
          <p className="text-lg text-white/80">Average Reduction</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;