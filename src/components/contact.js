import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
          <span>Twitter</span>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
          <span>GitHub</span>
        </a>
        <a href="mailto:youremail@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon email" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
