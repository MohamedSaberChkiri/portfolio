import Project from "./Project";
import TitleView from "./TitleView";

function Projects() {
  return (
    <div className="w-full flex px-4 flex-col gap-6 mx-auto my-[12vw]">
      <TitleView title="Projects" />
      <div className="flex w-full flex-col mx-auto gap-4">
        <div className="flex flex-col items-center justify-center w-full  gap-5 ">
          <span className="text-[color:var(--orange-color)] flex justify-start w-[50%] mt-[10vh]">
            {"<Projects>"}
          </span>
          <Project />
          <Project />
          <Project />
          <span className="text-[color:var(--orange-color)] flex justify-end w-[50%]">
            {"</Projects>"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
