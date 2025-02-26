import React from "react";
import TechViewItem from "./tech_view_item";

import imgAndroid from "../assets/skills/android.png";
import imgApple from "../assets/skills/apple.png";
import imgCss from "../assets/skills/css.png";
import imgDart from "../assets/skills/dart.png";
import imgFirebase from "../assets/skills/firebase.png";
import imgFlutter from "../assets/skills/flutter.png";
import imgHtml from "../assets/skills/html.png";
import imgIOS from "../assets/skills/ios.png";
import imgJava from "../assets/skills/java.png";
import imgMaps from "../assets/skills/maps.png";
import imgSwift from "../assets/skills/swift.png";
import imgWindows from "../assets/skills/windows.png";
import imgVsCode from "../assets/skills/vs_code.png";
import imgAndroidStudio from "../assets/skills/android_studio.png";
import imgXcode from "../assets/skills/xcode.png";
import imgRestAPI from "../assets/skills/rest_api.png";
import imgPostman from "../assets/skills/postman.png";
import imgSqlite from "../assets/skills/sqlite.png";
import imgGithub from "../assets/skills/github.png";
import imgRazorpay from "../assets/skills/razorpay.png";
import imgChatGPT from "../assets/skills/chatgpt.png";

const TechView = () => {
  return (
    <section id="tech-view">
      <div className="tech-view-title">
        Skills and&nbsp;
        <span className="tech-view-title-highlight">Technologies</span>
      </div>
      <div className="tech-view-content">
        <TechViewItem src={imgWindows} title="Windows OS" subtitle="Platform" />
        <TechViewItem src={imgApple} title="macOS" subtitle="Platform" />
        <TechViewItem
          src={imgAndroidStudio}
          title="Android Studio"
          subtitle="Software"
        />
        <TechViewItem src={imgXcode} title="Xcode" subtitle="Software" />
        <TechViewItem src={imgVsCode} title="VS Code" subtitle="Software" />
        <TechViewItem src={imgAndroid} title="Android" subtitle="Framework" />
        <TechViewItem src={imgIOS} title="iOS" subtitle="Framework" />
        <TechViewItem src={imgFlutter} title="Flutter" subtitle="Framework" />
        <TechViewItem src={imgFirebase} title="Firebase" subtitle="Framework" />
        <TechViewItem src={imgJava} title="Java" subtitle="Language" />
        <TechViewItem src={imgSwift} title="Swift" subtitle="Language" />
        <TechViewItem src={imgDart} title="Dart" subtitle="Language" />
        <TechViewItem src={imgHtml} title="HTML" subtitle="Markup Language" />
        <TechViewItem src={imgCss} title="CSS" subtitle="Library" />
        <TechViewItem src={imgMaps} title="Google Maps" subtitle="Library" />
        <TechViewItem src={imgSqlite} title="SQLite" subtitle="Database" />
        <TechViewItem src={imgGithub} title="Github" subtitle="Tool" />
        <TechViewItem src={imgPostman} title="Postman" subtitle="Tool" />
        <TechViewItem src={imgRestAPI} title="REST API" subtitle="Structure" />
        <TechViewItem
          src={imgRazorpay}
          title="Razorpay"
          subtitle="Payment Gateway"
        />
        <TechViewItem src={imgChatGPT} title="ChatGPT" subtitle="AI Tool" />
      </div>
    </section>
  );
};

export default TechView;
