import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TextSwap = () => {
  const [text, setText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { t } = useTranslation();
  const phrases = [t("home_1"), t("home_2"), t("home_3")];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <>
      <h1 className="text-[color:var(--orange-color)]">
        <span>{text}</span>
        <span className="blink border-r-2 border-[color:var(--orange-color)]">
          &nbsp;
        </span>
      </h1>
    </>
  );
};

export default TextSwap;
