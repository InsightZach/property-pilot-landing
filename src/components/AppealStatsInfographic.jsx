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
    className="flex flex-col items-center justify-center h-full w-full"
  >
    <Icon className="text-[#d7b971] mb-4 h-16 w-16" />
    <span className="text-4xl font-bold text-white mb-2">{value}</span>
    <span className="text-lg text-white/80 text-center px-4">{label}</span>
  </motion.div>
);

const AppealStatsInfographic = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 7000); // Change stat every 7 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A2647] p-8 rounded-lg h-full w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <StatItem key={currentStatIndex} {...stats[currentStatIndex]} />
      </AnimatePresence>
    </div>
  );
};

export default AppealStatsInfographic;