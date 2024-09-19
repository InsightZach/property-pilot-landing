import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WhoWeWorkWith = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Who We Work With</h2>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          We provide property tax appeal services for property owners and tenants of commercial, industrial, and apartment properties in the Minneapolis-St. Paul metro area. Our expertise covers Minnesota property tax appeals, including commercial property tax appeals in Minneapolis, MN.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Commercial.svg" alt="Commercial" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">COMMERCIAL</h3>
              <p>Expert commercial property tax appeals in Minneapolis, MN and surrounding areas.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Industrial.svg" alt="Industrial" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">INDUSTRIAL</h3>
              <p>Specialized in industrial property tax appeals across Minnesota.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Apartments.svg" alt="Apartments" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">APARTMENTS</h3>
              <p>Comprehensive apartment property tax appeals in the Twin Cities metro.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Minnesota.svg" alt="Minnesota" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">MINNESOTA</h3>
              <p>Serving all of Minnesota with expert property tax appeal services.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;