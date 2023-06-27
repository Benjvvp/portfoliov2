import { useState, useEffect } from "react";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);

  const links = [
    {
      name: "Inicio",
      link: "#",
      onClick: () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    },
    {
      name: "Acerca",
      link: "#aboutSection",
    },
    {
      name: "Habilidades",
      link: "#skillsSection",
    },
    {
      name: "Proyectos",
      link: "#projectsSection",
    },
    {
      name: "Contactame",
      link: "#contactSection",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={`navbar-expand-lg navbar-dark w-100 navbar ${
        scroll ? "active" : ""
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto ">
            {links.map((link: { name: string; link: string, onClick?: any }, index: number) => (
              <li className="nav-item" key={`link__${index}`}>
                <a
                  className="nav-link active"
                  onClick={link.onClick}
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
