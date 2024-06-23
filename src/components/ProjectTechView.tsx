import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./CompStyles/ProjectTechsCSS.css";

function ProjectTechView() {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleIsClicked}
        className={` text-white border px-2 py-1 rounded-2xl flex items-center  gap-4 ${
          isClicked ? "transition-width " : "transition-close"
        }`}
      >
        <span className="text-[13px]">TECHNOLOGIES</span>
        <span
          className={`transition-transform ${
            isClicked ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>
    </div>
  );
}

export default ProjectTechView;
