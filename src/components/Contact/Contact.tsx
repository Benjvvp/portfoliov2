import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  /* Inputs */
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  /* Error */

  const handleSubmit = () => {
    //eslint-disable-next-line
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      name.length <= 0 ||
      email.length <= 0 ||
      description.length <= 0 ||
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
        <h1 className="contact__title">Contactame</h1>
        <form
          autoComplete="off"
          noValidate
          className="mt-2"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 mt-3">
              <input
                type="text"
                className="form-control inputFormContact"
                placeholder="Nombre completo o Empresa"
                required
                id="nameInput"
                name="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mt-3">
              <input
                type="email"
                className="form-control inputFormContact"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu correo"
                required
                name="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control inputFormContact"
              id="messageTextArea"
              rows={3}
              placeholder="Ingresa tu mensaje."
              required
              name="messageInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btnFormSubmit mt-3 w-25"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
