import React from "react";
import ImageButton from "./image_button";
import imgLinkedin from "../assets/images/linkedin.png";
import imgGithub from "../assets/images/github.png";

const CoderView = ({ opacity }) => {
  return (
    <section id="coder-view" style={{ opacity }}>
      <div className="coder-view-content">
        <span className="coder-view-title">
          &lt;
          <span>Coder/</span>
          &gt;
        </span>
        <p className="coder-view-para">
          Expertised in building high-performance, user-friendly apps ensuring
          clean and efficiet code.
        </p>
        <div>
          <ImageButton
            src={imgLinkedin}
            alt="LinkedIn"
            url="https://www.linkedin.com/in/atirekpothiwala"
          />
          <ImageButton
            src={imgGithub}
            alt="Github"
            url="https://github.com/atirek-pothiwala"
          />
        </div>
      </div>
    </section>
  );
};

export default CoderView;
