import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const images = [
    '/Appeal1.jpg',
    '/Appeal2.jpg',
    '/Appeal3.jpg',
    '/Appeal4.jpg',
    '/Appeal5.jpg',
    '/Appeal6.jpg',
    '/Appeal7.jpg',
    '/Appeal8.jpg',
    '/Appeal9.jpg',
    '/Appeal10.jpg',
    '/Appeal11.jpg',
    '/Appeal12.jpg',
    '/Appeal13.jpg',
    '/Appeal14.jpg',
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;