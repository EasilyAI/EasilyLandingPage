import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Hero = ({ t, lang, withLangPath }) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-52 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/BackroundPicture.png)' }}
      ></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-[#FAFAFA]/95"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-white/80 text-[#817DFF] font-bold text-xs font-mono uppercase tracking-wide shadow-sm">
            {t.hero.tagline}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#172736] leading-tight tracking-tight font-display">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t.hero.short_description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <button 
              onClick={() => navigate(withLangPath('/contact'))}
              className="bg-[#817DFF] hover:bg-[#6c68e3] text-white text-lg px-7 py-4 rounded-xl font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 transform transition hover:scale-105"
            >
              {t.hero.cta_primary}
              {lang === 'he' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
            <button 
              onClick={() => navigate(withLangPath('/services'))}
              className="bg-white hover:bg-gray-50 text-[#172736] border border-gray-200 hover:border-[#817DFF] text-lg px-7 py-4 rounded-xl font-bold transition flex items-center justify-center shadow-sm"
            >
              {t.hero.cta_secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
