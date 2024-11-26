"use client";

import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Grid from "../components/Grid";
import { useTheme } from "@/context/ThemeContext"; // Importar el hook del contexto de tema

export default function Page() {
  const { isDarkMode } = useTheme(); // Obtener el estado del tema

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Sección de Rifas Vigentes (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Rifas Vigentes</h2>
        <Slide title="Rifas Actuales" />
      </section>

      {/* Sección de Ganadores (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Ganadores Recientes</h2>
        <Slide title="Últimos Ganadores" />
      </section>

      {/* Cuadricula de Premios Entregados */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Premios Entregados</h2>
        <Grid />
      </section>
    </div>
  );
}
