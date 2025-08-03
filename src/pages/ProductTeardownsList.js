import React from "react";

const teardowns = [
  {
    id: 1,
    title: "CRED Product Teardown",
    pdf: "https://evening-lunaria-d30.notion.site/CRED-Product-Teardown-Solution-Unlocking-Daily-Engagement-Beyond-Bill-Cycles-244d9e8e5a7a80cc9bdfdc857acbd484",
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
