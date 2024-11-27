// pages/contacto.tsx (ejemplo)
"use client";  // Asegura que este archivo solo se ejecute en el cliente

import { useTheme } from "@/context/ThemeContext";  // Obtener el contexto de tema
import Navbar from "../src/components/Navbar";  // Corrección en la ruta

const Page = () => {
  const { theme } = useTheme(); // Obtiene el tema actual del contexto

  return (
    // Aplicar el tema al cuerpo de la página con soporte para cookies
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Navbar adaptado al tema */}
      <Navbar />
      
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">[Contacto]</h1>
        <p className="mt-4">Contenido próximamente...</p>
      </div>
    </div>
  );
};

export default Page;
