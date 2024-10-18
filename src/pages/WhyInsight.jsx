import React from 'react';
import { Helmet } from 'react-helmet';

const WhyInsight = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Why Choose Insight Property Tax | Expert Minnesota Tax Appeals</title>
        <meta name="description" content="Discover why Insight Property Tax is your best choice for Minnesota property tax appeals. Our expertise, personalized service, and proven track record set us apart." />
        <meta name="keywords" content="Minnesota property tax appeals, expert tax consultants, commercial property tax, industrial property tax, apartment property tax" />
      </Helmet>
      <header className="py-8">
        <h1 className="text-4xl font-bold text-center text-white">Why Choose Insight Property Tax</h1>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Our Expertise</h2>
          <p className="text-white">With years of experience in property tax appeals, we understand the complexities of the Minnesota tax system and how to navigate it effectively.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Personalized Service</h2>
          <p className="text-white">We provide tailored solutions for each client, ensuring that your unique needs and circumstances are addressed throughout the appeal process.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Proven Track Record</h2>
          <p className="text-white">Our success stories speak for themselves. We have helped numerous clients achieve significant tax savings through our dedicated services.</p>
        </section>
      </main>
    </div>
  );
};

export default WhyInsight;
