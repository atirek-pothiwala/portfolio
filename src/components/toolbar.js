import React from "react";
import { scrollToSection } from "../utils/navigation";
import logo from "../assets/images/logo.png";
import ResumeButton from "./resume_button";
import imgHome from "../assets/tabs/home.png";
import imgWork from "../assets/tabs/work.png";
import imgProject from "../assets/tabs/project.png";
import imgTechnology from "../assets/tabs/technology.png";
import imgContact from "../assets/tabs/contact.png";

const NAV_ITEMS = [
  { id: "home-view", src: imgHome, alt: "Home" },
  { id: "experience-view", src: imgWork, alt: "Experience" },
  { id: "project-view", src: imgProject, alt: "Projects" },
  { id: "tech-view", src: imgTechnology, alt: "Technologies" },
  { id: "contact-view", src: imgContact, alt: "Contact" },
];

const Toolbar = () => {
  const onRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="toolbar">
      <img src={logo} alt="Logo" className="logo" onClick={onRefresh} />
      <div className="tabs">
        {NAV_ITEMS.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            alt={alt}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </div>
      <ResumeButton />
    </nav>
  );
};

export default Toolbar;
