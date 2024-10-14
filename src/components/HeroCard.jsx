import React from 'react';
import { TrendingDown } from 'lucide-react';
import Sticker from './Sticker';

const HeroCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-sm mx-auto relative">
      <div className="absolute top-2 right-2">
        <Sticker color="blue" text="Best in Market" />
      </div>
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