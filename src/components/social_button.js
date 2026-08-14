import React from "react";
import { openExternalLink } from "../utils/navigation";

const SocialButton = ({ src, alt, url }) => {
  return (
    <img
      className="social-button"
      src={src}
      alt={alt}
      onClick={() => openExternalLink(url)}
    />
  );
};

export default SocialButton;
