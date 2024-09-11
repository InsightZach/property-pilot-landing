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
  {
    id: 1,
    image: "/placeholder.svg",
    year: "2024",
    property: "St. Paul - Warehouse",
    assessment: "$4.15m",
    settlement: "$2.7m",
    reduction: "35%"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    year: "2024",
    property: "Minneapolis - Office Building",
    assessment: "$10.2m",
    settlement: "$8.5m",
    reduction: "17%"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    year: "2024",
    property: "Bloomington - Retail Center",
    assessment: "$7.8m",
    settlement: "$6.2m",
    reduction: "21%"
  },
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
            {appeals.map((appeal) => (
              <CarouselItem key={appeal.id} className="w-full">
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0 relative">
                    <img
                      src={appeal.image}
                      alt={appeal.property}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/80 to-transparent flex items-center">
                      <div className="text-white p-8">
                        <h3 className="text-4xl font-bold mb-2">{appeal.year} Appeal</h3>
                        <h4 className="text-2xl mb-4">{appeal.property}</h4>
                        <ul className="space-y-2">
                          <li>Assessment: {appeal.assessment}</li>
                          <li>Settlement: {appeal.settlement}</li>
                          <li>{appeal.reduction} Reduction</li>
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0A2647] p-2 rounded">
                      <span className="text-3xl font-bold">{appeal.reduction}</span>
                      <span className="block text-sm">Reduced</span>
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