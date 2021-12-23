import React, {useState, useEffect} from "react";

import "./index.css";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);


  const links = [
    {
      name: "Home",
      link: "#",
      onClick: () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    },
    {
      name: "About",
      link: "#aboutSection",
    },
    {
      name: "Skills",
      link: "#skillsSection",
    },
    {
      name: "Projects",
      link: "#projectsSection",
    },
    {
      name: "Contact",
      link: "#contactSection",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []); 

  return (
    <nav class={`navbar-expand-lg navbar-dark w-100 navbar ${scroll ? 'active' : ''}`}>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-auto ">
            {links.map((link) => (
              <li class="nav-item">
                <a class="nav-link active" onClick={link.onClick} href={link.link}>
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
