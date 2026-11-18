import React from 'react';

/**
 * Teaser Page Saint Molly
 * - Efek putar ke kiri dan balik lagi tetap ada
 * - Logo ukuran besar (lebih besar dari tulisan)
 * - Jarak sangat mepet / rapat dengan tulisan LAYER.png (-mt-10 s/d -mt-16)
 * - HANYA DI LOKAL (TIDAK DI-PUSH)
 */
export default function ComingSoonHero() {
  return (
    <main
      className="bg-[#f8f8f8] min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-2 select-none overflow-hidden"
      role="main"
      aria-label="Saint Molly"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        
        {/* LOGO Besar dengan Efek Memutar Ke Kiri dan Balik Lagi */}
        <div className="perspective-container flex items-center justify-center z-10">
          <div className="spin-yoyo-anim">
            <img
              src="/LOGO.png"
              alt="Saint Molly Logo"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain pointer-events-none drop-shadow-md"
              loading="eager"
            />
          </div>
        </div>

        {/* LAYER.png Ditarik Sangat Mepet ke Bawah Logo */}
        <div className="flex items-center justify-center w-full max-h-[58vh] z-0 -mt-10 sm:-mt-14 md:-mt-16">
          <img
            src="/LAYER.png"
            alt="Saint Molly Teaser"
            className="w-auto h-auto max-w-full max-h-[52vh] sm:max-h-[54vh] object-contain pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </div>

      </div>
    </main>
  );
}
