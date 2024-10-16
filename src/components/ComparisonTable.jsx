import React from 'react';
import { CheckCircle } from 'lucide-react';

const comparisonData = [
  { benefit: 'Free', DIYAppeal: true, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Nationwide availability', DIYAppeal: false, NationalFirm: true, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Increased Appeal Success Probability', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Contingency Fee', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Twin-Cities Market Focus', DIYAppeal: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: 'Tailored Client Service', DIYAppeal: false, NationalFirm: false, LocalAttorney: true, InsightPropertyTax: true },
  { benefit: '90-Day Appeal Resolution Average', DIYAppeal: false, NationalFirm: '(>1yr)', LocalAttorney: '(>1yr)', InsightPropertyTax: true },
  { benefit: 'Risk free- Pay $0 unless you receive a reduction', DIYAppeal: false, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
  { benefit: 'No Long-term Commitments', DIYAppeal: false, NationalFirm: false, LocalAttorney: false, InsightPropertyTax: true },
  { benefit: 'Cross-Selling Products', DIYAppeal: false, NationalFirm: true, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Varying Consultant Experience levels', DIYAppeal: false, NationalFirm: true, LocalAttorney: false, InsightPropertyTax: false },
  { benefit: 'Litigation Focus', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: false },
  { benefit: 'Suits', DIYAppeal: false, NationalFirm: true, LocalAttorney: true, InsightPropertyTax: false },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0A2647] text-white">
            <th className="p-2 text-left">Client benefits</th>
            <th className="p-2 text-center">DIY Appeal</th>
            <th className="p-2 text-center">National Firm</th>
            <th className="p-2 text-center">Local Attorney</th>
            <th className="p-2 text-center">Insight Property Tax</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="p-2 border">{row.benefit}</td>
              {['DIYAppeal', 'NationalFirm', 'LocalAttorney', 'InsightPropertyTax'].map((column) => (
                <td key={column} className="p-2 border text-center">
                  {row[column] === true && <CheckCircle className="inline-block text-green-500" />}
                  {typeof row[column] === 'string' && row[column]}
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