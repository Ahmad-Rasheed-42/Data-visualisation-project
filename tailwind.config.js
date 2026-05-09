export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magical: {
          dark: '#050a15', // Deep night-sky blue
          midnight: '#0b132b',
          slytherin: '#1a472a', // Slytherin green
          gold: '#d4af37', // Gryffindor gold
          parchment: '#f0e6d2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(212, 175, 55, 0.5)',
        glowHover: '0 0 25px rgba(212, 175, 55, 0.8)',
      }
    },
  },
  plugins: [],
}
