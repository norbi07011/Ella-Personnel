// components/hero/HeroSlider.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import slidesData from '@/data/slides.json';

const PREFERS_REDUCED_MOTION = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

const variants = {
  enter: (direction: number) => ({
    x: PREFERS_REDUCED_MOTION ? 0 : direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: PREFERS_REDUCED_MOTION ? 0 : direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeBackground, setActiveBackground] = useState(slidesData[0].background);

  const paginate = (newDirection: number) => {
    const newIndex = (page + newDirection + slidesData.length) % slidesData.length;
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    setActiveBackground(slidesData[page].background);
    const interval = setInterval(() => {
        if (!PREFERS_REDUCED_MOTION) {
           paginate(1);
        }
    }, 6000);
    return () => clearInterval(interval);
  }, [page]);

  const backgroundStyle = activeBackground.mode === 'gradient'
    ? { backgroundImage: `linear-gradient(to right, ${activeBackground.start}, ${activeBackground.end})` }
    : {};

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden transition-background duration-1000" style={backgroundStyle}>
        {activeBackground.mode === 'blur' && (
             <Image
                key={page}
                src={slidesData[page].image}
                alt="Background"
                fill
                className="object-cover filter blur-2xl scale-110"
                priority
            />
        )}
       <div className="absolute inset-0 bg-dark-bg/60" />
      
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
         {/* Main content */}
         <div className="w-full lg:w-1/2">
            <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                className="absolute w-full lg:w-1/2"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-balance">
                    {slidesData[page].title}
                </h1>
                <p className="mt-4 text-lg text-dark-subtext max-w-xl text-balance">
                    {slidesData[page].subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    {slidesData[page].ctas.map((cta, i) => (
                        // FIX: Changed `as` prop to `asChild` and wrapped children in a `Link` component.
                        <Button key={i} asChild variant={cta.variant as any} size="lg">
                            <Link href={cta.href}>{cta.label}</Link>
                        </Button>
                    ))}
                </div>
            </motion.div>
            </AnimatePresence>
         </div>

        {/* Side Thumbnails */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-4 h-full">
            {slidesData.map((slide, index) => (
                <button key={slide.id} onClick={() => setPage([index, index > page ? 1 : -1])}>
                <Image
                    src={slide.thumb}
                    alt={slide.alt}
                    width={80}
                    height={100}
                    className={`object-cover rounded-lg transition-all duration-300 ${
                    page === index ? 'border-2 border-accent-cyan scale-110' : 'opacity-50 hover:opacity-100'
                    }`}
                />
                </button>
            ))}
        </div>
      </div>

       {/* Navigation Arrows */}
      <button className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors" onClick={() => paginate(-1)}>
        <ChevronLeft size={24} />
      </button>
      <button className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors" onClick={() => paginate(1)}>
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSlider;