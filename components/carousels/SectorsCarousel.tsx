// components/carousels/SectorsCarousel.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HardHat, HeartPulse, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const sectors = [
  {
    icon: <HardHat size={32} className="text-accent-cyan" />,
    title: 'Budownictwo',
    description: 'Doświadczeni specjaliści do projektów infrastrukturalnych, renowacji, projektów przemysłowych i mieszkaniowych.',
    href: '/diensten#bouw',
  },
  {
    icon: <HeartPulse size={32} className="text-accent-fuchsia" />,
    title: 'Opieka zdrowotna',
    description: 'Personel medyczny z doświadczeniem, zapewniający opiekę w różnych placówkach.',
    href: '/diensten#zorg',
  },
  {
    icon: <Zap size={32} className="text-yellow-400" />,
    title: 'Elektryczność',
    description: 'Doświadczeni elektrycy w projektach przemysłowych, mieszkaniowych i instalacjach infrastrukturalnych.',
    href: '/diensten#elektra',
  },
   {
    icon: <HardHat size={32} className="text-accent-cyan" />,
    title: 'Inżynieria lądowa',
    description: 'Specjaliści od dróg, mostów i systemów wodnych, gotowi do realizacji najbardziej złożonych projektów.',
    href: '/diensten#bouw',
  },
  {
    icon: <HeartPulse size={32} className="text-accent-fuchsia" />,
    title: 'Opieka domowa',
    description: 'Empatyczni opiekunowie zapewniający wsparcie i pomoc osobom starszym w ich własnych domach.',
    href: '/diensten#zorg',
  },
  {
    icon: <Zap size={32} className="text-yellow-400" />,
    title: 'Automatyka przemysłowa',
    description: 'Eksperci od systemów sterowania i automatyzacji procesów produkcyjnych.',
    href: '/diensten#elektra',
  }
];

const SectorsCarousel = () => {
    const [cardWidth, setCardWidth] = useState(350);
    const [visibleCards, setVisibleCards] = useState(3);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const calculateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
                setCardWidth(carouselRef.current ? carouselRef.current.offsetWidth : 350);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
                setCardWidth(350);
            } else {
                setVisibleCards(3);
                setCardWidth(350);
            }
        };
        calculateVisibleCards();
        window.addEventListener('resize', calculateVisibleCards);
        return () => window.removeEventListener('resize', calculateVisibleCards);
    }, []);

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, sectors.length - visibleCards));
    };

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };


  return (
    <section className="py-20 sm:py-28 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left md:max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold font-display">Sektory, w których działamy</h2>
                <p className="mt-4 text-dark-subtext">
                    Specjalizujemy się w dostarczaniu personelu dla różnych kluczowych sektorów.
                </p>
            </div>
            <div className="flex space-x-4 mt-8 md:mt-0">
                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50"
                    aria-label="Poprzedni sektor"
                >
                    <ChevronLeft size={20} />
                </button>
                 <button 
                    onClick={handleNext} 
                    disabled={currentIndex >= sectors.length - visibleCards}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50"
                    aria-label="Następny sektor"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
        
        <div className="relative" ref={carouselRef}>
             <motion.div
                className="flex gap-8"
                animate={{ x: -currentIndex * cardWidth }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
             >
                {sectors.map((sector, index) => (
                    <motion.div key={index} className="flex-shrink-0" style={{width: `${cardWidth - 32}px`}}>
                         <Card className="h-full flex flex-col group hover:border-accent-cyan/50 transition-colors duration-300">
                            <div className="mb-4">
                                {sector.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display mb-2">{sector.title}</h3>
                            <p className="text-dark-subtext text-sm flex-grow mb-6">{sector.description}</p>
                            <Button asChild variant="link" className="!p-0 !justify-start text-accent-cyan">
                                <Link href={sector.href}>
                                    Więcej informacji
                                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectorsCarousel;
