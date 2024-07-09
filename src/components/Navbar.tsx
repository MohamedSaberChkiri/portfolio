import { Link } from "react-scroll";
import CustomizedSwitch from "./DarkLightSwitch";
import { useState, useEffect } from "react";
import Drawer from "./NavDrawer";
import { useTranslation } from "react-i18next";
import germany from "../assets/images/germany.png";
import unitedStates from "../assets/images/united-states.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [LanguageIcon, setLanguageIcon] = useState(true);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    setLanguageIcon(!LanguageIcon);
    i18n.changeLanguage(lng);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;

    setScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-scrolled z-[999] flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)] fixed top-0  overflow-hidden ${
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

      <ul className="hidden md:flex items-center justify-around gap-10 text-sm max-w-[360px]">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className=" flex items-center justify-center"
          offset={-100}
        >
          <span>{"<"}</span>{" "}
          <span className="hover:text-lg duration-200  hover:px-2">
            {t("about_Button")}
          </span>{" "}
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
            {t("Projects_Button")}
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
          offset={-110}
          className="hidden md:flex"
        >
          <button className="btn">{`</${t("Contact_Button")}>`}</button>
        </Link>
        <div>
          {LanguageIcon ? (
            <img
              src={germany}
              alt=""
              onClick={() => changeLanguage("de")}
              className="w-[25px] h-[20px] cursor-pointer"
            />
          ) : (
            <img
              src={unitedStates}
              alt=""
              onClick={() => changeLanguage("en")}
              className="w-[25px] h-[20px] cursor-pointer"
            />
          )}
        </div>
        <div className="flex md:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
