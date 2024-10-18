import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/huyn7539" target="_blank" rel="noopener noreferrer" className="social-link github-link">
        <FaGithub />
      </a>
      <a href="www.linkedin.com/in/hungtanhuynh" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;