import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const CarverCounty = () => (
  <AccordionItem value="carver">
    <AccordionTrigger className="text-white text-lg">
      <div className="flex items-center">
        <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
        Carver County
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-white">
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