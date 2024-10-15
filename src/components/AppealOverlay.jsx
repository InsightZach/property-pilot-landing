import React from 'react';
import { TrendingDown } from 'lucide-react';

const formatToMillions = (value) => {
  return `$${(value / 1000000).toFixed(2)}m`;
};

const AppealOverlay = ({ data }) => {
  return (
    <div className="p-4 text-white flex flex-col justify-between h-full bg-[#1E3A5F] bg-opacity-20"> {/* Changed opacity to 20% */}
      <div className="flex flex-col items-end">
        <div className="flex items-center mb-2">
          <p className="text-5xl font-bold text-[#d7b971] mr-2">{data.reduction}</p>
          <TrendingDown className="text-[#d7b971] w-12 h-12" />
        </div>
        <p className="text-2xl font-semibold text-[#d7b971]">Reduction</p>
      </div>
      <div className="text-right">
        <h3 className="text-3xl font-bold mb-2">{data.propertyType}</h3>
        <p className="text-xl mb-4">{data.location}</p>
        <p className="text-lg">Assessment Year: {data.assessmentYear}</p>
        <p className="text-lg">Assessment: {formatToMillions(data.assessment)}</p>
        <p className="text-lg">Settlement: {formatToMillions(data.settlement)}</p>
      </div>
    </div>
  );
};

export default AppealOverlay;