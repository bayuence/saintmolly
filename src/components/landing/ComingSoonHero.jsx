import React from 'react';
import { FONT_PRESETS, ACTIVE_PRESET } from '../../constants/typography';

/**
 * ComingSoonHero Component
 * 
 * 100% Fluid Responsive & Centered:
 * - Menggunakan min-h-[100dvh] untuk akurasi dynamic viewport mobile browser (Safari/Chrome bar).
 * - Ukuran headline menggunakan clamp() fluid typography (clamp(1.25rem, 6.8vw, 4.5rem))
 *   dan max-w-full break-words sehingga tidak akan pernah terpotong di layar sekecil apapun (iPhone SE / 320px).
 * - Full semantic SEO tags dengan structured schema & accessibility.
 */
export default function ComingSoonHero({ preset = ACTIVE_PRESET }) {
  const currentFont = FONT_PRESETS[preset] || FONT_PRESETS['avant-garde'];

  return (
    <main
      className="min-h-screen min-h-[100dvh] w-full bg-[#000000] flex flex-col items-center justify-center px-4 sm:px-6 py-8 select-none overflow-hidden"
      role="main"
      aria-label="SAINTMOLLY.COM Coming Soon"
    >
      <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
        {/* Pre-title */}
        <p
          className="font-space text-[11px] sm:text-xs md:text-sm uppercase text-[#A3A3A3] tracking-[0.35em] sm:tracking-[0.45em] pl-[0.35em] sm:pl-[0.45em] whitespace-nowrap"
          aria-label="Welcome"
        >
          WELCOME
        </p>

        {/* Brand Headline - 100% Fluid clamp, anti terpotong di semua resolusi */}
        <div className="w-full flex justify-center items-center px-2">
          <h1
            className={`${currentFont.className} text-[clamp(1.25rem,6.8vw,4.5rem)] leading-tight uppercase text-[#FFFFFF] max-w-full tracking-normal text-center break-normal`}
            style={{ wordBreak: 'keep-all' }}
          >
            SAINTMOLLY.COM
          </h1>
        </div>

        {/* Status Subtitle */}
        <p
          className="font-space text-[9px] sm:text-[10px] md:text-[12px] uppercase text-[#737373] tracking-[0.4em] sm:tracking-[0.55em] pl-[0.4em] sm:pl-[0.55em] whitespace-nowrap"
          aria-label="Coming Soon"
        >
          COMING SOON
        </p>
      </div>
    </main>
  );
}
