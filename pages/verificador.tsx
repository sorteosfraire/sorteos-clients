"use client";

import { useTheme } from "@/context/ThemeContext";  // Obtener el contexto de tema
import Navbar from "../src/components/Navbar";  // Corrección en la ruta

const Page = () => {
  const { theme } = useTheme();  // Obtiene el tema actual del contexto

  return (
    // Aplicar el tema al cuerpo de la página
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      {/* Navbar adaptado al tema */}
      <Navbar />
      
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Verifica tu Boleto</h1>
        <p className="mt-4">Contenido próximamente...</p>
      </div>
    </div>
  );
};

export default Page;
