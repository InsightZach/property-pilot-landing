import React from 'react';
import { CircleDollarSign, TrendingDown, Clock, CheckCircle } from 'lucide-react';

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
    <Icon className="text-[#d7b971] mb-2 h-8 w-8" />
    <span className="text-2xl font-bold text-white">{value}</span>
    <span className="text-sm text-white/80">{label}</span>
  </div>
);

const AppealStatsInfographic = () => (
  <div className="grid grid-cols-2 gap-4">
    <StatItem icon={TrendingDown} value="17.9%" label="Reduction Average" />
    <StatItem icon={CircleDollarSign} value="$49k" label="Tax Savings per Property" />
    <StatItem icon={Clock} value="90-day" label="Appeal Duration Average" />
    <StatItem icon={CheckCircle} value="100%" label="Appeal Success Rate" />
  </div>
);

export default AppealStatsInfographic;