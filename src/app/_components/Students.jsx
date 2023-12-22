import Title, { YellowButton } from "./Title";
import Library from "../../../public/images/library.png";
import Image from "next/image";

export default function Students() {
  return (
    <div className="w-full flex justify-center">
      <div className="container px-0 lg:px-8">
        <div className="w-full relative">
          <div className="invisible lg:visible absolute w-[336px] border-l-4 border-paramo-black right-0 h-full"></div>
          <div className="w-full h-full pt-8 sm:py-8 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-16">
            <div className="w-full lg:w-[500px] xl:w-[700px] flex flex-col gap-8 z-10 px-8 lg:px-0">
              <div>
                <Title>Estudiantes</Title>
              </div>
              <div className="w-full flex  justify-end">
                <p className="text-[16px] sm:text-[20px] xl:text-[26.66px] leading-base 2xl:w-[600px] xl:w-[500px]">
                  En la Universidad Páramo, nuestros estudiantes son
                  visionarios, innovadores y líderes del mañana. Su pasión y
                  dedicación los distinguen, y su deseo de aprender y crecer es
                  inigualable.{" "}
                </p>
              </div>
              <div className="flex xl:justify-end justify-start">
                <YellowButton>Valores</YellowButton>
              </div>
            </div>
            <div className="flex flex-none 2xl:flex-1 aspect-[4/3] sm:aspect-video lg:aspect-auto z-10 relative">
              <div className="w-full h-full bg-slate-300 border-t-4 sm:border-4 border-paramo-black">
                <Image
                  src={Library}
                  alt="Student Image"
                  className="h-full object-cover"
                />
              </div>
              <div className="invisible lg:visible absolute h-full bg-paramo-yellow border-y-4 border-paramo-black w-12 xl:w-24 -right-12 xl:-right-24"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
