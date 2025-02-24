import React from "react";
import "./send_button.css";
import imgSend from "../../assets/images/mail.png";

const SendButton = ({ name, subject, message }) => {
  const sendMail = () => {
    // Create a mailto link with user input
    const mailtoLink = `mailto:atirekpothiwala@gmail.com?subject=${subject}&body=${message}%0A%0A-Regards,%0A${name}`;
    // Open the user's email client
    window.location.href = mailtoLink;
    return mailtoLink;
  };
  return (
    <button className="send-button" onClick={sendMail}>
      <img src={imgSend} alt="Send" />
      Send
    </button>
  );
};

export default SendButton;
