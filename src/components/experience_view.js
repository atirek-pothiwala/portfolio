import React from "react";
import ExperienceViewItem from "./experience_view_item";
import { experienceHeadline, experiences } from "../data/experience";

const ExperienceView = () => {
  return (
    <section id="experience-view">
      <div className="experience-view-title">
        {experienceHeadline.prefix} <br />
        Development&nbsp;
        <span className="experience-view-title-highlight">
          {experienceHeadline.highlight}
        </span>
      </div>

      {experiences.map((experience) => (
        <ExperienceViewItem
          key={experience.title}
          title={experience.title}
          subtitle={experience.subtitle}
          years={experience.years}
        />
      ))}
    </section>
  );
};

export default ExperienceView;
