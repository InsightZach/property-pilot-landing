import React, { useMemo } from 'react';
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
  "/St._Paul_Warehouse_2024.png",
  "/Ramsey_County_Industrial_2023.png",
  "/Ramsey_County_Industrial_2024.png",
  "/Ramsey_County_Office-Warehouse_2023.png",
  "/Ramsey_County_Office-Warehouse_2024.png",
  "/St._Paul_Flex_2023.png",
  "/St._Paul_Flex_2024.png",
  "/St._Paul_Office_2024.png",
  "/St._Paul_Office_2023_(2).png",
  "/St._Paul_Office_2023.png",
  "/St._Paul_Office_2024.png",
  "/St._Paul_Office-Retail_2023.png",
  "/St._Paul_Office-Retail_2024.png",
  "/St._Paul_Warehouse_2023.png",
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
                    <img
                      src={`${window.location.origin}${image}`}
                      alt={`Recent appeal ${index + 1}`}
                      className="w-full h-auto aspect-video object-cover"
                    />
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