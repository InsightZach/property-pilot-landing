import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Factory, Home, CheckCircle, Percent, Clock } from 'lucide-react';

const IconText = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-[#d7b971] w-6 h-6" />
    <span className="text-lg font-medium">{text}</span>
  </div>
);

const StatCard = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="text-[#d7b971] w-12 h-12 mx-auto" />
    </CardHeader>
    <CardContent className="text-center">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ExpertiseSection = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex justify-center items-center space-x-8 mb-8">
        <IconText icon={Building2} text="Commercial" />
        <IconText icon={Factory} text="Industrial" />
        <IconText icon={Home} text="Apartment" />
      </div>
      <p className="text-base text-gray-700 text-center max-w-2xl mx-auto mb-12">
        At <span className="font-bold">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota. By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
      </p>
      
      <div className="border-t border-b border-gray-200 py-12 my-12">
        <h3 className="text-xl font-semibold text-center text-[#0A2647] mb-8">Why Choose Insight Property Tax?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        <h3 className="text-xl font-semibold text-center text-[#0A2647] mb-8">How We Work</h3>
        <Card>
          <CardContent className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h4 className="font-bold mb-2">Contingency Fee</h4>
              <p className="text-sm text-gray-600">Pay $0 upfront—our fee is 30% of your tax savings, and you keep the rest.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Full Service</h4>
              <p className="text-sm text-gray-600">We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <p className="text-base text-gray-700 text-center max-w-2xl mx-auto mt-12">
        Whether you own commercial real estate, an industrial site, or an apartment building, trust our expertise to lower your tax burden and maximize savings.
      </p>
    </div>
  </section>
);

export default ExpertiseSection;