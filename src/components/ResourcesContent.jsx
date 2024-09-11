import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyTaxCalendar from './PropertyTaxCalendar';

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="flex items-center">
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  </a>
);

const ResourcesContent = () => {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Minnesota Property Tax Cycle</h2>
        <p className="mb-4">
          The Minnesota property tax cycle is an annual process overseen by the Minnesota Department of Revenue. 
          Each county oversees the assessments of cities and townships within its jurisdiction. 
          The cycle includes property valuation, tax rate setting, and the collection of taxes.
        </p>
        <PropertyTaxCalendar />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Appeal Process Overview</h2>
        <p className="mb-4">
          Property owners have the right to appeal their property's assessed value. The process typically involves:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Reviewing your property's assessed value</li>
          <li>Contacting your local assessor's office</li>
          <li>Appealing to the local board of appeal and equalization</li>
          <li>Appealing to the county board of appeal and equalization</li>
          <li>Appealing to the Minnesota Tax Court (if necessary)</li>
        </ol>
        <p>
          Note: There is an April 30th deadline each year for petitioning the previous year's assessment through the Minnesota Tax Court.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Important Resources</h2>
        <div className="space-y-4">
          <ExternalLinkButton href="https://www.revenue.state.mn.us/appealing-property-value-and-classification">
            Minnesota Department of Revenue - Appealing Property Value
          </ExternalLinkButton>
          <ExternalLinkButton href="https://mn.gov/tax-court/forms/forms/">
            Minnesota Tax Court - Forms
          </ExternalLinkButton>
        </div>
      </section>
    </>
  );
};

export default ResourcesContent;