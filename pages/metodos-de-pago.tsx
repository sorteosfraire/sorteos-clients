"use client";

import { useTheme } from "@/context/ThemeContext"; // Obtiene el tema
import Navbar from "../src/components/Navbar"; // Obtiene Navbar
import Card from "../src/components/Card"; // Obtiene el componente de tarjeta

const Page = () => {
  const { theme } = useTheme(); // Obtiene el tema actual del contexto

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Navbar adaptado al tema */}
      <Navbar />

      {/* Contenedor principal */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Información de Cuentas Bancarias</h1>

        {/* Sección de tarjetas */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta 1 */}
          <Card
            title="Cuenta BBVA"
            textToCopy="8546 8546 3214 58465"
          />
          {/* Tarjeta 2 */}
          <Card
            title="Cuenta Santander"
            textToCopy="4512 8745 9652 1234"
          />
          {/* Tarjeta 3 */}
          <Card
            title="Cuenta Banorte"
            textToCopy="7845 6523 2145 9854"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
