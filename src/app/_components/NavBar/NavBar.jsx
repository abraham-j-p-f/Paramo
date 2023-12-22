"use client";

import Link from "next/link";
import { useState } from "react";

import { useContext } from "react";
import { DarkContext } from "@/app/_context/styleColor";

import Logo from "./paramo";
import Palette from "./palette";

function Line({ up }) {
  const position = up ? "border-t-4" : "border-b-4";
  return (
    <div
      className={`hidden sm:flex flex-1 border-paramo-black dark:border-white ${position}`}
    ></div>
  );
}

function Li({ children, href, className }) {
  return (
    <li>
      <Link
        className={`border-b-2 border-white hover:border-paramo-black dark:border-paramo-black dark:hover:border-white ${className}`}
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  );
}

export default function NavBar() {
  const [state, setState] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);
  let { isDark, setIsDark } = useContext(DarkContext);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeState = () => {
    setState(!state);
  };

  let firstLine = state
    ? "bg-paramo-black w-full h-1 rounded-full absolute left-0 top-1/2 rotate-45 -translate-y-1/2"
    : "bg-paramo-black w-full h-1 rounded-full absolute left-0 top-0";
  let scondLine = state
    ? ""
    : "bg-paramo-black w-full h-1 rounded-full absolute -right-1 top-1/2 -translate-y-1/2";
  let tirthLine = state
    ? "bg-paramo-black w-full h-1 rounded-full absolute left-0 top-1/2 -rotate-45 -translate-y-1/2"
    : "bg-paramo-black w-full h-1 rounded-full absolute left-0 bottom-0";

  return (
    <header className="w-full flex justify-center relative">
      <Line />
      <div className="container border-b-4 border-paramo-black text-paramo-black dark:border-white dark:text-white flex justify-between items-center pl-4 pr-4 sm:pl-8 sm:pr-8 xl:pr-0">
        <Link
          href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          target="_blank"
          className="flex items-center mr-0 sm:mr-16 gap-8 py-4"
        >
          <Logo
            className="h-20 w-20"
            primary={isDark ? "#131313" : "white"}
            secondary={isDark ? "white" : "#131313"}
          />
          <h1 className="text-[35.54px] font-vietnam font-semibold hidden sm:block">
            Universidad <br /> Páramo
          </h1>
        </Link>
        <div className="border-l-4 border-paramo-black dark:border-white flex-col flex-1 hidden xl:flex">
          <div className="p-6 border-b-4 border-paramo-black dark:border-white">
            <nav className="text-xl text-paramo-black dark:text-white">
              <ul className="flex space-x-8">
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Profesores
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Noticias
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Dirección
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Cursos
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Sedes
                </Li>
              </ul>
            </nav>
          </div>
          <div className="p-6">
            <nav className="text-xl text-paramo-black dark:text-white">
              <ul className="flex space-x-8">
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Universidad
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Estudios
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Investiación
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Alumnos
                </Li>
                <Li href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                  Comunidad
                </Li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className={
            "aspect-square h-12 py-4 px-[14px] flex xl:hidden transition-all cursor-pointer outline outline-4 outline-offset-0 outline-paramo-black bg-paramo-yellow dark:bg-white"
          }
          onClick={changeState}
        >
          <div className="relative flex flex-1">
            <div className={"transition-all " + firstLine}></div>
            <div className={"transition-all " + scondLine}></div>
            <div className={"transition-all " + tirthLine}></div>
          </div>
        </div>
      </div>
      <div className="flex-col flex-1 flex">
        <div className="h-1/2 border-b-4 border-paramo-black dark:border-white hidden xl:block"></div>
        <Line />
      </div>
      {/* <div
        className="absolute top-6 right-4"
        onClick={(e) => setThemeMenu(!themeMenu)}
      >
        <Palette className="fill-paramo-black dark:fill-white h-8 cursor-pointer"></Palette>
        <div
          className={`absolute bg-white dark:bg-paramo-black text-paramo-black dark:text-white right-0 top-[50px] w-40 border-4 border-paramo-black dark:border-white shadow-2xl ${
            themeMenu ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="p-2 font-bold">Modo</h1>
            <ul>
              <li
                className="p-2 text-sm border-t-4 border-paramo-black dark:border-white cursor-pointer"
                onClick={() => setIsDark(false)}
              >
                Claro
              </li>
              <li
                className="p-2 text-sm border-t-4 border-paramo-black dark:border-white cursor-pointer"
                onClick={() => setIsDark(true)}
              >
                Oscuro
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </header>
  );
}
