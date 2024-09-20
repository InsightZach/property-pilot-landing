import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AppealStatistics = () => (
  <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
    <CardHeader><CardTitle className="text-white">Insight's Appeal Statistics</CardTitle></CardHeader>
    <CardContent className="text-white">
      <ul className="space-y-2">
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 17.9% reduction average</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> $49k tax savings per property</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 90-day appeal duration average</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 100% appeal success rate</li>
      </ul>
      <Link to="/contact"><Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Get Started</Button></Link>
    </CardContent>
  </Card>
);

export default AppealStatistics;