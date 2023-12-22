import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./NavBar/paramo";
import Link from "next/link";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function FooterList({ children, title }) {
  return (
    <div className="max-w-[256px] flex flex-none flex-col gap-4">
      <h3 className="text-[20px] md:text-[26.66px] font-bold">{title}</h3>
      <ul className="gap-4 flex flex-col md:text-[20px] text-[16px]">
        {children}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-paramo-black text-white">
      <div className="container px-8">
        <div className="w-full relative">
          <div className="w-full h-full flex flex-col py-8 gap-8 md:py-16 md:gap-16">
            <div className="flex justify-between flex-wrap gap-8">
              <div>
                <Link
                  href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                  target="_blank"
                  className="flex items-center mr-0 sm:mr-16 gap-8 py-4"
                >
                  <Logo className="h-20 w-20" />
                  <h1 className="text-[35.54px] font-vietnam font-semibold hidden sm:block">
                    Universidad <br /> Páramo
                  </h1>
                </Link>
              </div>
              <div className="flex gap-8 flex-wrap">
                <FooterList title={"Universidad"}>
                  <a href="#">
                    <li>Nosotros</li>
                  </a>
                  <a href="#">
                    <li>Campus</li>
                  </a>
                  <a href="#">
                    <li>Ofertas laborales</li>
                  </a>
                </FooterList>
                <FooterList title={"Estudios"}>
                  <a href="#">
                    <li>Estudios en línea</li>
                  </a>
                  <a href="#">
                    <li>Estudios Pregrado</li>
                  </a>
                  <a href="#">
                    <li>Estudios Postgrado</li>
                  </a>
                </FooterList>
                <FooterList title={"Recursos"}>
                  <a href="#">
                    <li>Modelos de exámenes de admisión</li>
                  </a>
                  <a href="#">
                    <li>Guías de estudio</li>
                  </a>
                  <a href="#">
                    <li>Tienda en línea</li>
                  </a>
                </FooterList>
                <FooterList title={"Admisión"}>
                  <a href="#">
                    <li>Proceso de admisión</li>
                  </a>
                  <a href="#">
                    <li>Becas</li>
                  </a>
                </FooterList>
              </div>
            </div>
            <div className="h-1 w-full bg-[#1F1F1F]"></div>
            <div className="flex flex-wrap justify-between items-end gap-8">
              <div className="flex flex-col gap-4 text-[16px] md:text-[20px] leading-normal">
                <div className="font-bold">
                  <span>© Derechos reservados Universidad Páramo</span>
                </div>
                <div>
                  <span>
                    1030, Distrito Capital, Municipio Libertador, Parroquia
                    Sucre País Venezuela, VE (VEN)
                  </span>
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <Link
                  href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                  target="_blank"
                  className="w-8 h-8 "
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-full" />
                </Link>
                <Link
                  href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                  target="_blank"
                  className="w-8 h-8 "
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-full" />
                </Link>
                <Link
                  href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                  target="_blank"
                  className="w-8 h-8 "
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
