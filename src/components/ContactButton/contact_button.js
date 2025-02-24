import React from "react";
import "./contact_button.css";

const ContactButton = ({ src, alt, text }) => {
  const sendMail = () => {
    return "mailto:atirekpothiwala@gmail.com?subject=Let%27s%20Talk&body=Hi%20Atirek";
  };
  return (
    <a className="contact-button" href={sendMail}>
      <img src={src} alt={alt} />
      {text}
    </a>
  );
};

export default ContactButton;
