import "./App.css";
import "./components/CompStyles/homeButton.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HomeRightSocials from "./components/HomeRightSocials";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { motion, useScroll } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="font-anonymousPro duration-500">
      <Helmet>
        <title>Portfolio | Mohamed Saber Chkiri</title>
        <meta name="description" content="Mohamed's Portfolio" />
        <meta
          name="keywords"
          content="Mohamed Saber Chkiri, Portfolio, Web Developer, Frontend Developer, Fullstack Developer, React Developer, Next.js Developer, Tailwind Developer, TypeScript Developer, JavaScript Developer, HTML Developer, CSS Developer, SASS Developer, SCSS Developer, Web Designer, UI/UX Designer, Germany, lübeck, Remote"
        />
        <meta name="author" content="Mohamed Saber Chkiri" />
      </Helmet>

      <SpeedInsights />
      <Analytics />
      <motion.div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "var(--orange-color)",
          transformOrigin: "0 0",
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 z-[9999] rounded-[10px]"
      ></motion.div>
      <div className="fixed bottom-[10vh] z-[9999] right-[5vw] md:right-[3vw]">
        <HomeRightSocials />
      </div>
      <div className="hidden lg:flex">
        <CustomCursor />
      </div>

      <Navbar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
