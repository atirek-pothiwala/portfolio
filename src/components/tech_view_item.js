import React from "react";

const TechViewItem = ({ src, title, subtitle }) => {
  return (
    <section className="tech-view-item">
      <img className="tech-view-item-img" src={src} alt={title} />
      <div className="tech-view-item-div">
        <span className="tech-view-item-title">{title}</span>
        <span className="tech-view-item-subtitle">{subtitle}</span>
      </div>
    </section>
  );
};

export default TechViewItem;
