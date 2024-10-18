import React from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import AppealStatsInfographic from '../components/AppealStatsInfographic';

const FAQItem = ({ question, answer }) => (
  <AccordionItem value={question} className="mb-4">
    <AccordionTrigger className="text-left px-4 py-2">{question}</AccordionTrigger>
    <AccordionContent className="px-4 py-2">{answer}</AccordionContent>
  </AccordionItem>
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between an informal property tax appeal and a Tax Court petition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An informal appeal is filed with the local assessor's office, with reductions applied to the following year's taxes. A Tax Court petition is a formal process filed with the Minnesota Tax Court, resulting in a refund for overpaid taxes after they've been paid."
      }
    },
    {
      "@type": "Question",
      "name": "When should I file an informal appeal versus a Tax Court petition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "File an informal appeal shortly after receiving your assessment notice (March). It's the fastest and least costly option. If unsuccessful or missed, you can file a Tax Court petition by April 30th of the payable year."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the property tax appeal process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Informal appeals are typically resolved within 90 days, whereas Tax Court petitions can take 1-2 years. Insight Property Tax's process averages about 90 days for both informal and Tax Court appeals, much faster than standard timelines."
      }
    }
    // ... Add more FAQ items here
  ]
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the difference between an informal property tax appeal and a Tax Court petition?",
      answer: "An informal appeal (also referred to as Open Book, Local Boards, or County Boards depending on your taxing jurisdiction) is filed with the local assessor's office. Any reductions are applied to the following year's taxes before payment is due. A Tax Court petition is a formal process filed with the Minnesota Tax Court. If successful, it results in a refund for overpaid taxes after they've been paid."
    },
    {
      question: "When should I file an informal appeal versus a Tax Court petition?",
      answer: "File an informal appeal shortly after receiving your assessment notice (March). It's the fastest and least costly option. If unsuccessful or missed, you can file a Tax Court petition by April 30th of the payable year."
    },
    {
      question: "How long does the property tax appeal process take?",
      answer: "Informal appeals are typically resolved within 90 days, whereas Tax Court petitions can take 1-2 years. Insight Property Tax's process averages about 90 days for both informal and Tax Court appeals, much faster than standard timelines."
    },
    {
      question: "What information do I need to provide for an appeal?",
      answer: "For informal appeals, financial documents, rent rolls, and property appraisals are commonly required. For Tax Court petitions or income-producing properties, mandatory disclosures are required, including year-end financial statements, rent rolls, lease agreements, net rentable square footage, and a proposed budget for the following year."
    },
    {
      question: "Do I need an attorney for an informal appeal?",
      answer: "No. Attorneys are not needed to file an informal appeal. Insight Property Tax manages the entire process without legal representation. However, Tax Court petitions do require an attorney to file, a process we manage for our clients while continuing to represent our clients from filing to settlement."
    },
    {
      question: "Case Study: How much could I save on a $4,000,000 property with a 10% reduction?",
      answer: "For a $4,000,000 property, a 10% reduction in assessed value brings it down to $3,600,000. For commercial properties taxed at around 3.5%, this reduction would save approximately $14,000 in property taxes."
    },
    {
      question: "Can my property's value increase after filing an appeal?",
      answer: "In rare cases, yes, if the case goes to trial and the court deems the property was under-assessed. If you're concerned, Insight Property Tax ensures your appeal is withdrawn before reaching trial to avoid this risk."
    },
    {
      question: "What happens if Insight Property Tax doesn't win the appeal?",
      answer: "There's no risk to the client. Insight Property Tax works on a contingency basis, meaning you only pay if we successfully reduce your property taxes."
    },
    {
      question: "What types of properties does Insight Property Tax work with?",
      answer: "We focus on the Minneapolis-St. Paul metro area but work exclusively throughout Minnesota, providing property tax appeal services for commercial, industrial, and apartment property owners and tenants."
    },
    {
      question: "How does Insight determine if my property is over-assessed?",
      answer: "We use advanced analytics to locate over-assessed properties and use the three approaches to value: Sales Comparison, Income approach, and Cost approach. This comprehensive evaluation helps us identify over-assessments and pursue corrections."
    },
    {
      question: "What are mandatory disclosure requirements for income-producing properties?",
      answer: "For income-producing properties, you must provide the following by August 1st of the year taxes are due: Year-end financial statements for the previous and current year, rent rolls as of the assessment date, lease agreements detailing tenant names, terms, and rental rates, net rentable square footage of the property, and anticipated income and expenses (proposed budget for the following year). Failure to meet these disclosure requirements could result in automatic dismissal of your appeal."
    },
    {
      question: "When must a Tax Court petition be filed?",
      answer: "A Tax Court petition must be filed by April 30th of the payable year. This is the last chance to challenge your property's assessed value for the year, and Insight Property Tax can assist with this process."
    },
    {
      question: "What happens if I miss the deadline for an informal appeal?",
      answer: "If you miss the deadline for an informal appeal, you can still file a Tax Court petition by April 30th. Insight will ensure all necessary steps are taken before the deadline."
    },
    {
      question: "Can I appeal multiple properties at once?",
      answer: "Yes, as long as the properties are owned by the same entity and located within the same county, you can include multiple parcels in the same appeal."
    },
    {
      question: "What happens if I win my appeal after paying property taxes?",
      answer: "If you win through a Tax Court petition after taxes have been paid, you'll receive a refund for the overpaid amount, plus interest."
    },
    {
      question: "What are the benefits of working with Insight Property Tax?",
      answer: "Insight Property Tax offers: Risk-free services (you only pay if we succeed), fast results (our process averages 90 days for informal appeals), and local expertise (we specialize in Minnesota property tax law, delivering personalized service and avoiding bureaucratic delays common with national firms)."
    },
    {
      question: "Can I reduce my property taxes without filing a petition?",
      answer: "Yes, but only within a small window. If you appeal informally during the March–June period, your property's assessed value can be adjusted without needing to file a formal Tax Court petition."
    },
    {
      question: "What if my appeal doesn't reduce the value as much as expected?",
      answer: "In some cases, the reduction may not meet your expectations, but it will still result in savings. Insight Property Tax will ensure every possible reduction is pursued."
    },
    {
      question: "How is the value of my property determined in an appeal?",
      answer: "We use the sales comparison approach, cost approach, and income approach to evaluate your property's market value. These methods are recognized by Minnesota courts and help support your case during the appeal process."
    },
    {
      question: "How can I get started with Insight Property Tax?",
      answer: "Contact us for a free assessment review. We'll evaluate your property's assessment and identify whether there's an opportunity to reduce your tax burden. From there, we'll guide you through the appeal process step-by-step."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>FAQ | Insight Property Tax</title>
        <meta name="description" content="Frequently asked questions about property tax appeals in Minnesota. Get expert answers from Insight Property Tax." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h1>
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
            Join our clients who benefited from Insight's 2024 appeal stats.
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <AppealStatsInfographic />
          </div>
          <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-[#0A2647] mb-4">Get Started</h3>
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