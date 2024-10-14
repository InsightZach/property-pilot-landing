import React from 'react';
import { TrendingDown, CircleDollarSign, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <Icon className="text-[#d7b971] mb-2 h-8 w-8" />
    <span className="text-2xl font-bold text-white mb-1">{value}</span>
    <span className="text-sm text-white/80 text-center">{label}</span>
  </div>
);

const AppealStatsInfographic = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default AppealStatsInfographic;