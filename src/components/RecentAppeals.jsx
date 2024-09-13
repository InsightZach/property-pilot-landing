import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const baseUrl = 'https://property-pilot-landing.gptengineer.run';

const images = [
  { src: `${baseUrl}/Ramsey County Industrial 2024.png`, alt: 'Ramsey County Industrial 2024' },
  { src: `${baseUrl}/Ramsey County Industrial 2023.png`, alt: 'Ramsey County Industrial 2023' },
  { src: `${baseUrl}/Ramsey County Office-Warehouse 2024.png`, alt: 'Ramsey County Office-Warehouse 2024' },
  { src: `${baseUrl}/Ramsey County Office-Warehouse 2023.png`, alt: 'Ramsey County Office-Warehouse 2023' },
  { src: `${baseUrl}/St. Paul Flex 2024.png`, alt: 'St. Paul Flex 2024' },
  { src: `${baseUrl}/St. Paul Flex 2023.png`, alt: 'St. Paul Flex 2023' },
  { src: `${baseUrl}/St. Paul Office 2024.png`, alt: 'St. Paul Office 2024' },
  { src: `${baseUrl}/St. Paul Office 2023 (2).png`, alt: 'St. Paul Office 2023 (2)' },
  { src: `${baseUrl}/St. Paul Office 2023.png`, alt: 'St. Paul Office 2023' },
  { src: `${baseUrl}/St. Paul Office-Retail 2024.png`, alt: 'St. Paul Office-Retail 2024' },
  { src: `${baseUrl}/St. Paul Office-Retail 2023.png`, alt: 'St. Paul Office-Retail 2023' },
  { src: `${baseUrl}/St. Paul Warehouse 2024.png`, alt: 'St. Paul Warehouse 2024' },
  { src: `${baseUrl}/St. Paul Warehouse 2023.png`, alt: 'St. Paul Warehouse 2023' },
];

const RecentAppeals = () => {
  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    e.target.src = `${baseUrl}/placeholder.svg`;
                    e.target.alt = 'Placeholder image';
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;