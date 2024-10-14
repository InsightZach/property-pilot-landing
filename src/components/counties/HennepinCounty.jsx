import React from 'react';

const HennepinCounty = () => {
  const cities = [
    'Minneapolis', 'Bloomington', 'Plymouth', 'Maple Grove', 'Minnetonka',
    'Eden Prairie', 'Edina', 'St. Louis Park', 'Brooklyn Park', 'Richfield',
    'Golden Valley', 'Hopkins', 'Robbinsdale', 'New Hope', 'Champlin', 'Wayzata'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default HennepinCounty;