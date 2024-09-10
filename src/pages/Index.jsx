import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-[#0A2647] text-white py-20">
        <div className="container mx-auto px-4">
          <img src="/logo.png" alt="Insight Property Tax Logo" className="mb-8 max-w-md mx-auto" />
          <h1 className="text-5xl font-bold mb-4">Reduce Your Minnesota Property Taxes</h1>
          <p className="text-xl mb-8">Expert assessment appeals for commercial property owners and tenants</p>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2647]">Get a Free Consultation</Button>
        </div>
      </header>

      {/* Unique Selling Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight Property Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#0A2647]">
                  <DollarSign className="mr-2 h-6 w-6 text-[#D4AF37]" />
                  Risk-Free Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                Pay only if we successfully reduce your property taxes.
              </CardContent>
            </Card>
            <Card className="border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#0A2647]">
                  <CheckCircle className="mr-2 h-6 w-6 text-[#D4AF37]" />
                  Minnesota Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                Decades of experience in Minnesota property tax law.
              </CardContent>
            </Card>
            <Card className="border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#0A2647]">
                  <LineChart className="mr-2 h-6 w-6 text-[#D4AF37]" />
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                Data-driven strategies to maximize your savings.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-[#0A2647]">About Insight Property Tax</h2>
          <p className="text-lg mb-4">
            Insight Property Tax helps Minnesota commercial property owners and tenants reduce their property tax liabilities through expert assessment appeals. We use advanced analytics and industry expertise to identify over-assessed properties and provide end-to-end appeal services to ensure maximum tax savings.
          </p>
          <p className="text-lg">
            With decades of experience on both the assessor's side and as property tax consultants, we offer unparalleled expertise in Minnesota property tax law. Our personalized service and streamlined processes set us apart from large, bureaucratic firms.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Property Review', 'Value Analysis', 'Appeal Strategy', 'Negotiation & Resolution'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37] text-[#0A2647] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2 text-[#0A2647]">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#D4AF37]">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Insight Property Tax saved us $30,000 last year. Their expertise and personalized service made the process seamless."</p>
                <p className="font-semibold text-[#0A2647]">— Commercial Property Owner</p>
              </CardContent>
            </Card>
            <Card className="border-[#D4AF37]">
              <CardContent className="pt-6">
                <p className="italic mb-4">"I was amazed by how quickly Insight handled my appeal, saving me thousands in property taxes."</p>
                <p className="font-semibold text-[#0A2647]">— Industrial Property Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0A2647] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Reduce Your Property Taxes?</h2>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2647]">Start Your Property Review Today</Button>
        </div>
      </section>

      {/* Contact Information */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Phone: [Your Phone Number]</p>
          <p className="mb-2">Email: [Your Email Address]</p>
          <p className="mb-4">LinkedIn: [Your LinkedIn Profile URL]</p>
          <p>&copy; 2024 Insight Property Tax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;