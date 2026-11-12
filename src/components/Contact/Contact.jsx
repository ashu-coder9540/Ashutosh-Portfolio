import React from "react";
import { FiAtSign, FiDownload, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../../portfolioData";

const contactLinks = [
  { label: "Email", value: profile.email, placeholder: "Email not provided", href: profile.email ? `mailto:${profile.email}` : null, icon: <FiAtSign /> },
  { label: "LinkedIn", value: profile.linkedin, placeholder: "Profile URL not provided", href: profile.linkedin, icon: <FiLinkedin /> },
  { label: "GitHub", value: profile.github, placeholder: null, href: profile.github, icon: <FiGithub /> },
  { label: "LeetCode", value: profile.leetcode, placeholder: null, href: profile.leetcode, icon: <SiLeetcode /> },
];

const handleContactSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
};

const Contact = () => (
  <section id="contact" className="section-shell section-block contact-section">
    <div className="section-heading">
      <p className="section-kicker">LET’S CONNECT</p>
      <h2>Have a project in mind?</h2>
      <p>I’m open to meaningful conversations, collaboration, and early-career opportunities.</p>
    </div>

    <div className="contact-layout">
      <div className="contact-details">
        <h3>Find me online</h3>
        <p>Use one of the available profiles, or add your contact details to complete this section.</p>
        <div className="contact-link-list">
          {contactLinks.map((item) => {
            const content = (
              <>
                <span className="contact-link-icon">{item.icon}</span>
                <span className="contact-link-text">
                  <span>{item.label}</span>
                  <span className={item.value ? "contact-link-value" : "contact-placeholder"}>
                    {item.value || item.placeholder}
                  </span>
                </span>
                {item.href && <span className="contact-link-arrow" aria-hidden="true">↗</span>}
              </>
            );

            return item.href ? (
              <a className="contact-link-card" key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                {content}
              </a>
            ) : (
              <div className="contact-link-card contact-link-disabled" key={item.label}>
                {content}
              </div>
            );
          })}
        </div>
        {profile.resume ? (
          <a className="button-secondary resume-download" href={profile.resume} download>
            <FiDownload aria-hidden="true" /> Download resume
          </a>
        ) : (
          <button className="button-secondary resume-download" type="button" disabled>
            <FiDownload aria-hidden="true" /> Resume PDF not provided
          </button>
        )}
      </div>

      <div className="glass-card contact-form-card">
        <div className="contact-form-heading">
          <div>
            <p className="section-kicker">MESSAGE</p>
            <h3>Send a note</h3>
          </div>
          <FiSend aria-hidden="true" />
        </div>
        <form
          className="contact-form-fields"
          aria-describedby="contact-form-note"
          onSubmit={handleContactSubmit}
        >
          <label>
            Name
            <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="What would you like to discuss?" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Write your message..." required />
          </label>
          <button type="submit" className="button-primary contact-submit">
            Continue in email app
          </button>
        </form>
        <p id="contact-form-note" className="form-note">
          Submitting opens your email app with the message filled in. You can review and send it there.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
