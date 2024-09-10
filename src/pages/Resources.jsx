import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

const Resources = () => {
  const counties = [
    {
      name: "Hennepin",
      appealGuide: "https://www.hennepin.us/your-government/property/property-tax-appeals",
      gis: "https://gis.hennepin.us/property/map/",
      taxSystem: "https://www.hennepin.us/your-government/property/property-taxes",
    },
    // Add other counties here
  ];

  const cities = [
    {
      name: "Minneapolis",
      assessor: "City",
      appealProcess: "Local Board",
      deadline2025: "TBD",
    },
    // Add other cities here
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Property Tax Resources</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Minnesota Property Tax Cycle</h2>
          <p className="mb-4">
            The Minnesota property tax cycle is an annual process overseen by the Minnesota Department of Revenue. 
            Each county oversees the assessments of cities and townships within its jurisdiction. 
            The cycle includes property valuation, tax rate setting, and the collection of taxes.
          </p>
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">County Resources</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>County</TableHead>
                <TableHead>Appeal Guide</TableHead>
                <TableHead>GIS System</TableHead>
                <TableHead>Property Tax System</TableHead>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">City Resources (7-County Metro)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>City</TableHead>
                <TableHead>Assessor</TableHead>
                <TableHead>Appeal Process</TableHead>
                <TableHead>2025 Appeal Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cities.map((city) => (
                <TableRow key={city.name}>
                  <TableCell>{city.name}</TableCell>
                  <TableCell>{city.assessor}</TableCell>
                  <TableCell>{city.appealProcess}</TableCell>
                  <TableCell>{city.deadline2025}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;