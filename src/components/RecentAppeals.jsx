import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const RecentAppeals = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay({ delay: 7000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const appealImages = Array.from({ length: 14 }, (_, i) => `Appeal${i + 1}.png`);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "/placeholder.svg";
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {appealImages.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                <Card>
                  <CardContent className="p-4">
                    <img
                      src={`/${image}`}
                      alt={`Appeal ${index + 1}`}
                      className="w-full h-auto object-contain mx-auto"
                      onError={handleImageError}
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {appealImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === selectedIndex ? 'bg-[#d7b971]' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;