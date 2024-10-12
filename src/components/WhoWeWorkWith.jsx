import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Building2, Factory, Home } from 'lucide-react';
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

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1E3A5F] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
    <div className="container mx-auto px-8 md:px-16 relative z-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">Minnesota Property Tax Appeal Services</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Minnesota Assessment Appeal<br />Property Types</h3>
          <div className="bg-gradient-to-br from-[#324E6E] to-[#4A6D8C] rounded-lg p-4 shadow-lg">
            <PropertyTypeAccordion />
          </div>
        </div>
        <div className="max-w-md mx-auto">
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