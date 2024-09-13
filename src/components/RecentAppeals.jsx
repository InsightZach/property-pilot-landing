import React, { useMemo, useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const appeals = [
  { src: 'Ramsey County Industrial 2023.png', alt: "Ramsey County Industrial 2023" },
  { src: 'Ramsey County Industrial 2024.png', alt: "Ramsey County Industrial 2024" },
  { src: 'Ramsey County Office-Warehouse 2023.png', alt: "Ramsey County Office-Warehouse 2023" },
  { src: 'Ramsey County Office-Warehouse 2024.png', alt: "Ramsey County Office-Warehouse 2024" },
  { src: 'St. Paul Flex 2023.png', alt: "St. Paul Flex 2023" },
  { src: 'St. Paul Flex 2024.png', alt: "St. Paul Flex 2024" },
  { src: 'St. Paul Office 2024.png', alt: "St. Paul Office 2024" },
  { src: 'St. Paul Office 2023 (2).png', alt: "St. Paul Office 2023 (2)" },
  { src: 'St. Paul Office 2023.png', alt: "St. Paul Office 2023" },
  { src: 'St. Paul Office-Retail 2023.png', alt: "St. Paul Office-Retail 2023" },
  { src: 'St. Paul Office-Retail 2024.png', alt: "St. Paul Office-Retail 2024" },
  { src: 'St. Paul Warehouse 2023.png', alt: "St. Paul Warehouse 2023" },
  { src: 'St. Paul Warehouse 2024.png', alt: "St. Paul Warehouse 2024" }
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RecentAppeals = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [
      Autoplay({
        delay: 7000,
        stopOnInteraction: false,
      })
    ]
  );

  // Memoize the shuffled array to prevent re-shuffling on every render
  const shuffledAppeals = useMemo(() => shuffleArray(appeals), []);

  const [imageModules, setImageModules] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const modules = {};
      for (const appeal of shuffledAppeals) {
        modules[appeal.src] = await import(`../../public/${appeal.src}`);
      }
      setImageModules(modules);
    };

    loadImages();
  }, [shuffledAppeals]);

  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 7000,
              stopOnInteraction: false,
            })
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent ref={emblaRef}>
            {shuffledAppeals.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    {imageModules[image.src] && (
                      <img
                        src={imageModules[image.src].default}
                        alt={image.alt}
                        className="w-full h-auto aspect-video object-cover"
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default RecentAppeals;