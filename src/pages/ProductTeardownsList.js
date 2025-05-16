import React from 'react';

const teardowns = [
  { title: "Teardown 1", file: "/pdfs/teardown1.pdf" },
  { title: "Teardown 2", file: "/pdfs/teardown2.pdf" },
  // Add more as needed
];

const ProductTeardownsList = () => (
  <section className="page teardown-list">
    <h2>Product Teardowns</h2>
    <div className="pdf-grid">
      {teardowns.map((item, idx) => (
        <div className="pdf-card" key={idx}>
          <span>{item.title}</span>
          <a href={item.file} target="_blank" rel="noopener noreferrer">View PDF</a>
        </div>
      ))}
    </div>
  </section>
);

export default ProductTeardownsList;
