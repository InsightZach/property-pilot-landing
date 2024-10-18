import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesContent from '../components/ResourcesContent';
import CountyResources from '../components/CountyResources';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Minnesota Property Tax Resources",
  "description": "Comprehensive resources for Minnesota property tax appeals, including county-specific information and expert guidance.",
  "url": "https://insightpropertytax.com/resources"
};

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Minnesota Property Tax Resources | Insight Property Tax</title>
        <meta name="description" content="Access comprehensive resources for Minnesota property tax appeals. Find county-specific information, expert guides, and tools to help with your property tax reduction." />
        <meta name="keywords" content="Minnesota property tax resources, tax appeal guides, county tax information, commercial property tax, industrial property tax" />
        <script type="application/ld+json">{JSON.stringify(resourcesSchema)}</script>
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Minnesota Property Tax Resources</h1>
        
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-6 md:p-10">
            <ResourcesContent />
          </CardContent>
        </Card>
        
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-6 md:p-10">
            <CountyResources />
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">We save our clients <span className="text-[#d7b971]">tens of thousands</span> on property taxes, without the hassle.</h2>
          <p className="text-lg text-[#0A2647] mb-8">Get started. We'll provide you an appeal recommendation. If an appeal benefits you, we'll take care of everything.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-4">
              Start My Free Assessment Review
            </Button>
          </Link>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;