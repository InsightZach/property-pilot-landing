import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Building2, Factory, Home, ChevronDown, MapPin, BookOpen, GavelIcon, ScaleIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const PropertyTypeCard = ({ icon: Icon, text, children }) => (
  <Card className="bg-[#0A2647] bg-opacity-80 text-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="text-[#d7b971] w-6 h-6" />
        <span>{text}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-6">
        {children}
      </ul>
    </CardContent>
  </Card>
);

const AppealServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-[#0A2647] bg-opacity-80 text-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="text-[#d7b971] w-6 h-6" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-left">{description}</p>
    </CardContent>
  </Card>
);

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
          <div className="bg-[#0A2647] bg-opacity-80 rounded-lg overflow-hidden">
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
              <div className="p-4 text-white">
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
      className="absolute inset-0 bg-cover bg-center opacity-0"
      style={{ backgroundImage: "url('/Property-Tax-Consultant-working2.png')" }}
    ></div>
    <div className="absolute inset-0 bg-white bg-opacity-30"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-12 text-white shadow-text">Property Tax Appeal Services</h2>
      
      <div className="w-full space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-left text-white shadow-text">Appeal Service Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AppealServiceCard 
              icon={BookOpen}
              title="Open Book Appeals"
              description="During an Open Book Appeal, we work directly with assessors to resolve disputes over your property's assessed value. We present compelling evidence and negotiate on your behalf, ensuring that your property is fairly assessed."
            />
            <AppealServiceCard 
              icon={GavelIcon}
              title="Local Board Appeals"
              description="We represent you before your Local Board of Appeal and Equalization. Our team prepares a detailed case, utilizing property data, market conditions, and comparable assessments to advocate for a reduction."
            />
            <AppealServiceCard 
              icon={ScaleIcon}
              title="Tax Court Petitions"
              description="If your appeal cannot be resolved through informal processes, we escalate the case to Minnesota Tax Court. We manage the entire process, from filing the petition to settlement."
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-left text-white shadow-text">Property Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PropertyTypeCard icon={Building2} text="Commercial Appeal">
              <li>Office</li>
              <li>Retail</li>
              <li>Hotel</li>
            </PropertyTypeCard>
            <PropertyTypeCard icon={Factory} text="Industrial Appeal">
              <li>Manufacturing</li>
              <li>Warehouse</li>
              <li>Flex</li>
            </PropertyTypeCard>
            <PropertyTypeCard icon={Home} text="Apartment Appeal">
              <li>Portfolios</li>
              <li>50+ units</li>
              <li>Mixed Use</li>
            </PropertyTypeCard>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-left text-white shadow-text">Minnesota Service Locations</h3>
          <HorizontalServiceLocationsAccordion />
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;