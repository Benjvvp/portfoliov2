import React from "react";

import "./index.css";

export default function AboutMe() {

  const card_biography = {
    FullName: "Benjamin Perez",
    Birthday: '14/02/2007',
    Age: '15',
    Experience: '2 Years',
    Hobby: 'Programming and playing video games',
  }

  return (
    <div className="aboutSection" id="aboutSection">
      <div className="aboutSectionContent">
        <div className="aboutMe__Card">
          <div className="aboutMe__CardContent">
            {Object.keys(card_biography).map((key, index) => (
              <div className="aboutMe__CardContent__Item" key={index}>
                <p><span>{key}:</span> {card_biography[key]}</p>
              </div>
              ))
            }
          </div>
        </div>
        <div className="aboutMe">
          <h1 className="aboutMe__Content__Title">About Me</h1>
          <p className="aboutMe__Content__Text">
            My name is Benjamin I am a passionate <span>web developer</span> I
            have 2 years of experience in the entire sector and every day I am
            constantly learning to polish my skills and learn new technologies.
            I am living in chile, in constant project development and as a free
            lancer.
          </p>
        </div>
      </div>
    </div>
  );
}
