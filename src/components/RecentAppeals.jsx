import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const RecentAppeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayOptions = {
    delay: 7000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay(autoplayOptions)]
  );

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="relative" ref={emblaRef}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[Autoplay(autoplayOptions)]}
            className="w-full"
          >
            <CarouselContent>
              {appealImages.map((image, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-1">
                      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                        <img
                          src={`/${image}`}
                          alt={`Appeal ${index + 1}`}
                          className="absolute top-0 left-0 w-full h-full object-contain"
                          onError={handleImageError}
                          loading="lazy"
                          width="800"
                          height="600"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
        <div className="flex justify-center mt-4">
          {appealImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#d7b971]' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;
