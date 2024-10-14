import React from 'react';

const ScottCounty = () => {
  const cities = [
    'Shakopee', 'Savage', 'Prior Lake', 'Jordan', 'Belle Plaine',
    'New Prague (partially)', 'Elko New Market', 'Credit River', 'Spring Lake', 'Sand Creek'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default ScottCounty;