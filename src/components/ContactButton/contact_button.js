import React from "react";
import "./contact_button.css";
import imgEmail from "../../assets/images/email.png";

const ContactButton = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element == null) {
      return;
    }
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - 160,
      behavior: "smooth",
    });
  };
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
