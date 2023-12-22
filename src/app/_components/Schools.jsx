import Title from "./Title";
import Image from "next/image";
import SchoolsImg from "../../../public/images/Schools.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

function SchoolItems({ school = "Default", icon }) {
  return (
    <div className="aspect-square h-full xl:col-span-2 lg:col-span-3 sm:col-span-4 min-[340px]:col-span-6 col-span-12 border-y-4 border-l-4 border-paramo-black bg-white hover:bg-paramo-yellow transition-all md:p-8 p-4 flex flex-col justify-between">
      <div className="h-8 w-8">
        <FontAwesomeIcon icon={icon} className="h-full" />
      </div>
      <div className="flex justify-center">
        <span className="sm:text-[16px] md:text-[20px] 2xl:text-[26.66px] font-bold">
          {school}
        </span>
      </div>
    </div>
  );
}

export default function Schools() {
  return (
    <div className="w-full flex justify-center">
      <div className="container px-8">
        <div className="w-full relative">
          <div className="invisible lg:visible absolute w-[336px] border-l-4 border-paramo-black right-0 h-full"></div>
          <div className="w-full flex flex-col py-8 md:py-16 gap-8 md:gap-16">
            <div className="flex">
              <Title>Escuelas</Title>
            </div>
            <div className="w-full z-10 flex flex-col gap-4">
              <div className="flex flex-col-reverse xl:flex-row gap-0 xl:gap-4">
                <div className="w-full xl:w-2/3 border-t-4 border-x-4 xl:border-y-4 xl:border-l-4 border-paramo-black xl:h-[478px] aspect-square min-[420px]:aspect-video bg-slate-400">
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={SchoolsImg}
                      alt="Schools"
                      className="h-full w-full object-cover hover:scale-105 transition-all hover:rotate-1"
                    />
                  </div>
                </div>
                <div className="w-full xl:w-1/4 xl:h-full border-x-4 border-t-4 xl:border-y-4 xl:border-l-4 border-paramo-black bg-paramo-yellow p-8 flex flex-col gap-4">
                  <div>
                    <h3 className="text-[26.66px] sm:text-[35.54px] font-bold">
                      Bienvenidos
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[20px] leading-normal">
                      La Universidad Páramo ofrece una gran variedad de opciones
                      de estudios tanto pregrado como postgrado, clasificadas en
                      grandes escuelas de estudio
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 z-10">
                <SchoolItems school="Derecho" icon={faScaleBalanced} />
                <SchoolItems school="Ciencias" icon={faFlask} />
                <SchoolItems school="Artes" icon={faPaintBrush} />
                <SchoolItems school="Ingenierías" icon={faGear} />
                <SchoolItems school="Medicina" icon={faStethoscope} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
