export default function AboutMe() {
  const card_biography = {
    Nombre_Completo: "Benjamin Perez",
    Nacimiento: "14/02/2007",
    Edad: "16",
    Experiencia: "2 Years",
    Hobby: "Programming and playing video games",
  };

  return (
    <div className="aboutSection" id="aboutSection">
      <div className="aboutSectionContent">
        <div className="aboutMe__Card">
          <div className="aboutMe__CardContent">
            {Object.keys(card_biography).map((key: string, index) => (
              <div className="aboutMe__CardContent__Item" key={index}>
                <p>
                  <span>{key}:</span>{" "}
                  {card_biography[key as keyof typeof card_biography]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="aboutMe">
          <h1 className="aboutMe__Content__Title">Acerca de mi</h1>
          <p className="aboutMe__Content__Text">
            Mi nombre es Benjamin y soy un apasionado <span>desarrollador web</span>. Cuento
            con 2 años de experiencia en el campo y estoy en constante
            aprendizaje para perfeccionar mis habilidades y adquirir
            conocimientos sobre nuevas tecnologías. Actualmente resido en Chile,
            donde me dedico al desarrollo de proyectos de manera independiente.
            Además de mi pasión por la programación, también disfruto bailar
            folklore como uno de mis hobbies.
          </p>
        </div>
      </div>
    </div>
  );
}
