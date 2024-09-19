import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const RecentAppeals = () => {
  const [showAll, setShowAll] = useState(false);

  const appealImages = [
    'Appeal14.png', 'Appeal1.png', 'Appeal2.png', 'Appeal3.png',
    'Appeal4.png', 'Appeal5.png', 'Appeal6.png', 'Appeal7.png',
    'Appeal8.png', 'Appeal9.png', 'Appeal10.png', 'Appeal11.png',
    'Appeal12.png', 'Appeal13.png'
  ];

  const visibleImages = showAll ? appealImages : appealImages.slice(0, 6);

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "/placeholder.png";
    e.target.alt = 'Placeholder image';
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleImages.map((image, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3">
              <img
                src={`/${image}`}
                alt={`Appeal ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-md"
                onError={handleImageError}
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
          ))}
        </div>
        {!showAll && appealImages.length > 6 && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowAll(true)}
              className="bg-[#0A2647] hover:bg-[#1E3A5F] text-white"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentAppeals;
