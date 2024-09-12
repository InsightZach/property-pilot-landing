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
    image: "/St. Paul Warehouse 2024.png",
    year: "2024",
    property: "St. Paul - Warehouse",
    assessment: "$4.15m",
    settlement: "$2.7m",
    reduction: "35%"
  },
  {
    id: 2,
    image: "/Ramsey County Industrial 2023.png",
    year: "2023",
    property: "Ramsey County - Industrial",
    assessment: "$6.2m",
    settlement: "$5.1m",
    reduction: "18%"
  },
  {
    id: 3,
    image: "/Ramsey County Industrial 2024.png",
    year: "2024",
    property: "Ramsey County - Industrial",
    assessment: "$6.5m",
    settlement: "$5.3m",
    reduction: "19%"
  },
  {
    id: 4,
    image: "/Ramsey County Office-Warehouse 2023.png",
    year: "2023",
    property: "Ramsey County - Office-Warehouse",
    assessment: "$8.3m",
    settlement: "$7.1m",
    reduction: "14%"
  },
  {
    id: 5,
    image: "/Ramsey County Office-Warehouse 2024.png",
    year: "2024",
    property: "Ramsey County - Office-Warehouse",
    assessment: "$8.7m",
    settlement: "$7.3m",
    reduction: "16%"
  },
  {
    id: 6,
    image: "/St. Paul Flex 2023.png",
    year: "2023",
    property: "St. Paul - Flex",
    assessment: "$5.8m",
    settlement: "$4.9m",
    reduction: "15%"
  },
  {
    id: 7,
    image: "/St. Paul Flex 2024.png",
    year: "2024",
    property: "St. Paul - Flex",
    assessment: "$6.1m",
    settlement: "$5.1m",
    reduction: "16%"
  },
  {
    id: 8,
    image: "/St. Paul Office 2024.png",
    year: "2024",
    property: "St. Paul - Office",
    assessment: "$12.5m",
    settlement: "$10.6m",
    reduction: "15%"
  },
  {
    id: 9,
    image: "/St. Paul Office 2023 (2).png",
    year: "2023",
    property: "St. Paul - Office",
    assessment: "$11.8m",
    settlement: "$10.1m",
    reduction: "14%"
  },
  {
    id: 10,
    image: "/St. Paul Office 2023.png",
    year: "2023",
    property: "St. Paul - Office",
    assessment: "$10.9m",
    settlement: "$9.3m",
    reduction: "15%"
  },
  {
    id: 11,
    image: "/St. Paul Office-Retail 2023.png",
    year: "2023",
    property: "St. Paul - Office-Retail",
    assessment: "$7.6m",
    settlement: "$6.5m",
    reduction: "14%"
  },
  {
    id: 12,
    image: "/St. Paul Office-Retail 2024.png",
    year: "2024",
    property: "St. Paul - Office-Retail",
    assessment: "$8.0m",
    settlement: "$6.8m",
    reduction: "15%"
  },
  {
    id: 13,
    image: "/St. Paul Warehouse 2023.png",
    year: "2023",
    property: "St. Paul - Warehouse",
    assessment: "$3.9m",
    settlement: "$2.6m",
    reduction: "33%"
  },
  {
    id: 14,
    image: "/St. Paul Warehouse 2024.png",
    year: "2024",
    property: "St. Paul - Warehouse",
    assessment: "$4.15m",
    settlement: "$2.7m",
    reduction: "35%"
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
                      className="w-full h-auto aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/80 to-transparent flex items-center">
                      <div className="text-white p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">{appeal.year} Appeal</h3>
                        <h4 className="text-xl md:text-2xl mb-4">{appeal.property}</h4>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                          <li>Assessment: {appeal.assessment}</li>
                          <li>Settlement: {appeal.settlement}</li>
                          <li>{appeal.reduction} Reduction</li>
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#D4AF37] text-[#0A2647] p-2 rounded">
                      <span className="text-xl md:text-3xl font-bold">{appeal.reduction}</span>
                      <span className="block text-xs md:text-sm">Reduced</span>
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