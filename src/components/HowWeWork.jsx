import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowWeWork = () => (
  <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0A2647] mb-12">How We Work</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-4 text-center underline">Contingency Fee</h3>
            <p className="text-lg text-left">Pay $0 upfront—our fee is 30% of your tax savings, and you keep the rest.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-4 text-center underline">Full Service</h3>
            <p className="text-lg text-left">We handle the entire appeal process, from identifying over-assessments to negotiating successful outcomes.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default HowWeWork;