import React from "react";
import "./send_button.css";
import imgSend from "../../assets/images/mail.png";

const SendButton = ({ name, subject, message }) => {
  const sendMail = () => {
    const encodedName = encodeURIComponent(name);
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Create a mailto link with user input
    const mailtoLink = `mailto:atirekpothiwala@gmail.com?subject=${encodedSubject}&body=${encodedMessage}%0A%0A-Regards,%0A${encodedName}`;
    // Open the user's email client
    window.location.href = mailtoLink;
    return mailtoLink;
  };
  return (
    <div className="send-button-warn">
      <button className="send-button" onClick={sendMail}>
        <img src={imgSend} alt="Send" />
        Send
      </button>
      *Make sure you have an email app installed.
    </div>
  );
};

export default SendButton;
