
import React, { useRef, useEffect } from 'react';
import { Leaf, Recycle, Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { servicesImages } from '@/data/projectData';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  index
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 h-full border-l-4 border-sky-400 group bg-white/80 backdrop-blur-sm", 
      index === 0 ? "animate-fade-in" : index === 1 ? "animate-fade-in-delay-1" : "animate-fade-in-delay-2"
    )}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center mb-6 shadow-inner shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
        <div className="text-sky-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-sky-700 group-hover:text-sky-600 transition-colors">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
};

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
    <div className="flex justify-center space-x-3 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300 relative",
            index === activeIndex 
              ? "w-8 h-2 bg-sky-400/80 rounded-full shadow-sm" 
              : "w-2 h-2 bg-sky-200/60 rounded-full hover:bg-sky-300/70"
          )}
          aria-label={`Go to slide ${index + 1}`}
        >
          {index === activeIndex && (
            <span className="absolute inset-0 rounded-full animate-pulse-gentle bg-sky-300/30 -z-10"></span>
          )}
        </button>
      ))}
    </div>
  );
};

const Solucoes = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const servicesRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );
    
    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Consultoria Ambiental",
      description: "Avaliações abrangentes e soluções personalizadas para garantir conformidade regulatória enquanto avançamos nas metas de sustentabilidade para sua organização.",
      icon: <Leaf size={32} />
    }, 
    {
      title: "Gestão de Resíduos",
      description: "Planejamento estratégico e implementação de sistemas eficientes de redução de resíduos projetados para minimizar o impacto ambiental e maximizar a recuperação de recursos.",
      icon: <Recycle size={32} />
    }, 
    {
      title: "Educação Ambiental",
      description: "Programas e workshops envolventes que cultivam a conscientização ambiental e promovem práticas sustentáveis dentro de comunidades e organizações.",
      icon: <Sprout size={32} />
    }
  ];

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  return (
    <section 
      id="services" 
      ref={servicesRef}
      className="py-24 relative overflow-hidden transition-all duration-1000 ease-in-out"
      data-section="services"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-opacity duration-1000" 
        style={{ backgroundImage: `url('${servicesImages.background}')` }}>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/90 via-white/80 to-eco-50/70 z-0 transition-all duration-1000"></div>
      
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-earth-100/60 to-transparent z-10 transition-all duration-700"></div>
      
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png')] opacity-5 bg-repeat"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sky-700 bg-sky-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-sky-50">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-700 text-center transition-all duration-500 hover:text-sky-600">SOLUÇÕES PARA CONSTRUIR UM FUTURO MAIS SUSTENTÁVEL</h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full mb-6 transition-all duration-500 hover:w-32"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Oferecemos um portfólio de produtos e soluções customizadas para atender às demandas de diferentes perfis de consumo.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll stagger-children">
          {services.map((service, index) => (
            <div key={service.title} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                index={index} 
              />
            </div>
          ))}
        </div>

        <div className="md:hidden animate-on-scroll">
          <Carousel>
            <CarouselContent ref={emblaRef}>
              {services.map((service, index) => (
                <CarouselItem key={service.title}>
                  <div className="p-1">
                    <ServiceCard 
                      title={service.title} 
                      description={service.description} 
                      icon={service.icon} 
                      index={index} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center">
              <CarouselDots
                activeIndex={activeIndex}
                count={services.length}
                onClick={scrollTo}
              />
            </div>
          </Carousel>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-eco-100/50 to-transparent z-10 transition-all duration-700"></div>
    </section>
  );
};

export default Solucoes;
