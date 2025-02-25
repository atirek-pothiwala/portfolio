import React from "react";
import logo from "../assets/images/logo.png";
import ResumeButton from "./resume_button";

const Toolbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element == null) {
      return;
    }
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - 160,
      behavior: "smooth",
    });
  };

  return (
    <nav className="toolbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="tabs">
        <div className="tabItem" onClick={() => scrollToSection("home-view")}>
          Home
        </div>
        <div
          className="tabItem"
          onClick={() => scrollToSection("experience-view")}
        >
          Experience
        </div>
        <div
          className="tabItem"
          onClick={() => scrollToSection("projects-view")}
        >
          Projects
        </div>
        <div
          className="tabItem"
          onClick={() => scrollToSection("contact-view")}
        >
          Contact
        </div>
      </div>
      <ResumeButton />
    </nav>
  );
};

export default Toolbar;
