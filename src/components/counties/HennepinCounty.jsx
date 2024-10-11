import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const HennepinCounty = () => (
  <AccordionItem value="hennepin">
    <AccordionTrigger className="text-white text-lg">
      <div className="flex items-center">
        <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
        Hennepin County
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-white">
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Minneapolis</li>
          <li>Bloomington</li>
          <li>Plymouth</li>
          <li>Maple Grove</li>
          <li>Minnetonka</li>
          <li>Eden Prairie</li>
          <li>Edina</li>
          <li>St. Louis Park</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Brooklyn Park</li>
          <li>Richfield</li>
          <li>Golden Valley</li>
          <li>Hopkins</li>
          <li>Robbinsdale</li>
          <li>New Hope</li>
          <li>Champlin</li>
          <li>Wayzata</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default HennepinCounty;