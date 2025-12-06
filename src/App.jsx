import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/pages/Hero';
import { Services } from './components/pages/Services';
import { ServiceDetail } from './components/pages/ServiceDetail';
import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { BlogDetail } from './components/pages/BlogDetail';
import { Contact } from './components/pages/Contact';
import { content } from './content';

export default function App() {
  const [lang, setLang] = useState('he');
  const [currentPage, setCurrentPage] = useState('home'); // home, services, about, blog, contact
  const [selectedItem, setSelectedItem] = useState(null); // For service or blog detail view
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = content[lang];

  // Handlers for selection
  const handleServiceSelect = (service) => {
    setSelectedItem({ type: 'service', data: service });
    window.scrollTo(0,0);
  };

  const handleBlogSelect = (post) => {
    setSelectedItem({ type: 'blog', data: post });
    window.scrollTo(0,0);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  const renderContent = () => {
    // If Detail View is active
    if (selectedItem) {
      if (selectedItem.type === 'service') {
        return <ServiceDetail service={selectedItem.data} t={t} onBack={handleBack} />;
      }
      if (selectedItem.type === 'blog') {
        return <BlogDetail post={selectedItem.data} t={t} onBack={handleBack} />;
      }
    }

    // Normal Page Routing
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero t={t} setPage={setCurrentPage} lang={lang} />
            <Services t={t} onSelectService={handleServiceSelect} />
            <div className="bg-[#172736] text-center py-24 px-4 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#817DFF] opacity-10 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl md:text-4xl text-white font-bold mb-10 max-w-2xl mx-auto font-display leading-tight">
                   {lang === 'he' ? 'הצטרף לעסקים שכבר משתמשים ב-AI כדי לצמוח' : 'Join businesses already growing with AI'}
                 </h3>
                 <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-[#817DFF] hover:bg-[#6c68e3] text-white px-10 py-5 rounded-xl font-bold shadow-lg transform transition hover:scale-105"
                 >
                    {t.hero.cta_primary}
                 </button>
               </div>
            </div>
            <Blog t={t} onSelectPost={handleBlogSelect} />
          </>
        );
      case 'services':
        return (
          <div className="pt-24">
             <Services t={t} onSelectService={handleServiceSelect} />
             <div className="max-w-4xl mx-auto px-6 pb-20 text-center">
                <p className="text-xl text-gray-600 mb-8 font-medium">
                  {lang === 'he' 
                    ? 'לא בטוחים איזה פתרון מתאים לכם? בואו נדבר.' 
                    : 'Not sure which solution fits best? Let\'s talk.'}
                </p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-[#172736] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#2a415f] transition"
                >
                  {t.contact.title}
                </button>
             </div>
          </div>
        );
      case 'about':
        return <div className="pt-24"><About t={t} setPage={setCurrentPage} /></div>;
      case 'blog':
        return <div className="pt-24"><Blog t={t} onSelectPost={handleBlogSelect} /></div>;
      case 'contact':
        return <div className="pt-24"><Contact t={t} lang={lang} /></div>;
      default:
        return null;
    }
  };
  
  return (
    <div className={`min-h-screen font-sans bg-white selection:bg-[#817DFF] selection:text-white ${lang === 'he' ? 'font-hebrew' : 'font-english'}`}>
      <Header 
        lang={lang} 
        setLang={(l) => {
          setLang(l);
          setSelectedItem(null); // Reset detail view on lang switch
        }}
        setPage={(p) => {
          setCurrentPage(p);
          setSelectedItem(null); // Reset detail view on nav
          window.scrollTo(0,0);
        }}
        t={t} 
        isScrolled={isScrolled}
      />

      <main>
        {renderContent()}
      </main>

      <Footer t={t} setPage={setCurrentPage} />
    </div>
  );
}

