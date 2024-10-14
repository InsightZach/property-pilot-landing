import React from 'react';

const DakotaCounty = () => {
  const cities = [
    'Burnsville', 'Eagan', 'Apple Valley', 'Lakeville', 'Inver Grove Heights',
    'Rosemount', 'Farmington', 'Hastings', 'South St. Paul', 'West St. Paul',
    'Mendota Heights', 'Savage (partially)'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default DakotaCounty;