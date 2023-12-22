import Image from "next/image";
import Title from "./Title";
import Link from "next/link";
import Admission from "../../../public/images/admition.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AdmissionProcess() {
  return (
    <div className="w-full flex flex-col bg-paramo-yellow relative">
      <div className="w-full flex flex-col">
        <div className="w-full py-8 lg:py-16 px-8 sm:px-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:px-[calc((100%-960px)/2)] xl:px-[calc((100%-1216px)/2)] 2xl:px-[calc((100%-1472px)/2)]">
          <div className="w-full md:w-3/5 md:pr-8 flex flex-col gap-8 lg:gap-16">
            <div>
              <Title>Proceso de admisión</Title>
            </div>
            <div>
              <p className="text-[16px] sm:text-[20px] xl:text-[26.66px] leading-base">
                Descubre la Universidad Páramo, donde el futuro se forja hoy.
                Nuestro compromiso con la excelencia académica y la formación
                integral de los estudiantes nos distingue. Nuestro riguroso
                proceso de admisión garantiza que solo los más apasionados y
                dedicados se unan a nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
        <Link
          href={"#"}
          className="bg-white py-4 text-[20px] lg:text-[35.54px] font-bold px-8 sm:px-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:px-[calc((100%-960px)/2)] xl:px-[calc((100%-1216px)/2)] 2xl:px-[calc((100%-1472px)/2)]"
        >
          <div className="w-full md:w-3/5 flex items-center justify-between lg:justify-normal gap-4">
            <span>Únete a nuestra comunidad</span>
            <div className="w-8 h-8">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
      </div>
      <div className="md:h-full w-full md:w-2/5 aspect-square sm:aspect-video md:aspect-auto flex relative md:absolute right-0 top-0 border-paramo-black md:border-l-4 md:border-t-0 border-l-0 border-t-4">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={Admission}
            alt="Admission Image"
            className="h-full object-cover hover:scale-105 transition-all hover:rotate-1"
          />
        </div>
      </div>
    </div>
  );
}
