import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ContingencyFee = () => (
  <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
    <CardHeader><CardTitle className="text-white">Contingency Fee</CardTitle></CardHeader>
    <CardContent className="text-white">
      <ul className="space-y-2">
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pay $0 upfront</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Our fee is 30% of tax savings</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pocket the rest</li>
        <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> We handle everything</li>
      </ul>
      <Link to="/why-insight"><Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Why Choose Insight?</Button></Link>
    </CardContent>
  </Card>
);

export default ContingencyFee;