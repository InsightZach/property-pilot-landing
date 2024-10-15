import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';
import MeetTheOwner from '../components/MeetTheOwner';
import HowWeWork from '../components/HowWeWork';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import AboutInsightSection from '../components/AboutInsightSection';
import RecentAppeals from '../components/RecentAppeals';

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2647] to-[#1E3A5F]">
      <Helmet>
        <title>Minnesota Property Tax Appeals | Insight Property Tax</title>
        <meta name="description" content="Expert Minnesota property tax appeals for commercial, industrial, and apartment properties. Maximize your savings with Insight Property Tax." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <div className="bg-white">
          <AboutInsightSection />
          <HowWeWork />
          <ProcessSection />
          <WhoWeWorkWith />
          <RecentAppealsSection />
          <PropertyTypesSection />
        </div>
        <div className="bg-gradient-to-b from-[#0A2647] to-[#2E5077]">
          <MeetTheOwner />
          <GetStartedSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-12 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A2647] opacity-70"></div>
    <div className="container mx-auto px-8 md:px-16 relative z-10">
      <div className="text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
          Minnesota Property Tax<br />
          Assessment Appeals
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          We save our clients tens of thousands on<br />
          commercial, industrial, and apartment<br />
          property taxes.
        </p>
        <ul className="mb-8 md:mb-10 space-y-3 text-base md:text-lg">
          <li className="flex items-center">
            <CheckCircle className="mr-3 text-[#d7b971] h-5 w-5" />
            <span>You pay $0 upfront</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-3 text-[#d7b971] h-5 w-5" />
            <span>Our fee is 30% of tax savings</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-3 text-[#d7b971] h-5 w-5" />
            <span>You pocket the rest</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-3 text-[#d7b971] h-5 w-5" />
            <span>We handle everything</span>
          </li>
        </ul>
        <Link to="/contact" className="inline-block">
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start My Free Assessment Review
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const RecentAppealsSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-8 md:px-16">
      <h2 className="text-3xl font-semibold text-center text-[#0A2647] mb-8">Recent Appeals</h2>
      <h3 className="text-2xl font-semibold text-center text-[#0A2647] mb-6">Success Stories</h3>
      <RecentAppeals />
    </div>
  </section>
);

const PropertyTypesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-8 md:px-16">
      <h2 className="text-3xl font-semibold text-center text-[#0A2647] mb-8">Property Types We Serve</h2>
      <h3 className="text-2xl font-semibold text-center text-[#0A2647] mb-6">Specialized Expertise</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Commercial', 'Industrial', 'Apartments', 'Minnesota'].map((type) => (
          <Card key={type} className="bg-white/80 backdrop-blur-sm border-[#d7b971]">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <img src={`/${type}.svg`} alt={`${type} Property Tax Appeals in Minnesota`} className="w-full h-24 object-contain mb-2" />
              <p className="text-center font-semibold">{type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const GetStartedSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-8 md:px-16 relative z-10 text-center">
      <div className="flex justify-center mb-8">
        <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
        <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
        <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Reduce Your Property Taxes?</h2>
      <h3 className="text-2xl font-semibold text-white mb-4">Start Your Free Assessment Review</h3>
      <p className="text-xl text-white mb-8">Get started with a free analysis of your property.</p>
      <Link to="/contact">
        <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Start My Free Assessment Review
        </Button>
      </Link>
    </div>
  </section>
);

export default Index;
