import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ExternalLinkButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="flex items-center">
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
      appealGuide: "https://www.co.carver.mn.us/departments/property-financial-services/assessor/property-tax-appeals",
      gis: "https://gis.co.carver.mn.us/publicparcel/",
      taxSystem: "https://www.co.carver.mn.us/departments/property-financial-services/property-taxation",
      boardAppealType: "#",
    },
    {
      name: "Dakota",
      appealGuide: "https://www.co.dakota.mn.us/HomeProperty/PropertyTaxes/Appeals/Pages/default.aspx",
      gis: "https://gis.co.dakota.mn.us/PropertyMap/",
      taxSystem: "https://www.co.dakota.mn.us/HomeProperty/PropertyTaxes/Pages/default.aspx",
      boardAppealType: "#",
    },
    {
      name: "Hennepin",
      appealGuide: "https://www.hennepin.us/your-government/property/property-tax-appeals",
      gis: "https://gis.hennepin.us/property/map/",
      taxSystem: "https://www.hennepin.us/your-government/property/property-taxes",
      boardAppealType: "#",
    },
    {
      name: "Ramsey",
      appealGuide: "https://www.ramseycounty.us/residents/property/property-tax-and-value-appeals",
      gis: "https://www.ramseycounty.us/residents/property/maps-surveys/interactive-map-gis",
      taxSystem: "https://www.ramseycounty.us/residents/property-home",
      boardAppealType: "#",
    },
    {
      name: "Scott",
      appealGuide: "https://www.scottcountymn.gov/1095/Appeals",
      gis: "https://gis.co.scott.mn.us/scottgis/",
      taxSystem: "https://www.scottcountymn.gov/415/Property-Taxes",
      boardAppealType: "#",
    },
    {
      name: "Washington",
      appealGuide: "https://www.co.washington.mn.us/638/Appeals",
      gis: "https://gis.co.washington.mn.us/publicparcel/",
      taxSystem: "https://www.co.washington.mn.us/638/Appeals",
      boardAppealType: "#",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">County Resources</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>County</TableHead>
            <TableHead>Appeal Guide</TableHead>
            <TableHead>GIS System</TableHead>
            <TableHead>Property Tax System</TableHead>
            <TableHead>Board of Appeal Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {counties.map((county) => (
            <TableRow key={county.name}>
              <TableCell>{county.name}</TableCell>
              <TableCell>
                <ExternalLinkButton href={county.appealGuide}>Guide</ExternalLinkButton>
              </TableCell>
              <TableCell>
                <ExternalLinkButton href={county.gis}>GIS</ExternalLinkButton>
              </TableCell>
              <TableCell>
                <ExternalLinkButton href={county.taxSystem}>Tax System</ExternalLinkButton>
              </TableCell>
              <TableCell>
                <ExternalLinkButton href={county.boardAppealType}>Appeal Type</ExternalLinkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CountyResources;