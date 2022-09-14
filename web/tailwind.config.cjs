/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/assets/bg-galaxy.png')",
        duoGradient: 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%)',
        gameGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}