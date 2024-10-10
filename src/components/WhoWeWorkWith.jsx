import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Factory, Home } from 'lucide-react';

const ServiceIcon = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Icon className="text-[#d7b971] w-6 h-6" />
    <span className="text-lg font-medium">{text}</span>
  </div>
);

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Minnesota Property Tax Appeal Services</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Is Your Property Over-Assessed?</h3>
          <p className="text-lg mb-4">If you believe your property is:</p>
          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>over-assessed</li>
            <li>You are paying too much in taxes</li>
            <li>or you're unsure whether it's being fairly valued</li>
          </ul>
          <p className="text-lg mb-4">we offer free assessment reviews to uncover potential savings. Our process identifies areas where you could benefit from a tax reduction, saving you money year after year.</p>
          <p className="text-lg mb-4">At Insight Property Tax, we specialize in helping commercial, industrial, and apartment property owners and tenants across Minnesota, including the Twin Cities metro area and Greater Minnesota, reduce their property tax burden. Our expert team provides tailored solutions to ensure your property is fairly assessed.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Maximize Your Savings</h3>
          <p className="text-lg mb-4">We simplify the property tax appeal process with a results-driven approach designed for Minnesota property owners. Whether you own commercial real estate, an industrial facility, or an apartment building, our proven methods help you reduce tax costs and increase your profits.</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {['Commercial', 'Industrial', 'Apartments', 'Minnesota'].map((type) => (
              <Card key={type} className="bg-white/10 backdrop-blur-md border-[#d7b971]">
                <CardContent className="p-4">
                  <img src={`/${type}.svg`} alt={`${type} Property Tax Appeals in Minnesota`} className="w-full h-24 object-contain" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="specialized-services">
          <AccordionTrigger className="text-xl font-semibold">Our Specialized Services Include</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <ServiceIcon icon={Building2} text="Commercial Property Tax Appeals in Minnesota" />
              <ServiceIcon icon={Factory} text="Industrial Property Tax Appeals in Minnesota" />
              <ServiceIcon icon={Home} text="Apartment Property Tax Appeals in Minnesota" />
            </div>
            <p className="mt-4">Let us help you ensure your property is fairly assessed, reduce your taxes, and maximize your savings.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default WhoWeWorkWith;