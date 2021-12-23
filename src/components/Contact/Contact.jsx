import React, { useEffect, useState } from "react";
import emailjs from "emailjs";
import "./index.css";

export default function Contact() {
  /* Inputs */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  /* Error */

  const handleSubmit = () => {
    //eslint-disable-next-line
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      !name.length > 0 ||
      !email.length > 0 ||
      !description.length > 0 ||
      regex.test(email) === false
    ) {
      return;
    }

    const serviceID = "service_68q01h4";
    const templateID = "template_y7017yk";

    emailjs.send(
      serviceID,
      templateID,
      {
        form_name: name,
        form_email: email,
        form_description: description,
      },
      "user_WyUwNGkZurEtCDN1b262W"
    );
  };

  return (
    <div className="contactSection" id="contactSection">
      <div className="contactSectionContent">
        <h1 className="contact__title">Contact</h1>
        <form autocomplete="off" novalidate className="mt-2">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6 mt-3">
              <input
                type="text"
                class="form-control inputFormContact"
                placeholder="Full Name"
                required
                id="nameInput"
                name="nameInput"
              />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 mt-3">
              <input
                type="email"
                class="form-control inputFormContact"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu correo"
                required
                name="emailInput"
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control inputFormContact"
              id="messageTextArea"
              rows="3"
              placeholder="Ingresa tu mensaje."
              required
              name="messageInput"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btnFormSubmit mt-3 w-25">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
