export default function Divisor({ value = "01/06", direction }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-1 relative">
        <div
          className={`absolute left-0 w-full h-1 bg-paramo-black ${
            direction == "left" ? "top-0" : "bottom-0"
          }`}
        ></div>
        <div
          className={`absolute -right-16 w-16 h-1 bg-paramo-black ${
            direction == "left" ? "top-0" : "bottom-0"
          }`}
        ></div>
      </div>
      <div className="container sm:px-8">
        <div
          className={`w-full border-y-4 border-paramo-black flex justify-between ${
            direction == "left" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div
            className={`flex flex-1 lg:flex-none w-auto lg:w-[336px] border-r-0 border-paramo-black ${
              direction == "left"
                ? "flex-row lg:border-r-4"
                : "flex-row-reverse lg:border-l-4"
            }`}
          >
            <div
              className={`w-16 h-16 ${
                direction == "left" ? "bg-paramo-black" : "bg-paramo-yellow"
              }`}
            ></div>
            <div className="flex flex-1 justify-center items-center">
              <h2 className="text-[26.66px] 2xl:text-[35.54px]">{value}</h2>
            </div>
          </div>
          <div className="w-16 h-16 relative">
            <div
              className={`absolute border-t-[64px] border-paramo-black top-0 ${
                direction == "left"
                  ? "border-l-[64px] border-l-transparent z-10"
                  : "border-r-[64px] border-r-transparent"
              }`}
            ></div>
            <div
              className={`absolute border-b-[64px] border-paramo-yellow top-0 ${
                direction == "left"
                  ? "border-l-[64px] border-l-transparent"
                  : "border-r-[64px] border-r-transparent z-10"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <div className="flex flex-1 relative">
          <div
            className={`absolute left-0 w-full h-1 bg-paramo-black ${
              direction == "left" ? "bottom-0" : "top-0"
            }`}
          ></div>
          <div
            className={`absolute -left-16 w-16 h-1 bg-paramo-black ${
              direction == "left" ? "bottom-0" : "top-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
