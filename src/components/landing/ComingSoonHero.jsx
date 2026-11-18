import React from 'react';

/**
 * ComingSoonHero Component
 * 
 * Desain Baru:
 * - Background putih tulang bertekstur & noise lembut (#f6f4ee)
 * - Logo vdsav.png presisi di tengah layar (vertikal & horizontal)
 * - Responsif di semua device (mobile, tablet, desktop) tanpa terpotong
 */
export default function ComingSoonHero() {
  return (
    <main
      className="bone-white-textured min-h-screen min-h-[100dvh] w-full flex items-center justify-center p-6 sm:p-10 select-none overflow-hidden"
      role="main"
      aria-label="SAINT MOLLY"
    >
      <div className="flex items-center justify-center w-full max-w-xl">
        <img
          src="/vdsav.png"
          alt="Saint Molly"
          className="w-auto h-auto max-w-[85vw] max-h-[75vh] sm:max-w-[480px] sm:max-h-[70vh] object-contain drop-shadow-sm pointer-events-none"
          loading="eager"
          decoding="async"
        />
      </div>
    </main>
  );
}
