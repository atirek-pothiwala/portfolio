import React from "react";
import "./resume_button.css";
import imgDownload from "../../assets/images/cloud.png";

const ResumeButton = () => {
  const download = async () => {
    const link = document.createElement("a");
    link.href = "./atirek-pothiwala-resume.pdf";
    link.download = "atirek-pothiwala-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="resume-button" onClick={download}>
      <img src={imgDownload} alt="Download" />
      Resume
    </button>
  );
};

export default ResumeButton;
