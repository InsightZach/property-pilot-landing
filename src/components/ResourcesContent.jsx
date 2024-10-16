import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyTaxCalendar from './PropertyTaxCalendar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountyResources from './CountyResources';

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
          <CardTitle className="text-2xl font-semibold text-[#0A2647]">DIY Appeal Process Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">
            Property owners have the right to appeal their property's assessed value if they believe it is incorrect. Here is a step-by-step guide to navigating the process:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-4">
            <li>
              <strong>Review Your Property's Assessed Value (March)</strong>
              <p className="ml-6 mt-2">Start by thoroughly reviewing the assessment notice you receive from your county. This notice provides the estimated market value of your property, which forms the basis of your property taxes. Compare this value to recent sales of similar properties or consult an expert to determine if the assessment seems accurate.</p>
            </li>
            <li>
              <strong>Contact Your Local Assessor's Office (March - April)</strong>
              <p className="ml-6 mt-2">If you believe the assessed value is too high, your first step is to contact your local assessor's office. This informal review can often lead to corrections without needing a formal appeal. Be prepared with supporting documentation, such as comparable property sales or information on property conditions.</p>
            </li>
            <li>
              <strong>Appeal to the Local Board of Appeal and Equalization (April - May)</strong>
              <p className="ml-6 mt-2">If the assessor's office doesn't provide satisfactory adjustments, you can appeal to the Local Board of Appeal and Equalization. This board typically meets in the spring, and you can present evidence to support your claim for a lower assessed value.</p>
            </li>
            <li>
              <strong>Appeal to the County Board of Appeal and Equalization (June)</strong>
              <p className="ml-6 mt-2">If you are not satisfied with the outcome from the local board, your next step is to appeal to the County Board of Appeal and Equalization. This board provides another opportunity to adjust your property's assessed value based on the evidence you present.</p>
            </li>
            <li>
              <strong>Appeal to the Minnesota Tax Court (by April 30th of the payable year)</strong>
              <p className="ml-6 mt-2">If the previous steps do not result in a satisfactory outcome, you have the option to appeal to the Minnesota Tax Court. This is a formal legal process that may require representation. The Tax Court will conduct a de novo review, meaning it will re-evaluate all evidence to determine the appropriate assessed value of your property.</p>
            </li>
          </ol>
          <p className="text-gray-700 font-semibold">
            Note: There is an April 30th deadline each year for petitioning the previous year's assessment through the Minnesota Tax Court. Be sure to file on time to preserve your right to appeal.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
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

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#0A2647]">Important Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ExternalLinkButton href="https://www.revenue.state.mn.us/appealing-property-value-and-classification">
                <span className="text-left">MN DOR-Property Tax Appeal</span>
              </ExternalLinkButton>
              <ExternalLinkButton href="https://mn.gov/tax-court/forms/forms/">
                <span className="text-left">Minnesota Tax Court - Forms</span>
              </ExternalLinkButton>
              <CountyResources />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ResourcesContent;