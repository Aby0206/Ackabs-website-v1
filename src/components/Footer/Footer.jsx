import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: connect@ackabs.com | Phone: (+91) 9207390923</p>
      <p>&copy; 2024 Ackabs Designs & Developments. All rights reserved.</p>

      <ul className="social-icons">
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/ackabsdev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
