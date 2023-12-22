import Link from "next/link";
import NavBar from "./NavBar/NavBar";
import ImageHero from "./imageHero";
import { YellowButton } from "./Title";

export default function Hero() {
  const borderStyle = "border-paramo-black dark:border-white";
  const textStyle = "text-paramo-black dark:text-white";

  return (
    <>
      <NavBar />
      <div className="flex flex-col flex-1 h-1 overflow-hidden">
        <div className="w-full h-full flex justify-center">
          <div className="container h-full sm:px-8 ">
            <div className="h-full flex flex-col-reverse lg:flex-row justify-between">
              <div
                className={`flex flex-col w-full lg:w-[600px] 2xl:w-[800px] justify-center gap-4 xl:gap-16 pt-4 py-0 sm:py-4 xl:py-8 2xl:py-16 ${textStyle}`}
              >
                <div className="flex flex-col gap-4 xl:gap-8 text-center lg:text-left px-8 sm:px-0 ">
                  <h1 className="font-bold text-[35.54px] md:text-[47.37px] lg:text-[63.15px] 2xl:text-[84.17px] leading-tight capitalize ">
                    Nuestro objetivo es{" "}
                    <span className="text-paramo-yellow">Educar</span>
                  </h1>
                  <p className="text-base md:text-xl 2xl:text-[26.66px] font-light max-w-2xl leading-normal">
                    Los estudiantes y profesores son nuestros recursos más
                    importantes.
                  </p>
                </div>
                <div className="flex gap-0 sm:gap-4">
                  <YellowButton className="border-t-4 sm:border-t-0 border-paramo-black">
                    Estudios
                  </YellowButton>
                  <Link
                    href={"#"}
                    className={`border-t-4 border-l-4 border-b-0 border-r-0 sm:border-b-4 sm:border-r-4 ${borderStyle} ${textStyle} p-4 text-xl md:text-[26.66px] 2xl:text-[35.54px] font-bold bg-white dark:bg-paramo-black hover:bg-slate-200 dark:hover:bg-neutral-950 transition-all flex flex-1 lg:flex-none lg:block justify-center`}
                  >
                    Conócenos
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 lg:flex-none lg:h-full w-full lg:w-[380px] xl:w-[525px] overflow-hidden lg:overflow-visible bg-paramo-yellow border-x-0 sm:border-x-4 border-paramo-black relative border-b-4 lg:border-b-0">
                <div className="visible sm:invisible w-full h-20 bg-white border-b-4 border-paramo-black relative">
                  <div className="absolute top-0 left-0 border-r-[50px] border-t-[50px] border-paramo-yellow border-r-transparent"></div>
                  <div className="absolute bottom-0 right-0 border-l-[50px] border-b-[50px] border-paramo-black border-l-transparent"></div>
                </div>
                <div className="h-full w-full absolute top-5 lg:-left-12 xl:top-10 xl:-left-24">
                  <ImageHero />
                </div>
                <div className="absolute top-0 -right-[100px] w-24 h-24 overflow-hidden border-r-[100px] border-t-[100px] border-t-paramo-black border-r-transparent z-30"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="invisible lg:visible absolute bottom-0 left-0 w-24 h-24 overflow-hidden border-r-[100px] border-b-[100px] border-b-paramo-yellow border-r-transparent"></div>
      </div>
    </>
  );
}
