import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroIcons = () => {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut"
      }
    },
  };

  return (
    <div className="relative w-full h-64 md:h-96">
      <svg
        viewBox="0 0 200 200"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d7b971" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d7b971" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <motion.circle
          cx="100" cy="100" r="80"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M40,100 Q100,40 160,100 T40,100"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />

        {[40, 100, 160].map((cx, index) => (
          <motion.circle
            key={index}
            cx={cx} cy="100" r="5"
            fill="#d7b971"
            variants={circleVariants}
            custom={index}
            initial="hidden"
            animate="visible"
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedHeroIcons;