import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, LineChart, Percent, Clock, ThumbsUp, Briefcase } from 'lucide-react';
import MeetTheOwner from '../components/MeetTheOwner';
import RecentAppeals from '../components/RecentAppeals';

const StatCard = ({ icon: Icon, title, description }) => (
  <Card className="border-[#D4AF37]">
    <CardHeader>
      <CardTitle className="flex items-center justify-center text-[#0A2647]">
        <Icon className="mr-2 h-6 w-6 text-[#D4AF37]" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center">{description}</CardContent>
  </Card>
);

const Section = ({ title, children, bgColor = "bg-white" }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">{title}</h2>
      {children}
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#0A2647] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Insight Property Tax Logo" className="h-16 w-auto" />
            <nav>
              {/* Add navigation items here if needed */}
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-[#0A2647] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Reduce Your Minnesota Property Taxes</h1>
          <p className="text-xl mb-8">Expert assessment appeals for commercial property owners and tenants</p>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2647]">Get a Free Consultation</Button>
        </div>
      </section>

      <Section title="Why Choose Insight Property Tax">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={DollarSign} title="Risk-Free Service" description="Pay only if we successfully reduce your property taxes." />
          <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Decades of experience in Minnesota property tax law." />
          <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings." />
        </div>
      </Section>

      <Section title="Insight's 2024 Appeal Statistics" bgColor="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard icon={Percent} title="17.9%" description="Average reduction" />
          <StatCard icon={DollarSign} title="$49k" description="Tax savings per property" />
          <StatCard icon={Clock} title="90 Days" description="Average appeal duration" />
          <StatCard icon={ThumbsUp} title="100%" description="Appeal success rate" />
        </div>
        <p className="text-center mt-8 text-lg text-[#0A2647]">Our clients save tens of thousands on property taxes.</p>
      </Section>

      <Section title="Cost: Contingency Fee">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard icon={DollarSign} title="$0 Upfront" description="You pay nothing to start" />
          <StatCard icon={Percent} title="30% Fee" description="Our fee is 30% of tax savings" />
          <StatCard icon={DollarSign} title="You Keep 70%" description="You pocket the rest" />
          <StatCard icon={Briefcase} title="Full Service" description="We handle everything" />
        </div>
        <p className="text-center mt-8 text-lg text-[#0A2647]">Leverage our expertise, maximize your profit and time.</p>
      </Section>

      <RecentAppeals />

      <Section title="About Insight Property Tax" bgColor="bg-gray-100">
        <p className="text-lg mb-4">
          Insight Property Tax helps Minnesota commercial property owners and tenants reduce their property tax liabilities through expert assessment appeals. We use advanced analytics and industry expertise to identify over-assessed properties and provide end-to-end appeal services to ensure maximum tax savings.
        </p>
        <p className="text-lg">
          With decades of experience on both the assessor's side and as property tax consultants, we offer unparalleled expertise in Minnesota property tax law. Our personalized service and streamlined processes set us apart from large, bureaucratic firms.
        </p>
      </Section>

      <Section title="Our Process">
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
      </Section>

      <MeetTheOwner />

      <Section title="What Our Clients Say" bgColor="bg-gray-100">
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
      </Section>

      <section className="py-16 bg-[#0A2647] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Reduce Your Property Taxes?</h2>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2647]">Start Your Property Review Today</Button>
        </div>
      </section>

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