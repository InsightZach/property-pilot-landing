import React from 'react';

const ImageMosaic = () => {
  const images = [
    '/Minnesota.png',
    '/Commercial.png',
    '/Industrial.png',
    '/Apartments.png',
    // Add more image paths as needed
  ];

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 h-full">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image}
              alt={`Mosaic tile ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMosaic;