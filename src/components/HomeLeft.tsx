import { useTranslation } from "react-i18next";
import TextSwap from "./HomeTextSwap";
import cv from "../assets/files/cv.pdf";

function HomeLeft() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start gap-6 justify-center h-[70vh]">
      <div className="text-[color:var(--white-color)] font-myName text-4xl sm:text-5xl cursor-none">
        MOHAMED SABER CHKIRI
      </div>
      <h1 className="text-2xl sm:text-3xl text-[color:var(--white-color)] gap-4 flex">
        {t("Changing_Portion")} <TextSwap />
      </h1>
      <p className="text-[color:var(--white-color)] max-w-[600px] ">
        {t("Home_Text")}
      </p>
      <button
        onClick={() => window.open(cv, "_blank")}
        className="button-86 text-[color:var(--black-color)]"
        role="button"
      >
        {t("CV_button")}
      </button>
    </div>
  );
}

export default HomeLeft;
