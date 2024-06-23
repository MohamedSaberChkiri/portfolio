import { FaGithub } from "react-icons/fa";

import { Technos } from "../data/Technos";
import { IoLogoVercel } from "react-icons/io5";
import ProjectTechView from "./ProjectTechView";

function Project(props: {
  TechnologiesUsed: Array<Technos>;
  ProjectName: string;
  date: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}) {
  return (
    <div className=" w-[270px] sm:w-[400px] relative project-hover rounded-2xl">
      <div className="w-full flex items-start justify-start flex-wrap h-fit  project-card px-4 py-8 rounded-2xl">
        <p className=" w-full  text-white text-4xl font-bold">
          {props.ProjectName}
        </p>
        <p className="w-full text-white mb-6 opacity-50 text-sm">
          {props.date}
        </p>
        <ProjectTechView />

        <p className="mt-[3vh] text-[15px] text-white">{props.description}</p>
        <div className="mt-[2vh] flex items-center justify-around w-full">
          <a
            href={props.liveLink}
            target="_blank"
            className="border font-bold text-white border-white px-4 rounded-2xl flex items-center justify-around gap-2"
          >
            <IoLogoVercel /> <span className="hidden sm:flex">View</span>Live
          </a>
          <a
            target="_blank"
            href={props.githubLink}
            className="border font-bold text-white border-white px-4 rounded-2xl flex items-center justify-around gap-2"
          >
            <FaGithub /> <span className="hidden sm:flex">View</span>Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
