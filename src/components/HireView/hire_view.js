import React from "react";
import "./hire_view.css";
import imgSuitcase from "../../assets/images/briefcase.png";
import imgProfile from "../../assets/images/money.png";
import NormalButton from "../NormalButton/normal_button";
//import imgLogo from "../../assets/images/logo.png";

const HireView = () => {
  return (
    <section id="hire-view">
      <div className="hire-view-content">
        <img className="hire-view-profile" src={imgProfile} alt="Profile" />
        <div className="hire-view-text-content">
          <span className="hire-view-hello">Hello,</span>
          <span className="hire-view-title">I'm Atirek Pothiwala</span>
          <p className="hire-view-para">
            I'm a skilled
            <span style={{ color: "red" }}> mobile application developer </span>
            with 8.8 years of experience in building high-performance,
            user-friendly apps while ensuring clean and efficiet code.
            Passionate about creating seamless and scalable mobile experiences.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <NormalButton src={imgSuitcase} alt="Hire Me" text="Hire Me" />
          </div>
        </div>
      </div>
      {/* <img src={imgLogo} alt="Logo" className="home-page-bg" /> */}
    </section>
  );
};

export default HireView;
