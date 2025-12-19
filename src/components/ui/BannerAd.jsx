import React from 'react';

// Fixed 300x250 side banner (rendered at 50% size), Hebrew only, persistent on scroll
export const BannerAd = ({ lang, className = '' }) => {
  // Show banner only in Hebrew
  if (lang !== 'he') return null;

  return (
    <section
      className={`
        hidden lg:block
        fixed z-40
        top-24 right-8
        ${className}
      `}
      aria-label="Easily AI side banner"
    >
      <div className="w-[150px] h-[125px] rounded-2xl shadow-md bg-white/80 border border-gray-200/70 backdrop-blur-sm overflow-hidden">
        <img
          src="/reserve/300×250_ben.jpg"
          alt="Easily AI promotional banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

