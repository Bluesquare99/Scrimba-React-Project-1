import React from "react";
import profilePic from "../images/profile-pic.png";
import "./Info.css";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="Wish this was me" />
      <h2 className="full-name">Max McCready</h2>
      <h3 className="title">Fullstack Developer</h3>
    </div>
  );
}
