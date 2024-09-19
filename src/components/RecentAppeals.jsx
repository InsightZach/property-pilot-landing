import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RecentAppeals = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const appealImages = [
    'Appeal14.png', 'Appeal1.png', 'Appeal2.png', 'Appeal3.png',
    'Appeal4.png', 'Appeal5.png', 'Appeal6.png', 'Appeal7.png',
    'Appeal8.png', 'Appeal9.png', 'Appeal10.png', 'Appeal11.png',
    'Appeal12.png', 'Appeal13.png'
  ];

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "/placeholder.png";
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {appealImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2">
                  <img
                    src={`/${image}`}
                    alt={`Appeal ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[4/3]"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2647] rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2647] rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;
