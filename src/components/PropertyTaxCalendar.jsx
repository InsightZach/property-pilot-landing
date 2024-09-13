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
    { date: "October - September", event: "Sales Study" },
    { date: "January 2", event: "Property Valuations Set" },
    { date: "March", event: "Tax Statements & Valuation Notices Mailed" },
    { date: "March - May", event: "Appeals Process May Begin" },
    { date: "April 30th", event: "MN Tax Court Filing Deadline" },
    { date: "May 15th", event: "First Half of Property Taxes Due" },
    { date: "June", event: "Board of Appeal Meets" },
    { date: "October 15th", event: "Second Half of Property Taxes Due" },
    { date: "Nov - Dec", event: "Truth in Budget Meetings" },
  ];

  return (
    <div className="mt-4 mb-8">
      <h3 className="text-lg font-semibold mb-2">Property Tax Calendar</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Date</TableHead>
            <TableHead className="w-2/3">Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calendarData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTaxCalendar;