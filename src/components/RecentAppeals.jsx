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

// Import all images statically
import ramseyIndustrial2023 from '/Ramsey County Industrial 2023.png';
import ramseyIndustrial2024 from '/Ramsey County Industrial 2024.png';
import ramseyOfficeWarehouse2023 from '/Ramsey County Office-Warehouse 2023.png';
import ramseyOfficeWarehouse2024 from '/Ramsey County Office-Warehouse 2024.png';
import stPaulFlex2023 from '/St. Paul Flex 2023.png';
import stPaulFlex2024 from '/St. Paul Flex 2024.png';
import stPaulOffice2024 from '/St. Paul Office 2024.png';
import stPaulOffice2023_2 from '/St. Paul Office 2023 (2).png';
import stPaulOffice2023 from '/St. Paul Office 2023.png';
import stPaulOfficeRetail2023 from '/St. Paul Office-Retail 2023.png';
import stPaulOfficeRetail2024 from '/St. Paul Office-Retail 2024.png';
import stPaulWarehouse2023 from '/St. Paul Warehouse 2023.png';
import stPaulWarehouse2024 from '/St. Paul Warehouse 2024.png';

const images = [
  { src: ramseyIndustrial2023, alt: 'Ramsey County Industrial 2023' },
  { src: ramseyIndustrial2024, alt: 'Ramsey County Industrial 2024' },
  { src: ramseyOfficeWarehouse2023, alt: 'Ramsey County Office-Warehouse 2023' },
  { src: ramseyOfficeWarehouse2024, alt: 'Ramsey County Office-Warehouse 2024' },
  { src: stPaulFlex2023, alt: 'St. Paul Flex 2023' },
  { src: stPaulFlex2024, alt: 'St. Paul Flex 2024' },
  { src: stPaulOffice2024, alt: 'St. Paul Office 2024' },
  { src: stPaulOffice2023_2, alt: 'St. Paul Office 2023 (2)' },
  { src: stPaulOffice2023, alt: 'St. Paul Office 2023' },
  { src: stPaulOfficeRetail2023, alt: 'St. Paul Office-Retail 2023' },
  { src: stPaulOfficeRetail2024, alt: 'St. Paul Office-Retail 2024' },
  { src: stPaulWarehouse2023, alt: 'St. Paul Warehouse 2023' },
  { src: stPaulWarehouse2024, alt: 'St. Paul Warehouse 2024' },
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
              delay: 7000,
              stopOnInteraction: false,
            })
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
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