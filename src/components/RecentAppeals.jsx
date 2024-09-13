import React, { useState, useEffect } from 'react';
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

const imageNames = [
  'Ramsey County Industrial 2023.png',
  'Ramsey County Industrial 2024.png',
  'Ramsey County Office-Warehouse 2023.png',
  'Ramsey County Office-Warehouse 2024.png',
  'St. Paul Flex 2023.png',
  'St. Paul Flex 2024.png',
  'St. Paul Office 2024.png',
  'St. Paul Office 2023 (2).png',
  'St. Paul Office 2023.png',
  'St. Paul Office-Retail 2023.png',
  'St. Paul Office-Retail 2024.png',
  'St. Paul Warehouse 2023.png',
  'St. Paul Warehouse 2024.png'
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RecentAppeals = () => {
  const [images, setImages] = useState([]);
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

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = await Promise.all(
        shuffleArray(imageNames).map(name => import(`../../public/${name}`))
      );
      setImages(imageModules.map(module => ({ src: module.default, alt: module.default.split('/').pop().split('.')[0] })));
    };

    loadImages();
  }, []);

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
            {images.map((image, index) => (
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