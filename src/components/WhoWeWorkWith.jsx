import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
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

const WhoWeWorkWith = () => (
  <section className="py-16 bg-white text-[#0A2647] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Minnesota Property Tax Appeal Services</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Is Your Property Over-Assessed?</h3>
          <p className="text-lg mb-4">If you believe your property is:</p>
          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Over-assessed</li>
            <li>Causing you to pay too much in taxes</li>
            <li>Not being fairly valued</li>
          </ul>
          <p className="text-lg mb-4">We offer free assessment reviews to uncover potential savings. Our process identifies areas where you could benefit from a tax reduction, saving you money year after year.</p>
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Property Types We Service</h3>
          <div className="space-y-4 mb-8">
            <ServiceIcon icon={Building2} text="Commercial Property Tax Appeals" />
            <ServiceIcon icon={Factory} text="Industrial Property Tax Appeals" />
            <ServiceIcon icon={Home} text="Apartment Property Tax Appeals" />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mb-16">
        {['Commercial', 'Industrial', 'Apartments', 'Minnesota'].map((type) => (
          <Card key={type} className="bg-white/80 backdrop-blur-sm border-[#d7b971] flex-1">
            <CardContent className="p-4">
              <img src={`/${type}.svg`} alt={`${type} Property Tax Appeals in Minnesota`} className="w-full h-24 object-contain" />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-br from-[#324E6E] to-[#4A6D8C] rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-8 text-center text-white">Minnesota Property Tax Appeal Service by Location | Insight Property Tax</h3>
        <Accordion type="single" collapsible className="w-full">
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
  </section>
);

export default WhoWeWorkWith;