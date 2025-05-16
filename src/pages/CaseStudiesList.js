import React from 'react';

const caseStudies = [
  { title: "Tata Sampann SnacQ\n", file: "\t/pdfs/Tata Sampann SnacQ.pdf" },
  { title: "Rebel Foods\n\t", file: "/pdfs/Rebel Foods.pdf" },
  { title: "Prod-A-Thon\n\t", file: "/pdfs/Prod-A-Thon.pdf" },
  { title: "Spotify\n\t", file: "/pdfs/Spotify.pdf" },
  { title: "Flipkart\n\t", file: "/pdfs/Flipkart.pdf" },
  { title: "Pet Parenting\n\t", file: "/pdfs/Pet Parenting.pdf" },
  // Add more as needed
];

const CaseStudiesList = () => (
  <section className="page case-list">
    <h2>Case Studies</h2>
    <div className="academic-projects-grid">
      {caseStudies.map((item, idx) => (
        <div className="pdf-card" key={idx}>
          <a href={item.file} target="_blank" rel="noopener noreferrer"><span>{item.title}</span></a>
          
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudiesList;
