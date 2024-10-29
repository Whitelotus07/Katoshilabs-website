/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'deep-space': '#0a0a1f',
        'space-gray': '#1a1a2f',
      },
      animation: {
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      },
      keyframes: {
        'text-glow': {
          '0%, 100%': {
            textShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff',
          },
          '50%': {
            textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};