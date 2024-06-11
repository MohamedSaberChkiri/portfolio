import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
