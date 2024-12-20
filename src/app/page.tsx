"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Grid from "../components/Grid";
import { useTheme } from "@/context/ThemeContext"; // Importar el hook del contexto de tema
import Cookies from "js-cookie"; // Importar Cookies

// Definir los items para las rifas vigentes
const rifasVigentes = [
  {
    id: 1,
    image: "/images/premio1.jpg", 
    title: "Gran Premio Especial",
    description: "¡Participa en nuestra rifa especial con premios increíbles!"
  },
  {
    id: 2,
    image: "/images/carro.jpg",
    title: "Auto Último Modelo",
    description: "¡Gana este increíble automóvil 2024!"
  },
  {
    id: 3, 
    image: "/images/television.jpg",
    title: "Smart TV 75\"",
    description: "Pantalla LED 4K UHD Smart TV de última generación"
  }
];

// Definir los items para los ganadores recientes
const ganadoresRecientes = [
  {
    id: 1,
    image: "/images/Win-TV.webp",
    title: "Juan Pérez",
    description: "¡Ganador de la TV de esta semana!"
  },
  {
    id: 2,
    image: "/images/Win-Car.webp", 
    title: "Manuel García",
    description: "¡Ganador del auto del mes!"
  }
];

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
    <div className={`min-h-screen pt-20 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Navbar />
      
      <main className="container mx-auto px-4">
        {/* Rifas Vigentes */}
        <section className="mt-auto mx-auto">
          <div className="w-full max-w-full">
            <Slide 
              title="Rifas Actuales" 
              items={rifasVigentes}
              height="h-48 md:h-96"
              autoPlay={true}
              interval={6000}
            />
          </div>
        </section>

        {/* Ganadores Recientes */}
        <section className="mt-3.5 mx-auto">
          <div className="w-full max-w-full">
            <Slide 
              title="Últimos Ganadores" 
              items={ganadoresRecientes}
              height="h-40 md:h-80"
              autoPlay={true}
              interval={4000}
            />
          </div>
        </section>

        {/* Premios Entregados */}
        <section className="mt-8 md:mt-16 mb-8">
          <h2 className={`text-xl md:text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Premios Entregados
          </h2>
          <Grid />
        </section>
      </main>
    </div>
  );
}