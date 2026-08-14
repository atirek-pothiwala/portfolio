import React from "react";
import TechViewItem from "./tech_view_item";
import { skills } from "../data/skills";

const TechView = () => {
  return (
    <section id="tech-view">
      <div className="tech-view-title">
        Skills and&nbsp;
        <span className="tech-view-title-highlight">Technologies</span>
      </div>
      <div className="tech-view-content">
        {skills.map((skill) => (
          <TechViewItem
            key={skill.title}
            src={skill.src}
            title={skill.title}
            subtitle={skill.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default TechView;
