import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
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
import { AITools } from './components/pages/AITools';
import { Contact } from './components/pages/Contact';
import { content } from './content';
import { SEO } from './components/layout/SEO';
import { Analytics } from './components/layout/Analytics';
import { BannerAd } from './components/ui/BannerAd';

// Language context wrapper
function AppContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLang] = useState(() => {
    const fromUrl = searchParams.get('lang');
    const stored = typeof window !== 'undefined' ? localStorage.getItem('preferredLang') : null;
    if (fromUrl === 'en' || fromUrl === 'he') return fromUrl;
    if (stored === 'en' || stored === 'he') return stored;
    return 'he';
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLang', lang);
    }
    const params = new URLSearchParams(window.location.search);
    const current = params.get('lang');
    if (current !== lang) {
      params.set('lang', lang);
      setSearchParams(params, { replace: true });
    }
  }, [lang, setSearchParams]);

  const t = content[lang];
  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${location.pathname}`
    : undefined;

  const withLangPath = useCallback((path) => `${path}?lang=${lang}`, [lang]);

  const { seoTitle, seoDescription } = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/services')) {
      return {
        seoTitle: t.services.title,
        seoDescription: t.services.subtitle,
      };
    }
    if (path.startsWith('/ai-tools')) {
      return {
        seoTitle: t.ai_tools.title,
        seoDescription: t.ai_tools.subtitle,
      };
    }
    if (path.startsWith('/about')) {
      return {
        seoTitle: t.about.title,
        seoDescription: t.about.mission_text,
      };
    }
    if (path.startsWith('/blog')) {
      return {
        seoTitle: t.blog.title,
        seoDescription: t.blog.subtitle,
      };
    }
    if (path.startsWith('/contact')) {
      return {
        seoTitle: t.contact.title,
        seoDescription: t.contact.subtitle,
      };
    }
    return {
      seoTitle: t.hero.title,
      seoDescription: t.hero.subtitle,
    };
  }, [location.pathname, t]);

  return (
    <div className={`min-h-screen font-sans bg-white selection:bg-[#817DFF] selection:text-white ${lang === 'he' ? 'font-hebrew' : 'font-english'}`}>
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        lang={lang} 
        url={currentUrl}
      />
      <Analytics />
      <Header 
        lang={lang} 
        setLang={setLang}
        t={t} 
        isScrolled={isScrolled}
        withLangPath={withLangPath}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage t={t} lang={lang} withLangPath={withLangPath} />} />
          <Route path="/services" element={<ServicesPage t={t} lang={lang} withLangPath={withLangPath} />} />
          <Route path="/services/:id" element={<ServiceDetailPage t={t} withLangPath={withLangPath} />} />
          <Route path="/about" element={<AboutPage t={t} lang={lang} withLangPath={withLangPath} />} />
          <Route path="/blog" element={<BlogPage t={t} withLangPath={withLangPath} />} />
          <Route path="/blog/:id" element={<BlogDetailPage t={t} withLangPath={withLangPath} />} />
          <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />
          <Route path="/ai-tools" element={<AIToolsPage t={t} />} />
        </Routes>
      </main>

      {/* Side banner: Hebrew only, fixed under header on desktop */}
      <BannerAd lang={lang} />
      <Footer t={t} withLangPath={withLangPath} />
    </div>
  );
}

// Home Page Component
function HomePage({ t, lang, withLangPath }) {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero t={t} lang={lang} withLangPath={withLangPath} />
      <ServicesPreview t={t} withLangPath={withLangPath} />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#817DFF]">
              {lang === 'he' ? 'המשימה שלנו' : 'Our mission'}
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-[#172736] font-display">
              {t.about.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.about.mission_text}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.about.values.slice(0, 3).map((val, idx) => (
                <span key={idx} className="bg-[#F4F4FF] text-[#172736] px-4 py-2 rounded-full text-sm font-semibold">
                  {val}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => navigate(withLangPath('/about'))}
                className="bg-[#172736] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#2a415f] transition"
              >
                {lang === 'he' ? 'קראו עלינו' : 'Read about us'}
              </button>
              <button
                onClick={() => navigate(withLangPath('/contact'))}
                className="px-6 py-3 rounded-xl font-bold border border-gray-200 hover:border-[#817DFF] text-[#172736] transition"
              >
                {lang === 'he' ? 'דברו איתנו' : 'Talk with us'}
              </button>
            </div>
          </div>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h4 className="text-xl font-bold text-[#172736] mb-4 font-display">
              {lang === 'he' ? 'מה מקבלים בעבודה איתנו' : 'What you get working with us'}
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#817DFF]" />
                <span>{lang === 'he' ? 'הטמעה מקצה לקצה – תכנון, בנייה, מדידה' : 'End-to-end delivery: plan, build, measure'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#817DFF]" />
                <span>{lang === 'he' ? 'פוקוס על תוצאה עסקית, לא על באזז טכנולוגי' : 'Business outcomes first, not tech buzzwords'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#817DFF]" />
                <span>{lang === 'he' ? 'הטמעת AI עם תמיכה מלאה בעברית ואנגלית' : 'AI delivery with full Hebrew and English support'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <BlogPreview t={t} withLangPath={withLangPath} />
      <div className="bg-[#172736] text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#817DFF] opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl md:text-4xl text-white font-bold max-w-2xl mx-auto font-display leading-tight">
            {lang === 'he' ? 'הצטרפו לעסקים שכבר מטמיעים AI בצד העסקי' : 'Join teams already shipping business-ready AI'}
          </h3>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {lang === 'he' ? 'קבעו שיחה קצרה ונבנה יחד מפת דרכים ו-ROI מדיד לשימושי AI בארגון.' : 'Book a short call and we will map quick wins, ROI, and a clear AI roadmap.'}
          </p>
          <button 
            onClick={() => navigate(withLangPath('/contact'))}
            className="bg-[#817DFF] hover:bg-[#6c68e3] text-white px-10 py-4 rounded-xl font-bold shadow-lg transform transition hover:scale-105"
          >
            {t.hero.cta_primary}
          </button>
        </div>
      </div>
    </>
  );
}

// Services Page Component
function ServicesPage({ t, lang, withLangPath }) {
  const navigate = useNavigate();
  
  const handleServiceSelect = (service) => {
    navigate(withLangPath(`/services/${service.id}`));
  };

  return (
    <div className="pt-24">
      <Services t={t} onSelectService={handleServiceSelect} withLangPath={withLangPath} />
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-xl text-gray-600 mb-8 font-medium">
          {lang === 'he' 
            ? 'לא בטוחים איזה פתרון מתאים לכם? בואו נדבר.' 
            : 'Not sure which solution fits best? Let\'s talk.'}
        </p>
        <button 
          onClick={() => navigate(withLangPath('/contact'))}
          className="bg-[#172736] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#2a415f] transition"
        >
          {t.contact.title}
        </button>
      </div>
    </div>
  );
}

// Service Detail Page Component
function ServiceDetailPage({ t, withLangPath }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = t.services.items.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-[#172736] mb-4">Service not found</h1>
        <button onClick={() => navigate(withLangPath('/services'))} className="text-[#817DFF] hover:underline">
          Back to Services
        </button>
      </div>
    );
  }

  return <ServiceDetail service={service} t={t} onBack={() => navigate(withLangPath('/services'))} />;
}

// About Page Component
function AboutPage({ t, lang, withLangPath }) {
  return (
    <div className="pt-24">
      <About t={t} withLangPath={withLangPath} />
    </div>
  );
}

// Blog Page Component
function BlogPage({ t, withLangPath }) {
  const navigate = useNavigate();
  
  const handleBlogSelect = (post) => {
    navigate(withLangPath(`/blog/${post.id}`));
  };

  return (
    <div className="pt-24">
      <Blog t={t} onSelectPost={handleBlogSelect} />
    </div>
  );
}

// Blog Detail Page Component
function BlogDetailPage({ t, withLangPath }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = t.blog.items.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-[#172736] mb-4">Post not found</h1>
        <button onClick={() => navigate(withLangPath('/blog'))} className="text-[#817DFF] hover:underline">
          Back to Blog
        </button>
      </div>
    );
  }

  return <BlogDetail post={post} t={t} onBack={() => navigate(withLangPath('/blog'))} />;
}

// Contact Page Component
function ContactPage({ t, lang }) {
  return (
    <div className="pt-24">
      <Contact t={t} lang={lang} />
    </div>
  );
}

// AI Tools Page Component
function AIToolsPage({ t }) {
  return (
    <div className="pt-16">
      <AITools t={t} />
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

