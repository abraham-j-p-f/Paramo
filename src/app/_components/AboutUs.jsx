import Image from "next/image";
import Title from "./Title";
import Campus from "../../../public/images/usCampus.png";
import Valores from "../../../public/images/usValues.png";
import Plataforma from "../../../public/images/usPlatforms.png";
import Deportes from "../../../public/images/usSports.png";
import Comunidad from "../../../public/images/usCommunity.png";
import Estudios from "../../../public/images/usStudy.png";

function Panel({ title = "Default", img }) {
  return (
    <div className="h-full flex flex-col flex-1 basis-1 hover:basis-40 transition-all duration-300 ease-in-out ">
      <div className="flex h-[500px] border-4 border-paramo-black bg-slate-400">
        <Image
          src={img}
          alt={title + " Image"}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-[26.66px] bg-paramo-yellow py-4 px-8 border-x-4 border-paramo-black flex justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <div className="w-full relative">
          <div className="invisible lg:visible absolute w-[336px] border-r-4 border-paramo-black left-0 lg:left-[calc((100%-960px)/2)] xl:left-[calc((100%-1216px)/2)] 2xl:left-[calc((100%-1472px)/2)] h-full "></div>

          <div className="w-full md:py-16 py-8 flex flex-col md:gap-16 gap-8">
            <div className="flex xl:justify-center lg:justify-end justify-center px-8 sm:px-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:px-[calc((100%-960px)/2)] xl:px-[calc((100%-1216px)/2)] 2xl:px-[calc((100%-1472px)/2)]">
              <Title>Conócenos</Title>
            </div>
            <div className="w-full overflow-x-auto flex gap-4 z-10 pb-4 hscrollbar px-8 sm:px-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:px-[calc((100%-960px)/2)] xl:px-[calc((100%-1216px)/2)] 2xl:px-[calc((100%-1472px)/2)]">
              <Panel title="Campus" img={Campus} />
              <Panel title="Valores" img={Valores} />
              <Panel title="Plataforma" img={Plataforma} />
              <Panel title="Deportes" img={Deportes} />
              <Panel title="Comunidad" img={Comunidad} />
              <Panel title="Estudios" img={Estudios} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
