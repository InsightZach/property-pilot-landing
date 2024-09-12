import React from 'react';
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
  "/St. Paul Warehouse 2024.png",
  "/Ramsey County Industrial 2023.png",
  "/Ramsey County Industrial 2024.png",
  "/Ramsey County Office-Warehouse 2023.png",
  "/Ramsey County Office-Warehouse 2024.png",
  "/St. Paul Flex 2023.png",
  "/St. Paul Flex 2024.png",
  "/St. Paul Office 2024.png",
  "/St. Paul Office 2023 (2).png",
  "/St. Paul Office 2023.png",
  "/St. Paul Office 2024.png",
  "/St. Paul Office-Retail 2023.png",
  "/St. Paul Office-Retail 2024.png",
  "/St. Paul Warehouse 2023.png",
];

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
            {appeals.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={image}
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