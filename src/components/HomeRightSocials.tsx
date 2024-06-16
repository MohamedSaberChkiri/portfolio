import { FaHackerrank, FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

function HomeRightSocials() {
  return (
    <div className="flex flex-col items-center justify-around gap-4 text-[color:var(--orange-color)]">
      <span className=" w-[3px] bg-[color:var(--orange-color)] h-[100px]"></span>
      <a
        className="text-[color:var(--white-color)]"
        href="https://github.com/MohamedSaberChkiri"
        target="_blank"
      >
        <ImGithub size={18} />
      </a>
      <a
        className="text-[color:var(--white-color)]"
        href="https://www.linkedin.com/in/saberchkiri/"
        target="_blank"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        className="text-[color:var(--white-color)]"
        href="https://www.hackerrank.com/certificates/97fa17ea8955"
        target="_blank"
      >
        <FaHackerrank size={18} />
      </a>
    </div>
  );
}

export default HomeRightSocials;
