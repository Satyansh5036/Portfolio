import React from "react";
import profilePic from "../assets/Satyansh.jpg"; // Replace with your photo path

const Hero = () => (
  <section className="hero container" id="home">
    <div className="hero-text">
      <h1>Hi, I’m Satyansh</h1>
      <p>Crafted with Purpose. Driven by Passion</p>
      <p>Product Manager passionate about building user-centric digital experiences that drive business growth.</p>
      <a href="#projects" className="see-work-btn">See My Work</a>
    </div>
    <div className="hero-image">
      <img src={profilePic} alt="Your Name" />
    </div>
  </section>
);

export default Hero;
