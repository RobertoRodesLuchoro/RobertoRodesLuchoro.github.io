/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Los colores viven como canales RGB en global.css para que Tailwind
      // pueda seguir aplicando opacidad (bg-accent/10, text-ink/60...).
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        elevated: 'rgb(var(--c-elevated) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Sora Variable', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'ui-monospace', 'monospace'],
        /* Wordmark del logo: condensada y pesada al estilo de la referencia. */
        display: ['Anton', 'Sora Variable', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala fluida: un token sirve de móvil a desktop, sin sobrescrituras.
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'display-xl': ['clamp(2.75rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 6.5vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.875rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        lead: ['clamp(1.125rem, 1.6vw, 1.375rem)', { lineHeight: '1.6' }],
        body: ['1.0625rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        shell: '80rem',
        prose: '38rem',
      },
      spacing: {
        section: 'clamp(6rem, 14vw, 12rem)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [],
};
