import React from "react";
import "../styles/social_button.css";

const SocialButton = ({ src, alt, url }) => {
  const openLink = async () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <img id="social-button" src={src} alt={alt} onClick={openLink} />;
};

export default SocialButton;
