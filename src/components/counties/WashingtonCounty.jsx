import React from 'react';

const WashingtonCounty = () => {
  const cities = [
    'Woodbury', 'Cottage Grove', 'Oakdale', 'Stillwater', 'Forest Lake',
    'Hugo', 'Mahtomedi', 'Lake Elmo', 'Newport', 'St. Paul Park',
    'Bayport', 'Scandia'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default WashingtonCounty;