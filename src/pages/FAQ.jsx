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
      answer: "The process involves reviewing your assessment, gathering evidence, filing an appeal with the local assessor's office or tax court, and presenting your case. Insight Property Tax handles all these steps for you."
    },
    {
      question: "How do I know if my property is over-assessed?",
      answer: "Signs of over-assessment include recent property value declines in your area, significant increases in your assessment without improvements, or assessments higher than comparable properties. We provide a free initial review to determine if your property might be over-assessed."
    },
    {
      question: "What kind of savings can I expect from a successful property tax appeal?",
      answer: "Savings vary, but our clients have seen reductions averaging 17.9% in their assessed values, translating to an average of $49,000 in tax savings per property."
    },
    {
      question: "How long does the property tax appeal process typically take?",
      answer: "The duration can vary, but our average appeal process takes about 90 days from start to finish."
    },
    {
      question: "What information or documentation do I need to provide for the appeal process?",
      answer: "Typically, we need your property details, recent tax bills, and any relevant information about your property's condition or recent changes. We guide you through providing the necessary documentation."
    },
    {
      question: "How do you determine if an appeal is worth pursuing?",
      answer: "We conduct a thorough analysis of your property's assessed value, compare it to similar properties, and evaluate recent market trends. If we believe there's potential for significant savings, we'll recommend pursuing an appeal."
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
            <StatItem value="-17%" label="Appeal Reduction Average" />
            <StatItem value="49 K ($)" label="Tax Savings Average" />
            <StatItem value="100%" label="Appeal Success" />
            <StatItem value="90 Day" label="Average Appeal Length" />
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Get Started</h3>
            <p className="mb-4">We'll review your property and provide an appeal recommendation. If an appeal benefits you, we'll take care of everything.</p>
            <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">
              Get Started
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;