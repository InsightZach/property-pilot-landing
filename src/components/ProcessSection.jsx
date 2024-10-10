import React from 'react';
import { Building2, LineChart, FileText, Handshake, ArrowRight, ArrowDown } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center bg-[#0A2647] text-white p-6 rounded-full w-48 h-48 justify-center relative">
    <div className="absolute -top-8 bg-[#D4AF37] p-4 rounded-full">
      <Icon className="w-8 h-8 text-[#0A2647]" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-center mt-4">{title}</h3>
    <p className="text-xs text-center">{description}</p>
  </div>
);

const DesktopArrow = () => (
  <div className="hidden md:flex flex-1 items-center justify-center">
    <ArrowRight className="w-8 h-8 text-[#D4AF37]" />
  </div>
);

const MobileArrow = () => (
  <div className="flex md:hidden items-center justify-center my-4">
    <ArrowDown className="w-8 h-8 text-[#D4AF37]" />
  </div>
);

const ProcessSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Our Proven Property Tax Appeal Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
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