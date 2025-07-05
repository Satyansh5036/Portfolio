import React from "react";

const prds = [
  {
    id: 1,
    title: "Picklist App",
    pdf: "/pdfs/Picklist_App__Product_Assignment_Satyansh.pdf",
  },
  {
    id: 2,
    title: "BharatNXT",
    pdf: "/pdfs/PRD_Satyansh.pdf",
  },
  {
    id: 3,
    title: "Pilgrim",
    pdf: "/pdfs/Satyansh_Product Management Internship Assignment.pdf",
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
