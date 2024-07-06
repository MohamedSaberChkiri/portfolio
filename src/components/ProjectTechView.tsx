import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./CompStyles/ProjectTechsCSS.css";
import { Technos } from "../data/Technos";
import Technologies from "./Technologies";

function ProjectTechView(props: { techs: Array<Technos> }) {
  const [isClicked, setIsClicked] = useState(false);
  const [height, setHeight] = useState("30px");

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
    setHeight(isClicked ? "30px" : "1000px");
  };

  return (
    <div className="w-full">
      <button
        onClick={handleIsClicked}
        className={`text-white border px-2 p-1 rounded-2xl flex items-start flex-col gap-4 ${
          isClicked ? "transition-width" : "transition-close"
        }`}
        style={{ maxHeight: height }}
      >
        <div className="h-fit w-fit flex items-center justify-between gap-2">
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
          className={`flex gap-2 mx-auto flex-wrap border-white ${
            isClicked ? "showTechs" : "hideTechs"
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
