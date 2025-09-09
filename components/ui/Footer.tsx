
// components/ui/Footer.tsx
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold font-display mb-4">
                <span className="text-accent-cyan">Ella</span>
                <span className="text-accent-fuchsia"> Personeel</span>
            </h3>
            <p className="text-dark-subtext text-sm">
                Raadhuisstraat 41, 4701 PL Roosendaal
            </p>
             {/* TODO: Add KVK and other identifiers once public */}
          </div>

          <div className="flex justify-center items-center">
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-dark-subtext hover:text-accent-cyan transition-colors"><Facebook /></a>
              <a href="#" aria-label="Twitter" className="text-dark-subtext hover:text-accent-cyan transition-colors"><Twitter /></a>
              <a href="#" aria-label="Instagram" className="text-dark-subtext hover:text-accent-cyan transition-colors"><Instagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-dark-subtext hover:text-accent-cyan transition-colors"><Linkedin /></a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
             <p className="text-dark-subtext text-sm">
               &copy; {new Date().getFullYear()} Ella Personeelsdiensten
             </p>
             <p className="text-dark-subtext text-sm mt-2">
                Ontwikkeld en beheerd door Fibronic
             </p>
             <Link href="/privacy-policy" className="text-sm text-dark-subtext hover:text-accent-cyan transition-colors mt-2 inline-block">
                {/* TODO: Create privacy policy page */}
                Privacybeleid
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
