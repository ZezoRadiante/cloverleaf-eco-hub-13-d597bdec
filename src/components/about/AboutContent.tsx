
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-6 text-center max-w-3xl mx-auto opacity-0 animate-fade-in-delay-2 p-8 rounded-xl backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:bg-white/10">
      <div className="space-y-5 text-earth-800 text-lg">
        <p className="font-medium text-xl leading-relaxed transition-all duration-300 hover:text-sky-700">
          Fundada em 2010, a Eco-lógica Brasil nasceu da paixão de um grupo de ambientalistas 
          determinados a fazer a diferença no cenário de conservação ambiental brasileiro.
        </p>
        
        <p className="leading-relaxed transition-all duration-300 hover:text-sky-700">
          Nossa missão é promover soluções sustentáveis que harmonizem o desenvolvimento 
          econômico com a preservação ambiental, criando um legado positivo para as 
          futuras gerações.
        </p>
        
        <p className="leading-relaxed transition-all duration-300 hover:text-sky-700">
          Com uma equipe multidisciplinar de especialistas em biologia, engenharia ambiental, 
          gestão de recursos naturais e educação, oferecemos serviços abrangentes que 
          atendem às necessidades específicas de cada cliente e comunidade.
        </p>
      </div>
      
      <div className="pt-6">
        <Button
          variant="eco"
          className="rounded-full group px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
          asChild
        >
          <a href="#contact">
            Fale Conosco
            <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </div>
  );
};
