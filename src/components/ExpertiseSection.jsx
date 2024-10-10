import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Factory, Home, CheckCircle, Percent, Clock } from 'lucide-react';

const IconText = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-[#d7b971] w-8 h-8" />
    <span className="text-xl font-medium">{text}</span>
  </div>
);

const StatCard = ({ icon: Icon, title, description }) => (
  <Card className="h-full bg-[#1E3A5F] text-white">
    <CardHeader>
      <Icon className="text-[#d7b971] w-16 h-16 mx-auto" />
    </CardHeader>
    <CardContent className="text-center">
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-base">{description}</p>
    </CardContent>
  </Card>
);

const ExpertiseSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
        <IconText icon={Building2} text="Commercial" />
        <IconText icon={Factory} text="Industrial" />
        <IconText icon={Home} text="Apartment" />
      </div>
      <div className="bg-[#0A2647] text-white p-8 rounded-lg shadow-lg mb-16">
        <p className="text-lg md:text-xl text-left max-w-4xl mx-auto leading-relaxed">
          At <span className="font-bold text-[#d7b971]">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota. By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
        </p>
      </div>
      
      <div className="border-t border-b border-gray-200 py-16 my-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#0A2647] mb-12">Why Choose Insight Property Tax?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard 
            icon={Percent}
            title="17.9% Average Reduction"
            description="In 2024, we've achieved significant reductions in assessed values."
          />
          <StatCard 
            icon={Clock}
            title="90-Day Resolution"
            description="Most appeals are resolved quickly, saving you time and resources."
          />
          <StatCard 
            icon={CheckCircle}
            title="100% Success Rate"
            description="We've successfully reduced taxes for every client we've worked with."
          />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#0A2647] mb-8">How We Work</h3>
        <Card className="bg-[#1E3A5F] text-white">
          <CardContent className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h4 className="font-bold text-xl mb-2">Contingency Fee</h4>
              <p className="text-lg">Pay $0 upfront—our fee is 30% of your tax savings, and you keep the rest.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Full Service</h4>
              <p className="text-lg">We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mt-16 text-gray-700">
        Whether you own commercial real estate, an industrial site, or an apartment building, trust our expertise to lower your tax burden and maximize savings.
      </p>
    </div>
  </section>
);

export default ExpertiseSection;