import React from 'react';
import { FONT_PRESETS, ACTIVE_PRESET } from '../../constants/typography';

export default function ComingSoonHero({ preset = ACTIVE_PRESET }) {
  const currentFont = FONT_PRESETS[preset] || FONT_PRESETS['avant-garde'];

  return (
    <main
      className="w-screen bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ minHeight: '100dvh' }}
      role="main"
      aria-label="SAINTMOLLY.COM Coming Soon"
    >
      <div className="flex flex-col items-center justify-center text-center w-full px-4 gap-3 md:gap-5">

        {/* Pre-title: WELCOME */}
        <p
          className="font-space uppercase text-[#A3A3A3] tracking-[0.45em] pl-[0.45em]"
          style={{ fontSize: 'clamp(9px, 1.8vw, 13px)' }}
          aria-label="Welcome"
        >
          WELCOME
        </p>

        {/* Brand Headline: SAINTMOLLY.COM
            clamp batas atas 8.5vw — aman untuk 320px hingga 1920px,
            tidak akan pernah overflow horizontal */}
        <h1
          className={`${currentFont.className} uppercase text-[#FFFFFF] leading-none w-full text-center`}
          style={{ fontSize: 'clamp(1.1rem, 8.5vw, 4.5rem)' }}
        >
          SAINTMOLLY.COM
        </h1>

        {/* Status: COMING SOON */}
        <p
          className="font-space uppercase text-[#737373] tracking-[0.55em] pl-[0.55em]"
          style={{ fontSize: 'clamp(8px, 1.5vw, 12px)' }}
          aria-label="Coming Soon"
        >
          COMING SOON
        </p>

      </div>
    </main>
  );
}
