import React from "react";

const prds = [
  {
    id: 1,
    title: "PRD 1",
    pdf: "/pdfs/prd1.pdf",
  },
  {
    id: 2,
    title: "PRD 2",
    pdf: "/pdfs/prd2.pdf",
  },
];

const PRDs = () => (
  <ul className="project-list">
    {prds.map(({ id, title, pdf }) => (
      <li key={id}>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default PRDs;
