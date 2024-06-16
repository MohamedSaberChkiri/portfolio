import { Link } from "react-scroll";

function NavBarLinks() {
  return (
    <ul className="flex items-center justify-around gap-10 text-sm w-[350px]">
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
        <span className="hover:text-lg duration-200  hover:px-2">Projects</span>{" "}
        <span>{"/>"}</span>
      </Link>
    </ul>
  );
}

export default NavBarLinks;
