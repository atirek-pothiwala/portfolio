import React, { useState } from "react";
import lookLeft from "../assets/images/demon.png";
import lookRight from "../assets/images/wink.png";
import CoderView from "./coder_view";
import GamerView from "./gamer_view";

const HomeView = () => {
  const [clipPercent, setClipPercent] = useState(50);
  const [offset, setOffset] = useState(0);
  const [fadeLeft, setFadeLeft] = useState(1);
  const [fadeRight, setFadeRight] = useState(1);

  const handleMouseMove = (event) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const kConstant = mouseX / width;
    const percentage = 50 + (kConstant - 0.5) * 300;
    const moveOffset = (kConstant - 0.5) * 20;

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
      id="home-view"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <GamerView opacity={fadeLeft} />
      <div className="home-view-content">
        <img
          src={lookLeft}
          style={{
            clipPath: `inset(0 ${clipPercent}% 0 0)`,
            transform: `translateX(${-offset}%)`,
          }}
          alt="Left Side"
        />
        <img
          src={lookRight}
          style={{
            clipPath: `inset(0 0 0 ${100 - clipPercent}%)`,
            transform: `translateX(${-offset}%)`,
          }}
          alt="Right Side"
        />
      </div>
      <CoderView opacity={fadeRight} />
    </section>
  );
};

export default HomeView;
