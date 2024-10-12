import React, { useState, useEffect } from 'react';
import { CircleDollarSign, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { icon: TrendingDown, value: "17.9%", label: "Reduction Average", color: "#0A2647" },
  { icon: CircleDollarSign, value: "$49k", label: "Tax Savings per Property", color: "#1E3A5F" },
  { icon: Clock, value: "90-day", label: "Appeal Duration Average", color: "#324E6E" },
  { icon: CheckCircle, value: "100%", label: "Appeal Success Rate", color: "#d7b971" }
];

const StatItem = ({ icon: Icon, value, label, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center justify-center h-full w-full relative"
  >
    <motion.div
      className="absolute inset-0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
      </svg>
    </motion.div>
    <Icon className="text-[#d7b971] mb-4 h-16 w-16 z-10" />
    <motion.span
      className="text-4xl font-bold text-white mb-2 z-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {value}
    </motion.span>
    <motion.span
      className="text-lg text-white/80 text-center z-10 px-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 1 }}
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
    }, 7000); // Change stat every 7 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647] to-[#324E6E] opacity-50"></div>
      <AnimatePresence mode="wait">
        <StatItem key={currentStatIndex} {...stats[currentStatIndex]} />
      </AnimatePresence>
    </div>
  );
};

export default AppealStatsInfographic;