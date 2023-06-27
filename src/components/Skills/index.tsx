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
        <h1 className="skills__title">Mis habilidades</h1>
        <div className="skills__content">
          {
            skills.map((skill: {
              font: string;
            }, index: number) => (
                <div className="skills__content__item" key={index}>
                    <i className={skill.font}></i>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
