import { ReactNode, useRef, useState } from "react";
import TitleView from "./TitleView";
import BouncingDotsLoader from "./BouncingDotsLoader";

function Contact() {

 const [ButtonValue, setButtonValue] = useState<ReactNode>(<BouncingDotsLoader default />);


 
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setButtonValue(<BouncingDotsLoader loading />);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "100287e9-f48d-4eb1-8e54-ae3c6b1f3fee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (res.success) {
        setButtonValue(<BouncingDotsLoader success />);
        setTimeout(() => {
          setButtonValue(<BouncingDotsLoader default />)
        }, 2000);
        if (formRef.current) {
          formRef.current.reset(); 
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="w-fit mx-auto">
      <TitleView title="Contact" />
      <span className="text-[color:var(--orange-color)] flex mt-[10vh]">
        {"<Contact>"}
      </span>


      <form ref={formRef} onSubmit={onSubmit} className="flex flex-col my-[3vh] ">
      <input type="hidden" name="access_key" value="100287e9-f48d-4eb1-8e54-ae3c6b1f3fee"/>

        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="name"
          placeholder="Name"
          required
        ></input>
        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="email"
          name="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        ></input>
        <textarea
          className="w-[250px] sm:w-[500px] h-[200px] bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color) text-[color:var(--white-color)]"
          name="message"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="bg-[color:var(--orange-color)] flex items-center justify-center cursor-none h-[5vh] px-4 rounded-lg mt-2"
        >
          {ButtonValue}
        </button>
      </form>
      <span className="text-[color:var(--orange-color)] flex w-full items-center justify-end">
        {"</Contact>"}
      </span>
    </div>
  );
}

export default Contact;
