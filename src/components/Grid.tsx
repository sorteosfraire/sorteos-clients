"use client";

import { useTheme } from "@/context/ThemeContext";

const Grid = () => {
  const { isDarkMode } = useTheme();

  const premios = [
    { id: 1, nombre: "Bicicleta", imagen: "/images/premio1.jpg" },
    { id: 2, nombre: "Televisor", imagen: "/images/premio1.jpg" },
    { id: 3, nombre: "Laptop", imagen: "/images/premio1.jpg" },
    { id: 4, nombre: "Teléfono", imagen: "/images/premio1.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {premios.map((premio) => (
        <div
          key={premio.id}
          className={`rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <img
            src={premio.imagen}
            alt={premio.nombre}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{premio.nombre}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
