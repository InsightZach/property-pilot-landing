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
    <section className="py-12 bg-[#F4F5F7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
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
    </section>
  );
};

export default RecentAppeals;