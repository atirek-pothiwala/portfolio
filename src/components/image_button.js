import React from "react";

const ImageButton = ({ src, alt, url }) => {
  const openLink = async () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <img className="image-button" src={src} alt={alt} onClick={openLink} />
  );
};

export default ImageButton;
