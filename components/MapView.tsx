import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { SectionTitle, InteractiveServiceCard } from './ProjectCard';
import ServicesCarousel3D from './ServicesCarousel3D';
import TeamCarousel from './TeamCarousel';
import { getAboutUsServicesData } from '../data/aboutUsData';
import { getClientTestimonials } from '../data/testimonialsData';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n';

interface AboutPageProps {
  setPage: (page: Page) => void;
}

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="
        bg-[#1e213a] p-6 rounded-2xl text-center cursor-pointer
        transition-all duration-300 ease-in-out transform
        hover:bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-600
        hover:shadow-[0_0_25px_rgba(150,50,220,0.5)]
        hover:-translate-y-2
    ">
        <p className="text-4xl font-bold text-white">{value}</p>
        <p className="mt-2 text-gray-300 text-sm">{label}</p>
    </div>
);

const aboutHeaderImages = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4b248a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
];

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-red-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
        ))}
    </div>
);

const TestimonialCard: React.FC<ReturnType<typeof getClientTestimonials>[0]> = ({ name, role, quote, image, rating }) => (
    <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center h-full">
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-200" />
        <Rating rating={rating} />
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 text-sm mb-4">{role}</p>
        <p className="text-gray-600 italic text-sm">{quote}</p>
    </div>
);


const AboutPage: React.FC<AboutPageProps> = ({ setPage }) => {
  const { t } = useTranslation();
  const aboutUsServicesData = getAboutUsServicesData(t);
  const clientTestimonials = getClientTestimonials(t);

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const activeImage = aboutUsServicesData[activeIndex].image;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutHeaderImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const stats = [
    { value: '35+', label: t('aboutPage.stats.s1') },
    { value: '512+', label: t('aboutPage.stats.s2') },
    { value: '1120+', label: t('aboutPage.stats.s3') },
    { value: '1520+', label: t('aboutPage.stats.s4') },
  ];

  return (
    <div className="bg-[#0d0f28] text-gray-200">
       <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden text-white flex flex-col justify-center items-center text-center">
        {/* Background Slideshow */}
        <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={aboutHeaderImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
              exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
              className="absolute inset-0 z-0 w-full h-full object-cover"
              alt="Ella Personnel Services team and clients"
            />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f28] via-transparent to-transparent z-10"></div>
        
        {/* Text Content */}
        <div className="relative z-20 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
            >
              <SectionTitle className="text-white">{t('aboutPage.hero.title')}</SectionTitle>
              <p className="mt-4 max-w-3xl mx-auto text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>
                {t('aboutPage.hero.subtitle')}
              </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0f28]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0f28]">
        <div className="container mx-auto px-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">{t('aboutPage.whoWeAre.tag')}</h3>
                        <h2 className="text-3xl font-bold text-white mb-4">{t('aboutPage.whoWeAre.title')}</h2>
                        <p className="text-gray-300">
                           {t('aboutPage.whoWeAre.p1')}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300 mb-8">
                            {t('aboutPage.whoWeAre.p2')}
                        </p>
                        <button 
                          onClick={() => setPage('contact')}
                          className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:shadow-lg hover:shadow-blue-500/40"
                        >
                            {t('aboutPage.whoWeAre.button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="relative py-20 overflow-hidden bg-[#121432]">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={activeImage}
              src={activeImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#121432]/90 backdrop-blur-lg"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <SectionTitle className="text-white">{t('aboutPage.services.title')}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <div className="space-y-4">
              {aboutUsServicesData.map((item, index) => (
                <InteractiveServiceCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  isActive={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <div className="hidden md:block">
              <ServicesCarousel3D
                services={aboutUsServicesData.map(d => ({ title: d.title, image: d.image }))}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0f28]">
         <div className="container mx-auto px-6">
            <SectionTitle className="text-white">{t('aboutPage.team.title')}</SectionTitle>
{/* FIX: The file was truncated here. Completed the component to fix the build error. */}
            <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">Meet the passionate team behind Ella Personnel Services, dedicated to connecting talent with opportunity.</p>
            <TeamCarousel />
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
