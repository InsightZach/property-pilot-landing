import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const MeetTheOwner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Meet the Owner</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-80 h-80 overflow-hidden rounded-full border-4 border-[#D4AF37] mb-4">
              <img 
                src="/Zach_Hepburn.svg" 
                alt="Zach Hepburn" 
                className="w-full h-full object-cover object-center scale-[1.985156]"
                loading="lazy"
                decoding="async"
                width="320"
                height="320"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-1">Zach Hepburn</h3>
            <p className="text-lg text-[#D4AF37]">Owner/Consultant</p>
          </div>
          <Card className="w-full md:w-1/2 border-[#D4AF37] bg-gray-100">
            <CardContent className="pt-6">
              <p className="mb-4 text-[#0A2647]">Hi! I'm Zach Hepburn. I've settled hundreds of property tax appeals through my experience as a Hennepin County Assessor's office senior and corporate property tax consultant.</p>
              <p className="mb-4 text-[#0A2647]">I started Insight Property Tax to offer Minnesota tax payers the same expertise the national players use to maximize their profits, without the tiresome corporate process.</p>
              <p className="mb-4 text-[#0A2647]">In my first year as an owner-operator, my clients received just that: market-high success without the hassle.</p>
              <p className="mb-4 text-[#0A2647]">Property tax appeals don't have to be costly, long-term, attorney-driven sagas. The vast majority of over-assessed properties can be promptly settled with significant financial benefits.</p>
              <p className="mb-4 text-[#0A2647]">Want to increase your profits? Let's connect.</p>
              <Button 
                variant="outline" 
                className="mt-4 bg-[#D4AF37] text-[#0A2647] hover:bg-[#D4AF37]/90"
                onClick={() => window.open('https://www.linkedin.com/in/zach-hepburn', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;
