import React from "react";
import "./toolbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import download from "../../assets/images/cloud.png";

const toolbar = () => {
  const downloadResume = async () => {
    const link = document.createElement("a");
    link.href = "./atirek-pothiwala-resume.pdf";
    link.download = "atirek-pothiwala-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="toolbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="tabs">
        <Link className="tabItem">Home</Link>
        <Link className="tabItem">About</Link>
        <Link className="tabItem">Portfolio</Link>
      </div>
      <button className="btnNormal" onClick={downloadResume}>
        <img src={download} alt="Download" />
        Resume
      </button>
      {/* <button className="btnAppearance">
        <img src={moon} alt="Mode" />
      </button> */}
    </nav>
  );
};

export default toolbar;
