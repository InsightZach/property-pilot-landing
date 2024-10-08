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
import AppealStatistics from '../components/AppealStatistics';
import ContingencyFee from '../components/ContingencyFee';

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
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Expert Minnesota Property Tax Appeals</h2>
      <div className="mb-8">
        <p className="text-lg mb-4">Insight Property Tax specializes in reducing assessment values for commercial, industrial, and apartment property owners and tenants in Minnesota, saving our clients significant amounts on property taxes.</p>
        <p className="text-lg mb-4">Our local expertise in Minnesota property tax laws gives clients direct access to a proven system that identifies over-assessments and consistently delivers successful appeal settlements throughout the state.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppealStatistics />
        <ContingencyFee />
      </div>
    </div>
  </section>
);

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Minnesota Property Tax Appeal Services</h2>
      <div className="text-left mb-8">
        <p className="text-lg mb-4">We provide expert property tax appeal services for commercial, industrial, and apartment property owners and tenants across Minnesota, including the Twin Cities metro area and Greater Minnesota.</p>
        <p className="text-lg mb-4">If you believe your Minnesota property is over-assessed, your tax burden is too high, or you're unsure if your property is fairly assessed, we offer free assessment reviews to identify potential savings.</p>
        <p className="text-lg mb-4">Insight Property Tax makes it easy to reduce property tax costs and maximize your profits with our straightforward appeal process tailored for Minnesota property owners.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Commercial', 'Industrial', 'Apartments', 'Minnesota'].map((type) => (
          <Card key={type} className="bg-white/10 backdrop-blur-md border-[#d7b971]">
            <CardContent className="p-4">
              <img src={`/${type}.svg`} alt={`${type} Property Tax Appeals in Minnesota`} className="w-full h-32 object-cover rounded-lg" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

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
        <meta name="description" content="Maximize your savings on commercial, industrial, and apartment property taxes in Minnesota with Insight Property Tax. Expert appeals and proven results for tax reduction across the Twin Cities and Greater Minnesota." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Minnesota Property Tax Appeals Experts</h1>
              <p className="text-xl mb-8">Maximize your savings on commercial, industrial, and apartment property taxes in Minnesota with our expert appeal services. Serving the Twin Cities metro area and Greater Minnesota.</p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
                  Start Your Minnesota Property Tax Appeal <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight Property Tax for Your Minnesota Appeal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={DollarSign} title="Risk-Free Minnesota Appeals" description="You pay only if we successfully reduce your Minnesota property taxes." />
              <StatCard icon={CheckCircle} title="Local Minnesota Expertise" description="Hundreds of settled appeals from professionals with Minnesota appraisal and assessment backgrounds." />
              <StatCard icon={LineChart} title="Advanced Analytics for Minnesota Properties" description="Data-driven strategies to maximize your Minnesota property tax savings." />
            </div>
          </div>
        </section>
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

export default Index;
