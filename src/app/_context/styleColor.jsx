"use client";

import { createContext, useState } from "react";

export const DarkContext = createContext();
export const ColorThemeContext = createContext();

export default function Theme({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [color, setIsColor] = useState("yellow");

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      <ColorThemeContext.Provider value={{ color, setIsColor }}>
        {children}
      </ColorThemeContext.Provider>
    </DarkContext.Provider>
  );
}
