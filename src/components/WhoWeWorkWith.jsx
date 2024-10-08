import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Minnesota Property Tax Appeal Services</h2>
      <div className="text-left mb-8">
        <p className="text-lg mb-4">We provide expert property tax appeal services for commercial, industrial, and apartment property owners and tenants across Minnesota, including the Twin Cities metro area and Greater Minnesota.</p>
        <p className="text-lg mb-4">If you believe your Minnesota property is over-assessed, your tax burden is too high, or you're unsure if your property is fairly assessed, we offer free assessment reviews to identify potential savings.</p>
        <p className="text-lg mb-4">Insight Property Tax makes it easy to reduce property tax costs and maximize your profits with our straightforward appeal process tailored for Minnesota property owners.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Commercial', 'Industrial', 'Apartments', 'Minnesota'].map((type) => (
          <Card key={type} className="bg-white/10 backdrop-blur-md border-[#d7b971]">
            <CardContent className="p-4">
              <img src={`/${type}.svg`} alt={`${type} Property Tax Appeals in Minnesota`} className="w-full h-32 object-cover rounded-lg" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;