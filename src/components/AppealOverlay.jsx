import React from 'react';

const AppealOverlay = ({ data }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 p-4 text-white flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold">{data.propertyType}</h3>
        <p className="text-lg">{data.location}</p>
      </div>
      <div>
        <p className="text-lg">Assessment Year: {data.assessmentYear}</p>
        <p className="text-lg">Assessment: ${data.assessment.toLocaleString()}</p>
        <p className="text-lg">Settlement: ${data.settlement.toLocaleString()}</p>
        <p className="text-2xl font-bold text-green-400">Reduction: {data.reduction}</p>
      </div>
    </div>
  );
};

export default AppealOverlay;