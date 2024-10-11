import React, { useEffect, useRef, useState } from 'react';
import { FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';

const ProcessStep = ({ number, icon: Icon, title, description, isActive, isLast }) => (
  <div className="flex items-start mb-32 relative">
    <div className="relative">
      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${isActive ? 'bg-[#d7b971]' : 'bg-white'} border border-[#d7b971] flex items-center justify-center text-[#0A2647] font-bold text-xs mr-8 z-20 transition-colors duration-300`}>
        {number}
      </div>
    </div>
    <div className="flex-grow">
      <div className="flex items-center mb-3">
        <Icon className="w-12 h-12 text-[#d7b971] mr-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      stepsRef.current.forEach((step, index) => {
        if (step && scrollPosition >= step.offsetTop) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: FileSearch,
      title: "Assessment Review",
      description: "We thoroughly review your property's assessed value and identify potential over-assessments."
    },
    {
      icon: BarChart3,
      title: "Appeal Strategy",
      description: "We develop a tailored appeal strategy based on your property's unique circumstances and market conditions."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "We prepare all necessary documentation and evidence to support your appeal, ensuring a strong case."
    },
    {
      icon: HandshakeIcon,
      title: "Negotiation",
      description: "We negotiate with tax authorities on your behalf to achieve the best possible outcome for your property tax appeal."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-[#0A2647]">Our Property Tax Appeal Process</h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-3 bottom-3 w-px bg-[#d7b971]"></div>
          {steps.map((step, index) => (
            <div key={index} ref={el => stepsRef.current[index] = el}>
              <ProcessStep
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={activeStep === index + 1}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;