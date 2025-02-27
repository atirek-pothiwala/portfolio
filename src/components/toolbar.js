import React from "react";
import logo from "../assets/images/logo.png";
import ResumeButton from "./resume_button";
import imgHome from "../assets/tabs/home.png";
import imgWork from "../assets/tabs/work.png";
import imgProject from "../assets/tabs/project.png";
import imgTechnology from "../assets/tabs/technology.png";
import imgContact from "../assets/tabs/contact.png";

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
        <img
          src={imgHome}
          alt="Home"
          onClick={() => scrollToSection("home-view")}
        />
        <img
          src={imgWork}
          alt="Experience"
          onClick={() => scrollToSection("experience-view")}
        />
        <img
          src={imgProject}
          alt="Projects"
          onClick={() => scrollToSection("project-view")}
        />
        <img
          src={imgTechnology}
          alt="Technologies"
          onClick={() => scrollToSection("tech-view")}
        />
        <img
          src={imgContact}
          alt="Contact"
          onClick={() => scrollToSection("contact-view")}
        />
      </div>
      <ResumeButton />
    </nav>
  );
};

export default Toolbar;
