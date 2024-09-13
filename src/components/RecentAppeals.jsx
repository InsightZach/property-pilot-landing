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

// Import all images statically
import RamseyCountyIndustrial2023 from '../../public/Ramsey County Industrial 2023.png';
import RamseyCountyIndustrial2024 from '../../public/Ramsey County Industrial 2024.png';
import RamseyCountyOfficeWarehouse2023 from '../../public/Ramsey County Office-Warehouse 2023.png';
import RamseyCountyOfficeWarehouse2024 from '../../public/Ramsey County Office-Warehouse 2024.png';
import StPaulFlex2023 from '../../public/St. Paul Flex 2023.png';
import StPaulFlex2024 from '../../public/St. Paul Flex 2024.png';
import StPaulOffice2024 from '../../public/St. Paul Office 2024.png';
import StPaulOffice2023_2 from '../../public/St. Paul Office 2023 (2).png';
import StPaulOffice2023 from '../../public/St. Paul Office 2023.png';
import StPaulOfficeRetail2023 from '../../public/St. Paul Office-Retail 2023.png';
import StPaulOfficeRetail2024 from '../../public/St. Paul Office-Retail 2024.png';
import StPaulWarehouse2023 from '../../public/St. Paul Warehouse 2023.png';
import StPaulWarehouse2024 from '../../public/St. Paul Warehouse 2024.png';

const appeals = [
  { src: RamseyCountyIndustrial2023, alt: "Ramsey County Industrial 2023" },
  { src: RamseyCountyIndustrial2024, alt: "Ramsey County Industrial 2024" },
  { src: RamseyCountyOfficeWarehouse2023, alt: "Ramsey County Office-Warehouse 2023" },
  { src: RamseyCountyOfficeWarehouse2024, alt: "Ramsey County Office-Warehouse 2024" },
  { src: StPaulFlex2023, alt: "St. Paul Flex 2023" },
  { src: StPaulFlex2024, alt: "St. Paul Flex 2024" },
  { src: StPaulOffice2024, alt: "St. Paul Office 2024" },
  { src: StPaulOffice2023_2, alt: "St. Paul Office 2023 (2)" },
  { src: StPaulOffice2023, alt: "St. Paul Office 2023" },
  { src: StPaulOfficeRetail2023, alt: "St. Paul Office-Retail 2023" },
  { src: StPaulOfficeRetail2024, alt: "St. Paul Office-Retail 2024" },
  { src: StPaulWarehouse2023, alt: "St. Paul Warehouse 2023" },
  { src: StPaulWarehouse2024, alt: "St. Paul Warehouse 2024" }
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