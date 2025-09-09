import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceData {
  title: string;
  image: string;
}

interface ServicesCarousel3DProps {
  services: ServiceData[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ServicesCarousel3D: React.FC<ServicesCarousel3DProps> = ({ services, activeIndex, setActiveIndex }) => {

  const handlePrevious = () => {
    setActiveIndex((activeIndex - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % services.length);
  };

  return (
    <div className="relative w-full h-[400px] flex flex-col items-center justify-center">
      <div className="relative w-full h-[350px] flex items-center justify-center [perspective:1000px]">
        {services.map((service, index) => {
          const offset = index - activeIndex;
          const rotateY = offset * -25;
          const translateX = offset * 60; // %
          const scale = offset === 0 ? 1 : 0.75;
          const zIndex = services.length - Math.abs(offset);
          const opacity = Math.abs(offset) > 1 ? 0.3 : 1;

          return (
            <motion.div
              key={service.title}
              className="absolute w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/10"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
              {offset === 0 && (
                <motion.h3 
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                  className="absolute bottom-4 left-4 text-white font-bold text-lg"
                >
                  {service.title}
                </motion.h3>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button onClick={handlePrevious} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft size={20} />
        </button>
        <button onClick={handleNext} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel3D;
