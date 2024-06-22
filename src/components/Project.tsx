import { FaGithub } from "react-icons/fa";

import { Technos } from "../data/Technos";
import Technologies from "./Technologies";
import { IoLogoVercel } from "react-icons/io5";

function Project(props: {
  TechnologiesUsed: Array<Technos>;
  ProjectName: string;
  date: string;
  description: string;
}) {
  return (
    <div className=" w-[270px] sm:w-[400px] relative">
      <div className="w-full flex items-end justify-end pb-6 h-full absolute project-hover opacity-0 hover:opacity-100 z-10 rounded-2xl duration-200">
        <div className="flex items-start justify-around flex-wrap gap-2">
          {props.TechnologiesUsed.map((techno) => (
            <Technologies
              key={techno.name}
              technologie={techno.name}
              icon={techno.icon}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex items-start justify-around flex-wrap h-fit bg-[#f6ecff] project-card px-4 py-8 rounded-2xl">
        <p className=" w-full  text-black text-4xl font-bold">
          {props.ProjectName}
        </p>
        <p className="w-full text-black mb-6 opacity-50 text-sm">
          {props.date}
        </p>

        <p className="mt-[3vh] text-[15px] text-black">{props.description}</p>
        <div className="mt-[2vh] flex items-center justify-around w-full">
          <button className="border font-bold text-black border-black px-4 rounded-2xl flex items-center justify-around gap-2">
            <IoLogoVercel /> <span className="hidden sm:flex">View</span>Live
          </button>
          <button className="border font-bold text-black border-black px-4 rounded-2xl flex items-center justify-around gap-2">
            <FaGithub /> <span className="hidden sm:flex">View</span>Repo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
