import TitleView from "./TitleView";

function Contact() {
  return (
    <div className="w-fit mx-auto">
      <TitleView title="Contact" />
      <span className="text-[color:var(--orange-color)] flex mt-[10vh]">
        {"<Contact>"}
      </span>
      <form className="flex flex-col my-[3vh]">
        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className="bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color)]"
          type="text"
          name="subject"
          placeholder="Subject"
        ></input>
        <textarea
          className="w-[500px] h-[200px] bg-transparent border-[color:var(--orange-color)] border-2 rounded-lg py-2 px-4 mt-2 outline-none text-[color:var(--white-color) text-[color:var(--white-color)]"
          name="message"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="bg-[color:var(--orange-color)] text-[color:var(--black-color)] cursor-pointer py-2 px-4 rounded-lg mt-2"
        ></input>
      </form>
      <span className="text-[color:var(--orange-color)] flex w-full items-center justify-end">
        {" "}
        {"</Contact>"}{" "}
      </span>
    </div>
  );
}

export default Contact;
