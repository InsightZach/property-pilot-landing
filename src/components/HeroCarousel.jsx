import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AppealOverlay from './AppealOverlay';
import Sticker from './Sticker';

const HeroCarousel = () => {
  const [autoplay] = useState(() => 
    Autoplay({ 
      delay: 10000, 
      stopOnInteraction: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      speed: 8,
      skipSnaps: false,
      startIndex: 0,
    }, 
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const appealData = [
    { fileName: 'Appeal1', propertyType: 'Warehouse', location: 'St. Paul', assessmentYear: 2024, assessment: 4156500, settlement: 2700000, reduction: '-35%' },
    { fileName: 'Appeal4', propertyType: 'Warehouse', location: 'St. Paul', assessmentYear: 2023, assessment: 4131700, settlement: 2700000, reduction: '-35%' },
    { fileName: 'Appeal2', propertyType: 'Office/Warehouse', location: 'Ramsey County', assessmentYear: 2024, assessment: 7499400, settlement: 6950000, reduction: '-7%' },
    { fileName: 'Appeal5', propertyType: 'Office/Warehouse', location: 'Ramsey County', assessmentYear: 2023, assessment: 7978700, settlement: 6950000, reduction: '-13%' },
    { fileName: 'Appeal8', propertyType: 'Office', location: 'St. Paul', assessmentYear: 2024, assessment: 1955300, settlement: 1789000, reduction: '-9%' },
    { fileName: 'Appeal3', propertyType: 'Office', location: 'St. Paul', assessmentYear: 2023, assessment: 2031200, settlement: 1789000, reduction: '-12%' },
    { fileName: 'Appeal6', propertyType: 'Office/Retail', location: 'St. Paul', assessmentYear: 2024, assessment: 1471300, settlement: 1164000, reduction: '-21%' },
    { fileName: 'Appeal10', propertyType: 'Office/Retail', location: 'St. Paul', assessmentYear: 2023, assessment: 1822300, settlement: 1164000, reduction: '-36%' },
    { fileName: 'Appeal11', propertyType: 'Office', location: 'St. Paul', assessmentYear: 2023, assessment: 3019000, settlement: 2371200, reduction: '-21%' },
    { fileName: 'Appeal7', propertyType: 'Office', location: 'St. Paul', assessmentYear: 2024, assessment: 2554300, settlement: 1962000, reduction: '-23%' },
    { fileName: 'Appeal12', propertyType: 'Flex', location: 'St. Paul', assessmentYear: 2024, assessment: 3555000, settlement: 3240000, reduction: '-9%' },
    { fileName: 'Appeal14', propertyType: 'Flex', location: 'St. Paul', assessmentYear: 2023, assessment: 3555000, settlement: 3240000, reduction: '-9%' },
    { fileName: 'Appeal13', propertyType: 'Warehouse', location: 'Ramsey County', assessmentYear: 2024, assessment: 7661900, settlement: 6500000, reduction: '-15%' },
    { fileName: 'Appeal9', propertyType: 'Warehouse', location: 'Ramsey County', assessmentYear: 2023, assessment: 8436000, settlement: 6600000, reduction: '-22%' },
  ];

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {appealData.map((data, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative rounded-lg overflow-hidden transition-opacity duration-500">
              <img
                src={`/${data.fileName}.jpg`}
                alt={`Appeal ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A2647] bg-opacity-60">
                <AppealOverlay data={data} />
              </div>
              <div className="absolute top-4 left-4">
                <Sticker color="blue" text="YTD Appeal Results" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {appealData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => {
              emblaApi && emblaApi.scrollTo(index);
              autoplay.stop();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;