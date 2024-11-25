"use client";

import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Grid from "../components/Grid";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Sección de Rifas Vigentes (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Rifas Vigentes</h2>
        <Slide title="Rifas Actuales" />
      </section>

      {/* Sección de Ganadores (Slide) */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Ganadores Recientes</h2>
        <Slide title="Últimos Ganadores" />
      </section>

      {/* Cuadricula de Premios Entregados */}
      <section className="mt-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Premios Entregados</h2>
        <Grid />
      </section>
    </div>
  );
}
