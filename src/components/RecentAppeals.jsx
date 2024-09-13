import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecentAppeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const appealImages = Array.from({ length: 14 }, (_, i) => `Appeal${i + 1}.png`);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % appealImages.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + appealImages.length) % appealImages.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "/placeholder.svg";
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-12 bg-[#F4F5F7]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {appealImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-2">
                    <CardContent className="p-2">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <img
                          src={`/${image}`}
                          alt={`Appeal ${index + 1}`}
                          className="absolute top-0 left-0 w-full h-full object-contain"
                          onError={handleImageError}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 text-[#0A2647]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 text-[#0A2647]" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {appealImages.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 w-1.5 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#d7b971]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;