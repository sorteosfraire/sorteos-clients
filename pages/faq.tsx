"use client";

import { useTheme } from "@/context/ThemeContext";  // Obtener el contexto de tema
import Navbar from "../src/components/Navbar";

const FAQPage = () => {
  const { theme } = useTheme();  // Obtiene el tema actual del contexto

  return (
    // Aplicar el tema al cuerpo de la página
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Navbar adaptado al tema */}
      <Navbar />
      
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Preguntas Frecuentes</h1>
        <p className="mt-4">Aquí encontrarás las preguntas más comunes...</p>
      </div>
    </div>
  );
};

export default FAQPage;
