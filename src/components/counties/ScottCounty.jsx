import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const ScottCounty = () => (
  <AccordionItem value="scott">
    <AccordionTrigger>Scott County</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Shakopee</li>
          <li>Savage</li>
          <li>Prior Lake</li>
          <li>Jordan</li>
          <li>Belle Plaine</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>New Prague (partially)</li>
          <li>Elko New Market</li>
          <li>Credit River</li>
          <li>Spring Lake</li>
          <li>Sand Creek</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default ScottCounty;