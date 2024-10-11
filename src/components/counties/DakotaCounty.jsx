import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const DakotaCounty = () => (
  <AccordionItem value="dakota">
    <AccordionTrigger className="text-white text-lg">
      <div className="flex items-center">
        <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
        Dakota County
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-white">
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Burnsville</li>
          <li>Eagan</li>
          <li>Apple Valley</li>
          <li>Lakeville</li>
          <li>Inver Grove Heights</li>
          <li>Rosemount</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Farmington</li>
          <li>Hastings</li>
          <li>South St. Paul</li>
          <li>West St. Paul</li>
          <li>Mendota Heights</li>
          <li>Savage (partially)</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default DakotaCounty;