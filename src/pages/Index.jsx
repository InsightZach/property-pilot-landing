import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';
import MeetTheOwner from '../components/MeetTheOwner';
import HowWeWork from '../components/HowWeWork';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import AboutInsightSection from '../components/AboutInsightSection';
import HeroCarousel from '../components/HeroCarousel';

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
        <h1 className="sr-only">Minnesota Property Tax Assessment Appeals</h1>
        <HeroSection />
        <div className="bg-white">
          <AboutInsightSection />
          <HowWeWork />
          <ProcessSection />
          <WhoWeWorkWith />
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
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-white leading-tight">
        Minnesota Property Tax
        <br className="hidden md:inline" />
        Assessment Appeals
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1 text-left flex flex-col justify-between">
          <div>
            <p className="text-lg md:text-xl mb-6 text-white">
              We save our clients tens of thousands on commercial,
              industrial, and apartment property taxes.
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
          </div>
          <Link to="/contact" className="inline-block">
            <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start My Free Assessment Review
            </Button>
          </Link>
        </div>
        <div className="flex-1 hidden lg:flex items-end">
          <HeroCarousel />
        </div>
      </div>
    </div>
  </section>
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
      <div className="flex justify-center">
        <Link to="/contact">
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start My Free Assessment Review
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default Index;
