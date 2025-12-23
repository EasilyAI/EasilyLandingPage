import React from 'react';

export const Logo = ({ symbolOnly = false }) => {
  if (symbolOnly) {
    // Just the symbol (useful for mobile or compact views)
    return (
      <div className="flex items-center">
        <img 
          src="/symbol.png" 
          alt="Easily AI - AI Solutions for Business" 
          className="h-8 w-auto"
          loading="eager"
        />
      </div>
    );
  }

  // Full logo with symbol and company name
  // Symbol always on the left, even in RTL
  return (
    <div className="flex items-center gap-3" dir="ltr">
      <img 
        src="/symbol.png" 
        alt="" 
        aria-hidden="true"
        className="h-8 w-auto"
        loading="eager"
      />
      <img 
        src="/EASILYAI.png" 
        alt="Easily AI - AI Solutions for Business" 
        className="h-6 w-auto"
        loading="eager"
      />
    </div>
  );
};

