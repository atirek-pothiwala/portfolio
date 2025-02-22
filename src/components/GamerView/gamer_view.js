import React from "react";
import "./gamer_view.css";
import imgDiscord from "../../assets/images/discord.png";

const IntroGamer = ({ opacity }) => {
  return (
    <section id="intro-gamer" style={{ opacity }}>
      <div className="intro-gamer-content">
        <span className="intro-gamer-title">
          <span>Gamer</span>
        </span>
        <p className="intro-gamer-para">
          Passionate and specializing in solo gameplay, RPG, and immersive
          storytelling experiences.
        </p>
        <button className="btnNormal">
          <img src={imgDiscord} alt="Join Me" />
          Join Me
        </button>
      </div>
    </section>
  );
};

export default IntroGamer;
