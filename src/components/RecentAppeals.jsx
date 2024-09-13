import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const RecentAppeals = () => {
  const appealImages = [
    'Appeal14.svg', 'Appeal1.svg', 'Appeal2.svg', 'Appeal3.svg',
    'Appeal4.svg', 'Appeal5.svg', 'Appeal6.svg', 'Appeal7.svg',
    'Appeal8.svg', 'Appeal9.svg', 'Appeal10.svg', 'Appeal11.svg',
    'Appeal12.svg', 'Appeal13.svg'
  ];

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "/placeholder.svg";
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-6 bg-[#F4F5F7]">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-lg font-semibold text-center mb-4 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {appealImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="mx-1">
                  <CardContent className="p-1">
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