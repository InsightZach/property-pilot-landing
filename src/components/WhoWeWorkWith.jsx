import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Building2, Factory, Home, ChevronDown, MapPin } from 'lucide-react';
import HennepinCounty from './counties/HennepinCounty';
import RamseyCounty from './counties/RamseyCounty';
import DakotaCounty from './counties/DakotaCounty';
import AnokaCounty from './counties/AnokaCounty';
import WashingtonCounty from './counties/WashingtonCounty';
import ScottCounty from './counties/ScottCounty';
import CarverCounty from './counties/CarverCounty';
import GreaterMinnesota from './counties/GreaterMinnesota';

const ServiceIcon = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Icon className="text-[#d7b971] w-6 h-6" />
    <span className="text-lg text-white">{text}</span>
  </div>
);

const HorizontalAccordionItem = ({ icon: Icon, text, children, isOpen, onClick }) => (
  <div className="flex-1">
    <div className="bg-[#0A2647] bg-opacity-80 rounded-lg border border-white overflow-hidden">
      <button
        onClick={onClick}
        className={`w-full text-left p-4 flex items-center justify-between ${
          isOpen ? 'bg-opacity-100' : ''
        } transition-colors duration-200 hover:bg-opacity-100`}
      >
        <ServiceIcon icon={Icon} text={text} />
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''} text-[#d7b971]`} />
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  </div>
);

const HorizontalPropertyTypeAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <HorizontalAccordionItem
        icon={Building2}
        text="Commercial Appeal"
        isOpen={openItem === 'commercial'}
        onClick={() => toggleItem('commercial')}
      >
        <ul className="list-disc pl-6 text-white">
          <li>Office</li>
          <li>Retail</li>
          <li>Hotel</li>
        </ul>
      </HorizontalAccordionItem>
      <HorizontalAccordionItem
        icon={Factory}
        text="Industrial Appeal"
        isOpen={openItem === 'industrial'}
        onClick={() => toggleItem('industrial')}
      >
        <ul className="list-disc pl-6 text-white">
          <li>Manufacturing</li>
          <li>Warehouse</li>
          <li>Flex</li>
        </ul>
      </HorizontalAccordionItem>
      <HorizontalAccordionItem
        icon={Home}
        text="Apartment Appeal"
        isOpen={openItem === 'apartments'}
        onClick={() => toggleItem('apartments')}
      >
        <ul className="list-disc pl-6 text-white">
          <li>Portfolios</li>
          <li>50+ units</li>
          <li>Mixed Use</li>
        </ul>
      </HorizontalAccordionItem>
    </div>
  );
};

const HorizontalServiceLocationsAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const counties = [
    { name: 'Hennepin', component: HennepinCounty },
    { name: 'Ramsey', component: RamseyCounty },
    { name: 'Dakota', component: DakotaCounty },
    { name: 'Anoka', component: AnokaCounty },
    { name: 'Washington', component: WashingtonCounty },
    { name: 'Scott', component: ScottCounty },
    { name: 'Carver', component: CarverCounty },
    { name: 'Greater Minnesota', component: GreaterMinnesota },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {counties.map(({ name, component: CountyComponent }) => (
        <div key={name} className="flex-1">
          <div className="bg-[#0A2647] bg-opacity-80 rounded-lg border border-white overflow-hidden">
            <button
              onClick={() => toggleItem(name)}
              className={`w-full text-left p-4 flex items-center justify-between ${
                openItem === name ? 'bg-opacity-100' : ''
              } transition-colors duration-200 hover:bg-opacity-100`}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#d7b971] w-6 h-6" />
                <span className="text-lg text-white">{name === 'Greater Minnesota' ? name : `${name} County`}</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openItem === name ? 'transform rotate-180' : ''} text-[#d7b971]`} />
            </button>
            {openItem === name && (
              <div className="p-4">
                <CountyComponent />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const WhoWeWorkWith = () => (
  <section className="py-16 relative overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/Property-Tax-Consultant-working2.png')" }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-12 text-white shadow-text">Property Tax Appeal Services</h2>
      
      <div className="space-y-16">
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-6 text-left text-white shadow-text">Property Types</h3>
          <div className="bg-[#0A2647] bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
            <HorizontalPropertyTypeAccordion />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-6 text-left text-white shadow-text">Minnesota Service Locations</h3>
          <div className="bg-[#0A2647] bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
            <HorizontalServiceLocationsAccordion />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;