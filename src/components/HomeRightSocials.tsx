import { FaHackerrank, FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

function HomeRightSocials() {
  return (
    <div className="flex flex-col items-center justify-around gap-4 text-[color:var(--orange-color)]">
      <span className=" w-[3px] bg-[color:var(--orange-color)] h-[100px]"></span>
      <a
      title="GitHub"
        className="text-[color:var(--white-color)]"
        href="https://github.com/MohamedSaberChkiri"
        target="_blank"
      >
        <ImGithub className="text-[18px] md:text-[30px]" />
      </a>
      <a
      title="LinkedIn"
        className="text-[color:var(--white-color)]"
        href="https://www.linkedin.com/in/saberchkiri/"
        target="_blank"
      >
        <FaLinkedin className="text-[18px] md:text-[30px]" />
      </a>
      <a
      title="HackerRank"
        className="text-[color:var(--white-color)]"
        href="https://www.hackerrank.com/certificates/97fa17ea8955"
        target="_blank"
      >
        <FaHackerrank className="text-[18px] md:text-[30px]" />
      </a>
    </div>
  );
}

export default HomeRightSocials;
