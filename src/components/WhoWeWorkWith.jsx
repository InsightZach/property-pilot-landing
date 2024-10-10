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
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Specialized Services Include</h3>
        <div className="space-y-4 bg-[#0A2647] p-6 rounded-lg">
          <ServiceIcon icon={Building2} text="Commercial Property Tax Appeals in Minnesota" />
          <ServiceIcon icon={Factory} text="Industrial Property Tax Appeals in Minnesota" />
          <ServiceIcon icon={Home} text="Apartment Property Tax Appeals in Minnesota" />
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Service Areas</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hennepin">
            <AccordionTrigger>Hennepin County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Minneapolis</li>
                <li>Bloomington</li>
                <li>Brooklyn Park</li>
                <li>Plymouth</li>
                <li>Maple Grove</li>
                <li>Minnetonka</li>
                <li>Eden Prairie</li>
                <li>Coon Rapids</li>
                <li>Blaine</li>
                <li>Edina</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ramsey">
            <AccordionTrigger>Ramsey County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>St. Paul</li>
                <li>Roseville</li>
                <li>Maplewood</li>
                <li>White Bear Lake</li>
                <li>Shoreview</li>
                <li>New Brighton</li>
                <li>Mounds View</li>
                <li>Vadnais Heights</li>
                <li>North St. Paul</li>
                <li>Arden Hills</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="dakota">
            <AccordionTrigger>Dakota County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Burnsville</li>
                <li>Eagan</li>
                <li>Apple Valley</li>
                <li>Lakeville</li>
                <li>Inver Grove Heights</li>
                <li>Rosemount</li>
                <li>Farmington</li>
                <li>Hastings</li>
                <li>South St. Paul</li>
                <li>West St. Paul</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="anoka">
            <AccordionTrigger>Anoka County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Blaine</li>
                <li>Coon Rapids</li>
                <li>Andover</li>
                <li>Fridley</li>
                <li>Columbia Heights</li>
                <li>Anoka</li>
                <li>Ramsey</li>
                <li>Ham Lake</li>
                <li>Oak Grove</li>
                <li>Lino Lakes</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="washington">
            <AccordionTrigger>Washington County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Woodbury</li>
                <li>Cottage Grove</li>
                <li>Oakdale</li>
                <li>Stillwater</li>
                <li>Forest Lake</li>
                <li>Hugo</li>
                <li>Mahtomedi</li>
                <li>Lake Elmo</li>
                <li>Newport</li>
                <li>St. Paul Park</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="scott">
            <AccordionTrigger>Scott County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Shakopee</li>
                <li>Savage</li>
                <li>Prior Lake</li>
                <li>Jordan</li>
                <li>Belle Plaine</li>
                <li>New Prague</li>
                <li>Elko New Market</li>
                <li>Credit River</li>
                <li>Spring Lake</li>
                <li>Sand Creek</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="carver">
            <AccordionTrigger>Carver County</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Chaska</li>
                <li>Chanhassen</li>
                <li>Victoria</li>
                <li>Waconia</li>
                <li>Carver</li>
                <li>Watertown</li>
                <li>Mayer</li>
                <li>Norwood Young America</li>
                <li>Cologne</li>
                <li>Hamburg</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;