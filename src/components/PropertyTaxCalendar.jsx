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
    { event: "Sales Study", date: "October - September" },
    { event: "Property Valuations Set", date: "January 2" },
    { event: "Tax Statements & Valuation Notices Mailed", date: "March" },
    { event: "Appeals Process May Begin", date: "March - May" },
    { event: "MN Tax Court Filing Deadline", date: "April 30th" },
    { event: "First Half of Property Taxes Due", date: "May 15th" },
    { event: "Board of Appeal Meets", date: "June" },
    { event: "Second Half of Property Taxes Due", date: "October 15th" },
    { event: "Truth in Budget Meetings", date: "Nov - Dec" },
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