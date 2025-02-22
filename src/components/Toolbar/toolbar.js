import React from "react";
import "./toolbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import download from "../../assets/images/cloud.png";
import resume from "../../assets/docs/atirek-pothiwala-resume.pdf";

const toolbar = () => {
  function downloadResume() {
    const link = document.createElement("a");
    link.href = { resume };
    link.download = "atirek-pothiwala-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
