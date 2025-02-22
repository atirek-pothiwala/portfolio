import React from "react";
import "./dev_view.css";
import ImageButton from "../ImageButton/image_button";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgGithub from "../../assets/images/github.png";

const DevView = ({ opacity }) => {
  return (
    <section id="dev-view" style={{ opacity }}>
      <div className="dev-view-content">
        <span className="dev-view-title">
          &lt;
          <span>Coder/</span>
          &gt;
        </span>
        <p className="dev-view-para">
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

export default DevView;
