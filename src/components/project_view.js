import React from "react";
import ProjectViewItem from "./project_view_item";
import imgCzPro from "../assets/projects/czpro.png";
import imgRewardle from "../assets/projects/rewardle.png";
import imgSwirl from "../assets/projects/swirl.png";
import imgConfetti from "../assets/projects/confetti.png";
import imgIndicator from "../assets/projects/indicator.png";
import imgInstaBG from "../assets/projects/insta_bg.png";
import imgRecipes from "../assets/projects/recipes.png";
import imgWeather from "../assets/projects/weather.png";
import imgTaskmate from "../assets/projects/taskmate.png";

const ProjectView = () => {
  return (
    <section id="project-view">
      <div className="project-view-title">
        Recent Projects
        <br />
        and&nbsp;
        <span className="project-view-title-highlight">Achievements</span>
      </div>
      <div className="project-view-content">
        <ProjectViewItem
          src={imgCzPro}
          alt="C'z Pro"
          androidUrl="https://play.google.com/store/apps/details?id=jp.czpro&hl=en_IN"
          appleUrl="https://apps.apple.com/jp/app/cz-pro-%E3%82%B7%E3%83%BC%E3%82%BA%E3%83%97%E3%83%AD/id1526270909"
        />
        <ProjectViewItem
          src={imgRewardle}
          alt="Rewardle"
          androidUrl="https://play.google.com/store/apps/details?id=com.rewardle.rewardle&hl=en_IN"
          appleUrl="https://apps.apple.com/au/app/rewardle/id519685156"
        />
        <ProjectViewItem
          src={imgRecipes}
          alt="Recipes"
          appleUrl="https://github.com/atirek-pothiwala/ios-recipes-app"
          backendUrl="https://github.com/atirek-pothiwala/nodejs-recipes-backend"
        />
        <ProjectViewItem
          src={imgWeather}
          alt="Weather"
          appleUrl="https://github.com/atirek-pothiwala/ios-weather-app"
        />
        <ProjectViewItem
          src={imgTaskmate}
          alt="Taskmate"
          appleUrl="https://github.com/atirek-pothiwala/ios-taskmate-app"
        />
        <ProjectViewItem
          src={imgSwirl}
          alt="Swirl"
          webUrl="https://www.goswirl.ai"
        />
        <ProjectViewItem
          src={imgIndicator}
          alt="Knight Indicator"
          flutterUrl="https://pub.dev/packages/knight_page_indicator"
        />
        <ProjectViewItem
          src={imgInstaBG}
          alt="Knight InstaBG"
          flutterUrl="https://pub.dev/packages/knight_insta_bg"
        />
        <ProjectViewItem
          src={imgConfetti}
          alt="Knight Confetti"
          flutterUrl="https://pub.dev/packages/knight_confetti"
        />
      </div>
    </section>
  );
};

export default ProjectView;
