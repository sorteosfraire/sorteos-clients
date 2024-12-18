// src/context/ThemeContext.tsx
"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

// Define el tipo de tema posible
type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

type ThemeAction = { type: "TOGGLE_THEME" } | { type: "SET_THEME"; payload: Theme };

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    const savedTheme = Cookies.get("theme") as Theme | undefined;
    if (savedTheme) {
      dispatch({ type: "SET_THEME", payload: savedTheme });
    } else {
      Cookies.set("theme", "light", { expires: 365 });
    }
  }, []);

  useEffect(() => {
    Cookies.set("theme", theme, { expires: 365 });
  }, [theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>
        {children}
      </div>
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
