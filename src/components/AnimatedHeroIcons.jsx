import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroIcons = () => {
  const circles = [
    { cx: "10%", cy: "20%", r: 150 },
    { cx: "50%", cy: "0%", r: 200 },
    { cx: "90%", cy: "30%", r: 180 },
    { cx: "30%", cy: "70%", r: 160 },
    { cx: "70%", cy: "90%", r: 140 },
  ];

  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {circles.map((circle, index) => (
          <motion.circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="#d7b971"
            opacity={0.15}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedHeroIcons;