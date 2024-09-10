import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const StatItem = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg text-center">
    <p className="text-2xl font-bold text-[#0A2647]">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the process for appealing my property tax assessment in Minnesota?",
      answer: "The process begins with a thorough analysis of your property's assessment. If we identify an over-assessment, we prepare and file an appeal on your behalf. We handle all aspects of the appeal process, including negotiations and hearings, to ensure your property taxes are accurately assessed."
    },
    {
      question: "How do I know if my property is over-assessed?",
      answer: "An over-assessment occurs when the assessment value is higher than 'market value'. Many factors should be taken into account. Some typical indicators are: 1) Value Increase - An increase in value relative to your property's income production. 2) Equalization - Comparable properties received a lower value, but your property was not included. 3) Purchase price - You recently purchased your property below the assessment value. 4) Overstated improvement - You completed an improvement and the taxing jurisdiction added the permitted value on top of your assessment value."
    },
    {
      question: "What kind of savings can I expect from a successful property tax appeal?",
      answer: "While savings can vary, our clients have seen an average reduction of 17.9% in their property tax assessments, resulting in average net savings of $24k+ per appeal. The actual savings will depend on your specific property and assessment. The tax consulting industry standard is around a 10% average reduction for context."
    },
    {
      question: "How long does the property tax appeal process typically take?",
      answer: "The appeal process in Minnesota falls into two categories: Board Appeals (Local or County) and Tax Court petitions. Board appeals apply to value notices, which you receive in early spring. There is a predetermined time frame depending on your taxing jurisdiction, typically ranging from 1-3 months. For Tax Court Petitions, a 2-year appeal time frame is not uncommon. However, our average timeframe is 90 days."
    },
    {
      question: "What information or documentation do I need to provide for the appeal process?",
      answer: "This is all on a case by case basis, but information showing your property's Income & Expense for the last two years is standard. These include: Rent Roll, Income and Expense Report, and Lease."
    },
    {
      question: "How do you determine if an appeal is worth pursuing?",
      answer: "We conduct a detailed analysis of your property's assessment compared to its market value and similar properties. If we identify a significant over-assessment, we will recommend pursuing an appeal and outline the potential benefits."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A2647]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h1>
        <div className="flex justify-center mb-12">
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
          <CheckCircle className="text-[#d7b971] w-12 h-12 mx-2" />
        </div>
        <Accordion type="single" collapsible className="bg-white rounded-lg">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </Accordion>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">
            Join our clients who benefited from Insight's 2024 appeal stats.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatItem value="-17.9%" label="Appeal Reduction Average" />
            <StatItem value="24 K+ ($)" label="Net Savings Average" />
            <StatItem value="100%" label="Appeal Success" />
            <StatItem value="90 Day" label="Average Appeal Length" />
          </div>
          <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3">
              <h3 className="text-4xl font-bold text-[#0A2647] mb-4">Get Started</h3>
              <p className="text-[#0A2647] mb-4">
                We'll review your property and provide an appeal recommendation. If an appeal benefits you, we'll take care of everything.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <h4 className="text-2xl font-semibold text-[#0A2647] mb-4">See how much you will save.</h4>
              <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647] text-lg px-8 py-3">
                Get Started
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