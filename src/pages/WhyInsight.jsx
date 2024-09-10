import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Percent, Clock, Wrench, DollarSign, HelpingHand, Building, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, tagline }) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="w-12 h-12 text-[#d7b971] mx-auto" />
      <p className="text-[#d7b971] text-sm text-center mb-2">{tagline}</p>
    </CardHeader>
    <CardContent>
      <CardTitle className="mb-2 text-center">{title}</CardTitle>
      <p className="text-left">{description}</p>
    </CardContent>
  </Card>
);

const WhyInsight = () => {
  const features = [
    {
      icon: Percent,
      tagline: "ROI",
      title: "218%",
      description: "Insight's contingency fee structure ensures our interests are aligned. We only profit when your property taxes are reduced."
    },
    {
      icon: Clock,
      tagline: "Hassle-Free",
      title: "Straight To The Point",
      description: "We have no intention of extending the appeal process. Our goal is to maximize your savings quickly."
    },
    {
      icon: Clock,
      tagline: "Time",
      title: "90-day Average Settlement",
      description: "Minnesota Tax Court petitions can take up to 2 years to resolve. Our average appeal is settled in less than 90 days."
    },
    {
      icon: Wrench,
      tagline: "Expertise",
      title: "All-Three Tools",
      description: "We're a rare breed: combining analytics, appraisal, and assessing experience. Unmatched, this leads to quicker settlements and higher savings when appealing your assessment."
    },
    {
      icon: DollarSign,
      tagline: "Risk",
      title: "No Reduction- You Pay $0",
      description: "Benefits of our contingency fee model: If we don't reduce your taxes, you pay nothing."
    },
    {
      icon: HelpingHand,
      tagline: "DIY",
      title: "Appeal on Your Own",
      description: "Statistics certainly favor using a professional to appeal your property taxes. Low single-digit reductions are common in DIY appeals, compared to the -17.9% reduction average we have posted in 2024."
    },
    {
      icon: Building,
      tagline: "Competition",
      title: "National Firms",
      description: "National firms often prioritize larger clients. With Insight, you have a high-touch experience. Your property receives the attention it deserves."
    },
    {
      icon: MapPin,
      tagline: "Local",
      title: "We Only Appeal In Minnesota",
      description: "Property tax is a completely different ball game in every state. We have extensive knowledge of Minnesota's unique assessment and more than state and local property tax knowledge that comes from decades of experience."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A2647]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Why Choose <span className="text-[#d7b971]">Insight</span>?</h1>
          <p className="text-xl text-white">Discover the Insight advantage in property tax appeals</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        <section className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">We save our clients <span className="text-[#d7b971]">tens of thousands</span> on property taxes, without the hassle.</h2>
          <p className="text-lg text-[#0A2647] mb-8">Get started. We'll provide you an appeal recommendation. If an appeal benefits you, we'll take care of everything.</p>
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
            Get Started
          </Button>
        </section>

        <section className="mt-16 text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
            <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to reduce your property taxes?</h2>
          <p className="text-xl text-white mb-8">Let's get started with a free analysis of your property.</p>
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
            Get Started
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyInsight;