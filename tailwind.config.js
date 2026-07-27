/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 45px rgba(86, 241, 255, 0.16)',
        panel: '0 24px 80px rgba(0,0,0,.35)'
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite',
        pulseSlow: 'pulse 4s ease-in-out infinite'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
};
