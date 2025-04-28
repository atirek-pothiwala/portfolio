import React from "react";
import ExperienceViewItem from "./experience_view_item";

const ExperienceView = () => {
  return (
    <section id="experience-view">
      <div className="experience-view-title">
        Over 9 Years of <br />
        Development&nbsp;
        <span className="experience-view-title-highlight">Expertise</span>
      </div>

      <ExperienceViewItem
        id="btnRedirect1"
        title="Tata Consultancy Services, Gandhinagar"
        subtitle="Led a team of developers to deliver high-quality software solutions for the C’z Pro project of a Japan based client. Implemented best practices for code quality, performance, and scalability."
        years="June 2022 - Present (2 years and 8 months)"
      />

      <ExperienceViewItem
        id="btnRedirect2"
        title="Gauraj Infotech Pvt. Ltd, Vadodara"
        subtitle="Developed mobile applications in iOS, Android and Flutter for Indian and US based clients. Exclusively worked on the Anytime Shift project for a US based client."
        years="Jan 2022 - June 2022 (5 months)"
      />

      <ExperienceViewItem
        id="btnRedirect3"
        title="IndaPoint Technologies Pvt. Ltd, Vadodara"
        subtitle="Developed and maintained mobile applications in iOS and Android for Australian and US based clients. Exclusively worked on the Rewardle project for an Australian based client."
        years="Oct 2020 - Jan 2022 (1 year and 3 months)"
      />

      <ExperienceViewItem
        id="btnRedirect4"
        title="A.Live Mind Pvt. Ltd, Vadodara"
        subtitle="Led a team in developing and delivering mobile projects for UAE and USA based clients. Designed architecture of multiple apps based on the client requirements. Specialized in both iOS and Android native development. Created an inhouse app GetNatty (Recently called as Swirl)."
        years="Feb 2016 - Sep 2020 (4 years and 4 months + 4 months of internship) "
      />
    </section>
  );
};

export default ExperienceView;
