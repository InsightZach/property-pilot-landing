import React, { useEffect, useRef, useState } from 'react';
import { FileSearch, BarChart3, FileText, HandshakeIcon } from 'lucide-react';
import Sticker from './Sticker';

const ProcessStep = ({ number, icon: Icon, title, description, progress, showSticker }) => (
  <div className="flex flex-col md:flex-row items-start mb-12 md:mb-32 relative">
    <div className="relative flex items-center self-start md:self-center mr-4 md:mr-8 mb-4 md:mb-0">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#d7b971] flex items-center justify-center font-bold text-lg z-20 transition-all duration-300`}
           style={{
             backgroundColor: `rgba(215, 185, 113, ${progress})`,
             color: progress > 0.5 ? 'white' : '#0A2647',
           }}>
        {number}
      </div>
    </div>
    <div className="flex-grow relative">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-3">
        <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#d7b971] mb-4 md:mb-0 md:mr-6 flex-shrink-0" />
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#0A2647] flex items-center">
            {title}
            {showSticker && <Sticker color="red" text="Free!" className="ml-2" />}
          </h3>
          <p className="text-gray-700 text-base md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProcessSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      const stepHeight = sectionHeight / stepsRef.current.length;
      const currentStepIndex = Math.floor((windowHeight / 2 - sectionTop) / stepHeight);
      
      setActiveStepIndex(Math.max(0, Math.min(currentStepIndex, stepsRef.current.length - 1)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: FileSearch,
      title: "Assessment Review",
      description: "Contact us for a free review of your property's assessed value. We'll identify potential over-assessments and provide a detailed recommendation. If appealing is in your best interest, we'll handle everything from start to finish.",
      showSticker: true
    },
    {
      icon: BarChart3,
      title: "Appeal Strategy",
      description: "We create a customized appeal strategy that accounts for your property's specific circumstances, market conditions, and assessment history, ensuring the strongest possible case."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Our team prepares all the necessary documentation and evidence to support your appeal. We gather the facts, data, and expert analysis needed to back your case."
    },
    {
      icon: HandshakeIcon,
      title: "Negotiation & Resolution",
      description: "We handle all negotiations with tax authorities, representing you from start to finish for a successful outcome."
    }
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16 md:mb-24 text-[#0A2647]">Our Appeal Process</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-14 h-[calc(100%-7rem)] w-0.5 bg-[#d7b971] hidden md:block"></div>
          {steps.map((step, index) => (
            <div key={index} ref={el => stepsRef.current[index] = el}>
              <ProcessStep
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                progress={Math.max(0, 1 - Math.abs(activeStepIndex - index))}
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
