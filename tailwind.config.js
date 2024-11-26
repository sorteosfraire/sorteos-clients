// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activa el soporte para el modo oscuro basado en clases
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personalización de colores para temas claros y oscuros
        light: {
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          background: "#1a1a1a",
          text: "#f5f5f5",
        },
      },
      transitionProperty: {
        // Añade transiciones para cambios de tema
        'theme': 'background-color, color, border-color',
      },
    },
  },
  plugins: [],
};
