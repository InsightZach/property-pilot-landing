import React from 'react';
import { CircleDollarSign, TrendingDown, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <Icon className="text-[#d7b971] mb-4 h-16 w-16" />
    <span className="text-4xl font-bold text-white mb-2">{value}</span>
    <span className="text-lg text-white/80 text-center px-4">{label}</span>
  </div>
);

const AppealStatsInfographic = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-transparent">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default AppealStatsInfographic;