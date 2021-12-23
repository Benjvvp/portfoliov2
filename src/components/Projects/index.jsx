import React from "react";

import "./index.css";

export default function Projects() {
  const projects = [
    {
      img: "/img/pasteleriareina.png",
      demo: "https://pasteleriareina.cl",
    },
    {
        img: "/img/paintball.png",
        demo: "https://paintballlaserena.netlify.app/#",
    }
  ];

  return (
    <div className="projectsSection" id="projectsSection">
      <div className="projectsContainer">
        <h1 className="projects__title">My Projects</h1>
        <div className="projects__content mt-5">
          {projects.map((project, index) => (
            <div className="projects_item">
              <div className="projects__item-content position-relative">
                <img
                  src={project.img}
                  alt=""
                  srcset=""
                  className="projects__item-img"
                />
                <div className="d-flex justify-content-between position-absolute bottom-0">
                  <p className={`projects__item-link ${!project.demo ? "" : "blocked"}`}>Github</p>
                  <a
                    href={project.demo}
                    target={"_blank"}
                    className="projects__item-link"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
