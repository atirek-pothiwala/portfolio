import React from "react";
import imgAndroid from "../assets/frameworks/android.png";
import imgApple from "../assets/frameworks/apple.png";
import imgFlutter from "../assets/frameworks/flutter.png";
import imgUnity from "../assets/frameworks/unity.png";
import imgWeb from "../assets/frameworks/web.png";
import imgBackend from "../assets/frameworks/nodejs.png";
import { openExternalLink } from "../utils/navigation";

const PLATFORM_LINKS = [
  { key: "androidUrl", src: imgAndroid, alt: "Android" },
  { key: "appleUrl", src: imgApple, alt: "Apple" },
  { key: "flutterUrl", src: imgFlutter, alt: "Flutter" },
  { key: "webUrl", src: imgWeb, alt: "Web" },
  { key: "backendUrl", src: imgBackend, alt: "Backend" },
];

const ProjectViewItem = ({
  src,
  alt,
  androidUrl,
  appleUrl,
  flutterUrl,
  webUrl,
  backendUrl,
  showUnity,
}) => {
  const links = {
    androidUrl,
    appleUrl,
    flutterUrl,
    webUrl,
    backendUrl,
  };

  return (
    <section className="project-view-item">
      <img src={src} alt={alt} />
      <div>
        {showUnity && (
          <img src={imgUnity} alt="Unity" title="Built with Unity" />
        )}
        {PLATFORM_LINKS.map(({ key, src: platformSrc, alt: platformAlt }) => {
          const url = links[key];
          if (!url) {
            return null;
          }

          return (
            <img
              key={key}
              src={platformSrc}
              alt={platformAlt}
              onClick={() => openExternalLink(url)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectViewItem;
