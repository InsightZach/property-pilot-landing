import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Clock, CheckCircle, Building2, Factory, Home } from 'lucide-react';
import Sticker from './Sticker';

const StatCard = ({ icon: Icon, title, description, showSticker }) => (
  <div className="flex flex-col h-full relative">
    {showSticker && <Sticker color="blue" />}
    <Icon className="text-[#d7b971] w-16 h-16 mx-auto mb-4" />
    <h4 className="font-bold text-xl mb-2 text-center">{title}</h4>
    <p className="text-base">{description}</p>
  </div>
);

const PropertyTypeIcon = ({ icon: Icon, label }) => (
  <div className="flex items-center">
    <Icon className="text-[#d7b971] w-6 h-6 mr-2" />
    <span>{label}</span>
  </div>
);

const ExpertiseSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#0A2647]">
        Expert Minnesota Property Tax Appeals
      </h2>
      <div className="flex justify-center items-center space-x-6 mb-8">
        <PropertyTypeIcon icon={Building2} label="Commercial" />
        <PropertyTypeIcon icon={Factory} label="Industrial" />
        <PropertyTypeIcon icon={Home} label="Apartment" />
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4 text-left">
          At <strong>Insight Property Tax</strong> we specialize in reducing property taxes for commercial, industrial, and apartment property owners in Minnesota.
        </p>
        <p className="text-lg mb-8 text-left">
          By targeting over-assessed property values through our strategic appeals process, we consistently secure significant tax reductions, allowing our clients to maximize savings and reinvest in their properties.
        </p>
        <p className="text-xl font-bold mb-8 text-left">
          What our clients receive:
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
          <CardContent className="p-6">
            <StatCard 
              icon={TrendingDown}
              title="17.9% Average Reduction"
              description="In 2024, we've achieved significant assessment reductions, saving our clients $49k per property."
              showSticker={true}
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
  </section>
);

export default ExpertiseSection;