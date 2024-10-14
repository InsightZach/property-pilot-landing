import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, CheckCircle } from 'lucide-react';

const AnimatedHeroIcons = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-end space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={iconVariants}>
        <TrendingDown className="w-12 h-12 text-[#d7b971]" />
      </motion.div>
      <motion.div variants={iconVariants}>
        <Clock className="w-12 h-12 text-[#d7b971]" />
      </motion.div>
      <motion.div variants={iconVariants}>
        <CheckCircle className="w-12 h-12 text-[#d7b971] animate-spin-slow" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeroIcons;