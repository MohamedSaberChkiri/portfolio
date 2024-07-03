import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle the drawer */}
      <RxHamburgerMenu onClick={toggleDrawer} size={30} />

      {/* Drawer container */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full bg-[color:var(--black-color)] text-[color:var(--white-color)] shadow-lg transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer content */}
        <div className="p-4">
          <button onClick={toggleDrawer} className="w-full flex justify-end">
            <IoMdClose size={40} />
          </button>

          <div className=" flex flex-col items-center mt-[15vh] justify-center gap-20 text-4xl">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
              offset={-100}
              onClick={toggleDrawer}
            >
              <span className="  duration-200  hover:scale-125">Home</span>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
              offset={-100}
              onClick={toggleDrawer}
            >
              <span className=" duration-200   hover:scale-125">About</span>{" "}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
              offset={-100}
              onClick={toggleDrawer}
            >
              <span className=" duration-200  hover:scale-125">Skills</span>{" "}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
              offset={-100}
              onClick={toggleDrawer}
            >
              <span className=" duration-200 hover:scale-125 ">Projects</span>{" "}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
              offset={-100}
              onClick={toggleDrawer}
            >
              <span className=" duration-200 hover:scale-125 ">Contact Me</span>{" "}
            </Link>
       
          </div>
        </div>
      </div>

      {/* Overlay to close the drawer when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Drawer;
