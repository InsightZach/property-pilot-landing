import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CityTownshipResources = ({ cities, searchTerm, setSearchTerm }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">City/Township Resources</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search for a city or township..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
          icon={<Search className="h-4 w-4 text-gray-500" />}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>City/Township</TableHead>
            <TableHead>Assessor</TableHead>
            <TableHead>Appeal Process</TableHead>
            <TableHead>2025 Assessment Appeal Deadline (Informal Appeal)</TableHead>
            <TableHead>2024 Assessment Appeal Deadline (Tax Court)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map((city) => (
            <TableRow key={city.name}>
              <TableCell>{city.name}</TableCell>
              <TableCell>{city.assessor}</TableCell>
              <TableCell>{city.appealProcess}</TableCell>
              <TableCell>{city.deadline2025}</TableCell>
              <TableCell>04/30/2025</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CityTownshipResources;