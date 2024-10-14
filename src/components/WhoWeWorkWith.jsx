import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Building2, Factory, Home, ChevronDown } from 'lucide-react';
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
    <span className="text-lg">{text}</span>
  </div>
);

const PropertyTypeAccordion = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="commercial">
      <AccordionTrigger className="text-white text-lg">
        <ServiceIcon icon={Building2} text="Commercial Appeal" />
      </AccordionTrigger>
      <AccordionContent className="text-white">
        <ul className="list-disc pl-6">
          <li>Office</li>
          <li>Retail</li>
          <li>Hotel</li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="industrial">
      <AccordionTrigger className="text-white text-lg">
        <ServiceIcon icon={Factory} text="Industrial Appeal" />
      </AccordionTrigger>
      <AccordionContent className="text-white">
        <ul className="list-disc pl-6">
          <li>Manufacturing</li>
          <li>Warehouse</li>
          <li>Flex</li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="apartments">
      <AccordionTrigger className="text-white text-lg">
        <ServiceIcon icon={Home} text="Apartment Appeal" />
      </AccordionTrigger>
      <AccordionContent className="text-white">
        <ul className="list-disc pl-6">
          <li>Portfolios</li>
          <li>50+ units</li>
          <li>Mixed Use</li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const HorizontalAccordionItem = ({ icon: Icon, text, children, isOpen, onClick }) => (
  <div className="flex-1">
    <button
      onClick={onClick}
      className={`w-full text-left p-4 flex items-center justify-between ${
        isOpen ? 'bg-[#4A6D8C]' : 'bg-[#324E6E]'
      } rounded-t-lg transition-colors duration-200`}
    >
      <ServiceIcon icon={Icon} text={text} />
      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="bg-[#4A6D8C] p-4 rounded-b-lg">
        {children}
      </div>
    )}
  </div>
);

const HorizontalPropertyTypeAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex space-x-4">
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

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1E3A5F] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">Minnesota Property Tax Appeal Services</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="max-w-md mx-auto w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Minnesota Assessment Appeal<br />Property Types</h3>
          <div className="bg-gradient-to-br from-[#324E6E] to-[#4A6D8C] rounded-lg p-4 shadow-lg">
            <div className="hidden md:block">
              <HorizontalPropertyTypeAccordion />
            </div>
            <div className="md:hidden">
              <PropertyTypeAccordion />
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Minnesota Assessment Appeal<br />Service Locations</h3>
          <div className="bg-gradient-to-br from-[#324E6E] to-[#4A6D8C] rounded-lg p-4 shadow-lg">
            <Accordion type="single" collapsible className="w-full text-white">
              <HennepinCounty />
              <RamseyCounty />
              <DakotaCounty />
              <AnokaCounty />
              <WashingtonCounty />
              <ScottCounty />
              <CarverCounty />
              <GreaterMinnesota />
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;