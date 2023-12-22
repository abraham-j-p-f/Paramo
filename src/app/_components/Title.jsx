import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function YellowButton({ children, className = "" }) {
  return (
    <Link
      href="#"
      className={`bg-paramo-yellow text-paramo-black p-4 lg:py-4 lg:px-8 text-xl md:text-[26.66px] 2xl:text-[35.54px] font-bold flex flex-1 lg:flex-none lg:block justify-center ${className}`}
    >
      <div className="flex items-center gap-4 w-full justify-between">
        <span>{children}</span>
        <div className="w-6 h-6 md:w-8 md:h-8">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </Link>
  );
}

export default function Title({ children }) {
  return (
    <h2 className="text-[35.54px] md:text-[47.37px] lg:text-[63.15px] leading-tight capitalize font-bold">
      {children}
    </h2>
  );
}
