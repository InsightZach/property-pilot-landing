import React, { useEffect, useRef, useState } from 'react';
import { FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';
import Sticker from './Sticker';

const ProcessStep = ({ number, icon: Icon, title, description, isActive, isLast, showSticker }) => (
  <div className="flex flex-col md:flex-row items-start mb-12 md:mb-32 relative">
    <div className="relative flex items-center self-start md:self-center mr-4 md:mr-8 mb-4 md:mb-0">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${isActive ? 'bg-[#d7b971]' : 'bg-white'} border-2 border-[#d7b971] flex items-center justify-center text-[#0A2647] font-bold text-lg z-20 transition-colors duration-300`}>
        {number}
      </div>
    </div>
    <div className="flex-grow relative">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-3">
        <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#d7b971] mb-4 md:mb-0 md:mr-6 flex-shrink-0" />
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#0A2647]">
            {title}
            {showSticker && <Sticker color="red" text="Free!" />}
          </h3>
          <p className="text-gray-700 text-base md:text-lg">{description}</p>
        </div>
      </div>
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
      description: "We thoroughly review your property's assessed value and identify potential over-assessments.",
      showSticker: true
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16 md:mb-24 text-[#0A2647]">Our Property Tax Appeal Process</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-10 h-[calc(100%-6rem)] w-0.5 bg-[#d7b971] hidden md:block"></div>
          {steps.map((step, index) => (
            <div key={index} ref={el => stepsRef.current[index] = el}>
              <ProcessStep
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={activeStep === index + 1}
                isLast={index === steps.length - 1}
                showSticker={step.showSticker}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;