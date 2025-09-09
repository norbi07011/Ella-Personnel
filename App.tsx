
import React, { useState, useEffect } from 'react';
import { Page } from './types';

import Header from './components/Header';
// FIX: The default export from './components/ProjectList' is now HomePage.
import HomePage from './components/ProjectList'; 
import ApplyPage from './components/Filters';
import ServicesPage from './components/ProjectDetails';
import AboutPage from './components/MapView';
import ContactPage from './components/CalendarView';
import { LanguageProvider, useTranslation } from './i18n';

const AppContent: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'apply':
        return <ApplyPage />;
      case 'services':
        return <ServicesPage setPage={setPage} />;
      case 'about':
        return <AboutPage setPage={setPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-[#0d0f28] text-gray-200 font-sans">
      <Header currentPage={page} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

const Footer: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const { t } = useTranslation();
  const handleNavClick = (page: Page) => {
    setPage(page);
  };
    
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"><span className="text-blue-400">Ella</span><span className="text-red-400"> Personnel</span></h3>
            <p className="text-gray-400">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul>
              <li className="mb-2"><button onClick={() => handleNavClick('home')} className="hover:text-blue-400 transition-colors">{t('header.nav.home')}</button></li>
              <li className="mb-2"><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors">{t('header.nav.services')}</button></li>
              <li className="mb-2"><button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition-colors">{t('header.nav.about')}</button></li>
              <li className="mb-2"><button onClick={() => handleNavClick('contact')} className="hover:text-blue-400 transition-colors">{t('header.nav.contact')}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <p className="text-gray-400">Raadhuisstraat 41</p>
            <p className="text-gray-400">4701 PL Roosendaal</p>
            <p className="text-gray-400">{t('footer.country')}</p>
            <p className="text-gray-400 mt-2">Email: info@ella-personnel.nl</p>
            <p className="text-gray-400">{t('footer.phoneLabel')}: +31 123 456 789</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.findUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><SocialFacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><SocialTwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><SocialInstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><SocialLinkedInIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ella Personnel Services. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

const SocialFacebookIcon = () => <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>;
const SocialTwitterIcon = () => <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.353.23-2.064.077.621 1.954 2.425 3.377 4.563 3.414-1.623 1.276-3.665 2.03-5.88 2.03-.38 0-.755-.022-1.124-.067 2.094 1.342 4.585 2.12 7.24 2.12 8.693 0 13.45-7.22 13.2-13.565.926-.668 1.72-1.503 2.338-2.43z" /></svg>;
const SocialInstagramIcon = () => <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>;
const SocialLinkedInIcon = () => <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>;

export default App;