import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Professional Corporate Portrait.png";
import { profile } from "../../portfolioData";

const About = () => (
  <section id="about" className="section-shell hero-section">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
      <p className="hero-greeting">Hello, I’m</p>
      <h1>{profile.name}<span className="hero-period">.</span></h1>
      <p className="hero-role">{profile.title}</p>
      <p className="hero-intro">{profile.intro}</p>

      <div className="hero-actions">
        <a className="button-primary" href="#work">
          Explore projects <FiArrowDownRight aria-hidden="true" />
        </a>
        <a className="button-secondary" href="#contact">
          Get in touch <FiArrowUpRight aria-hidden="true" />
        </a>
        <a className="button-secondary" href={profile.resume} download>
          <FiDownload aria-hidden="true" /> Download resume
        </a>
      </div>
    </div>

    <div className="hero-visual">
      <div className="portrait-orbit orbit-one" />
      <div className="portrait-orbit orbit-two" />
      <Tilt
        className="portrait-frame"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1000}
        gyroscope={false}
      >
        <img src={profileImage} alt="Ashutosh Kumar" fetchPriority="high" />
      </Tilt>
      <div className="floating-label">
        <span className="floating-label-mark">&lt;/&gt;</span>
        <span>Building for the web</span>
      </div>
    </div>
  </section>
);

export default About;
