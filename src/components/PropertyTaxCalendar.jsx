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
    { event: "2025 Property tax estimates mailed", date: "11/15/2024" },
    { event: "2025 Assessment values set", date: "01/02/2025" },
    { event: "2025 Assessment values mailed", date: "02/01/2025 - 03/31/2025" },
    { event: "2025 Assessment appeal deadline", date: "03/01/2025 - 05/31/2025" },
    { event: "2024 Property tax petition deadline", date: "04/30/2025" },
    { event: "1st half property tax payment due", date: "05/15/2025" },
  ];

  return (
    <div className="mt-4 mb-8 overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-[#0A2647] text-white">
            <TableHead className="w-2/3">Event</TableHead>
            <TableHead className="w-1/3">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calendarData.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <TableCell className="py-3 font-medium">{item.event}</TableCell>
              <TableCell className="py-3 font-bold text-[#d7b971]">{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTaxCalendar;