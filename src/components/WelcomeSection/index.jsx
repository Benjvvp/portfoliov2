import React from "react";
import "./index.css";

export default function WelcomeSection() {
  const socials = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/benjamin-perez-300066228/",
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/Benjvvp",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/_benjvvp/",
    },
  ];

  return (
    <div className="welcome-section">
      <div className="welcome-section__background"></div>
      <div className="welcome-section__content">
        <div className="welcome-section__socials">
          {socials.map((social) => (
            <a href={social.url} className="welcome-section__socials-item">
              <i class={social.icon}></i>
            </a>
          ))}
        </div>
        <h1 className="welcome-section__title">Benjamin Perez</h1>
        <h2 className="welcome-section__subtitle">
          A creative Freelancer & Web Developer
        </h2>
      </div>
      <a href="#aboutSection">
        <div className="welcome-section__arrow">
          <i class="fas fa-arrow-circle-down"></i>
        </div>
      </a>
    </div>
  );
}
