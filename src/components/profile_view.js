import React from "react";
import imgProfile from "../assets/images/profile.jpg";
import ContactButton from "./contact_button";

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
      <ContactButton />
    </section>
  );
};

export default ProfileView;
