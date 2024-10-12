import React, { useState, useEffect } from 'react';
import { CircleDollarSign, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate" }
];

const StatItem = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center h-full"
  >
    <Icon className="text-[#d7b971] mb-2 h-12 w-12" />
    <span className="text-3xl font-bold text-white mb-1">{value}</span>
    <span className="text-sm text-white/80 text-center">{label}</span>
  </motion.div>
);

const AppealStatsInfographic = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // Change stat every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#324E6E]/90 p-6 rounded-lg shadow-lg h-48 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <StatItem key={currentStatIndex} {...stats[currentStatIndex]} />
      </AnimatePresence>
    </div>
  );
};

export default AppealStatsInfographic;