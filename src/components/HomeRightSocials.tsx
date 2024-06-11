import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

function HomeRightSocials() {
  return (
    <div className="flex flex-col items-center justify-around gap-4 text-[color:var(--orange-color)]">
      <span className=" w-[3px] bg-[color:var(--orange-color)] h-[100px]"></span>
      <button className="text-[color:var(--white-color)]">
        <ImGithub size={18}  />
      </button>
      <button className="text-[color:var(--white-color)]">
        <FaLinkedin size={18} />
      </button>
      <button className="text-[color:var(--white-color)]">
        <FaXTwitter size={18} />
      </button>
    </div>
  );
}

export default HomeRightSocials;
