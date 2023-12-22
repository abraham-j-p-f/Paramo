import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import News01 from "../../../public/images/news01.png";
import News02 from "../../../public/images/news02.png";
import News03 from "../../../public/images/news03.png";

function New({ title = "Texto prueba", img }) {
  return (
    <Link
      href={"#"}
      className="flex flex-col max-w-md w-full sm:w-[458px] flex-none "
    >
      <div className="w-full aspect-square sm:aspect-[4/3] border-4 border-paramo-black z-10">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={img}
            alt={title + " Image"}
            className="h-full object-cover hover:scale-105 transition-all hover:rotate-1"
          />
        </div>
      </div>
      <div className="bg-paramo-yellow px-6 py-3 border-x-4 border-paramo-black w-full">
        <span className="capitalize text-xl md:text-[26.66px] line-clamp-1">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default function News() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="flex 2xl:w-[calc(50%-400px)] xl:w-[calc(50%-272px)] lg:w-[calc(50%-144px)] w-full justify-end">
          <div className="w-full lg:w-[336px] py-8 md:py-16 lg:pr-5 flex justify-center border-r-0 border-t-4 lg:border-r-4 lg:border-t-0 border-paramo-black">
            <div className="lg:w-full container lg:px-0 px-8 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[26.66px] leading-tight">
                  ¿Cómo puedes escribir noticias?
                </h3>
                <p className="sm:text-xl leading-normal font-light text-base">
                  Aquí, no solo aprendes a escribir noticias, sino a dar forma a
                  las narrativas que importan.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[26.66px] leading-tight">
                  ¡Entérate de todo al momento!
                </h3>
                <p className="sm:text-xl leading-normal font-light text-base">
                  Conéctate con la Universidad Páramo en nuestras redes
                  sociales. Aquí, compartimos las últimas noticias, eventos y
                  logros de nuestra comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-none lg:flex-1 justify-end">
          <div className="flex w-full md:ws-[calc(100%-(100%-768px)/2)] ws-[calc(100%-(100%-640px)/2)]">
            <div className="py-8 md:py-16 flex flex-col flex-1 w-2 gap-8">
              <div className="pl-8 sm:pl-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:pl-16 2xl:pl-32 flex items-center w-full gap-8 flex-wrap">
                <div>
                  <Title>
                    Últimas <span className="text-paramo-yellow">noticias</span>
                  </Title>
                </div>
                <div className="flex items-center">
                  <a
                    className="p-2 md:p-4 border-4 border-paramo-black text-base md:text-xl font-bold"
                    href="#"
                  >
                    Ver más noticias
                  </a>
                </div>
              </div>
              <div className="hscrollbar flex gap-4 w-full overflow-x-auto pb-4 pl-8 sm:pl-[calc((100%-576px)/2)] md:pl-[calc((100%-702px)/2)] lg:pl-16 2xl:pl-32 pr-8 sm:pr-[calc((100%-576px)/2)] md:pr-[calc((100%-702px)/2)] lg:pr-[calc((100%-576px)/2)] xl:pr-[calc((100%-960px)/2)]">
                <New title="Nuevo trimestre 2024" img={News01} />
                <New title="Remodelaciones en las aulas" img={News02} />
                <New title="Nuevo taller personalizado" img={News03} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
