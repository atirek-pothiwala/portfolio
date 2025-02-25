import React from "react";
import ProjectViewItem from "./project_view_item";

const ProjectView = () => {
  return (
    <section id="projects-view">
      <div className="projects-view-title">
        Recent Projects
        <br />
        and&nbsp;
        <span className="projects-view-title-highlight">Achievements</span>
      </div>
      <div className="projects-view-content">
        <ProjectViewItem />
        <ProjectViewItem />
        <ProjectViewItem />
        <ProjectViewItem />
        <ProjectViewItem />
        <ProjectViewItem />
      </div>
    </section>
  );
};

export default ProjectView;
