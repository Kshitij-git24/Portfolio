import "../components/Content.scss";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import { Parallax } from "./parallax/Parallax";
import Projects from "./Projects/Projects.js";
import { projects_data } from "../ProjectsList/projects.js";
import { useEffect, useState } from "react";

export const Content = () => {
  const [user, setUser] = useState([]);

  // const fetchRepos = () => {
  //   console.log(1);
  //   fetch(`https://api.github.com/users/Kshitij-git24/repos`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchRepos();
  // }, []);

  // console.log(user);

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
