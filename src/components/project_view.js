import React from "react";
import ProjectViewItem from "./project_view_item";
import { projects } from "../data/projects";

const ProjectView = () => {
  return (
    <section id="project-view">
      <div className="project-view-title">
        Recent Projects
        <br />
        and&nbsp;
        <span className="project-view-title-highlight">Achievements</span>
      </div>
      <div className="project-view-content">
        {projects.map((project) => (
          <ProjectViewItem key={project.alt} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectView;
