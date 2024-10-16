import React from 'react';
import { CheckCircle, Minus } from 'lucide-react';

const comparisonData = [
  { benefit: 'Free', DIYAppeal: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Nationwide Service', DIYAppeal: false, NationalFirm: true, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Increased Success Rate', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Contingency Fee', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Minnesota Focus', DIYAppeal: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Tailored Service', DIYAppeal: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: '90-Day Resolution', DIYAppeal: false, NationalFirm: '1yr+', LocalAttorney: '1yr+', InsightPropertyTax: true },
  { benefit: 'Risk-Free', DIYAppeal: false, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
  { benefit: 'No Long-Term Contracts', DIYAppeal: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#2E5077] text-white">
            <th className="p-2 text-left">Client benefits</th>
            <th className="p-2 text-center">DIY Appeal</th>
            <th className="p-2 text-center">National Firm</th>
            <th className="p-2 text-center">Local Attorney</th>
            <th className="p-2 text-center bg-[#3E6087]">Insight Property Tax</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="p-2 border">{row.benefit}</td>
              {['DIYAppeal', 'NationalFirm', 'LocalAttorney', 'InsightPropertyTax'].map((column, colIndex) => (
                <td key={column} className={`p-2 border text-center ${column === 'InsightPropertyTax' ? 'bg-blue-50' : ''} ${column === 'DIYAppeal' && index > 0 ? 'bg-gray-200' : ''}`}>
                  {column === 'DIYAppeal' && index > 0 ? (
                    <Minus className="inline-block text-gray-400 w-5 h-5" />
                  ) : (
                    <>
                      {row[column] === true && <CheckCircle className="inline-block text-green-500 w-5 h-5" />}
                      {row[column] === false && <Minus className="inline-block text-red-500 w-5 h-5" />}
                      {row[column] === '1yr+' && <span className="text-red-500">1yr+</span>}
                      {typeof row[column] === 'string' && row[column] !== '1yr+' && row[column]}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
