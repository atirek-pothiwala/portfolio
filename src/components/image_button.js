import React from "react";
import { openExternalLink } from "../utils/navigation";

const ImageButton = ({ src, alt, url }) => {
  return (
    <img
      className="image-button"
      src={src}
      alt={alt}
      onClick={() => openExternalLink(url)}
    />
  );
};

export default ImageButton;
