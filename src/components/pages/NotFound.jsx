import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowRight, ArrowLeft, Headphones, Layers } from 'lucide-react';

export const NotFound = ({ lang = 'he', withLangPath }) => {
  const navigate = useNavigate();
  const isHebrew = lang === 'he';

  const content = {
    he: {
      title: 'אופס! הדף לא נמצא',
      subtitle: 'נראה שהגעתם לדף שלא קיים או שהכתובת השתנתה.',
      description: 'אל דאגה, אנחנו כאן כדי לעזור לכם למצוא את מה שאתם מחפשים.',
      homeBtn: 'חזרה לדף הבית',
      servicesBtn: 'הפתרונות שלנו',
      contactBtn: 'צרו קשר',
      errorCode: '404',
    },
    en: {
      title: 'Oops! Page Not Found',
      subtitle: "It looks like you've reached a page that doesn't exist or has moved.",
      description: "Don't worry, we're here to help you find what you're looking for.",
      homeBtn: 'Back to Home',
      servicesBtn: 'Our Solutions',
      contactBtn: 'Contact Us',
      errorCode: '404',
    }
  };

  const t = content[lang] || content.he;
  const Arrow = isHebrew ? ArrowLeft : ArrowRight;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAFAFA] via-white to-[#F4F4FF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#817DFF] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#172736] opacity-5 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        {/* 404 Large Text */}
        <div className="relative mb-8">
          <span className="text-[180px] md:text-[240px] font-black text-gray-100 leading-none select-none font-display">
            {t.errorCode}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
              <span className="text-2xl md:text-3xl font-bold text-[#817DFF] font-display">
                {isHebrew ? 'לא נמצא' : 'Not Found'}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-black text-[#172736] mb-4 font-display">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          {t.subtitle}
        </p>
        <p className="text-gray-500 mb-10">
          {t.description}
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(withLangPath ? withLangPath('/') : '/')}
            className="bg-[#817DFF] hover:bg-[#6c68e3] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <Home size={20} />
            {t.homeBtn}
          </button>
          
          <button
            onClick={() => navigate(withLangPath ? withLangPath('/services') : '/services')}
            className="bg-white hover:bg-gray-50 text-[#172736] border border-gray-200 hover:border-[#817DFF] px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Layers size={20} />
            {t.servicesBtn}
          </button>
          
          <button
            onClick={() => navigate(withLangPath ? withLangPath('/contact') : '/contact')}
            className="bg-[#172736] hover:bg-[#2a415f] text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Headphones size={20} />
            {t.contactBtn}
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {isHebrew ? 'או נסו את הקישורים הבאים:' : 'Or try these links:'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button 
              onClick={() => navigate(withLangPath ? withLangPath('/ai-tools') : '/ai-tools')}
              className="text-[#817DFF] hover:underline font-medium"
            >
              {isHebrew ? 'כלי AI לעסקים' : 'AI Tools'}
            </button>
            <span className="text-gray-300">•</span>
            <button 
              onClick={() => navigate(withLangPath ? withLangPath('/blog') : '/blog')}
              className="text-[#817DFF] hover:underline font-medium"
            >
              {isHebrew ? 'בלוג' : 'Blog'}
            </button>
            <span className="text-gray-300">•</span>
            <button 
              onClick={() => navigate(withLangPath ? withLangPath('/about') : '/about')}
              className="text-[#817DFF] hover:underline font-medium"
            >
              {isHebrew ? 'אודות' : 'About'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

