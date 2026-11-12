import React from "react";
import { FiLayers } from "react-icons/fi";
import { skillGroups } from "../../portfolioData";

const Skills = () => (
  <section id="skills" className="section-shell section-block">
    <div className="section-heading">
      <p className="section-kicker">WHAT I WORK WITH</p>
      <h2>Technical toolkit</h2>
      <p>Tools and technologies I use to design, build, and ship applications.</p>
    </div>

    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article className="glass-card skill-card" key={group.title}>
          <div className="skill-card-heading">
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <FiLayers aria-hidden="true" />
          </div>
          <div className="skill-list">
            {group.skills.map((skill) => (
              <span className="skill-pill" key={skill.name}>
                {skill.logo ? (
                  <img src={skill.logo} alt="" loading="lazy" />
                ) : (
                  <span className="skill-mark" aria-hidden="true">&lt;/&gt;</span>
                )}
                {skill.name}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
