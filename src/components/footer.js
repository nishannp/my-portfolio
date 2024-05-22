import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://twitter.com/iamnishannepali" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="https://github.com/NishanNepali" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a href="mailto:nishan.sanv@gmail.com" className="social-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon email" />
        </a>
      </div>
      <p>&copy; {currentYear} Nishan Nepali. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
