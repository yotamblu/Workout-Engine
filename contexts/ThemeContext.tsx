"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const savedTheme = localStorage.getItem("theme");
    let initialTheme: Theme = "light";
    
    if (savedTheme === "light" || savedTheme === "dark") {
      initialTheme = savedTheme;
    } else {
      // Default to light, save it
      localStorage.setItem("theme", "light");
    }
    
    setTheme(initialTheme);
    setMounted(true);
    
    // Force apply initial theme to HTML (ensure dark is removed if light)
    const html = document.documentElement;
    html.classList.remove("dark"); // Always remove first
    if (initialTheme === "dark") {
      html.classList.add("dark");
    }
  }, []);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    
    // Update HTML class - force remove/add to ensure it works
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    
    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Always provide the context, even before mounting
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

