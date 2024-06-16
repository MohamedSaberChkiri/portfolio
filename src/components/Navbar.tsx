import { Link } from "react-scroll";
import CustomizedSwitch from "./DarkLightSwitch";
import { useState, useEffect } from "react";
import Drawer from "./NavDrawer";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Check the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Update the state based on the scroll position
    setScrolled(scrollPosition > 0);
  };

  // Attach the handleScroll function to the scroll event on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-scrolled z-[999] flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)] fixed top-0 left-0 overflow-hidden ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Link
        className="cursor-none text-2xl md:text-4xl text-[color:var(--orange-color)] "
        to="home"
        smooth={true}
        duration={500}
      >
        {"<Mohamed/>"}
      </Link>

      <ul className="hidden md:flex items-center justify-around gap-10 text-sm w-[350px]">
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

      <div className="flex items-center justify-center gap-4">
        <CustomizedSwitch />

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hidden md:flex border-2 font-bold px-4 py-2 text-[12px] text-[color:var(--orange-color)] rounded-xl border-[color:var(--orange-color)]"
          offset={-110}
        >
          {"<Get in Touch/>"}
        </Link>
        <div className="flex md:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
