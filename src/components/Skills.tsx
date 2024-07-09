import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-24 justify-center flex-col w-full  mt-[40vh] ">
      <TitleView title="Skills" />

      <div className="flex items-center justify-center gap-[10vh] flex-wrap ">
        <CircularProgressBar
          skills={Languages}
          openTag={`<${t("languages")}>`}
          closeTag={`</${t("languages")}>`}
        />

        <CircularProgressBar
          skills={Databases}
          openTag={`<${t("databases")}>`}
          closeTag={`</${t("databases")}>`}
        />
      </div>

      <div className="flex items-center justify-center gap-[10vh] flex-wrap">
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

      <div className="flex items-center justify-center gap-[10vh] flex-wrap">
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
