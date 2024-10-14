import React from 'react';

const GreaterMinnesota = () => {
  const cities = [
    'Albert Lea', 'Alexandria', 'Austin', 'Bemidji', 'Brainerd',
    'Duluth', 'Faribault', 'Grand Rapids', 'Hutchinson', 'Mankato',
    'Monticello', 'Moorhead', 'New Ulm', 'Northfield', 'Owatonna',
    'Red Wing', 'Rochester', 'St. Cloud', 'St. Michael', 'Willmar', 'Winona'
  ];

  return (
    <ul className="list-disc pl-6 space-y-1">
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default GreaterMinnesota;