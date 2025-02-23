import React from "react";
import "./normal_button.css";

const NormalButton = ({ src, alt, text }) => {
  return (
    <button className="normal-button">
      <img src={src} alt={alt} />
      {text}
    </button>
  );
};

export default NormalButton;
