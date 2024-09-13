import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, DollarSign, FileText, Home, Scale } from 'lucide-react';

const PropertyTaxCalendar = () => {
  const calendarData = [
    { event: "2nd half property tax payments due", date: "10/15/2024", icon: DollarSign },
    { event: "2025 Property tax estimates mailed", date: "mid-Nov 2024", icon: FileText },
    { event: "2025 Assessment values set", date: "1/2/2025", icon: Home },
    { event: "2025 Assessment values mailed", date: "Feb-Mar 2025", icon: FileText },
    { event: "2025 Assessment appeal deadline", date: "Mar-May 2025", icon: Scale },
    { event: "2024 Property tax petition deadline", date: "4/30/2025", icon: Scale },
    { event: "1st half property tax payment due", date: "5/15/2025", icon: DollarSign },
  ];

  const getEventColor = (event) => {
    if (event.includes("due") || event.includes("deadline")) return "bg-red-100 border-red-300";
    if (event.includes("mailed")) return "bg-blue-100 border-blue-300";
    if (event.includes("set")) return "bg-green-100 border-green-300";
    return "bg-gray-100 border-gray-300";
  };

  return (
    <div className="mt-4 mb-8">
      <h3 className="text-2xl font-semibold mb-4">Property Tax Calendar</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calendarData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className={`border-2 ${getEventColor(item.event)}`}>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Icon className="mr-2 h-5 w-5" />
                  <span className="font-semibold">{item.date}</span>
                </div>
                <p>{item.event}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTaxCalendar;