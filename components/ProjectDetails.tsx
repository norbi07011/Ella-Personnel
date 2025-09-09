import React, { useState } from 'react';
import { Page } from '../types';
import { SectionTitle, InteractiveServiceCard } from './ProjectCard';
import ServicesHero from './ServicesHero';
import ServicesCarousel3D from './ServicesCarousel3D';
import { getServicesData } from '../data/servicesData';
import { getWhyUsData } from '../data/whyUsData';
import { getRentServicesData } from '../data/rentServicesData';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n';

interface ServicesPageProps {
  setPage: (page: Page) => void;
}

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    const servicesData = getServicesData(t);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = servicesData[activeIndex].image;

    return (
        <section className="relative py-20 overflow-hidden bg-[#0d0f28]">
            {/* Dynamic Background */}
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
                <div className="absolute inset-0 bg-[#0d0f28]/90 backdrop-blur-lg"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                 <SectionTitle className="text-white">{t('servicesPage.ourServices.title')}</SectionTitle>
                 <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-16">
                    {t('servicesPage.ourServices.subtitle')}
                </p>

                 <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Services List */}
                    <div className="space-y-4">
                        {servicesData.map((service, index) => (
                            <InteractiveServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>

                    {/* Right Column: 3D Carousel */}
                    <div className="hidden md:block">
                        <ServicesCarousel3D
                            services={servicesData}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>
                 </div>
            </div>
        </section>
    );
};

const RentServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; linkText: string; isActive: boolean; onHover: () => void; onClick: () => void; }> = ({ icon, title, description, linkText, isActive, onHover, onClick }) => (
    <div
        onMouseEnter={onHover}
        className={`p-6 rounded-2xl border flex flex-col gap-4 cursor-pointer transition-all duration-300 backdrop-blur-sm h-full
            ${isActive
                ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/20'
            }
        `}
    >
        <div className="flex items-center gap-4">
            <div className={`flex-shrink-0 h-14 w-14 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-cyan-400 text-gray-900' : 'bg-white/10 text-cyan-400'}`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-xl text-white">{title}</h4>
            </div>
        </div>
        <div>
            <p className="text-gray-300">{description}</p>
        </div>
        <div className="mt-auto pt-4">
            <button 
                onClick={onClick} 
                className={`font-semibold text-left w-full transition-colors duration-300 ${isActive ? 'text-white' : 'text-cyan-400 hover:text-white'}`}
            >
                {linkText} &rarr;
            </button>
        </div>
    </div>
);


const RentServicesSection: React.FC<ServicesPageProps> = ({ setPage }) => {
    const { t } = useTranslation();
    const rentServicesData = getRentServicesData(t);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = rentServicesData[activeIndex].image;

    return (
        <section className="relative py-20 overflow-hidden bg-[#0d0f28]">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0f28] via-[#0d0f28]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                 <SectionTitle className="text-white">{t('servicesPage.rentServices.title')}</SectionTitle>
                 <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-16">
                    {t('servicesPage.rentServices.subtitle')}
                </p>

                 <div className="grid md:grid-cols-2 gap-16 items-stretch">
                    <div className="flex flex-col gap-6">
                        {rentServicesData.map((service, index) => (
                            <RentServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                linkText={service.linkText}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                                onClick={() => setPage('contact')}
                            />
                        ))}
                    </div>

                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 min-h-[400px] relative">
                        <AnimatePresence>
                             <motion.img
                                key={activeImage}
                                src={activeImage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </AnimatePresence>
                    </div>
                 </div>
            </div>
        </section>
    );
};

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();
    const whyUsData = getWhyUsData(t);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = whyUsData[activeIndex].image;

    return (
        <section className="relative py-20 overflow-hidden bg-[#121432]">
            {/* Dynamic Background */}
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
                <SectionTitle className="text-white">{t('servicesPage.whyUs.title')}</SectionTitle>
                <p className="text-center max-w-2xl mx-auto text-gray-300 mt-4 mb-16">
                    {t('servicesPage.whyUs.subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: List */}
                    <div className="space-y-4">
                        {whyUsData.map((item, index) => (
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

                    {/* Right Column: 3D Carousel */}
                    <div className="hidden md:block">
                        <ServicesCarousel3D
                            services={whyUsData.map(d => ({ title: d.title, image: d.image }))}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const ServicesPage: React.FC<ServicesPageProps> = ({ setPage }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0d0f28] text-gray-200">
        <ServicesHero />
        
        <ServicesSection />

        <RentServicesSection setPage={setPage} />

        <WhyUsSection />

        <section className="py-20 bg-[#0d0f28]">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-fuchsia-800 via-purple-800 to-blue-800 text-white rounded-2xl p-12 text-center shadow-2xl shadow-purple-500/20">
                    <h2 className="text-3xl font-bold mb-4">{t('servicesPage.cta.title')}</h2>
                    <p className="max-w-2xl mx-auto mb-8">{t('servicesPage.cta.subtitle')}</p>
                    <button onClick={() => setPage('contact')} className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105">
                        {t('servicesPage.cta.button')}
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ServicesPage;