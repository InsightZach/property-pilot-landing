import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const GreaterMinnesota = () => {
  const cities = [
    'Albert Lea',
    'Alexandria',
    'Austin',
    'Bemidji',
    'Brainerd',
    'Duluth',
    'Faribault',
    'Grand Rapids',
    'Hutchinson',
    'Mankato',
    'Monticello',
    'Moorhead',
    'New Ulm',
    'Northfield',
    'Owatonna',
    'Red Wing',
    'Rochester',
    'St. Cloud',
    'St. Michael',
    'Willmar',
    'Winona'
  ];

  const midpoint = Math.ceil(cities.length / 2);

  return (
    <AccordionItem value="greater-minnesota">
      <AccordionTrigger className="text-white text-lg">
        <div className="flex items-center">
          <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
          Greater Minnesota
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-white">
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc pl-6">
            {cities.slice(0, midpoint).map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6">
            {cities.slice(midpoint).map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default GreaterMinnesota;