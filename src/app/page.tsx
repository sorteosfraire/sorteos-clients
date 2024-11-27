"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Grid from "../components/Grid";
import { useTheme } from "@/context/ThemeContext"; // Importar el hook del contexto de tema
import Cookies from "js-cookie"; // Importar Cookies

export default function Page() {
  const { theme, toggleTheme } = useTheme(); // Obtener el tema y la función para cambiarlo

  // Usar useEffect para sincronizar el tema con las cookies
  useEffect(() => {
    // Comprobar si hay un tema guardado en las cookies
    const savedTheme = Cookies.get("theme") as "light" | "dark" | undefined;
    if (savedTheme) {
      // Si existe, el tema ya se ha cargado desde el contexto
      // No necesitamos hacer nada más, ya que el contexto y las cookies están sincronizados
    } else {
      // Si no existe, guardar el tema por defecto ("light")
      Cookies.set("theme", "light", { expires: 365 });
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Sección de Rifas Vigentes (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Rifas Vigentes</h2>
        <Slide title="Rifas Actuales" />
      </section>

      {/* Sección de Ganadores (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Ganadores Recientes</h2>
        <Slide title="Últimos Ganadores" />
      </section>

      {/* Cuadricula de Premios Entregados */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Premios Entregados</h2>
        <Grid />
      </section>

      {/* Botón de cambio de tema (opcional si quieres incluirlo aquí también) */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-gray-500 text-white rounded-full"
      >
        Cambiar Tema
      </button>
    </div>
  );
}
