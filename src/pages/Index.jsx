import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, LineChart, Percent, Clock, ThumbsUp, Briefcase } from 'lucide-react';
import MeetTheOwner from '../components/MeetTheOwner';
import RecentAppeals from '../components/RecentAppeals';

const StatCard = ({ icon: Icon, title, description }) => (
  <Card className="border-[#d7b971]">
    <CardHeader>
      <CardTitle className="flex items-center justify-center text-[#0A2647]">
        <Icon className="mr-2 h-6 w-6 text-[#d7b971]" />
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

const ResultsCostSection = ({ title, subtitle, items, buttonText, description }) => (
  <div className="bg-white rounded-lg shadow-md p-8">
    <h3 className="text-2xl font-bold text-[#0A2647] mb-2">{title}</h3>
    <p className="text-lg text-[#0A2647] mb-6">{subtitle}</p>
    <ul className="space-y-4 mb-8">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="text-[#d7b971] mr-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-lg text-[#0A2647] mb-6">{description}</p>
    <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">{buttonText}</Button>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#0A2647] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Insight Property Tax Logo" className="h-16 w-auto" />
          </div>
        </div>
      </header>

      <section className="bg-[#0A2647] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#d7b971] text-xl mb-4">Commercial - Industrial - Apartments</p>
          <h1 className="text-5xl font-bold mb-4">Reduce Your Minnesota Property Taxes</h1>
          <p className="text-xl mb-8">Expert assessment appeals for commercial property owners and tenants</p>
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Get a Free Consultation</Button>
        </div>
      </section>

      <Section title="Why Choose Insight Property Tax">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={DollarSign} title="Risk-Free Service" description="Pay only if we successfully reduce your property taxes." />
          <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Decades of experience in Minnesota property tax law." />
          <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings." />
        </div>
      </Section>

      <Section title="Results and Cost" bgColor="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResultsCostSection
            title="Results"
            subtitle="Insight's 2024 Appeal Statistics"
            items={[
              "-17.9% reduction average",
              "$49k tax savings per property",
              "90-day appeal duration average",
              "100% appeal success rate"
            ]}
            buttonText="Get Started"
            description="Our clients save tens of thousands on property taxes."
          />
          <ResultsCostSection
            title="Cost"
            subtitle="Contingency Fee"
            items={[
              "You pay $0 upfront",
              "Our fee is 30% of tax savings",
              "You pocket the rest",
              "We handle everything"
            ]}
            buttonText="Why Choose Insight?"
            description="Leverage our expertise, maximize your profit and time."
          />
        </div>
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
              <div className="w-16 h-16 bg-[#d7b971] text-[#0A2647] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
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
          <Card className="border-[#d7b971]">
            <CardContent className="pt-6">
              <p className="italic mb-4">"Insight Property Tax saved us $30,000 last year. Their expertise and personalized service made the process seamless."</p>
              <p className="font-semibold text-[#0A2647]">— Commercial Property Owner</p>
            </CardContent>
          </Card>
          <Card className="border-[#d7b971]">
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
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Start Your Property Review Today</Button>
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