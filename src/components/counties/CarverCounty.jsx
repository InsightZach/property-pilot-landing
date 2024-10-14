import React from 'react';

const CarverCounty = () => {
  const cities = [
    'Chaska', 'Chanhassen', 'Victoria', 'Waconia', 'Carver',
    'Watertown', 'Mayer', 'Norwood Young America', 'Cologne', 'Hamburg'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default CarverCounty;