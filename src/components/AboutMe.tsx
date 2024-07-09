import { Link } from "react-scroll";
import TitleView from "./TitleView";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="flex-col gap-[3vh] text-[color:var(--white-color)] my-[50px] max-w-[700px] mx-auto px-2">
      <TitleView title={t("about_Button")} />
      <span className="text-[color:var(--orange-color)] ml-[3vw] flex mb-2 mt-[15vh]">
        {"<About>"}
      </span>
      <div className="ml-[5vw] flex flex-col gap-6">
        <p>{t("About_Me_Text_1")}</p>
        <p>{t("About_Me_Text_2")}</p>
        <p>{t("About_Me_Text_3")}</p>
        <p>
          {t("About_Me_Text_4")}
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-[color:var(--orange-color)] mx-2"
          >
            contact@mohamedsaberchkiri.tech
          </Link>
          {t("About_Me_Text_5")}
          <a
            href="https://www.linkedin.com/in/saberchkiri"
            target="_blank"
            className="text-[color:var(--orange-color)] mx-2"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <span className="text-[color:var(--orange-color)] mt-2 float-end">
        {"</About>"}
      </span>
    </div>
  );
}

export default AboutMe;
