import React from "react";
import ContactButton from "./contact_button";
import SocialButton from "./social_button";
import { profile } from "../data/profile";

const ProfileView = () => {
  return (
    <section id="profile-view">
      <img
        className="profile-view-profile"
        src={profile.image}
        alt="Profile"
      />
      <span className="profile-view-title">{profile.name}</span>
      <p className="profile-view-para">
        {profile.title}
        <br />
        {profile.location}
      </p>
      <div className="profile-view-social">
        {profile.socialLinks.map((link) => (
          <SocialButton
            key={link.url}
            src={link.src}
            alt={link.alt}
            url={link.url}
          />
        ))}
      </div>
      <ContactButton />
    </section>
  );
};

export default ProfileView;
