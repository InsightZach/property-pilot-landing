import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay';

const images = [
  { src: '/Ramsey County Industrial 2023.png', alt: 'Ramsey County Industrial 2023' },
  { src: '/Ramsey County Industrial 2024.png', alt: 'Ramsey County Industrial 2024' },
  { src: '/Ramsey County Office-Warehouse 2023.png', alt: 'Ramsey County Office-Warehouse 2023' },
  { src: '/Ramsey County Office-Warehouse 2024.png', alt: 'Ramsey County Office-Warehouse 2024' },
  { src: '/St. Paul Flex 2023.png', alt: 'St. Paul Flex 2023' },
  { src: '/St. Paul Flex 2024.png', alt: 'St. Paul Flex 2024' },
  { src: '/St. Paul Office 2024.png', alt: 'St. Paul Office 2024' },
  { src: '/St. Paul Office 2023 (2).png', alt: 'St. Paul Office 2023 (2)' },
  { src: '/St. Paul Office 2023.png', alt: 'St. Paul Office 2023' },
  { src: '/St. Paul Office-Retail 2023.png', alt: 'St. Paul Office-Retail 2023' },
  { src: '/St. Paul Office-Retail 2024.png', alt: 'St. Paul Office-Retail 2024' },
  { src: '/St. Paul Warehouse 2023.png', alt: 'St. Paul Warehouse 2023' },
  { src: '/St. Paul Warehouse 2024.png', alt: 'St. Paul Warehouse 2024' },
];

const RecentAppeals = () => {
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
              delay: 5000,
            })
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
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