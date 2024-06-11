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

function Skills() {
  return (
    <div className="flex items-center gap-16 justify-center flex-col w-[700px] mx-auto  mt-[20vh] ">

      <p className="text-[color:var(--white-color)] w-full text-3xl">Skills</p>
      <Skilles
        stack={Languages}
        openTag="<Languagues>"
        closeTag="</Languages>"
      />
      <Skilles
        stack={FrameWorks}
        openTag="<Frameworks>"
        closeTag="</Frameworks>"
      />
    <div className="flex items-center justify-center gap-[15vw] flex-wrap">
      <Skilles
        stack={Databases}
        openTag="<Databases>"
        closeTag="</Databases>"
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
