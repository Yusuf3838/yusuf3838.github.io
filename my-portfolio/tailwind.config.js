/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
        'neon-purple': '#b026ff',
        'dark': '#0a0a0a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff' },
          '100%': { textShadow: '0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff' },
        },
      },
    },
  },
  plugins: [],
}


