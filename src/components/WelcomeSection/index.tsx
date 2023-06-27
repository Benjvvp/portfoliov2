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
          {socials.map((social: { icon: string; url: string }) => (
            <a href={social.url} className="welcome-section__socials-item" key={social.icon}>
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <h1 className="welcome-section__title">Benjamin Perez</h1>
        <h2 className="welcome-section__subtitle">
          Un creativo freelancer y desarrollador web
        </h2>
      </div>
      <a href="#aboutSection">
        <div className="welcome-section__arrow">
          <i className="fas fa-arrow-circle-down"></i>
        </div>
      </a>
    </div>
  );
}
