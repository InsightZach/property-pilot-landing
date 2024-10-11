import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const AnokaCounty = () => (
  <AccordionItem value="anoka">
    <AccordionTrigger className="text-white text-lg">
      <div className="flex items-center">
        <CheckCircle className="text-[#d7b971] w-5 h-5 mr-2" />
        Anoka County
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-white">
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Blaine</li>
          <li>Coon Rapids</li>
          <li>Andover</li>
          <li>Fridley</li>
          <li>Columbia Heights</li>
          <li>Anoka</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Ramsey</li>
          <li>Ham Lake</li>
          <li>Oak Grove</li>
          <li>Lino Lakes</li>
          <li>Spring Lake Park</li>
          <li>East Bethel</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default AnokaCounty;