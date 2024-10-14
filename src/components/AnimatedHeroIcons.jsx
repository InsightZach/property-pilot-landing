import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroIcons = () => {
  const circles = [
    { cx: "5%", cy: "10%", r: 30 },
    { cx: "15%", cy: "30%", r: 20 },
    { cx: "25%", cy: "50%", r: 40 },
    { cx: "35%", cy: "70%", r: 15 },
    { cx: "50%", cy: "20%", r: 25 },
    { cx: "65%", cy: "60%", r: 35 },
    { cx: "75%", cy: "40%", r: 10 },
    { cx: "85%", cy: "80%", r: 45 },
    { cx: "95%", cy: "15%", r: 30 },
  ];

  return (
    <div className="relative w-full h-64 md:h-96">
      <svg
        viewBox="0 0 100 100"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {circles.map((circle, index) => (
          <motion.circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="#d7b971"
            opacity={0.8}
            animate={{
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedHeroIcons;