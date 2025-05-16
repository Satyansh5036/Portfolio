import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="page projects">
      <h2>Projects</h2>
      <div className="project-main-cards">
        <div className="project-card" onClick={() => navigate('/projects/academic')}>
          <h3>Academic Projects</h3>
          <p>All my academic project PDFs from college.</p>
        </div>
        <div className="project-card" onClick={() => navigate('/projects/casestudies')}>
          <h3>Case Studies</h3>
          <p>Case Studies, Product Teardowns, and Product Requirement Documents (PRDs).</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
