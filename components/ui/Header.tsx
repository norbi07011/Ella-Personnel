
// components/ui/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solliciteren', label: 'Solliciteren' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold font-display">
            <span className="text-accent-cyan">Ella</span>
            <span className="text-accent-fuchsia"> Personeel</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-cyan ${
                  pathname === link.href ? 'text-accent-cyan' : 'text-dark-subtext'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-dark-subtext hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 border-t border-white/10"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-accent-cyan ${
                    pathname === link.href ? 'text-accent-cyan' : 'text-dark-subtext'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
