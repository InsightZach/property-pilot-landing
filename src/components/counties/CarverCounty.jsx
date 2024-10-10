import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const CarverCounty = () => (
  <AccordionItem value="carver">
    <AccordionTrigger>Carver County</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Chaska</li>
          <li>Chanhassen</li>
          <li>Victoria</li>
          <li>Waconia</li>
          <li>Carver</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Watertown</li>
          <li>Mayer</li>
          <li>Norwood Young America</li>
          <li>Cologne</li>
          <li>Hamburg</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default CarverCounty;