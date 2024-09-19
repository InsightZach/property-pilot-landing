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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Expert Property Tax Appeals in Minnesota
              </h1>
              <p className="text-xl mb-8">
                Maximize your savings on commercial, industrial, and apartment property taxes with Insight Property Tax.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
                  Get Started <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight Property Tax?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={DollarSign} title="Risk-Free Service" description="You pay only if we successfully reduce your property taxes." />
              <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Hundreds of settled appeals from local professionals with appraisal and assessment backgrounds." />
              <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings." />
            </div>
          </div>
        </section>

        <RecentAppeals />

        <ProcessSection />

        <MeetTheOwner />

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
