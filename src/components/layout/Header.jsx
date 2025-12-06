import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Header = ({ lang, setLang, setPage, t, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  };

  const navLinks = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'about', label: t.nav.about },
    { key: 'blog', label: t.nav.blog },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="cursor-pointer" onClick={() => setPage('home')}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse items-center">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => setPage(link.key)}
                className="text-[#172736] hover:text-[#817DFF] font-medium transition-colors px-2 text-sm lg:text-base"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center text-[#172736] hover:text-[#817DFF] font-medium text-sm font-mono"
            >
              <Globe size={16} className="mx-1" />
              <span>{lang === 'he' ? 'EN' : 'עב'}</span>
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="bg-[#817DFF] hover:bg-[#6c68e3] text-white px-5 py-2 rounded-lg font-bold shadow-md transform transition hover:-translate-y-0.5 text-sm"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLang}
              className="text-[#172736] font-bold text-sm"
            >
              {lang === 'he' ? 'EN' : 'HE'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#172736]">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.key}
              onClick={() => {
                setPage(link.key);
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-[#172736] py-3 border-b border-gray-50 text-start"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setPage('contact');
              setMobileMenuOpen(false);
            }}
            className="bg-[#817DFF] text-white w-full py-3 rounded-lg font-bold mt-2"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
};

