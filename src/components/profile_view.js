import React from "react";
import imgProfile from "../assets/images/profile.jpg";
import imgLinkedin from "../assets/social/linkedin.png";
import imgFacebook from "../assets/social/facebook.png";
import imgInstagram from "../assets/social/instagram.png";
import imgGithub from "../assets/social/github.png";
import ContactButton from "./contact_button";
import SocialButton from "./social_button";

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
      <div className="profile-view-social">
        <SocialButton
          src={imgLinkedin}
          alt="Linkedin"
          url="https://www.linkedin.com/in/atirekpothiwala"
        />
        <SocialButton
          src={imgFacebook}
          alt="Facebook"
          url="https://www.facebook.com/atu09"
        />
        <SocialButton
          src={imgInstagram}
          alt="Instagram"
          url="https://www.instagram.com/atirek.pothiwala"
        />
        <SocialButton
          src={imgGithub}
          alt="Github"
          url="https://github.com/atirek-pothiwala"
        />
      </div>
      <ContactButton />
    </section>
  );
};

export default ProfileView;
