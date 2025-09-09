import React, { useState } from 'react';
import { Page } from '../types';
import { useTranslation } from '../i18n';

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <h2 className={`text-3xl font-bold text-center ${className || 'text-gray-800'}`}>{children}</h2>
);

export const SectorCard: React.FC<{ icon: React.ReactNode; title: string; description: string; onClick: () => void }> = ({ icon, title, description, onClick }) => {
    const { t } = useTranslation();
    return (
        <div 
            onClick={onClick}
            className="
                group cursor-pointer bg-[#1e213a] p-8 rounded-2xl text-center 
                transition-all duration-300 ease-in-out transform 
                hover:-translate-y-2 
                hover:bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-600 
                hover:shadow-[0_0_25px_rgba(150,50,220,0.5)]"
        >
            <div className="text-cyan-400 inline-block mb-4 transition-colors duration-300 group-hover:text-white">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 mb-6 transition-colors duration-300 group-hover:text-gray-100">{description}</p>
            <span className="font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-white">{t('card.moreInfo')} &rarr;</span>
        </div>
    );
};

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-cyan-400/60 mb-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M6 14.998h6L10 21h4l2-6.002V5h-10v9.998zm12 0h6l-2 6.002h4l2-6.002V5H18v9.998z"></path>
    </svg>
);

export const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
    <div className="bg-[#1e213a] p-6 rounded-2xl border border-blue-500/20 shadow-xl shadow-black/40">
      <QuoteIcon />
      <p className="text-gray-300 italic text-sm mb-4">"{quote}"</p>
      <div className="pt-4 border-t border-blue-500/20 text-right">
        <p className="font-semibold text-white text-sm">{author}</p>
        <p className="text-xs text-cyan-400">{role}</p>
      </div>
    </div>
);


export const ServiceBlock: React.FC<{ title: string; description: string; icon: React.ReactNode; }> = ({ title, description, icon }) => (
  <div className="bg-[#1e213a] p-8 rounded-2xl border border-blue-500/20 shadow-xl shadow-black/40 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/10 flex flex-col text-center items-center">
    <div className="flex-shrink-0 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-cyan-400 flex items-center justify-center border-2 border-cyan-400/30 mb-6">
        {icon}
    </div>
    <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export const InteractiveServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; isActive: boolean; onHover: () => void; }> = ({ icon, title, description, isActive, onHover }) => (
    <div
        onMouseEnter={onHover}
        className={`
            p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all duration-300 backdrop-blur-sm
            ${isActive
                ? 'bg-cyan-500/10 border-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }
        `}
    >
        <div className={`
            flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center transition-colors duration-300
            ${isActive ? 'bg-cyan-400 text-gray-900' : 'bg-white/10 text-cyan-400'}
        `}>
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-sm text-gray-400 max-w-md">{description}</p>
        </div>
    </div>
);


export const WhyUsCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-[#1e213a] p-6 rounded-2xl text-center border border-blue-500/20 shadow-lg shadow-black/30">
        <div className="inline-block text-cyan-400 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);


export const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <span className="font-semibold text-lg">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 pr-10 text-gray-600">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};