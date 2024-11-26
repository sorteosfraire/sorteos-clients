// components/Navbar.tsx
"use client";  // Asegura que este archivo solo se ejecute en el cliente

import { useTheme } from "@/context/ThemeContext"; // Importar el hook de contexto

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Obtener el estado del tema y la función para cambiarlo

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md py-4 transition-colors`} // Aplicar clases dinámicamente según el tema
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">MiLogo</div>

        {/* Menú móvil */}
        <button className="block md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } md:flex space-x-6 absolute md:static top-full left-0 w-full md:bg-transparent md:w-auto md:flex-row`}
        >
          <li>
            <a
              href="/faq"
              className={`block px-4 py-2 rounded-md transition ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            >
              Preguntas Frecuentes
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className={`block px-4 py-2 rounded-md transition ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="/metodos-de-pago"
              className={`block px-4 py-2 rounded-md transition ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            >
              Métodos de Pago
            </a>
          </li>
        </ul>

        {/* Botón de cambio de tema */}
        <div className="ml-auto flex items-center">
          <div
            className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
              theme === "dark" ? "bg-gray-600" : "bg-gray-300"
            }`}
            onClick={toggleTheme}
            onMouseDown={(e) => e.preventDefault()} // Elimina el punto de inserción
          >
            {/* Deslizante */}
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
            {/* Íconos */}
            <span
              className={`absolute left-2 ${theme === "dark" ? "hidden" : "block"} text-yellow-500`}
            >
              ☀️
            </span>
            <span
              className={`absolute right-2 ${theme === "dark" ? "block" : "hidden"} text-gray-300`}
            >
              🌙
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
