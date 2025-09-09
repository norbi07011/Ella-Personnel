import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getSlides } from '../data/slides';
import { Page } from '../types';
import { useTranslation } from '../i18n';

interface HeroSliderProps {
  setPage: (page: Page) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ setPage }) => {
  const { t } = useTranslation();
  const slides = getSlides(t);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 7000); // Change slide every 7 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, handleNext]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gray-900 text-white">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
           <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>
      
      {/* Constellation overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)' }}
      />


      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                  {currentSlide.title}
                </h1>
                <p className="mt-4 text-lg max-w-xl mx-auto lg:mx-0 text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                  {currentSlide.subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {currentSlide.ctas.map((cta, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(cta.page as Page)}
                      className={`px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${
                        cta.variant === 'primary'
                          ? 'bg-fuchsia-500 hover:bg-fuchsia-600 shadow-lg shadow-fuchsia-500/30'
                          : 'bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/30'
                      }`}
                    >
                      {cta.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3D Carousel */}
          <div className="relative w-full h-[400px] hidden lg:flex items-center justify-center [perspective:1200px]">
            {slides.map((slide, index) => {
              const offset = index - currentIndex;
              const rotateY = offset * -25;
              const translateX = offset * 70;
              const scale = offset === 0 ? 1 : 0.7;
              const zIndex = slides.length - Math.abs(offset);
              const opacity = Math.abs(offset) > 1 ? 0 : 1;

              return (
                <motion.div
                  key={slide.id}
                  className="absolute w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{
                    transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                   <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${offset !== 0 ? 'opacity-50' : 'opacity-10'}`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
       {/* Navigation Arrows */}
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
    </section>
  );
};

export default HeroSlider;