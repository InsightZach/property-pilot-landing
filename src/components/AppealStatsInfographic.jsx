import React from 'react';
import { TrendingDown, CircleDollarSign, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <Icon className="text-[#d7b971] mr-3 h-10 w-10" />
      <span className="text-3xl font-bold text-white">{value}</span>
    </div>
    <span className="text-lg text-white/80">{label}</span>
  </div>
);

const AppealStatsInfographic = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-white text-center mb-6">Insight's YTD Appeal Statistics</h3>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AppealStatsInfographic;