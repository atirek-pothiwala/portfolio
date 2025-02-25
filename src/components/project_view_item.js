import React from "react";
import imgThankYou from "../assets/images/thank-you.png";

const ProjectViewItem = () => {
  return (
    <section id="project-view-item">
      <img src={imgThankYou} alt="item" />
      <div>
        <span>Title</span>
        <span>Subtitle</span>
      </div>
    </section>
  );
};

export default ProjectViewItem;
