import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Static imports for fallback
import ramseyIndustrial2024 from '/public/Ramsey County Industrial 2024.png';
import ramseyIndustrial2023 from '/public/Ramsey County Industrial 2023.png';
import ramseyOfficeWarehouse2024 from '/public/Ramsey County Office-Warehouse 2024.png';
import ramseyOfficeWarehouse2023 from '/public/Ramsey County Office-Warehouse 2023.png';
import stPaulFlex2024 from '/public/St. Paul Flex 2024.png';
import stPaulFlex2023 from '/public/St. Paul Flex 2023.png';
import stPaulOffice2024 from '/public/St. Paul Office 2024.png';
import stPaulOffice2023_2 from '/public/St. Paul Office 2023 (2).png';
import stPaulOffice2023 from '/public/St. Paul Office 2023.png';
import stPaulOfficeRetail2024 from '/public/St. Paul Office-Retail 2024.png';
import stPaulOfficeRetail2023 from '/public/St. Paul Office-Retail 2023.png';
import stPaulWarehouse2024 from '/public/St. Paul Warehouse 2024.png';
import stPaulWarehouse2023 from '/public/St. Paul Warehouse 2023.png';

const staticImages = {
  'Ramsey County Industrial 2024.png': ramseyIndustrial2024,
  'Ramsey County Industrial 2023.png': ramseyIndustrial2023,
  'Ramsey County Office-Warehouse 2024.png': ramseyOfficeWarehouse2024,
  'Ramsey County Office-Warehouse 2023.png': ramseyOfficeWarehouse2023,
  'St. Paul Flex 2024.png': stPaulFlex2024,
  'St. Paul Flex 2023.png': stPaulFlex2023,
  'St. Paul Office 2024.png': stPaulOffice2024,
  'St. Paul Office 2023 (2).png': stPaulOffice2023_2,
  'St. Paul Office 2023.png': stPaulOffice2023,
  'St. Paul Office-Retail 2024.png': stPaulOfficeRetail2024,
  'St. Paul Office-Retail 2023.png': stPaulOfficeRetail2023,
  'St. Paul Warehouse 2024.png': stPaulWarehouse2024,
  'St. Paul Warehouse 2023.png': stPaulWarehouse2023,
};

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
  const [loadedImages, setLoadedImages] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageModules = import.meta.glob('/public/*.png');
        const loadedImageUrls = {};

        for (const [path, loader] of Object.entries(imageModules)) {
          try {
            const module = await loader();
            const fileName = path.split('/').pop();
            loadedImageUrls[fileName] = module.default;
          } catch (err) {
            console.error(`Failed to load image: ${path}`, err);
            // Use static import as fallback
            const fileName = path.split('/').pop();
            loadedImageUrls[fileName] = staticImages[fileName];
          }
        }

        setLoadedImages(loadedImageUrls);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Failed to load images. Using fallback images.');
        // Use all static imports as fallback
        setLoadedImages(staticImages);
      }
    };

    loadImages();
  }, []);

  if (error) {
    console.warn(error);
  }

  return (
    <section className="py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#1c1d29]">Recent Property Tax Appeals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                {loadedImages[image.src] ? (
                  <img
                    src={loadedImages[image.src]}
                    alt={image.alt}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                      e.target.src = '/placeholder.svg';
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    Loading...
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAppeals;