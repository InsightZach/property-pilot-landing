import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: 'Ramsey County Industrial 2024.png', alt: 'Ramsey County Industrial 2024' },
  { src: 'Ramsey County Industrial 2023.png', alt: 'Ramsey County Industrial 2023' },
  { src: 'Ramsey County Office-Warehouse 2024.png', alt: 'Ramsey County Office-Warehouse 2024' },
  { src: 'Ramsey County Office-Warehouse 2023.png', alt: 'Ramsey County Office-Warehouse 2023' },
  { src: 'St. Paul Flex 2024.png', alt: 'St. Paul Flex 2024' },
  { src: 'St. Paul Flex 2023.png', alt: 'St. Paul Flex 2023' },
  { src: 'St. Paul Office 2024.png', alt: 'St. Paul Office 2024' },
  { src: 'St. Paul Office 2023 (2).png', alt: 'St. Paul Office 2023 (2)' },
  { src: 'St. Paul Office 2023.png', alt: 'St. Paul Office 2023' },
  { src: 'St. Paul Office-Retail 2024.png', alt: 'St. Paul Office-Retail 2024' },
  { src: 'St. Paul Office-Retail 2023.png', alt: 'St. Paul Office-Retail 2023' },
  { src: 'St. Paul Warehouse 2024.png', alt: 'St. Paul Warehouse 2024' },
  { src: 'St. Paul Warehouse 2023.png', alt: 'St. Paul Warehouse 2023' },
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
                  src={`/${image.src}`}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    e.target.onerror = null;
                    e.target.src = '/placeholder.svg';
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