import React, { useState } from "react";
import "../SplitView/split_view.css";
import lookLeft from "../../assets/images/demon.png";
import lookRight from "../../assets/images/love.png";
import IntroDev from "../IntroDeveloper/intro_dev";
import IntroGamer from "../IntroGamer/intro_gamer";

const SplitView = () => {
  const [clipPercent, setClipPercent] = useState(50);
  const [offset, setOffset] = useState(0);
  const [fadeLeft, setFadeLeft] = useState(1);
  const [fadeRight, setFadeRight] = useState(1);

  const handleMouseMove = (event) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const kConstant = mouseX / width;
    const percentage = 50 + (kConstant - 0.5) * 300;
    const moveOffset = (kConstant - 0.5) * 100;

    // const percentage = kConstant * 100;
    // const moveOffset = (kConstant - 0.5) * 60;
    const fadeLeftValue = Math.max(0, 1 - percentage / 100);
    const fadeRightValue = Math.max(0, percentage / 100);

    setClipPercent(percentage);
    setOffset(moveOffset);
    setFadeLeft(fadeLeftValue);
    setFadeRight(fadeRightValue);
  };

  const handleMouseLeave = () => {
    setClipPercent(50);
    setOffset(0);
    setFadeLeft(1);
    setFadeRight(1);
  };

  return (
    <section
      id="splitView"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <IntroGamer opacity={fadeLeft} />
      <div className="image-container">
        <img
          src={lookLeft}
          className="image left-half"
          style={{
            clipPath: `inset(0 ${clipPercent}% 0 0)`,
            transform: `translateX(${-offset}px)`,
          }}
          alt="Left Side"
        />
        <img
          src={lookRight}
          className="image right-half"
          style={{
            clipPath: `inset(0 0 0 ${100 - clipPercent}%)`,
            transform: `translateX(${-offset}px)`,
          }}
          alt="Right Side"
        />
      </div>
      <IntroDev opacity={fadeRight} />
    </section>
  );
};

export default SplitView;
