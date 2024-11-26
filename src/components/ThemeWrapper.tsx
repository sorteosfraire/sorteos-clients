"use client";

import { useTheme } from "@/context/ThemeContext";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
