import React from "react";
import imgDownload from "../assets/images/cloud.png";

const RESUME_FILE = "atirek-pothiwala-resume.pdf";

const ResumeButton = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}${RESUME_FILE}`;
    link.download = RESUME_FILE;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="resume-button" onClick={download}>
      <img src={imgDownload} alt="Download" />
      <div>
        <span className="resume-button-title">Download</span>
        <span className="resume-button-subtitle">Resume</span>
      </div>
    </button>
  );
};

export default ResumeButton;
