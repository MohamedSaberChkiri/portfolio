import { FaHeart, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-[color:var(--white-color)] text-sm flex items-center justify-around flex-wrap gap-2 w-full mt-[10vh] h-[10vh] ">
      <p className="flex items-center justify-center gap-2 opacity-70">
        Built with <FaHeart className="text-[--orange-color] heartBeat" /> by Mohamed
        Saber Chkiri
      </p>
      <p className="opacity-70">No ads, no tracking. Enjoy your day!</p>
      <p className="flex items-center justify-center gap-2 opacity-70">
        Copyright <FaRegCopyright /> 2024
      </p>
    </div>
  );
}

export default Footer;
