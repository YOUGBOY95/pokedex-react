import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/profile.avif";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hello, I'm Nathan</h1>
      <h2 className="profile-text">The creator of this beautiful pokedex</h2>
      <h4 className="profile-text">
      This project was created to improve my React.js skills
      </h4>
      <div className="profile-links">
        <a href="https://github.com/YOUGBOY95">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nathan-pinard-/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
