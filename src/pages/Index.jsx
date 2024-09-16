import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MeetTheOwner from '../components/MeetTheOwner';
import RecentAppeals from '../components/RecentAppeals';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';

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

const ResultsCostSection = ({ title, items, buttonText, description, linkTo }) => (
  <Card className="border-[#d7b971] h-full">
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold text-[#0A2647] mb-6">{title}</h3>
      <ul className="space-y-4 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="text-[#d7b971] mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg text-[#0A2647] mb-6">{description}</p>
      <Link to={linkTo}>
        <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">{buttonText}</Button>
      </Link>
    </CardContent>
  </Card>
);

const WhoWeWorkWith = () => (
  <Section title="Who We Work With" bgColor="bg-gray-100">
    <div className="text-center mb-8">
      <p className="text-lg mb-4">
        We provide property tax appeal services for property owners and tenants of commercial,
        industrial, and apartment properties in the Minneapolis-St. Paul metro area.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img src="/Commercial.svg" alt="Commercial" className="w-full h-48 rounded-lg shadow-lg object-cover" />
      <img src="/Industrial.svg" alt="Industrial" className="w-full h-48 rounded-lg shadow-lg object-cover" />
      <img src="/Apartments.svg" alt="Apartments" className="w-full h-48 rounded-lg shadow-lg object-cover" />
      <img src="/Minnesota.svg" alt="Minnesota" className="w-full h-48 rounded-lg shadow-lg object-cover" />
    </div>
  </Section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#d7b971] mb-4">Commercial - Industrial - Apartments</p>
            <h1 className="text-5xl font-bold mb-6">
              Our clients save <span className="text-[#d7b971]">tens of thousands</span> on property taxes.
            </h1>
            <p className="text-xl mb-8">
              Get started → We provide you an appeal recommendation.
              If an appeal benefits you, we'll take care of everything.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
                Get Started <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section title="Why Choose Insight Property Tax?" bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={DollarSign} title="Risk-Free Service" description="You pay only if we successfully reduce your property taxes." />
          <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Hundreds of settled appeals from local professionals with appraisal and assessment backgrounds." />
          <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings." />
        </div>
      </Section>

      <Section title="About Insight Property Tax" bgColor="bg-gray-100">
        <div className="mb-8 text-left">
          <p className="text-lg mb-4">
            Insight Property Tax reduces property taxes for Minnesota commercial property owners and tenants through expert assessment appeals. Using analytics and industry expertise, we identify over-assessments and provide full-service appeals for maximum savings.
          </p>
          <p className="text-lg mb-8">
            With experience on both sides of property tax appeals, we offer our clients a straightforward path to cut through the bureaucracy and provide results --> lower property taxes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResultsCostSection
            title="Insight's 2024 Appeal Statistics"
            items={[
              "-17.9% reduction average",
              "$49k tax savings per property",
              "90-day appeal duration average",
              "100% appeal success rate"
            ]}
            buttonText="Get Started"
            description="Our clients save tens of thousands on property taxes."
            linkTo="/contact"
          />
          <ResultsCostSection
            title="Contingency Fee"
            items={[
              "You pay $0 upfront",
              "Our fee is 30% of tax savings",
              "You pocket the rest",
              "We handle everything"
            ]}
            buttonText="Why Choose Insight?"
            description="Leverage our expertise, maximize your profit and time."
            linkTo="/why-insight"
          />
        </div>
      </Section>

      <RecentAppeals />

      <WhoWeWorkWith />

      <ProcessSection />

      <MeetTheOwner />

      <Section title="What Our Clients Say" bgColor="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-[#d7b971]">
            <CardContent className="pt-6">
              <p className="italic mb-4">"Insight Property Tax saved us $30,000 last year. Their expertise and personalized service made the process seamless."</p>
              <p className="font-semibold text-[#0A2647]">— St. Paul Commercial Property Owner</p>
            </CardContent>
          </Card>
          <Card className="border-[#d7b971]">
            <CardContent className="pt-6">
              <p className="italic mb-4">"I was amazed by how quickly Insight handled my appeal, saving me thousands in property taxes."</p>
              <p className="font-semibold text-[#0A2647]">— Roseville Industrial Property Owner</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default Index;
