import React from 'react';
import { TrendingDown, CircleDollarSign, Clock, CheckCircle } from 'lucide-react';
import Sticker from './Sticker';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "2024 Average Appeal Reduction" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label, isFirst }) => (
  <div className="mb-6 relative">
    {isFirst && (
      <div className="absolute top-0 right-0">
        <Sticker color="blue" text="Best in Market" />
      </div>
    )}
    <div className="flex items-start">
      <Icon className="text-[#d7b971] mr-4 h-12 w-12 mt-1" />
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
      <h3 className="text-2xl font-semibold text-white text-center mb-6">Insight's YTD Appeal Statistics</h3>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default AppealStatsInfographic;