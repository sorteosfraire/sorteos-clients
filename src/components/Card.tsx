"use client";

import { useTheme } from "@/context/ThemeContext"; // Importa el hook del contexto
import { useState } from "react";

interface CardProps {
  title: string; // Título de la tarjeta
  textToCopy: string; // Texto que será copiado
}

const Card: React.FC<CardProps> = ({ title, textToCopy }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const [copied, setCopied] = useState(false); // Estado para mostrar mensaje de copiado

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy); // Copiar el texto al portapapeles
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Mostrar el mensaje por 2 segundos
  };

  return (
    <div
      className={`p-8 rounded-lg shadow-lg max-w-md mx-auto transition-theme border cursor-pointer ${
        theme === "dark"
          ? "bg-dark-cardBg text-dark-cardText border-dark-cardBg"
          : "bg-light-cardBg text-light-cardText border-light-cardBg"
      }`}
      onClick={handleCopy} // Copiar texto al hacer clic
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{textToCopy}</p>
      {copied && (
        <p className="mt-4 text-green-500 font-semibold">
          ¡Texto copiado al portapapeles!
        </p>
      )}
    </div>
  );
};

export default Card;
