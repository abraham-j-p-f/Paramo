"use client";

import { useContext } from "react";
import { DarkContext } from "./_context/styleColor";

export default function Body({ children }) {
  let { isDark } = useContext(DarkContext);
  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } selection:text-paramo-black selection:bg-paramo-yellow`}
    >
      {children}
    </div>
  );
}
