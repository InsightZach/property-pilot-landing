import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyTaxCalendar from './PropertyTaxCalendar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
    <Button variant="outline" className="flex items-center w-full justify-between">
      <span className="text-left break-words">{children}</span>
      <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
    </Button>
  </a>
);

const ResourcesContent = () => {
  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647]">Minnesota Property Tax Cycle</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">
            The Minnesota property tax cycle is an annual process overseen by the Minnesota Department of Revenue. 
            Each county oversees the assessments of cities and townships within its jurisdiction. 
            The cycle includes property valuation, tax rate setting, and the collection of taxes.
          </p>
          <PropertyTaxCalendar />
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647]">Appeal Process Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">
            Property owners have the right to appeal their property's assessed value. The process typically involves:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">
            <li>Reviewing your property's assessed value</li>
            <li>Contacting your local assessor's office</li>
            <li>Appealing to the local board of appeal and equalization</li>
            <li>Appealing to the county board of appeal and equalization</li>
            <li>Appealing to the Minnesota Tax Court (if necessary)</li>
          </ol>
          <p className="text-gray-700 font-semibold">
            Note: There is an April 30th deadline each year for petitioning the previous year's assessment through the Minnesota Tax Court.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[#0A2647]">Important Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ExternalLinkButton href="https://www.revenue.state.mn.us/appealing-property-value-and-classification">
              <span className="break-words">Minnesota Department of Revenue - Appealing Property Value</span>
            </ExternalLinkButton>
            <ExternalLinkButton href="https://mn.gov/tax-court/forms/forms/">
              <span className="break-words">Minnesota Tax Court - Forms</span>
            </ExternalLinkButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResourcesContent;
