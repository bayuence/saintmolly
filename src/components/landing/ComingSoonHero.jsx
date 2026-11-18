import React, { useEffect, useRef } from 'react';
import { FONT_PRESETS, ACTIVE_PRESET } from '../../constants/typography';

export default function ComingSoonHero({ preset = ACTIVE_PRESET }) {
  const currentFont = FONT_PRESETS[preset] || FONT_PRESETS['avant-garde'];
  const headlineRef = useRef(null);

  useEffect(() => {
    const fitText = () => {
      const el = headlineRef.current;
      if (!el) return;

      // Ukur batas yang tersedia: lebar viewport dikurangi safe padding
      const maxWidth = window.innerWidth - 48; // 24px kiri + 24px kanan

      // Mulai dari ukuran besar, turunkan sampai benar-benar muat
      let size = 120;
      el.style.fontSize = size + 'px';

      while (el.scrollWidth > maxWidth && size > 8) {
        size -= 0.5;
        el.style.fontSize = size + 'px';
      }
    };

    // Jalankan setelah font Google Fonts benar-benar load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitText);
    } else {
      // Fallback jika fonts.ready tidak tersedia
      setTimeout(fitText, 300);
    }

    window.addEventListener('resize', fitText);
    return () => window.removeEventListener('resize', fitText);
  }, []);

  return (
    <main
      className="bg-[#000000] flex flex-col items-center justify-center select-none"
      style={{ minHeight: '100dvh', width: '100vw', overflow: 'hidden' }}
      role="main"
      aria-label="SAINTMOLLY.COM Coming Soon"
    >
      <div className="flex flex-col items-center justify-center text-center gap-3 md:gap-5 w-full">

        {/* Pre-title */}
        <p
          className="font-space text-[11px] md:text-[13px] uppercase text-[#A3A3A3] tracking-[0.45em] pl-[0.45em] whitespace-nowrap"
          aria-label="Welcome"
        >
          WELCOME
        </p>

        {/* Brand Headline — auto-fit setelah font load */}
        <h1
          ref={headlineRef}
          className={`${currentFont.className} uppercase text-[#FFFFFF] leading-none whitespace-nowrap`}
          style={{ fontSize: '1px', display: 'block', textAlign: 'center' }}
        >
          SAINTMOLLY.COM
        </h1>

        {/* Status Subtitle */}
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
