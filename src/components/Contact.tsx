import { ReactNode, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import TitleView from "./TitleView";
import BouncingDotsLoader from "./BouncingDotsLoader";
import { useTranslation } from "react-i18next";

function Contact() {
  const [ButtonValue, setButtonValue] = useState<ReactNode>(
    <BouncingDotsLoader default />
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setButtonValue(<BouncingDotsLoader loading />);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "100287e9-f48d-4eb1-8e54-ae3c6b1f3fee");

    if (captchaToken) {
      formData.append("h-captcha-response", captchaToken);
    } else {
      alert("Please complete the captcha");
      setButtonValue(<BouncingDotsLoader default />);
      return;
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setButtonValue(<BouncingDotsLoader success />);
        setTimeout(() => {
          setButtonValue(<BouncingDotsLoader default />);
        }, 2000);
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
      setButtonValue(<BouncingDotsLoader default />);
    }
  };
  const { t } = useTranslation();
  return (
    <div className="w-fit mx-auto">
      <TitleView title={t("contact_tag")} />
      <span className="text-[color:var(--orange-color)] flex mt-[10vh]">
        {`<${t("contact_tag")}>`}
      </span>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col my-[3vh] "
      >
        <input
          type="hidden"
          name="access_key"
          value="100287e9-f48d-4eb1-8e54-ae3c6b1f3fee"
        />
        <input
          className="bg-transparent w-full sm:w-[500px] border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="name"
          placeholder="Name"
          required
        ></input>
        <input
          className="bg-transparent w-full sm:w-[500px] border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="email"
          name="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="bg-transparent w-full sm:w-[500px] border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="subject"
          placeholder={t("contact_subject")}
          required
        ></input>
        <textarea
          className="w-full sm:w-[500px] h-[200px] bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          name="message"
          placeholder={t("contact_message")}
        ></textarea>

        <div className="w-full flex items-center justify-center my-2">
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="bg-[color:var(--orange-color)] w-full sm:w-[500px] flex items-center justify-center cursor-none h-[5vh] px-4 rounded-lg "
        >
          {ButtonValue}
        </button>
      </form>
      <span className="text-[color:var(--orange-color)] flex w-full items-center justify-end">
        {`</${t("contact_tag")}>`}
      </span>
    </div>
  );
}

export default Contact;
