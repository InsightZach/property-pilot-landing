import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, CheckCircle } from 'lucide-react';

const AnimatedHeroIcons = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  const spinVariants = {
    hidden: { opacity: 0, rotate: 180 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="flex flex-col items-end space-y-8">
      <motion.div
        custom={0}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <TrendingDown className="w-16 h-16 text-[#d7b971]" />
      </motion.div>
      <motion.div
        custom={1}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <Clock className="w-16 h-16 text-[#d7b971]" />
      </motion.div>
      <motion.div
        variants={spinVariants}
        initial="hidden"
        animate="visible"
      >
        <CheckCircle className="w-16 h-16 text-[#d7b971]" />
      </motion.div>
    </div>
  );
};

export default AnimatedHeroIcons;