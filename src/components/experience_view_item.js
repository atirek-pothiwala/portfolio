import React, { useState } from "react";
import imgTopRightBlack from "../assets/images/top-right-black.png";
import imgTopRightWhite from "../assets/images/top-right-white.png";

const ExperienceViewItem = ({ title, subtitle, years }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="experience-view-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span className="experience-view-item-title">{title}</span>
        <p className="experience-view-item-subtitle">{subtitle}</p>
        <span className="experience-view-item-years">{years}</span>
      </div>
      <img
        className="experience-view-item-image"
        src={isHovered ? imgTopRightWhite : imgTopRightBlack}
        alt=""
      />
    </section>
  );
};

export default ExperienceViewItem;
