import React from "react";
import imgEmail from "../assets/images/email.png";
import { scrollToSection } from "../utils/navigation";

const ContactButton = () => {
  return (
    <div
      className="contact-button"
      onClick={() => scrollToSection("contact-view")}
    >
      <img src={imgEmail} alt="Let's Talk" />
      Let's Talk
    </div>
  );
};

export default ContactButton;
