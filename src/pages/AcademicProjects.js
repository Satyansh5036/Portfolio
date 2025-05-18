import React from "react";

const academicProjects = [
  {
    id: 1,
    title: "Economics",
    pdf: "/pdfs/ME.pdf",
  },
  {
    id: 2,
    title: "Operations Managment",
    pdf: "/pdfs/Operations Management.pdf",
  },
  {
    id: 3,
    title: "Financial Management",
    pdf: "/pdfs/HFM.pdf",
  },
  {
    id: 4,
    title: "Information System",
    pdf: "/pdfs/ISHM.pdf",
  },
  {
    id: 5,
    title: "Marketing Management",
    pdf: "/pdfs/Surf Excel.pdf",
  },
];

const AcademicProjects = () => (
  <div className="project-card academic-projects-card">
    <h3>Academic Projects</h3>
    <ul className="project-list">
      {academicProjects.map(({ id, title, pdf }) => (
        <li key={id}>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default AcademicProjects;
