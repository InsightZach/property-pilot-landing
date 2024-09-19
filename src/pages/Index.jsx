import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import WhyChooseInsight from '../components/WhyChooseInsight';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import RecentAppeals from '../components/RecentAppeals';
import ProcessSection from '../components/ProcessSection';
import MeetTheOwner from '../components/MeetTheOwner';
import CallToAction from '../components/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <title>Insight Property Tax - Expert Minnesota Property Tax Appeals</title>
        <meta name="description" content="Maximize your savings with Insight Property Tax. Expert commercial property tax appeals in Minneapolis, MN and Minnesota-wide property tax appeal services." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseInsight />
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

export default Index;
