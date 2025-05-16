import React from "react";

const teardowns = [
  {
    id: 1,
    title: "Product Teardown 1",
    pdf: "/pdfs/teardown1.pdf",
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
