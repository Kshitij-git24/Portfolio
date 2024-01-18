import "../components/Content.scss";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import { Parallax } from "./parallax/Parallax";
import Projects from "./Projects/Projects.js";
import { projects_data } from "../ProjectsList/projects.js";

export const Content = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section>
        <Parallax type="projects" />
      </section>
      <section id="Projects">
        <Projects projects={projects_data} />
      </section>
      <section>
        <Parallax type="tech" />
      </section>
      <section id="Tech">Tech and Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
};
