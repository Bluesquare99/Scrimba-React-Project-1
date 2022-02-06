import React from "react";
import profilePic from "../images/profile-pic.png";
import emailIcon from "../images/email-icon.png";
import "./Info.css";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="Wish this was me" />
      <h2 className="full-name">Max McCready</h2>
      <h3 className="title">Fullstack Developer</h3>
      <p className="personal-site">mmccready.netlify.app</p>
      <button className="contact-button">
        <span className="flex-span">
          <span className="email-span">
            <img className="email-icon" src={emailIcon} alt="Email icon" />
          </span>
          <span>
            <p>Email</p>
          </span>
        </span>
      </button>
    </div>
  );
}
