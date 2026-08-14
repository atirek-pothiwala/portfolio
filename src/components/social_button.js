import React from "react";
import "../styles/social_button.css";
import { openExternalLink } from "../utils/navigation";

const SocialButton = ({ src, alt, url }) => {
  return (
    <img
      id="social-button"
      src={src}
      alt={alt}
      onClick={() => openExternalLink(url)}
    />
  );
};

export default SocialButton;
