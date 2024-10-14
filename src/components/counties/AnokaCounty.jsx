import React from 'react';

const AnokaCounty = () => {
  const cities = [
    'Blaine', 'Coon Rapids', 'Andover', 'Fridley', 'Columbia Heights',
    'Anoka', 'Ramsey', 'Ham Lake', 'Oak Grove', 'Lino Lakes',
    'Spring Lake Park', 'East Bethel'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default AnokaCounty;