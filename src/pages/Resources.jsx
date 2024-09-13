import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesContent from '../components/ResourcesContent';
import CountyResources from '../components/CountyResources';
import PropertyTaxCalendar from '../components/PropertyTaxCalendar';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Minnesota Property Tax Resources</h1>
        <ResourcesContent />
        <CountyResources />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;