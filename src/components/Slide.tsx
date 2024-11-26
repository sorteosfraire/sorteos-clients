"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

type SlideProps = {
  title: string;
};

const Slide: React.FC<SlideProps> = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDarkMode } = useTheme(); // Usamos el contexto del tema

  const items = [
    { id: 1, image: "/rifas/1.jpg", title: "Rifa 1" },
    { id: 2, image: "/rifas/2.jpg", title: "Rifa 2" },
    { id: 3, image: "/rifas/3.jpg", title: "Rifa 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full">
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        {title}
      </h3>
      <div className="overflow-hidden rounded-lg">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full h-60 object-cover"
        />
      </div>
      <div
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full cursor-pointer ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={prevSlide}
      >
        {"<"}
      </div>
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full cursor-pointer ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={nextSlide}
      >
        {">"}
      </div>
    </div>
  );
};

export default Slide;
