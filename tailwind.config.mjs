/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          carbon:      '#111111',
          charcoal:    '#1A1A1A',
          dark:        '#0D0D0D',
          steel:       '#2A2A2A',
          mid:         '#383838',
          silver:      '#A8A8A8',
          light:       '#E0E0E0',
          white:       '#F4F4F4',
          orange:      '#FF8C00',
          orangeLight: '#FFA733',
          orangeDim:   '#CC7000',
          muted:       '#777777',
        },
      },
      fontFamily: {
        display: ['"Oswald"', '"Barlow Condensed"', 'sans-serif'],
        body:    ['"Inter"', '"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp .7s ease forwards',
        'fade-in':    'fadeIn .55s ease forwards',
        'pulse-glow': 'pulseGlow 2.8s ease-in-out infinite',
        'glow-btn':   'glowBtn 2.5s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:'0', transform:'translateY(32px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        pulseGlow: { '0%,100%':{ boxShadow:'0 0 0 0 rgba(255,140,0,.4)' }, '50%':{ boxShadow:'0 0 24px 6px rgba(255,140,0,.15)' } },
        glowBtn:   { '0%,100%':{ boxShadow:'0 0 12px rgba(255,140,0,.5), 0 4px 20px rgba(255,140,0,.25)' }, '50%':{ boxShadow:'0 0 28px rgba(255,140,0,.8), 0 4px 30px rgba(255,140,0,.4)' } },
        shimmer:   { from:{ backgroundPosition:'200% center' }, to:{ backgroundPosition:'-200% center' } },
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #FF8C00 100%)',
        'gradient-text':   'linear-gradient(90deg, #FF8C00, #FFD700, #FFA733)',
      },
    },
  },
  plugins: [],
}
