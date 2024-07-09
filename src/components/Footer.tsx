import { useTranslation } from "react-i18next";
import { FaHeart, FaRegCopyright } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="text-[color:var(--white-color)] text-sm flex items-center justify-around flex-wrap gap-2 px-4 mb-2 w-full mt-[10vh] h-[10vh] ">
      <p className="flex items-center justify-center gap-2 opacity-70">
        {t("built_by")}
        <FaHeart className="text-[--orange-color] heartBeat" />{" "}
        {t("built_by_2")}
        <span className="p-0 m-0">Mohamed Saber Chkiri</span>
      </p>
      <p className="opacity-70">{t("no_ads")}</p>
      <p className="flex items-center justify-center gap-2 opacity-70">
        Copyright <FaRegCopyright /> 2024
      </p>
    </div>
  );
}

export default Footer;
