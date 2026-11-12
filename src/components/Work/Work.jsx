import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../portfolioData";

const Work = () => (
  <section id="work" className="section-shell section-block projects-section">
    <div className="section-heading">
      <p className="section-kicker">SELECTED WORK</p>
      <h2>Projects with purpose</h2>
      <p>A few things I’ve built while exploring full-stack and applied machine learning.</p>
    </div>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="glass-card project-card" key={project.title}>
          <div className={`project-cover cover-${project.accent}`}>
            <span className="cover-index">PROJECT 0{index + 1}</span>
            <span className="cover-mark" aria-hidden="true">{project.mark}</span>
            <span className="cover-caption">PROJECT OVERVIEW</span>
          </div>

          <div className="project-content">
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub aria-hidden="true" /> Source code <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="project-link-placeholder">Repository URL not provided</span>
              )}
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live demo <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="project-link-placeholder">Live demo not provided</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Work;
