import React from 'react';
import { Helmet } from 'react-helmet-async';

const FALLBACK_IMAGE = 'https://www.easily-ai.com/EASILYAI.png';
const SITE_NAME = 'Easily AI';
const BASE_URL = 'https://www.easily-ai.com';

// Language-specific SEO defaults
const SEO_DEFAULTS = {
  he: {
    siteName: 'Easily AI - בינה מלאכותית לעסקים',
    defaultDescription: 'פתרונות בינה מלאכותית לעסקים. אוטומציה, סוכני AI וייעול תהליכים שמייצרים ROI מדיד לעסק שלכם.',
    titleSuffix: 'Easily AI | בינה מלאכותית לעסקים',
  },
  en: {
    siteName: 'Easily AI - AI Solutions for Business',
    defaultDescription: 'AI solutions that increase profitability and save valuable work hours. Custom AI automation, agents, and workflow optimization for your business.',
    titleSuffix: 'Easily AI | AI Solutions for Business',
  }
};

// JSON-LD Structured Data
const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Easily AI",
  "alternateName": "Easily AI Solutions",
  "url": BASE_URL,
  "logo": `${BASE_URL}/EASILYAI.png`,
  "description": "AI solutions provider specializing in business automation, AI agents, and workflow optimization for SMBs.",
  "email": "info@easilyai.co.il",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressCountry": "IL"
  },
  "sameAs": [
    "https://linkedin.com/company/easily-ai-solutions/",
    "https://www.instagram.com/easilyaisolutions/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Omer Lewinsky",
    "jobTitle": "Founder & AI Architect"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Israel"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Business Automation",
    "Chatbots",
    "AI Agents",
    "Data Strategy",
    "Workflow Automation"
  ]
});

const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Easily AI",
  "image": `${BASE_URL}/EASILYAI.png`,
  "url": BASE_URL,
  "telephone": "+972-50-1234567",
  "email": "info@easilyai.co.il",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressCountry": "IL"
  },
  "priceRange": "$$",
  "openingHours": "Su-Th 09:00-18:00"
});

export const SEO = ({
  title,
  description,
  lang = 'he',
  url,
  image = FALLBACK_IMAGE,
  type = 'website',
  article = null, // For blog posts
}) => {
  const defaults = SEO_DEFAULTS[lang] || SEO_DEFAULTS.he;
  const fullTitle = title ? `${title} | ${defaults.titleSuffix}` : defaults.titleSuffix;
  const metaDescription = description || defaults.defaultDescription;
  
  // Build canonical URL without query params
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonical = url || `${BASE_URL}${pathname}`;
  
  // Build alternate language URLs for hreflang
  const enUrl = `${BASE_URL}${pathname}?lang=en`;
  const heUrl = `${BASE_URL}${pathname}?lang=he`;

  return (
    <Helmet htmlAttributes={{ lang, dir: lang === 'he' ? 'rtl' : 'ltr' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang tags for language alternates */}
      <link rel="alternate" hreflang="en" href={enUrl} />
      <link rel="alternate" hreflang="he" href={heUrl} />
      <link rel="alternate" hreflang="x-default" href={heUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${BASE_URL}${image}`} />
      <meta property="og:locale" content={lang === 'he' ? 'he_IL' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'he' ? 'en_US' : 'he_IL'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${BASE_URL}${image}`} />

      {/* Article metadata for blog posts */}
      {article && (
        <>
          <meta property="article:published_time" content={article.date} />
          <meta property="article:section" content={article.category} />
        </>
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(getLocalBusinessSchema())}
      </script>
    </Helmet>
  );
};


