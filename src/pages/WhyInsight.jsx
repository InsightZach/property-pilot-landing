import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonTable from '../components/ComparisonTable';
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
          <p className="text-xl text-white">Client Focused Results</p>
        </section>

        <section className="bg-white rounded-lg p-8 mb-16">
          <div className="text-lg text-gray-700 space-y-6">
            <h3 className="text-2xl font-semibold text-[#0A2647]">Our Approach</h3>
            <p>
              At Insight Property Tax, we specialize in helping Minnesota commercial property owners and tenants reduce their property tax liabilities through expert assessment appeals. We believe that fair property assessments are essential to maximizing profitability, and we leverage decades of experience to ensure our clients aren't overpaying on their property taxes.
            </p>
            <p>
              We've built a reputation for delivering results by focusing on one thing: saving our clients money. Using advanced analytics and a deep understanding of both the appraising and assessing sides of the process, we identify over-assessments and pursue efficient, end-to-end appeals.
            </p>
            
            <h3 className="text-2xl font-semibold text-[#0A2647]">Our Expertise</h3>
            <p>
              With years of experience in property tax consulting, as well as time spent on the assessor's side, we know how the system works—and how to work it for you. This unique background gives us insight into how property values are set and how they can be corrected. Whether you own commercial, industrial, or apartment properties in the Minneapolis-St. Paul metro area, we're here to ensure you're paying the right amount of taxes, not a penny more.
            </p>
            
            <h3 className="text-2xl font-semibold text-[#0A2647]">Our Commitment</h3>
            <p>
              We understand that property tax appeals can seem complex and overwhelming, but at Insight, we aim to make the process as straightforward and hassle-free as possible. Our clients rely on us to handle every step—from initial review to successful resolution. By offering a contingency-based service, you only pay if we secure savings, making this a no-risk, high-reward decision.
            </p>
            <p>
              When you work with Insight Property Tax, you're working with a dedicated team committed to maximizing your property's profitability and minimizing unnecessary expenses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
              <CardHeader>
                <CardTitle className="text-center">Proven Minnesota Property Tax Appeal Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 17.9% reduction average</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> $49k tax savings per property</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 90-day appeal duration average</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 100% appeal success rate</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#324E6E] text-white border-[#d7b971] border-2">
              <CardHeader>
                <CardTitle className="text-center">No-Risk Contingency Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pay $0 upfront</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Our fee is 30% of tax savings</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pocket the rest</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> We handle everything</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="hidden sm:block bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-[#0A2647] mb-8 text-center">Comparison of Property Tax Appeal Options</h2>
          <ComparisonTable />
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
