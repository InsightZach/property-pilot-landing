import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const WashingtonCounty = () => (
  <AccordionItem value="washington">
    <AccordionTrigger>Washington County</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Woodbury</li>
          <li>Cottage Grove</li>
          <li>Oakdale</li>
          <li>Stillwater</li>
          <li>Forest Lake</li>
          <li>Hugo</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Mahtomedi</li>
          <li>Lake Elmo</li>
          <li>Newport</li>
          <li>St. Paul Park</li>
          <li>Bayport</li>
          <li>Scandia</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default WashingtonCounty;