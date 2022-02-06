import React from "react";
import Twitter from "../images/twitter-icon.png";
import Facebook from "../images/facebook-icon.png";
import Instagram from "../images/instagram-icon.png";
import LinkedIn from "../images/linkedin-icon.png";
import Github from "../images/twitter-icon.png";

export default function Footer() {
  return (
    <footer className="footer-div">
      <div className="align-icons">
        <img src={Twitter} className="footer-icon" />
        <img src={Facebook} className="footer-icon" />
        <img src={Instagram} className="footer-icon" />
        <img src={LinkedIn} className="footer-icon" />
      </div>
    </footer>
  );
}
