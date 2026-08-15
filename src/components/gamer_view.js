import React from "react";
import ImageButton from "./image_button";
import imgDiscord from "../assets/images/discord.png";
import imgInstagram from "../assets/images/instagram.png";
import imgYoutube from "../assets/images/youtube.png";
import imgUnity from "../assets/frameworks/unity.png";

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
            src={imgUnity}
            alt="Unity"
            url="https://atirek-pothiwala.github.io/Boss-Rush/"
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
