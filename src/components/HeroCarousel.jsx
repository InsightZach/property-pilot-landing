import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const images = [
    '/Appeal1.webp',
    '/Appeal2.webp',
    '/Appeal3.webp',
    '/Appeal4.webp',
    '/Appeal5.webp',
    // Add more image paths as needed
  ];

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((src, index) => (
          <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
            <img
              src={src}
              alt={`Appeal ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;