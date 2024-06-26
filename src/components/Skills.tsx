import {
  APIs,
  Databases,
  FrameWorks,
  Languages,
  PackageManagers,
  RuntimeEnvironments,
  VisionControl,
} from "../data/skills";
import CircularProgressBar from "./CircleSkill";
import TitleView from "./TitleView";

function Skills() {
  return (
    <div className="flex items-center gap-16 justify-center flex-col w-full  mt-[40vh] ">
      <TitleView title="Skills" />

      <div className="flex items-center justify-center gap-[15vw] flex-wrap">
        <CircularProgressBar
          skills={Languages}
          openTag="<Languages>"
          closeTag="</Languages>"
        />

        <CircularProgressBar
          skills={Databases}
          openTag="<Databases>"
          closeTag="</Databases>"
        />
      </div>

      <div className="flex items-center justify-center gap-[15vw] flex-wrap">
        <CircularProgressBar
          skills={FrameWorks}
          openTag="<Frameworks>"
          closeTag="</Frameworks>"
        />
        <CircularProgressBar
          skills={VisionControl}
          openTag="<VisionControl>"
          closeTag="</VisionControl>"
        />
      </div>

      <div className="flex items-center justify-center gap-32 flex-wrap">
        <CircularProgressBar
          skills={PackageManagers}
          openTag="<PkgManagers>"
          closeTag="</PkgManagers>"
        />

        <CircularProgressBar
          skills={APIs}
          openTag="<APIs>"
          closeTag="</APIs>"
        />
        <CircularProgressBar
          skills={RuntimeEnvironments}
          openTag="<RuntimeEnv>"
          closeTag="</RuntimeEnv>"
        />
      </div>
    </div>
  );
}

export default Skills;
