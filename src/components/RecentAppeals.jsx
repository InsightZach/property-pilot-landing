import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const RecentAppeals = () => {
  const imagePath = "/Ramsey County Industrial 2024.svg";
  const placeholderPath = "/placeholder.svg";

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${imagePath}`);
    e.target.src = placeholderPath;
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">
          Recent Property Tax Appeals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <img
                src={imagePath}
                alt="Ramsey County Industrial 2024"
                className="w-full h-auto object-contain mx-auto"
                onError={handleImageError}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;