import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecentAppeals from '../components/RecentAppeals';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ProcessSection from '../components/ProcessSection';
import MeetTheOwner from '../components/MeetTheOwner';
import CallToAction from '../components/CallToAction';
import AppealStatsInfographic from '../components/AppealStatsInfographic';
import ExpertiseSection from '../components/ExpertiseSection';

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insight Property Tax",
    "description": "Expert property tax appeal services for commercial, industrial, and apartment properties in Minnesota.",
    "url": "https://insightpropertytax.com",
    "logo": "https://insightpropertytax.com/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minnesota",
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
        "latitude": 46.7296,
        "longitude": -94.6859
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
            "name": "Commercial Property Tax Appeals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Property Tax Appeals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apartment Property Tax Appeals"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Minnesota Property Tax Appeals | Insight Property Tax</title>
        <meta name="description" content="Expert Minnesota property tax appeals for commercial, industrial, and apartment properties. Maximize your savings with Insight Property Tax." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <RecentAppeals />
        <WhoWeWorkWith />
        <ProcessSection />
        <MeetTheOwner />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-12 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A2647] opacity-70"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Save <span className="text-[#d7b971]">Tens of Thousands</span> on Your Minnesota Property Taxes
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white">
            Expert commercial, industrial, and apartment property tax appeals.
          </p>
          <ul className="mb-6 md:mb-8 space-y-2">
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#d7b971] h-5 w-5" />
              <span>You pay $0 upfront</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#d7b971] h-5 w-5" />
              <span>Our fee is 30% of tax savings</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#d7b971] h-5 w-5" />
              <span>You pocket the rest</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#d7b971] h-5 w-5" />
              <span>We handle everything</span>
            </li>
          </ul>
          <Link to="/contact" className="block w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              Start My Free Assessment Review <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#d7b971]">Insight's 2024 Appeal Statistics</h2>
            <AppealStatsInfographic />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Index;