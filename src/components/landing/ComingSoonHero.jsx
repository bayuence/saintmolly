import React, { useEffect, useRef } from 'react';
import { FONT_PRESETS, ACTIVE_PRESET } from '../../constants/typography';

export default function ComingSoonHero({ preset = ACTIVE_PRESET }) {
  const currentFont = FONT_PRESETS[preset] || FONT_PRESETS['avant-garde'];
  const headlineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fitText = () => {
      const el = headlineRef.current;
      const container = containerRef.current;
      if (!el || !container) return;

      // Reset dulu ke ukuran maksimal
      el.style.fontSize = '72px';

      // Kurangi ukuran font sampai teks pas dalam container
      while (el.scrollWidth > container.clientWidth && parseFloat(el.style.fontSize) > 10) {
        el.style.fontSize = (parseFloat(el.style.fontSize) - 1) + 'px';
      }
    };

    fitText();
    window.addEventListener('resize', fitText);
    return () => window.removeEventListener('resize', fitText);
  }, []);

  return (
    <main
      className="w-screen bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ minHeight: '100dvh' }}
      role="main"
      aria-label="SAINTMOLLY.COM Coming Soon"
    >
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center text-center w-full px-6 gap-3 md:gap-5"
        style={{ maxWidth: '100%' }}
      >
        {/* Pre-title: WELCOME */}
        <p
          className="font-space text-[11px] md:text-[13px] uppercase text-[#A3A3A3] tracking-[0.45em] pl-[0.45em] whitespace-nowrap"
          aria-label="Welcome"
        >
          WELCOME
        </p>

        {/* Brand Headline: auto-fit, tidak akan pernah terpotong */}
        <h1
          ref={headlineRef}
          className={`${currentFont.className} uppercase text-[#FFFFFF] leading-none whitespace-nowrap`}
          style={{ display: 'block', width: '100%', textAlign: 'center' }}
        >
          SAINTMOLLY.COM
        </h1>

        {/* Status: COMING SOON */}
        <p
          className="font-space text-[9px] md:text-[11px] uppercase text-[#737373] tracking-[0.55em] pl-[0.55em] whitespace-nowrap"
          aria-label="Coming Soon"
        >
          COMING SOON
        </p>
      </div>
    </main>
  );
}
