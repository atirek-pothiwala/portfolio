import React from "react";
import imgAndroid from "../assets/frameworks/android.png";
import imgApple from "../assets/frameworks/apple.png";
import imgFlutter from "../assets/frameworks/flutter.png";
import imgWeb from "../assets/frameworks/web.png";

const ProjectViewItem = ({
  src,
  alt,
  androidUrl,
  appleUrl,
  flutterUrl,
  webUrl,
}) => {
  const openAndroidStore = () => {
    const link = document.createElement("a");
    link.href = androidUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openAppleStore = () => {
    const link = document.createElement("a");
    link.href = appleUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openFlutter = () => {
    const link = document.createElement("a");
    link.href = flutterUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWeb = () => {
    const link = document.createElement("a");
    link.href = webUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="project-view-item">
      <img src={src} alt={alt} />
      <div>
        <img
          hidden={androidUrl === undefined}
          src={imgAndroid}
          alt="Android"
          onClick={openAndroidStore}
        />
        <img
          hidden={appleUrl === undefined}
          src={imgApple}
          alt="Apple"
          onClick={openAppleStore}
        />
        <img
          hidden={flutterUrl === undefined}
          src={imgFlutter}
          alt="Flutter"
          onClick={openFlutter}
        />
        <img
          hidden={webUrl === undefined}
          src={imgWeb}
          alt="Web"
          onClick={openWeb}
        />
      </div>
    </section>
  );
};

export default ProjectViewItem;
