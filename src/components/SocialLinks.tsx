import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link github-link">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link twitter-link">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialLinks;