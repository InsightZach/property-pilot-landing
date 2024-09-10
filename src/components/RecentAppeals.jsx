import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const appeals = [
  { id: 1, image: "/placeholder.svg", description: "Commercial Property Appeal" },
  { id: 2, image: "/placeholder.svg", description: "Industrial Property Appeal" },
  { id: 3, image: "/placeholder.svg", description: "Retail Property Appeal" },
  { id: 4, image: "/placeholder.svg", description: "Office Building Appeal" },
];

const RecentAppeals = () => {
  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {appeals.map((appeal) => (
              <CarouselItem key={appeal.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="text-center">
                        <img
                          src={appeal.image}
                          alt={appeal.description}
                          className="w-full h-48 object-cover mb-4 transition-all duration-300 ease-in-out hover:filter hover:blur-[3px] hover:grayscale hover:scale-[1.5]"
                        />
                        <p className="font-semibold text-[#1c1d29]">{appeal.description}</p>
                      </div>
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