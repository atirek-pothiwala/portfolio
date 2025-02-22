import React from "react";
import "./intro_dev.css";
import suitcase from "../../assets/images/briefcase.png";

const IntroDev = ({ opacity }) => {
  return (
    <section id="intro-dev" style={{ opacity }}>
      <div className="intro-dev-content">
        <span className="intro-dev-title">
          🚀&lt;
          <span>Coder</span>
          &gt;💻
        </span>
        <p className="intro-dev-para">
          Expertised in building high-performance, user-friendly apps ensuring
          clean and efficiet code.
        </p>
        <button className="btnNormal">
          <img src={suitcase} alt="Hire Me" />
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default IntroDev;
