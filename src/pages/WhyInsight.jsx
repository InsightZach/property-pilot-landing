import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecentAppeals from '../components/RecentAppeals';
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Why Choose <span className="text-[#d7b971]">Insight</span>?</h1>
          <p className="text-xl text-white">Discover the Insight advantage in property tax appeals</p>
        </section>

        <section className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-[#0A2647] mb-8">Expert Minnesota Property Tax Appeals</h2>
          <p className="text-lg text-gray-700 mb-6">
            Insight Property Tax specializes in reducing assessment values for commercial, industrial, and apartment property owners and tenants in Minnesota, saving our clients significant amounts on property taxes.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our local expertise in Minnesota property tax laws gives clients direct access to a proven system that identifies over-assessments and consistently delivers successful appeal settlements throughout the state.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
              <CardHeader>
                <CardTitle className="text-center">Insight's Appeal Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 17.9% reduction average</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> $49k tax savings per property</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 90-day appeal duration average</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 100% appeal success rate</li>
                </ul>
                <Link to="/contact" className="block mt-4">
                  <Button className="w-full bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
              <CardHeader>
                <CardTitle className="text-center">Contingency Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pay $0 upfront</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Our fee is 30% of tax savings</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pocket the rest</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> We handle everything</li>
                </ul>
                <Link to="/contact" className="block mt-4">
                  <Button className="w-full bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Why Choose Insight?</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Recent Appeals</h2>
          <RecentAppeals />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        <section className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">We save our clients <span className="text-[#d7b971]">tens of thousands</span> on property taxes, without the hassle.</h2>
          <p className="text-lg text-[#0A2647] mb-8">Get started. We'll provide you an appeal recommendation. If an appeal benefits you, we'll take care of everything.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
              Start My Free Assessment Review
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyInsight;