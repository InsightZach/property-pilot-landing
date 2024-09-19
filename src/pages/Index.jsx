import React from 'react';
import { Helmet } from 'react-helmet';
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
    <CardContent className="text-left">{description}</CardContent>
  </Card>
);

const AboutInsightSection = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">About Insight Property Tax</h2>
      <div className="mb-8">
        <p className="text-lg mb-4">
          Insight Property Tax specializes in commercial property tax appeals in Minneapolis, MN and throughout Minnesota. We help property owners reduce their assessment values, saving tens of thousands on property taxes.
        </p>
        <p className="text-lg mb-4">
          Our local expertise in Minnesota property tax appeals gives clients direct access to a proven system that identifies over-assessments and consistently delivers successful appeal settlements. Whether you're considering a DIY property tax appeal or seeking professional assistance, we're here to help.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardHeader>
            <CardTitle className="text-white">Insight's 2024 Appeal Statistics</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> -17.9% reduction average for Minneapolis property tax appeals</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> $49k tax savings per property</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 90-day appeal duration average</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 100% appeal success rate</li>
            </ul>
            <p className="mt-4">Our clients save significantly on commercial property taxes in Minneapolis and across Minnesota.</p>
            <Link to="/contact">
              <Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Start Your Appeal</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardHeader>
            <CardTitle className="text-white">Expert Minnesota Property Tax Appeals</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Specialized in commercial property tax appeals</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Comprehensive knowledge of Minneapolis and Minnesota tax laws</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Guidance for DIY property tax appeals</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Professional representation throughout the appeal process</li>
            </ul>
            <p className="mt-4">Leverage our expertise in Minnesota property tax appeals to maximize your savings.</p>
            <Link to="/why-insight">
              <Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Why Choose Insight?</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insight Property Tax",
    "description": "Expert commercial property tax appeal services in Minneapolis and throughout Minnesota.",
    "url": "https://insightpropertytax.com",
    "logo": "https://insightpropertytax.com/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minneapolis",
      "addressRegion": "MN",
      "addressCountry": "US"
    },
    "telephone": "+16122084419",
    "email": "zach@insightpropertytax.com",
    "sameAs": [
      "https://www.linkedin.com/in/zach-hepburn/"
    ],
    "priceRange": "Contingency fee: 30% of tax savings",
    "openingHours": "Mo-Fr 09:00-17:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 44.9778,
        "longitude": -93.2650
      },
      "geoRadius": "250"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Tax Appeal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Property Tax Appeals in Minneapolis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Minnesota Property Tax Appeals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DIY Property Tax Appeal Guidance"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Insight Property Tax - Expert Commercial Property Tax Appeals in Minneapolis, MN</title>
        <meta name="description" content="Maximize your savings on commercial property taxes in Minneapolis and throughout Minnesota with Insight Property Tax. Expert appeals and proven results for Minnesota property tax appeals." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />

      <main>
        <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Expert Commercial Property Tax Appeals in Minneapolis, MN
              </h1>
              <p className="text-xl mb-8">
                Maximize your savings on commercial property taxes in Minneapolis and throughout Minnesota with Insight Property Tax. We specialize in Minnesota property tax appeals and offer guidance for DIY property tax appeals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
                  Start Your Appeal <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight for Your Minneapolis Property Tax Appeal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={DollarSign} title="Risk-Free Service" description="You pay only if we successfully reduce your commercial property taxes in Minneapolis or anywhere in Minnesota." />
              <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Hundreds of settled property tax appeals from local professionals with in-depth knowledge of Minneapolis and Minnesota tax laws." />
              <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings on Minnesota property tax appeals." />
            </div>
          </div>
        </section>

        <AboutInsightSection />

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
