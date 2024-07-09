import { FaCheck } from "react-icons/fa";
import "./CompStyles/BouncingLoader.css";
import { useTranslation } from "react-i18next";
const BouncingDotsLoader = (props: {
  default?: boolean;
  loading?: boolean;
  success?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <>
      {props.default && <p className="text-white">{t("contact_send")}</p>}
      {props.loading && (
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {props.success && <FaCheck className="an" color="white" />}
    </>
  );
};

export default BouncingDotsLoader;
