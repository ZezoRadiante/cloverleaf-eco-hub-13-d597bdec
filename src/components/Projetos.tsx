
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projectImages = [
  '/images/projeto1.jpg',
  '/images/projeto2.jpg',
  '/images/projeto3.jpg',
  '/images/projeto4.jpg',
];

const CarouselDots = ({ 
  activeIndex, 
  count, 
  onClick 
}: { 
  activeIndex: number; 
  count: number; 
  onClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center space-x-3 mt-4">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300",
            index === activeIndex 
              ? "w-8 h-3 bg-[#71B707] rounded-full" 
              : "w-3 h-3 bg-eco-200 rounded-full"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Projetos = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  return (
    <section id="projetos" className="py-12 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-[#71B707] bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-2 opacity-0 animate-fade-in shadow-sm">
            Conheça Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
            Nossos <span className="text-[#71B707]">Projetos</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full mb-4"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
          </p>
        </div>
      </div>

      <div className="w-full relative overflow-hidden py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent>
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border-2 border-eco-200 h-64 md:h-80 shadow-md bg-gray-100 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-earth-600 text-sm bg-white/80 p-2 rounded">
                            Imagem {index + 1} a ser adicionada em: {image}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
          </Carousel>
        </div>
      </div>

      <div className="mt-4">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={projectImages.length} 
          onClick={scrollTo} 
        />
      </div>
    </section>
  );
};

export default Projetos;
