import React from 'react';

const HeroImage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A2647" />
            <stop offset="100%" stopColor="#1E3A5F" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="400" height="300" fill="url(#skyGradient)" />

        {/* Buildings */}
        <g>
          <rect x="50" y="100" width="60" height="200" fill="#0E3A5D" />
          <rect x="120" y="150" width="40" height="150" fill="#0C2D4A" />
          <rect x="170" y="80" width="70" height="220" fill="#0E3A5D" />
          <rect x="250" y="120" width="50" height="180" fill="#0C2D4A" />
          <rect x="310" y="70" width="40" height="230" fill="#0E3A5D" />
        </g>

        {/* Magnifying glass */}
        <g>
          <circle cx="200" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="10" />
          <line x1="240" y1="140" x2="280" y2="180" stroke="#D4AF37" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* Animated stars */}
        <g>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 400}
              cy={Math.random() * 150}
              r="1.5"
              fill="#FFFFFF"
              opacity="0.7"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.7;0.2;0.7"
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 3}s`}
              />
            </circle>
          ))}
        </g>

        {/* Animated dollar sign */}
        <text
          x="200"
          y="110"
          fontSize="40"
          fill="#D4AF37"
          textAnchor="middle"
          filter="url(#glow)"
        >
          $
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="3s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -10; 0 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};

export default HeroImage;