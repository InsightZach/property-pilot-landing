import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const DakotaCounty = () => (
  <AccordionItem value="dakota">
    <AccordionTrigger>Dakota County</AccordionTrigger>
    <AccordionContent>
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