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
        <p className="text-lg mb-4">Insight Property Tax reduces assessment values for Minnesota commercial property owners and tenants, saving our clients tens of thousands on property taxes.</p>
        <p className="text-lg mb-4">Our local expertise gives clients direct access to a proven system that identifies over-assessments and consistently delivers successful property tax appeal settlements.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardHeader><CardTitle className="text-white">Insight's Appeal Statistics</CardTitle></CardHeader>
          <CardContent className="text-white">
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 15% reduction average</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> $40k tax savings per property</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 90-day appeal duration average</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> 100% appeal success rate</li>
            </ul>
            <Link to="/contact"><Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Get Started</Button></Link>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardHeader><CardTitle className="text-white">Contingency Fee</CardTitle></CardHeader>
          <CardContent className="text-white">
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pay $0 upfront</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> Our fee is 30% of tax savings</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> You pocket the rest</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-[#d7b971]" /> We handle everything</li>
            </ul>
            <Link to="/why-insight"><Button className="mt-4 bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">Why Choose Insight?</Button></Link>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const WhoWeWorkWith = () => (
  <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#2E5077] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Who We Work With</h2>
      <div className="text-left mb-8">
        <p className="text-lg mb-4">We provide property tax appeal services for property owners and tenants of commercial, industrial, and apartment properties in the Minneapolis-St. Paul metro area.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardContent className="p-4">
            <img src="/Commercial.svg" alt="Commercial" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold text-center text-[#d7b971]">Commercial</h3>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardContent className="p-4">
            <img src="/Industrial.svg" alt="Industrial" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold text-center text-[#d7b971]">Industrial</h3>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardContent className="p-4">
            <img src="/Apartments.svg" alt="Apartments" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold text-center text-[#d7b971]">Apartments</h3>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-[#d7b971]">
          <CardContent className="p-4">
            <img src="/Minnesota.svg" alt="Minnesota" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold text-center text-[#d7b971]">Minnesota</h3>
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
        <meta name="description" content="Maximize your savings on commercial, industrial, and apartment property taxes in Minnesota with Insight Property Tax. Expert appeals and proven results." />
        <link rel="canonical" href="https://insightpropertytax.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Expert Property Tax Appeals in Minnesota</h1>
              <p className="text-xl mb-8">Maximize your savings on commercial, industrial, and apartment property taxes with Insight Property Tax.</p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
                  Get Started <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#0A2647]">Why Choose Insight Property Tax?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={DollarSign} title="Risk-Free Service" description="You pay only if we successfully reduce your property taxes." />
              <StatCard icon={CheckCircle} title="Minnesota Expertise" description="Hundreds of settled appeals from local professionals with appraisal and assessment backgrounds." />
              <StatCard icon={LineChart} title="Advanced Analytics" description="Data-driven strategies to maximize your savings." />
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
