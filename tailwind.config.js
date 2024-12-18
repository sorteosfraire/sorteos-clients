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
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      colors: {
        light: {
          background: "#ffffff", // Fondo general claro
          text: "#000000",       // Texto general claro
          cardBg: "#f9f9f9",     // Fondo específico de tarjeta
          cardText: "#1a1a1a",   // Texto específico de tarjeta
        },
        dark: {
          background: "#1a1a1a", // Fondo general oscuro
          text: "#f5f5f5",       // Texto general oscuro
          cardBg: "#2d2d2d",     // Fondo específico de tarjeta
          cardText: "#e0e0e0",   // Texto específico de tarjeta
        },
      },
      transitionProperty: {
        // Añade transiciones para cambios de tema
        theme: 'background-color, color, border-color',
      },
      spacing: {
        'navbar': '4rem', // altura del navbar
      },
    },
  },
  plugins: [],
};
