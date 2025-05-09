import React from "react";
import ImageButton from "./image_button";
import imgDiscord from "../assets/images/discord.png";
import imgInstagram from "../assets/images/instagram.png";
import imgYoutube from "../assets/images/youtube.png";
import imgGithub from "../assets/images/github.png";

const GamerView = ({ opacity }) => {
  return (
    <section id="gamer-view" style={{ opacity }}>
      <div className="gamer-view-content">
        <span className="gamer-view-title">
          🐱‍👤<span>Gamer</span>⚔️
        </span>
        <p className="gamer-view-para">
          Passionate and specializing in solo gameplay, RPG, and immersive
          storytelling experiences.
        </p>
        <div>
          <ImageButton
            src={imgGithub}
            alt="Github"
            url="https://github.com/knight-dev9"
          />
          <ImageButton
            src={imgDiscord}
            alt="Discord"
            url="https://discord.gg/4M7vXdp4RH"
          />
          <ImageButton
            src={imgInstagram}
            alt="Instagram"
            url="https://www.instagram.com/atirek.pothiwala"
          />
          <ImageButton
            src={imgYoutube}
            alt="Youtube"
            url="https://www.youtube.com/@iknightlive"
          />
        </div>
      </div>
    </section>
  );
};

export default GamerView;
