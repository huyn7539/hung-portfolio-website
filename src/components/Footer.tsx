import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-content">
        <p className="copyright-text">&copy; {new Date().getFullYear()} Hung Huynh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;