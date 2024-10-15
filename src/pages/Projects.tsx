import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const ProjectCard: React.FC<Project> = ({ title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="projects-page container-wide">
      <h2 className="page-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;