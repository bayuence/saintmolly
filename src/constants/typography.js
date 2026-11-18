/**
 * Typography presets based on PRD Section 3.2
 * Allows switching or configuring the brand headline font identity:
 * - 'avant-garde': Syne (Extra Bold, modern & artistik)
 * - 'editorial': Cinzel (Medium, klasik & premium)
 * - 'industrial': Oswald (SemiBold, tegas & maskulin)
 */

export const FONT_PRESETS = {
  'avant-garde': {
    name: 'Avant-Garde',
    className: 'font-syne font-extrabold tracking-tight',
    description: 'Syne (Extra Bold, modern & artistik)',
  },
  'editorial': {
    name: 'Editorial Luxury',
    className: 'font-cinzel font-medium tracking-normal',
    description: 'Cinzel (Medium, klasik & premium)',
  },
  'industrial': {
    name: 'Bold Industrial',
    className: 'font-oswald font-semibold tracking-wide',
    description: 'Oswald (SemiBold, tegas & maskulin)',
  },
};

// Default chosen preset for Phase 1
export const ACTIVE_PRESET = 'avant-garde';
