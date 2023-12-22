import Title, { YellowButton } from "./Title";
import Sport from "../../../public/images/sports.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faBaseballBatBall } from "@fortawesome/free-solid-svg-icons";
import { faSoccerBall } from "@fortawesome/free-regular-svg-icons";

export default function Sports() {
  return (
    <div className="w-full flex justify-center">
      <div className="container px-8">
        <div className="w-full relative">
          <div className="invisible lg:visible absolute w-[336px] border-r-4 border-paramo-black left-0 h-full"></div>
          <div className="w-full h-full py-8 md:py-16 flex flex-col-reverse lg:flex-row gap-8 md:gap-16 ">
            <div className="flex flex-1 2xl:flex-none aspect-[3/4] lg:aspect-auto border-4 border-paramo-black bg-slate-400 z-10">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={Sport}
                  alt="Sport Image"
                  className="h-full w-full object-cover hover:scale-105 transition-all hover:rotate-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 md:gap-16 lg:w-[500px] xl:w-[600px] 2xl:w-[800px] w-full z-10">
              <div>
                <Title>
                  Comunidad{" "}
                  <span className="text-paramo-yellow">Deportiva</span>
                </Title>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[16px] sm:text-[20px] xl:text-[26.66px] leading-base">
                    Poseemos una fuerte comunidad deportiva reconocida
                    nacionalmente por ser una de las más competitivas.
                    Incluyendo equipos de Fútbol, Rugby, Baseball, Natación y
                    muchos más
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="aspect-square border-4 border-paramo-black flex justify-center items-center flex-1 bg-white">
                    <div className="2xl:w-16 xl:w-10 w-8 aspect-square ">
                      <FontAwesomeIcon icon={faFootballBall} />
                    </div>
                  </div>
                  <div className="aspect-square border-4 border-paramo-black flex justify-center items-center flex-1 bg-white">
                    <div className="2xl:w-16 xl:w-10 w-8 aspect-square ">
                      <FontAwesomeIcon icon={faBaseballBatBall} />
                    </div>
                  </div>
                  <div className="aspect-square border-4 border-paramo-black flex justify-center items-center flex-1 bg-white">
                    <div className="2xl:w-16 xl:w-10 w-8 aspect-square ">
                      <FontAwesomeIcon icon={faSoccerBall} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <YellowButton className="capitalize">
                  Se parte de nuestro equipo
                </YellowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
