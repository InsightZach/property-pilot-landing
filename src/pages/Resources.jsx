import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesContent from '../components/ResourcesContent';
import CountyResources from '../components/CountyResources';
import { Card, CardContent } from "@/components/ui/card";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
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
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
