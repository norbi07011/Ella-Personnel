import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getServicesSlides } from '../data/servicesSlides';
import { useTranslation } from '../i18n';

const ServicesHero: React.FC = () => {
  const { t } = useTranslation();
  const servicesSlides = getServicesSlides(t);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesSlides.length);
  }, [servicesSlides.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesSlides.length) % servicesSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex, handleNext]);

  const currentSlide = servicesSlides[currentIndex];

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-gray-900 text-white">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f28] via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                  {currentSlide.title}
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
      </div>
      
      <button 
        onClick={handlePrevious} 
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full p-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext} 
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full p-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {servicesSlides.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white'}`}
            />
        ))}
      </div>
    </section>
  );
};

export default ServicesHero;