import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const WashingtonCounty = () => (
  <AccordionItem value="washington">
    <AccordionTrigger className="text-white text-lg">
      <div className="flex items-center">
        <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
        Washington County
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-white">
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