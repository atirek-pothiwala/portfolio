import React from "react";
import imgAndroid from "../assets/images/android.png";
import imgApple from "../assets/images/apple.png";

const ProjectViewItem = ({ src, alt, androidUrl, appleUrl }) => {
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

  return (
    <section id="project-view-item">
      <img src={src} alt={alt} />
      <div>
        <img
          hidden={androidUrl === undefined}
          src={imgAndroid}
          alt="Android Playstore"
          onClick={openAndroidStore}
        />
        <img
          hidden={appleUrl === undefined}
          src={imgApple}
          alt="Apple Appstore"
          onClick={openAppleStore}
        />
      </div>
    </section>
  );
};

export default ProjectViewItem;
