import {
  APIs,
  Databases,
  FrameWorks,
  Languages,
  PackageManagers,
  RuntimeEnvironments,
  VisionControl,
} from "../data/skills";
import Skilles from "./Skill";
import TitleView from "./TitleView";

function Skills() {
  return (
    <div className="flex items-center gap-16 justify-center flex-col w-full  mt-[40vh] ">
      <TitleView title="Skills" />

      <div className="flex items-center justify-center gap-[15vw] flex-wrap">

 <Skilles
        stack={Languages}
        openTag="<Languagues>"
        closeTag="</Languages>"
      />

  <Skilles
          stack={Databases}
          openTag="<Databases>"
          closeTag="</Databases>"
        />
      </div>
     
  
      <div className="flex items-center justify-center gap-[15vw] flex-wrap">
      
    <Skilles
        stack={FrameWorks}
        openTag="<Frameworks>"
        closeTag="</Frameworks>"
      />
        <Skilles
          stack={VisionControl}
          openTag="<VisionControl>"
          closeTag="</VisionControl>"
        />
      </div>

      <div className="flex items-center justify-center gap-32 flex-wrap">
        <Skilles
          stack={PackageManagers}
          openTag="<PkgManagers>"
          closeTag="</PkgManagers>"
        />

        <Skilles stack={APIs} openTag="<APIs>" closeTag="</APIs>" />
        <Skilles
          stack={RuntimeEnvironments}
          openTag="<RuntimeEnv>"
          closeTag="</RuntimeEnv>"
        />
      </div>
    </div>
  );
}

export default Skills;
