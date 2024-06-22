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
          percentage={75}
          skills={Languages}
          openTag="<Languages>"
          closeTag="</Languages>"
        />

        <CircularProgressBar
          percentage={75}
          skills={Databases}
          openTag="<Databases>"
          closeTag="</Databases>"
        />
      </div>

      <div className="flex items-center justify-center gap-[15vw] flex-wrap">
        <CircularProgressBar
          percentage={75}
          skills={FrameWorks}
          openTag="<Frameworks>"
          closeTag="</Frameworks>"
        />
        <CircularProgressBar
          percentage={75}
          skills={VisionControl}
          openTag="<VisionControl>"
          closeTag="</VisionControl>"
        />
      </div>

      <div className="flex items-center justify-center gap-32 flex-wrap">
        <CircularProgressBar
          percentage={75}
          skills={PackageManagers}
          openTag="<PkgManagers>"
          closeTag="</PkgManagers>"
        />

        <CircularProgressBar
          skills={APIs}
          openTag="<APIs>"
          closeTag="</APIs>"
          percentage={75}
        />
        <CircularProgressBar
          percentage={75}
          skills={RuntimeEnvironments}
          openTag="<RuntimeEnv>"
          closeTag="</RuntimeEnv>"
        />
      </div>
    </div>
  );
}

export default Skills;
