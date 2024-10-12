import React, { useState, useEffect } from 'react';
import { CircleDollarSign, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average", color: "#FF6B6B" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property", color: "#4ECDC4" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average", color: "#45B7D1" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate", color: "#98D8C8" }
];

const StatItem = ({ icon: Icon, value, label, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center h-full relative"
  >
    <motion.div
      className="absolute"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
        />
      </svg>
    </motion.div>
    <Icon className="text-[#d7b971] mb-2 h-12 w-12 z-10" />
    <motion.span
      className="text-3xl font-bold text-white mb-1 z-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {value}
    </motion.span>
    <motion.span
      className="text-sm text-white/80 text-center z-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {label}
    </motion.span>
  </motion.div>
);

const AppealStatsInfographic = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 5000); // Change stat every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#324E6E]/90 p-6 rounded-lg shadow-lg h-64 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] to-[#2c4a6a] opacity-50"></div>
      <AnimatePresence mode="wait">
        <StatItem key={currentStatIndex} {...stats[currentStatIndex]} />
      </AnimatePresence>
    </div>
  );
};

export default AppealStatsInfographic;