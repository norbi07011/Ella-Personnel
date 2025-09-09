import React from 'react';
import { Page } from '../types';
import { SectionTitle, TestimonialCard, SectorCard } from './ProjectCard';
import HeroSlider from './HeroSlider';
import { useTranslation } from '../i18n';

interface HomePageProps {
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
        <p className="mt-2 text-gray-300">{label}</p>
    </div>
);

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();
    return (
    <section className="py-20 bg-[#0d0f28]">
        <div className="container mx-auto px-6">
            <SectionTitle className="text-white">{t('home.whyUs.title')}</SectionTitle>
            <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">{t('home.whyUs.description')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard value="35+" label={t('home.whyUs.stat1')} />
                <StatCard value="512+" label={t('home.whyUs.stat2')} />
                <StatCard value="1120+" label={t('home.whyUs.stat3')} />
                <StatCard value="1520+" label={t('home.whyUs.stat4')} />
            </div>
        </div>
    </section>
)};

const SectorsSection: React.FC<HomePageProps> = ({ setPage }) => {
    const { t } = useTranslation();
    return (
    <section className="py-20 bg-[#0d0f28]">
        <div className="container mx-auto px-6">
            <SectionTitle className="text-white">{t('home.sectors.title')}</SectionTitle>
             <div className="grid md:grid-cols-3 gap-8 mt-12">
                <SectorCard
                    icon={<BuildingIcon />}
                    title={t('home.sectors.construction.title')}
                    description={t('home.sectors.construction.description')}
                    onClick={() => setPage('contact')}
                />
                <SectorCard
                    icon={<HeartIcon />}
                    title={t('home.sectors.healthcare.title')}
                    description={t('home.sectors.healthcare.description')}
                    onClick={() => setPage('contact')}
                />
                 <SectorCard
                    icon={<BoltIcon />}
                    title={t('home.sectors.electrical.title')}
                    description={t('home.sectors.electrical.description')}
                    onClick={() => setPage('contact')}
                />
            </div>
        </div>
    </section>
)};

const ContactMapSection: React.FC = () => {
    const { t } = useTranslation();
    return (
    <section className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h3 className="text-xl font-semibold text-yellow-500">{t('home.map.subtitle')}</h3>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">{t('home.map.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">{t('home.map.office')}</h3>
                    <p className="text-lg font-semibold">{t('home.map.address')}:</p>
                    <p className="text-lg text-gray-600">Raadhuisstraat 41</p>
                    <p className="text-lg text-gray-600 mb-8">4701 PL Roosendaal</p>
                    <button className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-600 transition-all transform hover:scale-105">
                        {t('home.map.button')} &gt;&gt;
                    </button>
                </div>
                <div>
                    <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.496515814521!2d4.453392315770514!3d51.52261997963774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c413b772c1a8d5%3A0x67a998c5d1e2e9d!2sRaadhuisstraat%2041%2C%204701%20PL%20Roosendaal%2C%20Netherlands!5e0!3m2!1sen!2spl"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
)};


// Icons
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 3v18m6-18v18" /></svg>
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
const StarIcon = ({className = "w-5 h-5"}: {className?: string}) => <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

const ReviewsContent = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <h2 className="text-3xl font-bold text-left uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 mb-2">{t('home.reviews.title')}</h2>
            <p className="text-left text-gray-400 mb-16">{t('home.reviews.description')}</p>
            <div className="flex justify-center items-center">
                 <div className="w-full max-w-md bg-gradient-to-br from-blue-900/50 via-gray-900 to-gray-900 p-8 rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/10">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="h-8 w-8 mb-6" />
                    <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-7 w-7 fill-current" />)}
                    </div>
                    <p className="text-5xl font-bold mb-1">5,0 / 5</p>
                    <p className="text-gray-400 mb-8">{t('home.reviews.basedOn')}</p>
                    <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-fuchsia-500/20">
                        {t('home.reviews.button')}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">{t('home.reviews.fallback.text')} <a href="#" className="underline hover:text-white">{t('home.reviews.fallback.link')}</a></p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsContent: React.FC = () => {
    const { t } = useTranslation();
    const testimonials = [
        {
          author: t('home.testimonials.t1.author'),
          role: t('home.testimonials.t1.role'),
          quote: t('home.testimonials.t1.quote'),
        },
        {
          author: t('home.testimonials.t2.author'),
          role: t('home.testimonials.t2.role'),
          quote: t('home.testimonials.t2.quote'),
        },
        {
          author: t('home.testimonials.t3.author'),
          role: t('home.testimonials.t3.role'),
          quote: t('home.testimonials.t3.quote'),
        },
    ];

    return (
    <div>
        <SectionTitle className="text-white text-left mb-8">{t('home.testimonials.title')}</SectionTitle>
        <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    // FIX: The 'role' prop was incomplete due to a truncated file. This has been corrected.
                    role={testimonial.role} />
            ))}
        </div>
    </div>
    );
};
// FIX: Added a HomePage component to aggregate all sections and serve as the default export.
const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    return (
      <>
        <HeroSlider setPage={setPage} />
        <WhyUsSection />
        <SectorsSection setPage={setPage} />
        <section className="py-20 bg-[#1e213a] overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ReviewsContent />
              <TestimonialsContent />
            </div>
          </div>
        </section>
        <ContactMapSection />
      </>
    );
  };
  
  export default HomePage;
