import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)]">
      <div className="cursor-pointer text-4xl text-[color:var(--orange-color)] ">
        {"<Mohamed/>"}
      </div>

      <ul className="flex items-center justify-around gap-10 text-sm w-[400px]">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className=" flex items-center justify-center"
          offset={-100}
        >
          <span>{"<"}</span>{" "}
          <span className="hover:text-lg duration-200  hover:px-2">About</span>{" "}
          <span>{"/>"}</span>
        </Link>
        <Link
          className="flex items-center justify-center"
          to="skills"
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span>{"<"}</span>{" "}
          <span className="hover:text-lg duration-200  hover:px-2">Skills</span>{" "}
          <span>{"/>"}</span>
        </Link>
        <Link
          className="flex items-center justify-center"
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span>{"<"}</span>{" "}
          <span className="hover:text-lg duration-200  hover:px-2">
            Projects
          </span>{" "}
          <span>{"/>"}</span>
        </Link>
      </ul>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="border-2 px-4 py-2 text-[12px] text-[color:var(--orange-color)] rounded-xl border-[color:var(--orange-color)]"
      >
        {"<Get in Touch/>"}
      </Link>
    </div>
  );
}

export default Navbar;
