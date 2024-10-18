import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Home: React.FC = () => {
  return (
    <div className="home-page container-wide">
      <section className="hero-section">
        <div className="profile-image-container">
          <img src="/assets/images/profilepicture.jpg" alt="Hung Huynh Software Engineer" className="profile-image" loading="lazy"/>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Hung Huynh</h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            A brief introduction about yourself and your expertise as a software engineer.
          </p>
          <SocialLinks />
          <a href="/resume.pdf" download className="cta-button resume-download">
            Download Resume
          </a>
        </div>
      </section>
      <section className="skills-section">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'Git', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;