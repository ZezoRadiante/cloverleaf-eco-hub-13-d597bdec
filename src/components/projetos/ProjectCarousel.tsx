
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ProjectItem from './ProjectItem';
import { projectImages } from '@/data/projectData';
import CarouselDots from './CarouselDots';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    inViewThreshold: 0.7,
  }, [Autoplay({ delay: 6000, stopOnInteraction: true, rootNode: (emblaRoot) => emblaRoot.parentElement })]);

  // Update active index when the carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Call once to set initial state
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Function to handle dot click and scroll to respective slide
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  // Calculate the distance from active index (handling loop)
  const getDistance = (index: number) => {
    const count = projectImages.length;
    let distance = Math.abs(index - activeIndex);
    if (distance > count / 2) {
      distance = count - distance;
    }
    return distance;
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full relative overflow-hidden py-16">
      <div className="max-w-8xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-8">
              {projectImages.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  project={project} 
                  distance={getDistance(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Custom Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full 
                      bg-white/15 backdrop-blur-md hover:bg-eco-100/90 text-earth-700 border border-eco-200/50 
                      shadow-lg flex items-center justify-center transform transition-all duration-300 
                      hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eco-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full 
                      bg-white/15 backdrop-blur-md hover:bg-eco-100/90 text-earth-700 border border-eco-200/50 
                      shadow-lg flex items-center justify-center transform transition-all duration-300 
                      hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eco-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10">
          <CarouselDots 
            activeIndex={activeIndex} 
            count={projectImages.length} 
            onClick={scrollTo} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
