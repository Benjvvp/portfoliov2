import React from "react";

import "./index.css";

export default function Skills() {
  const skills = [
    { font: "fab fa-html5" },
    { font: "fab fa-css3-alt" },
    { font: "fab fa-js" },
    { font: "fab fa-node-js" },
    { font: "fab fa-bootstrap" },
    { font: "fab fa-react" },
    { font: "fab fa-git-square" },
  ];

  return (
    <div className="skillsSection" id="skillsSection">
      <div className="skillsContainer">
        <h1 className="skills__title">My Skills</h1>
        <div className="skills__content">
          {
            skills.map((skill, index) => (
                <div className="skills__content__item">
                    <i className={skill.font}></i>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
