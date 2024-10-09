import React from 'react';

const AnimatedSkyline = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A2647" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </linearGradient>
      </defs>
      
      {/* Sky background */}
      <rect width="100%" height="100%" fill="url(#skyGradient)" />
      
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1440}
          cy={Math.random() * 400}
          r={Math.random() * 2}
          fill="#ffffff"
          opacity={Math.random() * 0.8 + 0.2}
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={`${Math.random() * 3 + 2}s`}
            repeatCount="indefinite"
            begin={`${Math.random() * 3}s`}
          />
        </circle>
      ))}
      
      {/* Buildings */}
      <g className="buildings">
        <rect x="100" y="300" width="100" height="500" fill="#0E3A5D" />
        <rect x="220" y="400" width="80" height="400" fill="#0C2D4A" />
        <rect x="320" y="350" width="120" height="450" fill="#0E3A5D" />
        <rect x="460" y="450" width="90" height="350" fill="#0C2D4A" />
        <rect x="570" y="380" width="110" height="420" fill="#0E3A5D" />
        <rect x="700" y="420" width="70" height="380" fill="#0C2D4A" />
        <rect x="790" y="350" width="130" height="450" fill="#0E3A5D" />
        <rect x="940" y="400" width="100" height="400" fill="#0C2D4A" />
        <rect x="1060" y="380" width="90" height="420" fill="#0E3A5D" />
        <rect x="1170" y="450" width="120" height="350" fill="#0C2D4A" />
        <rect x="1310" y="400" width="80" height="400" fill="#0E3A5D" />
      </g>
      
      {/* Animated windows */}
      <g className="windows">
        {[...Array(50)].map((_, i) => (
          <rect
            key={i}
            x={100 + Math.random() * 1240}
            y={350 + Math.random() * 400}
            width="10"
            height="10"
            fill="#D4AF37"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${Math.random() * 4 + 2}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 5}s`}
            />
          </rect>
        ))}
      </g>
      
      {/* Animated car */}
      <g className="car">
        <rect x="-50" y="750" width="40" height="20" fill="#D4AF37">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-50 0"
            to="1490 0"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
};

export default AnimatedSkyline;