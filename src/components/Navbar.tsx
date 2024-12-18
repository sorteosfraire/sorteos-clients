"use client"; // Asegura que este archivo solo se ejecute en el cliente

import Link from "next/link"; // Importar el componente Link de Next.js para navegación
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext"; // Importar el hook de contexto

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Obtener el estado del tema y la función para cambiarlo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white border-b border-white/10"
          : "bg-white text-black"
      } shadow-md py-4 transition-colors fixed w-full top-0 z-50`} // Aplicar clases dinámicamente según el tema
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo con enlace a la página principal */}
        <Link href="/" className="text-2xl font-bold">
          MiLogo
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Navigation links */}
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/faq"
                className={`block px-4 py-2 rounded-md transition ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className={`block px-4 py-2 rounded-md transition ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/metodos-de-pago"
                className={`block px-4 py-2 rounded-md transition ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                Métodos de Pago
              </Link>
            </li>
          </ul>

          {/* Theme toggle button */}
          <div
            className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer select-none ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={toggleTheme}
            onMouseDown={(e) => e.preventDefault()}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
            <span
              className={`absolute left-2 ${
                theme === "dark" ? "hidden" : "block"
              } text-yellow-500`}
            >
              ☀️
            </span>
            <span
              className={`absolute right-2 ${
                theme === "dark" ? "block" : "hidden"
              } text-gray-300`}
            >
              🌙
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <div className={`
          lg:hidden fixed inset-0 top-16 bg-black bg-opacity-50 transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <div className={`
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}
            absolute right-0 top-0 h-screen w-64 shadow-lg transform transition-transform duration-300
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <ul className="pt-4 space-y-4">
              <li>
                <Link
                  href="/faq"
                  className="block px-6 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block px-6 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/metodos-de-pago"
                  className="block px-6 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Métodos de Pago
                </Link>
              </li>
              {/* Agregamos el switch de tema al menú móvil */}
              <li className="px-6 py-2">
                <div
                  className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer select-none ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
                  onClick={toggleTheme}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                      theme === "dark" ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                  <span
                    className={`absolute left-2 ${
                      theme === "dark" ? "hidden" : "block"
                    } text-yellow-500`}
                  >
                    ☀️
                  </span>
                  <span
                    className={`absolute right-2 ${
                      theme === "dark" ? "block" : "hidden"
                    } text-gray-300`}
                  >
                    🌙
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
