"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext"; // Usar el hook de contexto

type SlideProps = {
  title: string;
};

const Slide: React.FC<SlideProps> = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme(); // Obtener el tema actual desde el contexto

  const items = [
    { id: 1, image: "/images/premio1.jpg", title: "Rifa 1" },
    { id: 2, image: "/images/carro.jpg", title: "Rifa 2" },
    { id: 3, image: "/images/television.jpg", title: "Rifa 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full">
      {/* Título del slider */}
      <h3
        className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {title}
      </h3>

      {/* Imagen del slide */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Botón izquierdo */}
      <div
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full cursor-pointer ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}
        onClick={prevSlide}
      >
        {"<"}
      </div>

      {/* Botón derecho */}
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full cursor-pointer ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}
        onClick={nextSlide}
      >
        {">"}
      </div>
    </div>
  );
};

export default Slide;
