import React from "react";
import "./home_page.css";
import { Link } from "react-scroll";
import imgSuitcase from "../../assets/images/suitcase.png";
import imgLogo from "../../assets/images/logo.png";

const HomePage = () => {
  return (
    <section id="home-page">
      <div className="home-page-content">
        <span className="home-page-hello">Hello,</span>
        <span>
          I'm <span className="home-page-name">Atirek Pothiwala</span>
          <br />
          Mobile Application Developer
        </span>
        <p className="home-page-para">
          I'm a skilled mobile application developer with 8.8 years of
          experience in building high-performance, user-friendly apps while
          ensuring clean and efficiet code. Passionate about creating seamless
          and scalable mobile experiences.
        </p>
        <Link>
          <button className="normal-button">
            <img src={imgSuitcase} alt="Hire Me" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={imgLogo} alt="Logo" className="bg" />
    </section>
  );
};

export default HomePage;
