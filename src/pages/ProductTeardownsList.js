import React from "react";

const teardowns = [
  {
    id: 1,
    title: "CRED Product Teardown",
    pdf: "https://evening-lunaria-d30.notion.site/CRED-Product-Teardown-Solution-Unlocking-Daily-Engagement-Beyond-Bill-Cycles-244d9e8e5a7a80cc9bdfdc857acbd484",
  },
  {
    id: 2,
    title: "Supertails App",
    pdf: "https://evening-lunaria-d30.notion.site/Supertails-App-Product-Analysis-Recommendation-23ad9e8e5a7a80899974c9c5610e0b36?pvs=73",
  },
  {
    id: 3,
    title: "Picklist App",
    pdf: "https://evening-lunaria-d30.notion.site/Picklist-App-Product-Assignment-224d9e8e5a7a80409e4dc3e53aa523f0",
  },
];

const ProductTeardown = () => (
  <ul className="project-list">
    {teardowns.map(({ id, title, pdf }) => (
      <li key={id}>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ProductTeardown;
