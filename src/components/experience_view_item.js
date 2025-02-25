import React from "react";
import imgTopRightBlack from "../assets/images/top-right-black.png";
import imgTopRightWhite from "../assets/images/top-right-white.png";

const ExperienceViewItem = ({ id, title, subtitle, years }) => {
  function onMouseEnter() {
    document.getElementById(id).src = imgTopRightWhite;
  }

  function onMouseLeave() {
    document.getElementById(id).src = imgTopRightBlack;
  }

  return (
    <section
      id="experience-view-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <span className="experience-view-item-title">{title}</span>
        <p className="experience-view-item-subtitle">{subtitle}</p>
        <span className="experience-view-item-years">{years}</span>
      </div>
      <img
        id={id}
        className="experience-view-item-image"
        src={imgTopRightBlack}
        alt="Redirect"
      />
    </section>
  );
};

export default ExperienceViewItem;
