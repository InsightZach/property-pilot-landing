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
    { event: "2025 Property tax estimates mailed", date: "mid-Nov 2024" },
    { event: "2025 Assessment values set", date: "1/2/2025" },
    { event: "2025 Assessment values mailed", date: "Feb-Mar 2025" },
    { event: "2025 Assessment appeal deadline", date: "Mar-May 2025" },
    { event: "2024 Property tax petition deadline", date: "4/30/2025" },
    { event: "1st half property tax payment due", date: "5/15/2025" },
  ];

  return (
    <div className="mt-4 mb-8">
      <h3 className="text-lg font-semibold mb-2">Property Tax Calendar</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3">Event</TableHead>
            <TableHead className="w-1/3">Date</TableHead>
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