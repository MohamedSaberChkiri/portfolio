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
    <div className="flex items-center justify-center flex-col w-full ">
      <Skilles
        stack={Languages}
        openTag="<Languagues>"
        closeTag="</Languages>"
      />
      <Skilles
        stack={FrameWorks}
        openTag="<FrameWorks>"
        closeTag="</FrameWorks>"
      />

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

      <Skilles
        stack={PackageManagers}
        openTag="<PackageManagers>"
        closeTag="</PackageManagers>"
      />

      <Skilles stack={APIs} openTag="<APIs>" closeTag="</APIs>" />
      <Skilles
        stack={RuntimeEnvironments}
        openTag="<RuntimeEnvironments>"
        closeTag="</RuntimeEnvironments>"
      />
    </div>
  );
}

export default Skills;
