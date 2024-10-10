import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const RamseyCounty = () => (
  <AccordionItem value="ramsey">
    <AccordionTrigger>Ramsey County</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>St. Paul</li>
          <li>Roseville</li>
          <li>Maplewood</li>
          <li>White Bear Lake</li>
          <li>Shoreview</li>
          <li>New Brighton</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Mounds View</li>
          <li>Vadnais Heights</li>
          <li>North St. Paul</li>
          <li>Arden Hills</li>
          <li>Little Canada</li>
          <li>Falcon Heights</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default RamseyCounty;