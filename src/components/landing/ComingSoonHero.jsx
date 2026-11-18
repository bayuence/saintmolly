import React from 'react';
import { FONT_PRESETS, ACTIVE_PRESET } from '../../constants/typography';

/**
 * ComingSoonHero Component
 * 
 * Ultra-minimalist centered teaser screen according to PRD Section 3:
 * - Canvas: Pure Black (#000000), 100% min-h-screen, centered flexbox
 * - Top Line (Pre-title): WELCOME (#A3A3A3, uppercase, 12-14px, wide letter-spacing)
 * - Main Line (Brand Headline): SAINTMOLLY.COM (#FFFFFF, uppercase, 30px to 72px)
 * - Bottom Line (Status Subtitle): COMING SOON (#737373, uppercase, 10-12px, extra wide letter-spacing)
 */
export default function ComingSoonHero({ preset = ACTIVE_PRESET }) {
  const currentFont = FONT_PRESETS[preset] || FONT_PRESETS['avant-garde'];

  return (
    <main
      className="min-h-screen w-full bg-[#000000] flex flex-col items-center justify-center px-6 select-none"
      role="main"
      aria-label="Saint Molly Coming Soon"
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 max-w-4xl">
        {/* Pre-title */}
        <p
          className="font-space text-xs md:text-sm uppercase text-[#A3A3A3] tracking-[0.45em] pl-[0.45em]"
          aria-label="Welcome"
        >
          WELCOME
        </p>

        {/* Brand Headline */}
        <h1
          className={`${currentFont.className} text-[30px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-none uppercase text-[#FFFFFF]`}
        >
          SAINTMOLLY.COM
        </h1>

        {/* Status Subtitle */}
        <p
          className="font-space text-[10px] md:text-[12px] uppercase text-[#737373] tracking-[0.55em] pl-[0.55em]"
          aria-label="Coming Soon"
        >
          COMING SOON
        </p>
      </div>
    </main>
  );
}
