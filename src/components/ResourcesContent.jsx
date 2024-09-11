import React from 'react';
import { ExternalLink, Calendar, FileText, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PropertyTaxCalendar from './PropertyTaxCalendar';

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
    <Button variant="outline" className="flex items-center bg-[#0A2647] text-white hover:bg-[#1E3A5F] transition-colors">
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  </a>
);

const ResourcesContent = () => {
  return (
    <>
      <Card className="mb-12 border-[#d7b971] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647] flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-[#d7b971]" />
            Minnesota Property Tax Cycle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Minnesota property tax cycle is an annual process overseen by the Minnesota Department of Revenue. 
            Each county oversees the assessments of cities and townships within its jurisdiction. 
            The cycle includes property valuation, tax rate setting, and the collection of taxes.
          </p>
          <PropertyTaxCalendar />
        </CardContent>
      </Card>

      <Card className="mb-12 border-[#d7b971] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647] flex items-center">
            <FileText className="mr-2 h-6 w-6 text-[#d7b971]" />
            Appeal Process Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Property owners have the right to appeal their property's assessed value. The process typically involves:
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center font-bold">1</span>
              Reviewing your property's assessed value
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center font-bold">2</span>
              Contacting your local assessor's office
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center font-bold">3</span>
              Appealing to the local board of appeal and equalization
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center font-bold">4</span>
              Appealing to the county board of appeal and equalization
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center font-bold">5</span>
              Appealing to the Minnesota Tax Court (if necessary)
            </li>
          </ol>
          <p className="bg-[#f0f4f8] border-l-4 border-[#d7b971] p-4 rounded">
            <strong>Important:</strong> There is an April 30th deadline each year for petitioning the previous year's assessment through the Minnesota Tax Court.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-12 border-[#d7b971] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647] flex items-center">
            <ArrowRight className="mr-2 h-6 w-6 text-[#d7b971]" />
            Important Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ExternalLinkButton href="https://www.revenue.state.mn.us/appealing-property-value-and-classification">
              Minnesota Department of Revenue - Appealing Property Value
            </ExternalLinkButton>
            <ExternalLinkButton href="https://mn.gov/tax-court/forms/forms/">
              Minnesota Tax Court - Forms
            </ExternalLinkButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResourcesContent;