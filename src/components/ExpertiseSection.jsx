import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Home, TrendingDown, Clock, CheckCircle } from 'lucide-react';

const IconText = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-[#d7b971] w-8 h-8" />
    <span className="text-xl font-medium">{text}</span>
  </div>
);

const StatCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col h-full">
    <Icon className="text-[#d7b971] w-16 h-16 mx-auto mb-4" />
    <h4 className="font-bold text-xl mb-2 text-center">{title}</h4>
    <p className="text-base">{description}</p>
  </div>
);

const ExpertiseSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
        <IconText icon={Building2} text="Commercial" />
        <IconText icon={Factory} text="Industrial" />
        <IconText icon={Home} text="Apartment" />
      </div>
      <div className="mb-16">
        <p className="text-lg md:text-xl text-left max-w-4xl mx-auto leading-relaxed text-gray-700 mb-8">
          At <span className="font-bold text-[#0A2647]">Insight Property Tax</span>, we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota. By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
        </p>
        
        <p className="text-lg md:text-xl text-left max-w-4xl mx-auto font-bold text-[#0A2647] mt-8">
          We stand behind our appeal results:
        </p>
      </div>
      
      <div className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
            <CardContent className="p-6">
              <StatCard 
                icon={TrendingDown}
                title="17.9% Average Reduction"
                description="In 2024, we've achieved significant assessment reductions, saving our clients $49k per property."
              />
            </CardContent>
          </Card>
          <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
            <CardContent className="p-6">
              <StatCard 
                icon={Clock}
                title="90-Day Resolution"
                description="Most appeals are resolved quickly, saving you time and resources."
              />
            </CardContent>
          </Card>
          <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
            <CardContent className="p-6">
              <StatCard 
                icon={CheckCircle}
                title="100% Success Rate"
                description="We've successfully reduced taxes for every client we've worked with."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;