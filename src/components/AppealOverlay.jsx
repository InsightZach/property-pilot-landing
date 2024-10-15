import React from 'react';
import { ChevronDown } from 'lucide-react';

const AppealOverlay = ({ data }) => {
  return (
    <div className="w-1/3 bg-black bg-opacity-50 p-4 text-white flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold">{data.propertyType}</h3>
        <p className="text-lg">{data.location}</p>
      </div>
      <div>
        <p className="text-lg">Assessment Year: {data.assessmentYear}</p>
        <p className="text-lg">Assessment: ${data.assessment.toLocaleString()}</p>
        <p className="text-lg">Settlement: ${data.settlement.toLocaleString()}</p>
        <div className="flex items-center">
          <ChevronDown className="text-[#d7b971] mr-2" />
          <p className="text-2xl font-bold text-[#d7b971]">Reduction: {data.reduction}</p>
        </div>
      </div>
    </div>
  );
};

export default AppealOverlay;