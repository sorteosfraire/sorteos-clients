// src/context/ThemeContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

// Define el tipo de tema posible
type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // Verifica si hay un tema guardado en las cookies
    const savedTheme = Cookies.get("theme") as Theme | undefined;

    // Si hay un tema guardado, configúralo
    if (savedTheme) {
      setThemeState(savedTheme);
      document.body.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Si no hay tema guardado, usa el tema claro por defecto
      setThemeState("light");
      Cookies.set("theme", "light", { expires: 365 });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto de tema
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
