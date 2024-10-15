import React from 'react';
import { ChevronDown } from 'lucide-react';

const AppealOverlay = ({ data }) => {
  return (
    <div className="p-4 text-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold">{data.propertyType}</h3>
        <p className="text-lg">{data.location}</p>
      </div>
      <div>
        <p className="text-lg">Assessment Year: {data.assessmentYear}</p>
        <p className="text-lg">Assessment: ${data.assessment.toLocaleString()}</p>
        <p className="text-lg">Settlement: ${data.settlement.toLocaleString()}</p>
        <p className="text-2xl font-bold text-[#d7b971] flex items-center">
          Reduction: {data.reduction}
          <ChevronDown className="ml-2 h-6 w-6" />
        </p>
      </div>
    </div>
  );
};

export default AppealOverlay;