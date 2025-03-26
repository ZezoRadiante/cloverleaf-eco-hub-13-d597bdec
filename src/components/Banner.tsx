
import React, { useEffect, useRef } from 'react';

const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = bannerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="banner" 
      ref={bannerRef}
      className="py-0 bg-white relative overflow-hidden transition-all duration-1000 ease-in-out"
    >
      <div className="container mx-auto relative z-20">
        {/* Banner Content - With reduced spacing */}
        <div className="w-full space-y-1 text-center px-4 md:px-8 transform transition-all duration-700 hover:scale-[1.01] animate-on-scroll">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-800 leading-tight">
            Promovendo um <span className="text-[#71B707] italic transition-all duration-500 hover:text-eco-500">Futuro Verde</span> para as Novas Gerações
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full my-1 transition-all duration-500 hover:w-32"></div>
          
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mx-auto font-normal transition-all duration-500 hover:text-earth-800">
            Através de nossas iniciativas de educação ambiental e reflorestamento, 
            inspiramos crianças a se tornarem guardiões da natureza, criando um 
            impacto positivo que atravessa gerações.
          </p>
        </div>
      </div>
      
      {/* Banner Image - Without any gap */}
      <div className="w-full overflow-hidden shadow-lg relative z-10 border-y-4 border-white/50 transition-all duration-1000 ease-in-out animate-on-scroll mt-0">
        <img 
          src="/lovable-uploads/becbdbe4-e862-4db5-bde6-5636d0c06f24.png" 
          alt="Criança com capacete branco segurando uma muda em um viveiro de plantas" 
          className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-1000 filter hover:brightness-105"
        />
        
        {/* Add a subtle overlay effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-eco-300/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      
      {/* Changed bottom gradient to match white background */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 transition-opacity duration-700"></div>
    </section>
  );
};

export default Banner;
