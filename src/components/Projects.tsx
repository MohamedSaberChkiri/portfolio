import Project from "./Project";
import TitleView from "./TitleView";
import { FirstProjectTechnos } from "../data/Technos";

function Projects() {
  return (
    <div className="w-fit flex px-4 flex-col gap-6 mx-auto my-[12vw]">
      <TitleView title="Projects" />

      <span className="text-[color:var(--orange-color)] flex mt-[10vh]">
        {"<Projects>"}
      </span>
      <div className="flex  items-center justify-center  gap-5 flex-wrap">
        <Project
          TechnologiesUsed={FirstProjectTechnos}
          ProjectName="FootWear"
          date="February 2024 - April 2024"
          description="FootWear is a full-stack e-commerce website where users can buy shoes."
        />
        <Project
          TechnologiesUsed={FirstProjectTechnos}
          ProjectName="FootWear"
          date="February 2024 - April 2024"
          description="FootWear is a full-stack e-commerce website where users can buy shoes."
        />
        <Project
          TechnologiesUsed={FirstProjectTechnos}
          ProjectName="FootWear"
          date="February 2024 - April 2024"
          description="FootWear is a full-stack e-commerce website where users can buy shoes."
        />
      </div>
      <span className="text-[color:var(--orange-color)] flex justify-end w-full">
        {"</Projects>"}
      </span>
    </div>
  );
}

export default Projects;
