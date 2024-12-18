"use client"; // Asegura que este archivo solo se ejecute en el cliente

import Link from "next/link"; // Importar el componente Link de Next.js para navegación
import { useTheme } from "@/context/ThemeContext"; // Importar el hook de contexto

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Obtener el estado del tema y la función para cambiarlo

  return (
    <nav
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white border-b border-white/10"
          : "bg-white text-black"
      } shadow-md py-4 transition-colors`} // Aplicar clases dinámicamente según el tema
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo con enlace a la página principal */}
        <Link href="/" className="text-2xl font-bold">
          MiLogo
        </Link>

        {/* Links centrados */}
        <ul className="flex-grow flex justify-center items-center space-x-8">
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

        {/* Botón de cambio de tema */}
        <div className="ml-auto flex items-center">
          <div
            className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer select-none ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={toggleTheme}
            onMouseDown={(e) => e.preventDefault()} // Evita el punto de inserción al interactuar
          >
            {/* Deslizante */}
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
            {/* Íconos */}
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
      </div>
    </nav>
  );
};

export default Navbar;
