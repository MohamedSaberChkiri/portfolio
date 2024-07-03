import Project from "./Project";
import TitleView from "./TitleView";
import { FirstProjectTechnos, portfolioTechnos, secondProjectTechnos } from "../data/Technos";

function Projects() {
  return (
    <div className=" flex px-4 flex-col gap-6 mx-auto my-[12vw]">
      <TitleView title="Projects" />
      <div className="flex flex-col mx-auto gap-4">

     
      <span className="text-[color:var(--orange-color)] flex mt-[10vh]">
        {"<Projects>"}
      </span>
      <div className="flex  items-start justify-center  gap-5 flex-wrap">
        <Project
          TechnologiesUsed={FirstProjectTechnos}
          ProjectName="FootWear"
          date="February 2024 - April 2024"
          description="FootWear is a full-stack e-commerce website where users can buy shoes."
          githubLink="https://github.com/MohamedSaberChkiri/FootWear"
          liveLink="https://foot-wear-one.vercel.app/"
        />
        <Project
          TechnologiesUsed={secondProjectTechnos}
          ProjectName="OneSchool"
          date="January 2024 - May 2024"
          description="OneSchool is a Landing page for an online school."
          githubLink="https://github.com/MohamedSaberChkiri/OneSchool"
          liveLink="https://landing-page-gilt-three-17.vercel.app"
        />
        <Project
          TechnologiesUsed={portfolioTechnos}
          ProjectName="Portfolio"
          date="Mai 2024 - Juli 2024"
          description="This is my portfolio website where i show my skills and projects."
          githubLink="https://github.com/MohamedSaberChkiri/portfolio"
          portfolioLink
        />
      </div>
      <span className="text-[color:var(--orange-color)] flex justify-end w-full">
        {"</Projects>"}
      </span>
      </div>
    </div>
  );
}

export default Projects;
