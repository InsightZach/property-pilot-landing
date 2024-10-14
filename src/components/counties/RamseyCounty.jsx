import React from 'react';

const RamseyCounty = () => {
  const cities = [
    'St. Paul', 'Roseville', 'Maplewood', 'White Bear Lake', 'Shoreview',
    'New Brighton', 'Mounds View', 'Vadnais Heights', 'North St. Paul',
    'Arden Hills', 'Little Canada', 'Falcon Heights'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default RamseyCounty;