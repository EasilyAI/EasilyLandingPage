import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Hero = ({ t, setPage, lang }) => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
    {/* Clean Background */}
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-none border border-blue-100 bg-white text-[#817DFF] font-mono text-sm shadow-sm tracking-wide">
          🚀 {lang === 'he' ? 'חדשנות עסקית מוכחת' : 'Proven Business Innovation'}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#172736] mb-8 leading-tight tracking-tight font-display">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => setPage('contact')}
            className="bg-[#817DFF] hover:bg-[#6c68e3] text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 transform transition hover:scale-105"
          >
            {t.hero.cta_primary}
            {lang === 'he' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          <button 
            onClick={() => setPage('services')}
            className="bg-white hover:bg-gray-50 text-[#172736] border border-gray-200 hover:border-[#817DFF] text-lg px-8 py-4 rounded-xl font-bold transition flex items-center justify-center shadow-sm"
          >
            {t.hero.cta_secondary}
          </button>
        </div>
      </div>
    </div>
  </section>
);

