import Project from "./Project";
import TitleView from "./TitleView";
import firstImage from "../assets/images/firstImage.png";
import secondImage from "../assets/images/oneschool.png";
import p from "../assets/images/cv.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex px-4 flex-col gap-6 mx-auto my-[12vw]">
      <TitleView title={t("Projects_Button")} />
      <div className="flex w-full flex-col mx-auto gap-4">
        <div className="flex flex-col items-center justify-center w-full  gap-5 ">
          <span className="text-[color:var(--orange-color)] flex justify-start w-[50%] mt-[10vh]">
            {`<${t("Projects_Button")}>`}
          </span>
          <Project
            title="FootWear"
            imageLink={firstImage}
            liveLink="https://foot-wear-one.vercel.app/"
            githubLink="https://github.com/MohamedSaberChkiri/FootWear"
            date={t("first_project_date")}
            description={t("first_project_description")}
          />
          <Project
            title="Portfolio"
            imageLink={p}
            date={t("second_project_date")}
            description={t("second_project_description")}
            githubLink="https://github.com/MohamedSaberChkiri/portfolio"
            portofolio
          />
          <Project
            title="OneSchool"
            imageLink={secondImage}
            liveLink="https://landing-page-gilt-three-17.vercel.app/"
            githubLink="https://github.com/MohamedSaberChkiri/OneSchool"
            date={t("third_project_date")}
            description={t("third_project_description")}
          />
          <span className="text-[color:var(--orange-color)] flex justify-end w-[50%]">
            {`</${t("Projects_Button")}>`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
