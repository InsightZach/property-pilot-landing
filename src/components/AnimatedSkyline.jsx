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
      {[...Array(100)].map((_, i) => (
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
      
      {/* Minneapolis Skyline */}
      <g className="buildings">
        {/* IDS Center */}
        <rect x="400" y="200" width="80" height="600" fill="#0E3A5D" />
        <polygon points="400,200 440,100 480,200" fill="#0E3A5D" />
        
        {/* Capella Tower */}
        <rect x="520" y="250" width="70" height="550" fill="#0C2D4A" />
        <polygon points="520,250 555,180 590,250" fill="#0C2D4A" />
        
        {/* Wells Fargo Center */}
        <rect x="640" y="280" width="90" height="520" fill="#0E3A5D" />
        <polygon points="640,280 685,220 730,280" fill="#0E3A5D" />
        
        {/* 225 South Sixth */}
        <rect x="780" y="300" width="100" height="500" fill="#0C2D4A" />
        <rect x="805" y="250" width="50" height="50" fill="#0C2D4A" />
        
        {/* US Bank Plaza */}
        <rect x="930" y="350" width="70" height="450" fill="#0E3A5D" />
        
        {/* Campbell Mithun Tower */}
        <rect x="1050" y="380" width="60" height="420" fill="#0C2D4A" />
        
        {/* Foshay Tower */}
        <rect x="1160" y="400" width="40" height="400" fill="#0E3A5D" />
        <polygon points="1160,400 1180,380 1200,400" fill="#0E3A5D" />
      </g>
      
      {/* Animated windows */}
      <g className="windows">
        {[...Array(100)].map((_, i) => (
          <rect
            key={i}
            x={350 + Math.random() * 900}
            y={250 + Math.random() * 500}
            width="5"
            height="5"
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
        <rect x="-50" y="750" width="30" height="15" fill="#D4AF37">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-50 0"
            to="1490 0"
            dur="15s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
};

export default AnimatedSkyline;