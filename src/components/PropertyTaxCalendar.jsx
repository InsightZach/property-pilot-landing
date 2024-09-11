import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PropertyTaxCalendar = () => {
  const calendarData = [
    { event: "2nd half property tax payments due", date: "10/15/2024" },
    { event: "2025 Property tax estimates mailed out", date: "mid-Nov 2024" },
    { event: "2025 Assessment values set", date: "1/2/2025" },
    { event: "2025 Assessment values mailed out", date: "Feb-Mar 2025" },
    { event: "2025 Assessment appeal deadline", date: "Mar-May 2025" },
    { event: "2024 Property tax petition deadline", date: "4/30/2025" },
    { event: "1st half property tax payment due", date: "5/15/2025" },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Property Tax Calendar</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property Tax Calendar</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calendarData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.event}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTaxCalendar;