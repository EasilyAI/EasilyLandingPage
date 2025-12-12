import { useEffect } from 'react';

export const Analytics = () => {
  useEffect(() => {
    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (plausibleDomain && !document.querySelector('script[data-plausible]')) {
      const script = document.createElement('script');
      script.setAttribute('data-domain', plausibleDomain);
      script.setAttribute('data-plausible', 'true');
      script.src = 'https://plausible.io/js/script.js';
      script.defer = true;
      document.body.appendChild(script);
    }

    if (gaId && !document.querySelector('script[data-ga4]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.setAttribute('data-ga4', 'true');
      document.body.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.body.appendChild(inlineScript);
    }
  }, []);

  return null;
};

