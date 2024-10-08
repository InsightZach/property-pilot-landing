import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => (
const FAQItem = ({ question, answer }) => (
  <AccordionItem value={question} className="mb-4">
    <AccordionTrigger className="text-left px-4 py-2">{question}</AccordionTrigger>
    <AccordionContent className="px-4 py-2">{answer}</AccordionContent>
  </AccordionItem>
);

const StatItem = ({ value, label }) => (
const StatItem = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg text-center">
    <p className="text-2xl font-bold text-[#0A2647]">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);
);

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the process for appealing my property tax assessment in Minnesota?",
      answer: "The Minnesota property tax appeal process begins with a thorough analysis of your property's assessment. If we identify an over-assessment, we prepare and file an appeal on your behalf. We handle all aspects of the Minnesota property tax appeal process, including negotiations and hearings, to ensure your property taxes are accurately assessed and potentially reduced."
    },
    {
      question: "How do I know if my commercial or industrial property is over-assessed in Minnesota?",
      answer: "An over-assessment occurs when the assessment value is higher than 'market value'. Many factors should be taken into account for Minnesota commercial and industrial properties. Some typical indicators are: 1) Value Increase - An increase in value relative to your property's income production. 2) Equalization - Comparable properties received a lower value, but your property was not included. 3) Purchase price - You recently purchased your property below the assessment value. 4) Overstated improvement - You completed an improvement and the taxing jurisdiction added the permitted value on top of your assessment value."
    },
    {
      question: "What kind of savings can I expect from a successful property tax appeal in Minnesota?",
      answer: "While savings can vary, our clients have seen an average reduction of 17.9% in their Minnesota property tax assessments, resulting in average net savings of $24k+ per appeal. The actual savings will depend on your specific property and assessment. For context, the tax consulting industry standard is around a 10% average reduction."
    },
    {
      question: "How long does the property tax appeal process typically take in Minnesota?",
      answer: "The Minnesota property tax appeal process falls into two categories: Board Appeals (Local or County) and Tax Court petitions. Board appeals apply to value notices, which you receive in early spring. There is a predetermined time frame depending on your taxing jurisdiction, typically ranging from 1-3 months. For Tax Court Petitions, a 2-year appeal time frame is not uncommon. However, our average timeframe for resolving Minnesota property tax appeals is 90 days."
    },
    {
      question: "What information or documentation do I need to provide for a Minnesota property tax appeal?",
      answer: "This is all on a case by case basis, but information showing your Minnesota commercial, industrial, or apartment property's Income & Expense for the last two years is standard. These typically include: Rent Roll, Income and Expense Report, and Lease details."
    },
    {
      question: "How do you determine if a Minnesota property tax appeal is worth pursuing?",
      answer: "We conduct a detailed analysis of your property's assessment compared to its market value and similar properties in Minnesota. If we identify a significant over-assessment, we will recommend pursuing an appeal and outline the potential benefits and savings for your specific property."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions About Minnesota Property Tax Appeals</h1>
        <div className="flex justify-center mb-12">
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
        </div>
        <Accordion type="single" collapsible className="bg-white rounded-lg p-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </Accordion>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">
            Join our clients who benefited from Insight's 2024 Minnesota property tax appeal stats.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatItem value="-17.9%" label="MN Appeal Reduction Average" />
            <StatItem value="24 K+ ($)" label="Net Savings Average" />
            <StatItem value="100%" label="MN Appeal Success Rate" />
            <StatItem value="90 Day" label="Average Appeal Length" />
          </div>
          <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3">
              <h3 className="text-4xl font-bold text-[#0A2647] mb-4">Start Your Minnesota Property Tax Appeal</h3>
              <p className="text-[#0A2647] mb-4">
                We'll review your Minnesota property and provide an appeal recommendation. If an appeal benefits you, we'll handle the entire process.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <h4 className="text-2xl font-semibold text-[#0A2647] mb-4">See how much you can save on Minnesota property taxes.</h4>
              <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-3">
                Start Your MN Tax Appeal
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
