"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

export interface SlideItem {
  id: number | string;
  image: string;
  title: string;
  description?: string;
}

interface SlideProps {
  title: string;
  items: SlideItem[];
  height?: string;
  autoPlay?: boolean;
  interval?: number;
}

const Slide: React.FC<SlideProps> = ({ 
  title, 
  items, 
  height = "h-60",
  autoPlay = false,
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Efecto para autoplay si está habilitado
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="relative w-full">
      <h3 className={`text-xl font-bold mb-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
        {title}
      </h3>

      <div className="overflow-hidden rounded-lg relative">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className={`w-full ${height} object-cover transition-transform duration-500`}
        />
        
        {items[currentIndex].description && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <p>{items[currentIndex].description}</p>
          </div>
        )}
      </div>

      {items.length > 1 && (
        <>
          <button
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full 
              ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
              hover:opacity-75 transition-opacity`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            {"<"}
          </button>

          <button 
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full
              ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
              hover:opacity-75 transition-opacity`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            {">"}
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors
                  ${idx === currentIndex 
                    ? "bg-white" 
                    : "bg-white/50"}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slide;
