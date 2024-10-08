import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppealStatistics from './AppealStatistics';
import ContingencyFee from './ContingencyFee';

const AboutInsightSection = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Expert Minnesota Property Tax Appeals</h2>
      <div className="mb-8">
        <p className="text-lg mb-4">Insight Property Tax specializes in reducing assessment values for commercial, industrial, and apartment property owners and tenants in Minnesota, saving our clients significant amounts on property taxes.</p>
        <p className="text-lg mb-4">Our local expertise in Minnesota property tax laws gives clients direct access to a proven system that identifies over-assessments and consistently delivers successful appeal settlements throughout the state.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppealStatistics />
        <ContingencyFee />
      </div>
    </div>
  </section>
);

export default AboutInsightSection;