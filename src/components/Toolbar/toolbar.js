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
        <Link className="selectedTabItem">Home</Link>
        <Link className="tabItem">Experience</Link>
        <Link className="tabItem">Portfolio</Link>
        <Link className="tabItem">Contact</Link>
      </div>
      <ResumeButton />
    </nav>
  );
};

export default toolbar;
