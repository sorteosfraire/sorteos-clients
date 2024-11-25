"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            MiLogo
          </Link>
        </div>

        {/* Menu button for mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
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
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-blue-700 md:static md:flex md:space-x-8 md:bg-transparent md:text-white`}
        >
          <li>
            <Link
              href="/faq"
              className="block px-4 py-2 text-lg hover:bg-blue-600 md:hover:bg-transparent md:hover:underline transition-all duration-300"
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="block px-4 py-2 text-lg hover:bg-blue-600 md:hover:bg-transparent md:hover:underline transition-all duration-300"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="/metodos-de-pago"
              className="block px-4 py-2 text-lg hover:bg-blue-600 md:hover:bg-transparent md:hover:underline transition-all duration-300"
            >
              Métodos de Pago
            </Link>
          </li>
          <li>
            <Link
              href="/verificador"
              className="block px-4 py-2 text-lg hover:bg-blue-600 md:hover:bg-transparent md:hover:underline transition-all duration-300"
            >
              Verificador de Boletos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
