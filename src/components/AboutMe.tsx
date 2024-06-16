import TitleView from "./TitleView";

function AboutMe() {
  return (
    <div className="flex-col gap-[3vh] text-[color:var(--white-color)] my-[50px] max-w-[700px] mx-auto px-2">
      <TitleView title="About Me" />
      <span className="text-[color:var(--orange-color)] ml-[3vw] flex mt-[15vh]">
        {"<About>"}
      </span>
      <div className="ml-[5vw] flex flex-col gap-6">
        <p>
          I'm a Self-taught Web Developer based in Lübeck, Germany. and current
          Bachelor's student in Computer Science at Technische Hochschule
          Lübeck. My journey into web development began with curiosity and has
          grown into a full-fledged passion.
        </p>
        <p>
          I've mastered HTML, CSS, and JavaScript, and I'm eagerly exploring
          advanced frameworks like React and Node.js. I thrive on transforming
          concepts into sleek, user-friendly websites and am always hungry for
          new challenges and learning opportunities.
        </p>
        <p>
          Outside of coding, I unwind by playing chess, and experimenting with
          culinary creations. I'm also an avid sci-fi fan who enjoys immersing
          myself in captivating stories.
        </p>
        <p>
          Let's connect and build something amazing together! Reach out to me at
          <span className="text-[color:var(--orange-color)]">
            mohamed@saber.dev
          </span>{" "}
          or find me on{" "}
          <a
            href="https://www.linkedin.com/in/saberchkiri"
            className="text-[color:var(--orange-color)]"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <span className="text-[color:var(--orange-color)] float-end">
        {"</About>"}
      </span>
    </div>
  );
}

export default AboutMe;
