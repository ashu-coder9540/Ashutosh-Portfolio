import React from "react";
import { FiAward, FiCode, FiExternalLink, FiUsers } from "react-icons/fi";
import { achievements, badges, profile } from "../../portfolioData";

const profileLinks = [
  { label: "LeetCode", href: profile.leetcode, icon: <FiCode aria-hidden="true" /> },
  { label: "GitHub", href: profile.github, icon: <FiCode aria-hidden="true" /> },
  { label: "GeeksforGeeks", href: profile.geeksforgeeks, icon: <FiCode aria-hidden="true" /> },
];

const Achievements = () => (
  <section id="achievements" className="section-shell section-block achievements-section">
    <div className="section-heading">
      <p className="section-kicker">PROGRESS & RECOGNITION</p>
      <h2>Small wins, steady growth</h2>
      <p>Consistent problem-solving, learning milestones, and team contributions.</p>
    </div>

    <div className="achievement-stats">
      {achievements.map((achievement) => (
        <article className="glass-card achievement-stat" key={achievement.label}>
          <span className="achievement-icon">
            {achievement.icon === "leetcode" ? <FiCode aria-hidden="true" /> : <FiAward aria-hidden="true" />}
          </span>
          <strong>{achievement.value}</strong>
          <span>{achievement.label}</span>
        </article>
      ))}
    </div>

    <div className="achievement-lower">
      <div className="glass-card badges-card">
        <div className="achievement-subheading">
          <FiAward aria-hidden="true" />
          <h3>Milestones & badges</h3>
        </div>
        <div className="badge-list">
          {badges.map((badge) => (
            <span className="achievement-badge" key={badge}>{badge}</span>
          ))}
        </div>
      </div>

      <div className="glass-card profiles-card">
        <div className="achievement-subheading">
          <FiUsers aria-hidden="true" />
          <h3>Coding profiles</h3>
        </div>
        <div className="profile-link-list">
          {profileLinks.map((item) => item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.label}>
              {item.icon}<span>{item.label}</span><FiExternalLink aria-hidden="true" />
            </a>
          ) : (
            <div className="profile-link-unavailable" key={item.label}>
              {item.icon}<span>{item.label}</span><span className="contact-placeholder">URL not provided</span>
            </div>
          ))}
        </div>
        <p>Only provided problem counts are shown; no ranking or profile statistics are inferred.</p>
      </div>
    </div>
  </section>
);

export default Achievements;
