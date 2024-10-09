import React from 'react';

const AnimatedSkyline = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A2647" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Sky background */}
      <rect width="100%" height="100%" fill="url(#skyGradient)" />
      
      {/* Moon */}
      <circle cx="1200" cy="150" r="60" fill="#D4AF37" />
      <circle cx="1200" cy="150" r="100" fill="url(#moonGlow)" />
      
      {/* Stars */}
      {[...Array(150)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1440}
          cy={Math.random() * 400}
          r={Math.random() * 1.5 + 0.5}
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
        {[...Array(200)].map((_, i) => (
          <rect
            key={i}
            x={350 + Math.random() * 900}
            y={250 + Math.random() * 500}
            width="4"
            height="4"
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
      
      {/* Animated cars */}
      <g className="cars">
        {[...Array(3)].map((_, i) => (
          <g key={i}>
            <rect
              x="-50"
              y={740 + i * 20}
              width="30"
              height="10"
              fill={i % 2 === 0 ? "#D4AF37" : "#FFFFFF"}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-50 0"
                to="1490 0"
                dur={`${15 + i * 2}s`}
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="1490"
              y={750 + i * 20}
              width="30"
              height="10"
              fill={i % 2 === 0 ? "#FFFFFF" : "#D4AF37"}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-1540 0"
                dur={`${18 + i * 2}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </g>
      
      {/* Shooting star */}
      <g>
        <line x1="-100" y1="100" x2="0" y2="200" stroke="#FFFFFF" strokeWidth="2">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="1600 800"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="7s"
            repeatCount="indefinite"
          />
        </line>
      </g>
    </svg>
  );
};

export default AnimatedSkyline;