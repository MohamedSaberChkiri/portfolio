import { Link } from "react-scroll";
import TitleView from "./TitleView";

function AboutMe() {
  return (
    <div className="flex-col gap-[3vh] text-[color:var(--white-color)] my-[50px] max-w-[700px] mx-auto px-2">
      <TitleView title="About Me" />
      <span className="text-[color:var(--orange-color)] ml-[3vw] flex mb-2 mt-[15vh]">
        {"<About>"}
      </span>
      <div className="ml-[5vw] flex flex-col gap-6">
        <p>
          I'm a Self-taught Web Developer based in Lübeck, Germany. And current
          Bachelor's student in Computer Science at Technische Hochschule
          Lübeck. My journey into web development began with curiosity and has
          grown into a full-fledged passion.
        </p>
        <p>
          I've mastered HTML, CSS, and JavaScript, and I'm eagerly exploring
          advanced frameworks like React and NEXT. I thrive on transforming
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
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-[color:var(--orange-color)] mx-2"
          >
            contact@mohamedsaberchkiri.tech
          </Link>
          or find me on
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
