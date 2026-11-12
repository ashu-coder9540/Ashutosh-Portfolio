import React from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { certifications, education } from "../../portfolioData";

const Education = () => (
  <section id="education" className="section-shell section-block">
    <div className="section-heading">
      <p className="section-kicker">LEARNING JOURNEY</p>
      <h2>Education & certifications</h2>
      <p>Building a strong foundation in computer science and practical software development.</p>
    </div>

    <div className="education-layout">
      <article className="glass-card education-card">
        <div className="education-icon"><FiBookOpen aria-hidden="true" /></div>
        <div className="education-label">CURRENT EDUCATION</div>
        <h3>{education.degree}</h3>
        <p className="education-school">{education.institution}</p>
        <div className="education-meta">
          <span>{education.status}</span>
          <span>{education.graduation}</span>
        </div>
      </article>

      <div className="certification-panel">
        <div className="certification-heading">
          <FiAward aria-hidden="true" />
          <h3>Certifications</h3>
        </div>
        <div className="certification-list">
          {certifications.map((certification) => (
            <div className="certification-item" key={certification}>
              <span className="certification-dot" />
              <span>{certification}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
