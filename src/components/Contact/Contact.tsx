import TecButton from "../TecButton/TecButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const openWhatsAppChat = () => {
    const url = `https://wa.me/+5493585619668`;
    window.open(url, "_blank");
  };

  const openLinkedin = () => {
    const url = `https://www.linkedin.com/in/lucasborgatta/`;
    window.open(url, "_blank");
  };

  const openGitHub = () => {
    const url = `https://github.com/lucasborgatta`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="contact-buttons-container">
        {/* <h3>lucasborgatta00@gmail.com</h3> */}
        <TecButton toolTip="Whatsapp" icon={<FaWhatsapp size={32} color="1b9c12" />} color="1b9c12" onClick={openWhatsAppChat}></TecButton>
        <TecButton toolTip="Linkedin" icon={<FaLinkedinIn size={32} color="0882bd" />} color="0882bd" onClick={openLinkedin}></TecButton>
        <TecButton toolTip="Github" icon={<FaGithub size={32} />} color="ffffff" onClick={openGitHub}></TecButton>
      </div>
      {/* <div className="email-container">
        <form className="email-form-container" action="https://formsubmit.co/lucasborgatta00@gmail.com" method="POST">
          <TextField type="text" name="name" label="Nombre" required />
          <TextField type="email" name="email" label="Email" required />
          <TextField name="message" label="Mensaje" required />
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Contact;
