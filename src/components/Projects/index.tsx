import { useState } from "react";

export default function Projects() {
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);
  const [project, setProject] = useState<Number | null>(null);

  const projects = [
    {
      img: "/img/pasteleriareina.png",
      demo: "https://pasteleriareinatesting.netlify.app",
      info: "Se ha creado una página web para una pastelería con el objetivo de atraer más clientes y ofrecer un formulario para que estos puedan realizar sus pedidos. La página ha sido desarrollada utilizando React. El formulario incluye una característica especial: una agenda. Esta agenda se encuentra cerrada cuando la pastelería se encuentra colapsada de pedidos, y se administra dicho estado mediante un archivo Excel.",
    },
    {
      img: "/img/paintball.png",
      demo: "https://paintballlaserena.netlify.app/#",
      github: "https://github.com/Benjvvp/paintballLaSerena",
      info: "Se ha creado una página web para Paintball La Serena, una empresa de paintball. La página utiliza HTML y JavaScript, y cuenta con un formulario de contacto SMTP en PHP. El diseño refleja la emoción del paintball, con colores vibrantes y una galería de fotos. La página atrae a entusiastas del paintball y permite a los clientes ponerse en contacto fácilmente.",
    },
    {
      img: "/img/ticket106.png",
      demo: "https://ticket106frontend.netlify.app",
      github: "https://github.com/Benjvvp/DashboardTicket_106_Front",
      info: "Desarrollé un completo dashboard para un cliente que incluía un Administrador de tareas, Chat y Administrador de archivos. Utilicé tecnologías como React, Node, MongoDB, JWT, Socket.io, Context, Tailwind, entre otras. El cliente quedó satisfecho con el resultado y fue un proyecto muy entretenido de realizar. Además, me encargué de implementar el despliegue en una VPS de DigitalOcean.",
    },
    {
      img: "/img/cptPuzzle.png",
      demo: "https://puzzletesting.netlify.app",
      info: "Me contactaron para crear un puzzle en honor al Día del Trabajador. Fue un proyecto de corto plazo y el cliente quedó satisfecho con el resultado. La página web se desarrolló utilizando JS, HTML y CSS, y se desplegó en Netlify. Presenta el puzzle, seguido de una imagen y un video. Fue un proyecto gratificante de completar.",
    },
  ];

  return (
    <>
      <div className="projectsSection" id="projectsSection">
        <div className="projectsContainer">
          <h1 className="projects__title">Mis proyectos</h1>
          <p className="projects__description">
            Estos son algunos de los proyectos que he realizado, si quieres ver
            más puedes visitar mi{" "}
            <a href="https://github.com/benjvvp" target="_blank">
              Github
            </a>
            <br />
            Los proyectos que mostrare a continuacion son privados ya que son
            realizados para clientes los cuales respeto la confidencialidad de
            sus datos y codigo, solo algunos e podido revelar el codigo con
            autorizacion del cliente.
          </p>
          <div className="projects__content mt-5">
            {projects.map(
              (
                project: {
                  img: string;
                  demo?: string;
                  github?: string;
                },
                index: number
              ) => (
                <div className="projects_item" key={`project__${index}`}>
                  <div className="projects__item-content position-relative">
                    <img
                      src={project.img}
                      alt=""
                      srcSet=""
                      className="projects__item-img"
                    />
                    <div className="d-flex justify-content-between position-absolute bottom-0">
                      <a
                        href={project.github}
                        target="_blank"
                        className={`projects__item-link ${
                          !project.github ? "blocked" : ""
                        }`}
                      >
                        Github
                      </a>
                      <a
                        className={`projects__item-link cursor-pointer`}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        role="button"
                        onClick={() => {
                          setIsModalActive(true);
                          setProject(index);
                        }}
                        href="#projectInfo"
                      >
                        Ver más
                      </a>
                      <a
                        href={project.demo}
                        target={"_blank"}
                        className={`projects__item-link ${
                          !project.demo ? "blocked" : ""
                        }`}
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <p
            className={`text-left mt-5 ${isModalActive ? "block" : "hidden"}`}
            id="projectInfo"
            style={{ fontSize: "1.2rem", fontWeight: 500 }}
          >
            {projects[project as number]?.info}
          </p>
        </div>
      </div>
    </>
  );
}
