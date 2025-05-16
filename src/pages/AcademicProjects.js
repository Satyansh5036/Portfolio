import React from 'react';

// Replace with your actual PDF data
const academicProjects = [
  { title: "Managerial Economics\n", file: "/pdfs/ME.pdf" },
  { title: "Operations Management\n", file: "/pdfs/Operations Management.pdf" },
  { title: "Financial Management\n", file: "/pdfs/HFM.pdf" },
  { title: "Information System for Healthcare Managers\n", file: "/pdfs/ISHM.pdf" },
  // Add more as needed
];

const AcademicProjects = () => (
  <section className="page academic-projects">
    <h2>Academic Projects</h2>
    <div className="academic-projects-grid">
      {academicProjects.map((proj, idx) => (
        <div className="pdf-card" key={idx}>
          <span>{proj.title}</span>
          <a href={proj.file} target="_blank" rel="noopener noreferrer">View PDF</a>
        </div>
      ))}
    </div>
  </section>
);

export default AcademicProjects;
