import React, { useState } from 'react';
import { Page } from '../types';
import { useTranslation } from '../i18n';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; setPage: (page: Page) => void; children: React.ReactNode; isMobile?: boolean; }> = ({ page, currentPage, setPage, children, isMobile = false }) => (
  <button 
    onClick={() => setPage(page)} 
    className={`font-medium transition-colors duration-300 ${isMobile ? 'block text-left w-full px-4 py-3 text-lg' : 'px-4 py-2 text-sm'} ${currentPage === page ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
  >
    {children}
  </button>
);

const LanguageSwitcher: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
    const { locale, setLocale } = useTranslation();

    const baseStyle = "px-2.5 py-1 text-xs font-semibold rounded-md transition-colors";
    const activeStyle = "bg-blue-600 text-white";
    const inactiveStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";
    
    return (
        <div className={`flex items-center space-x-1.5 ${isMobile ? 'justify-center pt-6' : ''}`}>
            <button onClick={() => setLocale('pl')} className={`${baseStyle} ${locale === 'pl' ? activeStyle : inactiveStyle}`}>
                PL
            </button>
            <button onClick={() => setLocale('nl')} className={`${baseStyle} ${locale === 'nl' ? activeStyle : inactiveStyle}`}>
                NL
            </button>
            <button onClick={() => setLocale('tr')} className={`${baseStyle} ${locale === 'tr' ? activeStyle : inactiveStyle}`}>
                TR
            </button>
            <button onClick={() => setLocale('bg')} className={`${baseStyle} ${locale === 'bg' ? activeStyle : inactiveStyle}`}>
                BG
            </button>
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const handleNavClick = (page: Page) => {
        setPage(page);
        setIsMenuOpen(false);
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold cursor-pointer" onClick={() => handleNavClick('home')}>
                        <span className="text-blue-600">Ella</span>
                        <span className="text-red-500"> Personnel</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink page="home" currentPage={currentPage} setPage={handleNavClick}>{t('header.nav.home')}</NavLink>
                        <NavLink page="apply" currentPage={currentPage} setPage={handleNavClick}>{t('header.nav.apply')}</NavLink>
                        <NavLink page="services" currentPage={currentPage} setPage={handleNavClick}>{t('header.nav.services')}</NavLink>
                        <NavLink page="about" currentPage={currentPage} setPage={handleNavClick}>{t('header.nav.about')}</NavLink>
                        <NavLink page="contact" currentPage={currentPage} setPage={handleNavClick}>{t('header.nav.contact')}</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">{t('header.collaborate')}</button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                 <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
                    <nav className="flex flex-col py-4">
                        <NavLink page="home" currentPage={currentPage} setPage={handleNavClick} isMobile={true}>{t('header.nav.home')}</NavLink>
                        <NavLink page="apply" currentPage={currentPage} setPage={handleNavClick} isMobile={true}>{t('header.nav.apply')}</NavLink>
                        <NavLink page="services" currentPage={currentPage} setPage={handleNavClick} isMobile={true}>{t('header.nav.services')}</NavLink>
                        <NavLink page="about" currentPage={currentPage} setPage={handleNavClick} isMobile={true}>{t('header.nav.about')}</NavLink>
                        <NavLink page="contact" currentPage={currentPage} setPage={handleNavClick} isMobile={true}>{t('header.nav.contact')}</NavLink>
                        <div className="px-4 pt-4">
                            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t('header.collaborate')}</button>
                        </div>
                        <LanguageSwitcher isMobile={true} />
                    </nav>
                </div>
            )}
        </header>
    );
};

const MenuIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>;
const CloseIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

export default Header;
