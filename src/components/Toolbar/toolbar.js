import React from "react";
import "./toolbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import ResumeButton from "../ResumeButton/resume_button";

const toolbar = () => {
  return (
    <nav className="toolbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="tabs">
        <Link className="tabItem">Home</Link>
        <Link className="tabItem">About</Link>
        <Link className="tabItem">Portfolio</Link>
      </div>
      <ResumeButton />
      {/* <button className="btnAppearance">
        <img src={moon} alt="Mode" />
      </button> */}
    </nav>
  );
};

export default toolbar;
