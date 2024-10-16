import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const comparisonData = [
  {
    category: 'Cost',
    features: [
      { name: 'Free', DIY: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: false },
      { name: 'No Upfront Filing Fee', DIY: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
      { name: 'No Hourly Attorney Fees', DIY: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
    ],
  },
  {
    category: 'Efficiency',
    features: [
      { name: 'Informal Appeals', DIY: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
      { name: 'Appeal duration < 90 days', DIY: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
      { name: 'Client ROI', DIY: true, NationalFirm: true, LocalAttorney: 'varies', InsightPropertyTax: true },
      { name: 'Contingency Fee', DIY: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
    ],
  },
  {
    category: 'Market Focus',
    features: [
      { name: 'Local Assessment Experience', DIY: false, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
      { name: 'Local Market Focus', DIY: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
      { name: 'Tailored Client Service', DIY: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
      { name: 'Formal Appeals', DIY: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
    ],
  },
  {
    category: 'Results',
    features: [
      { name: 'Success Probability', DIY: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
      { name: 'Average reduction >10%', DIY: false, NationalFirm: 'varies', LocalAttorney: true, InsightPropertyTax: true },
    ],
  },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0A2647] text-white">
            <th className="p-2 text-left">Feature</th>
            <th className="p-2 text-center">DIY</th>
            <th className="p-2 text-center">National Firm</th>
            <th className="p-2 text-center">Local Attorney</th>
            <th className="p-2 text-center">Insight Property Tax</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <tr className="bg-[#1E3A5F] text-white">
                <td colSpan="5" className="p-2 font-bold">{category.category}</td>
              </tr>
              {category.features.map((feature, featureIndex) => (
                <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="p-2 border">{feature.name}</td>
                  {['DIY', 'NationalFirm', 'LocalAttorney', 'InsightPropertyTax'].map((column, columnIndex) => (
                    <td key={columnIndex} className="p-2 border text-center">
                      {feature[column] === true && <CheckCircle className="inline-block text-green-500" />}
                      {feature[column] === false && <X className="inline-block text-red-500" />}
                      {typeof feature[column] === 'string' && feature[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;