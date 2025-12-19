import React from 'react';
import { Helmet } from 'react-helmet-async';

const FALLBACK_IMAGE = '/EASILYAI.png';
const SITE_NAME = 'Easily AI';

export const SEO = ({
  title,
  description,
  lang = 'en',
  url,
  image = FALLBACK_IMAGE,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical =
    url ||
    (typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : undefined);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:locale" content={lang === 'he' ? 'he_IL' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
    </Helmet>
  );
};


