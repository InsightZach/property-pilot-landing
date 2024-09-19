import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WhoWeWorkWith = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Who We Work With</h2>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          We provide expert property tax appeal services for property owners and tenants in Minneapolis, MN and throughout Minnesota. Our expertise covers commercial property tax appeals in Minneapolis, MN, as well as comprehensive Minnesota property tax appeals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Commercial.svg" alt="Commercial" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">COMMERCIAL</h3>
              <p>Specialized in commercial property tax appeals in Minneapolis, MN and across Minnesota.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Industrial.svg" alt="Industrial" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">INDUSTRIAL</h3>
              <p>Expert industrial property tax appeals throughout Minnesota.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <img src="/Apartments.svg" alt="Apartments" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">APARTMENTS</h3>
              <p>Comprehensive apartment property tax appeals in Minneapolis and the Twin Cities metro.</p>
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
