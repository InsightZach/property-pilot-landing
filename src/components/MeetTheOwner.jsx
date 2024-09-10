import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const MeetTheOwner = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Meet the Owner</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img src="/placeholder.svg" alt="Zach Hepburn" className="rounded-full w-64 h-64 mx-auto object-cover" />
          </div>
          <Card className="w-full md:w-2/3 border-[#D4AF37]">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#0A2647]">Zach Hepburn</h3>
              <p className="mb-4">Hi! I'm Zach Hepburn. I've settled hundreds of property tax appeals through my experience as a Hennepin County Assessor's office senior and corporate property tax consultant.</p>
              <p className="mb-4">I started Insight Property Tax to offer Minnesota tax payers the same expertise the national players use to maximize their profits, without the tiresome corporate process.</p>
              <p className="mb-4">In my first year as an owner-operator, my clients received just that: market-high success without the hassle.</p>
              <p className="mb-4">Property tax appeals don't have to be costly, long-term, attorney-driven sagas. The vast majority of over-assessed properties can be promptly settled with significant financial benefits.</p>
              <p className="mb-4">Want to increase your profits? Let's connect.</p>
              <Button 
                variant="outline" 
                className="mt-4 bg-[#0A2647] text-white hover:bg-[#0A2647]/90"
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