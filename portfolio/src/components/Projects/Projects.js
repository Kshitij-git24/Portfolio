import React from "react";
import "./projects.scss";
import Card from "./Card";

const Projects = ({ projects }) => {
  console.log("PROJECTS", projects);

  function projectCard(projectData) {
    // console.log("in cards");
    return (
      <div class="card">
        <img src="C:/Users/Kshitij_24/Portfolio/portfolio/src/images/scroll.png" />

        <div class="card__content">
          <p class="card__title">{projectData.title}</p>
          <p class="card__techstack">{projectData.tech}</p>
          <p class="card__description">{projectData.exp}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      {projects.map((project) => {
        return projectCard(project);
      })}
    </div>
  );
};

export default Projects;
