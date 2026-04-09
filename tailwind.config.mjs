/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          carbon:   '#1A1A1A',
          charcoal: '#222222',
          dark:     '#141414',
          steel:    '#2E2E2E',
          mid:      '#3A3A3A',
          silver:   '#B0B0B0',
          light:    '#E8E8E8',
          white:    '#F5F5F5',
          orange:   '#FF8C00',
          orangeHover: '#E67E00',
          orangeDim:   '#CC7000',
          muted:    '#888888',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        body:    ['"DM Sans"', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp .65s ease forwards',
        'fade-in':    'fadeIn .5s ease forwards',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'bolt':       'boltFlash 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:'0', transform:'translateY(28px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        pulseGlow: { '0%,100%':{ boxShadow:'0 0 0 0 rgba(255,140,0,.4)' }, '50%':{ boxShadow:'0 0 0 18px rgba(255,140,0,0)' } },
        boltFlash: { '0%,100%':{ filter:'drop-shadow(0 0 2px rgba(255,140,0,.6))' }, '50%':{ filter:'drop-shadow(0 0 10px rgba(255,140,0,1))' } },
      },
    },
  },
  plugins: [],
}
