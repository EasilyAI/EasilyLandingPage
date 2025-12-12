import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/pages/Hero';
import { Services } from './components/pages/Services';
import { ServicesPreview } from './components/pages/ServicesPreview';
import { ServiceDetail } from './components/pages/ServiceDetail';
import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { BlogPreview } from './components/pages/BlogPreview';
import { BlogDetail } from './components/pages/BlogDetail';
import { Contact } from './components/pages/Contact';
import { content } from './content';

// Language context wrapper
function AppContent() {
  const [lang, setLang] = useState('he');
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

  return (
    <div className={`min-h-screen font-sans bg-white selection:bg-[#817DFF] selection:text-white ${lang === 'he' ? 'font-hebrew' : 'font-english'}`}>
      <Header 
        lang={lang} 
        setLang={setLang}
        t={t} 
        isScrolled={isScrolled}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage t={t} lang={lang} />} />
          <Route path="/services" element={<ServicesPage t={t} lang={lang} />} />
          <Route path="/services/:id" element={<ServiceDetailPage t={t} />} />
          <Route path="/about" element={<AboutPage t={t} lang={lang} />} />
          <Route path="/blog" element={<BlogPage t={t} />} />
          <Route path="/blog/:id" element={<BlogDetailPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />
        </Routes>
      </main>

      <Footer t={t} />
    </div>
  );
}

// Home Page Component
function HomePage({ t, lang }) {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero t={t} lang={lang} />
      <ServicesPreview t={t} />
      <div className="bg-[#172736] text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#817DFF] opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl text-white font-bold mb-10 max-w-2xl mx-auto font-display leading-tight">
            {lang === 'he' ? 'הצטרף לעסקים שכבר משתמשים ב-AI כדי לצמוח' : 'Join businesses already growing with AI'}
          </h3>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#817DFF] hover:bg-[#6c68e3] text-white px-10 py-5 rounded-xl font-bold shadow-lg transform transition hover:scale-105"
          >
            {t.hero.cta_primary}
          </button>
        </div>
      </div>
      <BlogPreview t={t} />
    </>
  );
}

// Services Page Component
function ServicesPage({ t, lang }) {
  const navigate = useNavigate();
  
  const handleServiceSelect = (service) => {
    navigate(`/services/${service.id}`);
  };

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
          onClick={() => navigate('/contact')}
          className="bg-[#172736] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#2a415f] transition"
        >
          {t.contact.title}
        </button>
      </div>
    </div>
  );
}

// Service Detail Page Component
function ServiceDetailPage({ t }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = t.services.items.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-[#172736] mb-4">Service not found</h1>
        <button onClick={() => navigate('/services')} className="text-[#817DFF] hover:underline">
          Back to Services
        </button>
      </div>
    );
  }

  return <ServiceDetail service={service} t={t} onBack={() => navigate('/services')} />;
}

// About Page Component
function AboutPage({ t, lang }) {
  return (
    <div className="pt-24">
      <About t={t} />
    </div>
  );
}

// Blog Page Component
function BlogPage({ t }) {
  const navigate = useNavigate();
  
  const handleBlogSelect = (post) => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="pt-24">
      <Blog t={t} onSelectPost={handleBlogSelect} />
    </div>
  );
}

// Blog Detail Page Component
function BlogDetailPage({ t }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = t.blog.items.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-[#172736] mb-4">Post not found</h1>
        <button onClick={() => navigate('/blog')} className="text-[#817DFF] hover:underline">
          Back to Blog
        </button>
      </div>
    );
  }

  return <BlogDetail post={post} t={t} onBack={() => navigate('/blog')} />;
}

// Contact Page Component
function ContactPage({ t, lang }) {
  return (
    <div className="pt-24">
      <Contact t={t} lang={lang} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

