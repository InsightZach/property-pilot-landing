import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExpertiseSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#d7b971] text-white">
          <CardHeader>
            <CardTitle className="text-center">Commercial Property Tax Appeals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Expertise in navigating complex commercial property tax assessments.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#d7b971] text-white">
          <CardHeader>
            <CardTitle className="text-center">Industrial Property Tax Appeals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Specialized knowledge in industrial property tax regulations and appeals.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#d7b971] text-white">
          <CardHeader>
            <CardTitle className="text-center">Apartment Property Tax Appeals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Focused on maximizing savings for apartment property owners.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
