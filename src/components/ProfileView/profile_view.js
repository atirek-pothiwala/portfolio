import React from "react";
import "./profile_view.css";
import imgEmail from "../../assets/images/email.png";
import imgProfile from "../../assets/images/profile.jpg";
import ContactButton from "../ContactButton/contact_button";

const ProfileView = () => {
  return (
    <section id="profile-view">
      <img className="profile-view-profile" src={imgProfile} alt="Profile" />
      <span className="profile-view-title">Atirek Pothiwala</span>
      <p className="profile-view-para">
        Tech Lead & Mobile App Developer
        <br />
        Vadodara, Gujarat, India
      </p>
      <ContactButton src={imgEmail} alt="Let's Talk" text="Let's Talk" />
    </section>
  );
};

export default ProfileView;
