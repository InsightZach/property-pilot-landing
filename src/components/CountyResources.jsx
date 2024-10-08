import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="flex items-center w-full justify-center">
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  </a>
);

const CountyResources = () => {
  const counties = [
    {
      name: "Anoka",
      appealGuide: "https://www.anokacountymn.gov/4279/How-to-Appeal-Your-Value",
      gis: "https://gis.anokacountymn.gov/propertysearch/",
      taxSystem: "https://prtpublicweb.co.anoka.mn.us/search/commonsearch.aspx?mode=combined",
      boardAppealType: "https://anokacountymn.gov/DocumentCenter/View/29715/2024-Board-Of-Appeal-Schedule?bidId=",
    },
    {
      name: "Carver",
      appealGuide: "https://www.carvercountymn.gov/departments/property-finance/property-assessment/appeals-process",
      gis: "https://gis.carvercountymn.gov/property/",
      taxSystem: "https://mn-carver.manatron.com/Tabs/TaxSearch.aspx",
      boardAppealType: "https://www.carvercountymn.gov/home/showpublisheddocument/25934/638423967737970000",
    },
    {
      name: "Dakota",
      appealGuide: "https://www.co.dakota.mn.us/HomeProperty/Assessing/Appeal/Pages/default.aspx",
      gis: "https://gis.co.dakota.mn.us/Webappbuilder/PropertyInformationPublic/index.html",
      taxSystem: "https://www.co.dakota.mn.us/HomeProperty/PropertyTaxes/Pages/default.aspx",
      boardAppealType: "https://www.co.dakota.mn.us/HomeProperty/Assessing/Appeal/Pages/default.aspx",
    },
    {
      name: "Hennepin",
      appealGuide: "https://www.hennepin.us/residents/property/assessment",
      gis: "https://gis.hennepin.us/property/",
      taxSystem: "https://www.hennepin.us/residents/property/property-tax-payment-options",
      boardAppealType: "https://www.hennepin.us/residents/property/assessment#commercial-assessment-offices",
    },
    {
      name: "Ramsey",
      appealGuide: "https://www.ramseycounty.us/residents/property-home/taxes-values/property-value-assessment/appealing-your-value",
      gis: "https://www.ramseycounty.us/residents/property/maps-surveys/interactive-map-gis",
      taxSystem: "https://beacon.schneidercorp.com/application.aspx?app=RamseyCountyMN&PageType=Search",
      boardAppealType: "https://www.ramseycounty.us/residents/property-home/taxes-values/property-value-assessment/appealing-your-value",
    },
    {
      name: "Scott",
      appealGuide: "https://www.scottcountymn.gov/346/Appeal-Process",
      gis: "https://gis.co.scott.mn.us/sg3/",
      taxSystem: "https://www.scottcountymn.gov/383/Pay-Property-Tax",
      boardAppealType: "https://www.scottcountymn.gov/346/Appeal-Process",
    },
    {
      name: "Washington",
      appealGuide: "https://www.washingtoncountymn.gov/3076/Appealing-Your-Value",
      gis: "https://wcmn.maps.arcgis.com/apps/webappviewer/index.html?id=c07b8931249b47be81278a79103bd698",
      taxSystem: "https://mn-washington.manatron.com/",
      boardAppealType: "https://www.washingtoncountymn.gov/3076/Appealing-Your-Value",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-white">County Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {counties.map((county) => (
          <div key={county.name} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{county.name} County</h3>
            <div className="space-y-2">
              <ExternalLinkButton href={county.appealGuide}>Appeal Guide</ExternalLinkButton>
              <ExternalLinkButton href={county.gis}>GIS System</ExternalLinkButton>
              <ExternalLinkButton href={county.taxSystem}>Tax System</ExternalLinkButton>
              <ExternalLinkButton href={county.boardAppealType}>Board Appeal Type</ExternalLinkButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountyResources;
