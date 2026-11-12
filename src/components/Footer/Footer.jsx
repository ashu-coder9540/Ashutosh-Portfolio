import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../../portfolioData";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <a className="footer-brand" href="#about">{profile.name}<span>.</span></a>
      <p>Designed and built with care.</p>
      <div className="footer-socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <SiLeetcode />
        </a>
      </div>
      <span className="footer-copyright">© {new Date().getFullYear()} {profile.name}</span>
    </div>
  </footer>
);

export default Footer;
