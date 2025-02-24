import React from "react";
import "./toolbar.css";
import logo from "../../assets/images/logo.png";
import ResumeButton from "../ResumeButton/resume_button";

const toolbar = () => {
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
  const sendMail = () => {
    return "mailto:atirekpothiwala@gmail.com?subject=Let%27s%20Talk&body=Hi%20Atirek";
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
        <a className="tabItem" href={sendMail}>
          Contact
        </a>
      </div>
      <ResumeButton />
    </nav>
  );
};

export default toolbar;
