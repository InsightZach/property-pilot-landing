import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutInsightSection from '../components/AboutInsightSection';
import RecentAppeals from '../components/RecentAppeals';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ProcessSection from '../components/ProcessSection';
import MeetTheOwner from '../components/MeetTheOwner';
import CallToAction from '../components/CallToAction';

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insight Property Tax",
    "description": "Expert property tax appeal services for commercial, industrial, and apartment properties in Minnesota, including the Twin Cities metro area and Greater Minnesota.",
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
      "name": "Minnesota Property Tax Appeal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Property Tax Appeals in Minnesota"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Property Tax Appeals in Minnesota"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apartment Property Tax Appeals in Minnesota"
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
        <AboutInsightSection />
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
  <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Minnesota Property Tax Appeal Experts</h1>
        <p className="text-xl mb-8">Maximize your commercial, industrial, and apartment property profits through our proven assessment appeal system. Serving the Twin Cities metro and Greater Minnesota.</p>
        <Link to="/contact">
          <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
            Start Your Minnesota Property Tax Appeal <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#0A2647]">Expert Minnesota Property Tax Appeals for Commercial, Industrial, and Apartment Properties</h2>
      <div className="text-lg text-gray-700 space-y-4">
        <p>At Insight Property Tax, we help commercial, industrial, and apartment property owners and tenants across Minnesota reduce their property tax burden through strategic appeals. Our proven methods focus on lowering over-assessed property values, resulting in substantial tax savings for our clients.</p>
        <p>With deep knowledge of Minnesota property tax laws and decades of experience, we provide clients with a streamlined, results-driven process. From identifying tax over-assessments to negotiating successful appeal outcomes, we deliver consistent results and maximize savings for properties throughout the state.</p>
      </div>
    </div>
  </section>
);

export default Index;