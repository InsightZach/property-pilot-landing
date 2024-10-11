import React from 'react';
import { Building2, LineChart, FileText, Handshake, ArrowRight, ArrowDown } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl w-64 h-64 justify-center relative">
    <div className="absolute -top-10 bg-[#D4AF37] p-4 rounded-full">
      <Icon className="w-10 h-10 text-[#0A2647]" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-center mt-6">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const DesktopArrow = () => (
  <div className="hidden md:flex flex-1 items-center justify-center">
    <ArrowRight className="w-10 h-10 text-[#D4AF37]" />
  </div>
);

const MobileArrow = () => (
  <div className="flex md:hidden items-center justify-center my-6">
    <ArrowDown className="w-10 h-10 text-[#D4AF37]" />
  </div>
);

const ProcessSection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-16 text-white">Our Proven Property Tax Appeal Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-6">
        <ProcessStep
          icon={Building2}
          title="Comprehensive Property Review"
          description="We analyze your property details, assessment history, and local tax data to identify savings opportunities."
        />
        <MobileArrow />
        <DesktopArrow />
        <ProcessStep
          icon={LineChart}
          title="In-Depth Value Analysis"
          description="Our experts evaluate if your property is over-assessed, comparing it to similar properties for fairness."
        />
        <MobileArrow />
        <DesktopArrow />
        <ProcessStep
          icon={FileText}
          title="Customized Appeal Strategy"
          description="We craft a tailored strategy leveraging our expertise in Minnesota property tax laws to maximize savings."
        />
        <MobileArrow />
        <DesktopArrow />
        <ProcessStep
          icon={Handshake}
          title="Expert Negotiation & Resolution"
          description="We handle all negotiations with tax authorities, representing you from start to finish for a successful outcome."
        />
      </div>
    </div>
  </section>
);

export default ProcessSection;