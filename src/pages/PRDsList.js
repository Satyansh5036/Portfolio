import React from 'react';

const prds = [
  { title: "PRD 1", file: "/pdfs/prd1.pdf" },
  { title: "PRD 2", file: "/pdfs/prd2.pdf" },
  // Add more as needed
];

const PRDsList = () => (
  <section className="page prd-list">
    <h2>Product Requirement Documents</h2>
    <div className="pdf-grid">
      {prds.map((item, idx) => (
        <div className="pdf-card" key={idx}>
          <span>{item.title}</span>
          <a href={item.file} target="_blank" rel="noopener noreferrer">View PDF</a>
        </div>
      ))}
    </div>
  </section>
);

export default PRDsList;
