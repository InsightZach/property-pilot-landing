import React from 'react';
import { TrendingDown, CircleDollarSign, Clock, CheckCircle } from 'lucide-react';
import Sticker from './Sticker';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Appeal Reduction Average" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="mb-6 relative">
    <div className="flex items-start">
      <Icon className="text-[#d7b971] mr-4 h-12 w-12 mt-1 flex-shrink-0" />
      <div>
        <span className="text-4xl font-bold text-white">{value}</span>
        <p className="text-sm text-white/80 mt-1">{label}</p>
      </div>
    </div>
  </div>
);

const AppealStatsInfographic = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-semibold text-white">Insight's YTD Appeal Statistics</h3>
        <Sticker color="blue" text="Best in Market" />
      </div>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AppealStatsInfographic;