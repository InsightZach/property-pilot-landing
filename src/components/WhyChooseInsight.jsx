import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, CheckCircle, LineChart } from 'lucide-react';

const StatCard = ({ icon: Icon, title, description }) => (
  <Card className="border-[#d7b971]">
    <CardHeader>
      <CardTitle className="flex items-center justify-center text-[#0A2647]">
        <Icon className="mr-2 h-6 w-6 text-[#d7b971]" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-left">{description}</CardContent>
  </Card>
);

const WhyChooseInsight = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight Property Tax?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard icon={DollarSign} title="Risk-Free Service" description="You pay only if we successfully reduce your property taxes through our expert Minnesota property tax appeals." />
        <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Hundreds of settled appeals from local professionals with appraisal and assessment backgrounds, specializing in Minneapolis property tax appeals." />
        <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings on commercial property tax appeals in Minneapolis, MN and beyond." />
      </div>
    </div>
  </section>
);

export default WhyChooseInsight;