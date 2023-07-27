import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Deployed 20+ scalable websites. Collaborated in 50+ projects with 10+
        clients all around the world. Looking for next project/role.
      </p>
      <div className="projects-container">
        {projects.map((project, id) => (
          <ProjectCard
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            liveLink={project.live_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
