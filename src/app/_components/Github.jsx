import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function GithubBar() {
  return (
    <Link
      href={"https://github.com/abraham-j-p-f"}
      target="_blank"
      className="bg-white md:py-8 py-4 flex justify-center items-center gap-8"
    >
      <div className="w-8 h-8">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <span className="capitalize text-[16px] md:text-[20px]">
        Sitio hecho por <b>Abe</b>
      </span>
    </Link>
  );
}
