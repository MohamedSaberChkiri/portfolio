import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./CompStyles/ProjectTechsCSS.css";
import { Technos } from "../data/Technos";
import Technologies from "./Technologies";

function ProjectTechView(props: { techs: Array<Technos> }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleIsClicked}
        className={` text-white border  p-2 rounded-2xl flex items-start flex-col gap-4 ${
          isClicked ? "transition-width " : "transition-close"
        }`}
      >
        <div className="h-fit w-fit flex items-center gap-2 ">
          <span className="text-[13px]">TECHNOLOGIES</span>
          <span
            className={`transition-transform ${
              isClicked
                ? "rotate-180 duration-500 arrowslide"
                : "rotate-0 duration-500 arrowslideback"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        <div
          className={` flex flex-wrap gap-2 mx-auto border-white ${
            isClicked ? "flex showTechs" : "hidden hideTechs"
          }`}
        >
          {props.techs.map((tech, index) => (
            <Technologies
              key={index}
              technologie={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </button>
    </div>
  );
}

export default ProjectTechView;
