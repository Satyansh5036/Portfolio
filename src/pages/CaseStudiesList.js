import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Flipkart Promise: Turning Post-Purchase Anxiety into Trust",
    pdf: "/pdfs/Flipkart.pdf",
  },
 {
    id: 2,
    title: "Pet Parenting Market in India",
    pdf: "/pdfs/Pet Parenting.pdf",
  },
 {
    id: 3,
    title: "SnacQ: Guilt-Free Indulgence",
    pdf: "/pdfs/Tata Sampann SnacQ.pdf",
  },
  {
    id: 4,
    title: "Enhancing EatSure's Penetration in College",
    pdf: "/pdfs/Rebel Foods.pdf",
  },
 {
    id: 5,
    title: "Improving User Adoption of Pluckk",
    pdf: "/pdfs/Prod-A-Thon.pdf",
  },
 {
    id: 5,
    title: "Increasing Time Spent Listening on Spotify India",
    pdf: "/pdfs/Spotify.pdf",
  },
];

const CaseStudiesList = () => (
  <ul className="project-list">
    {caseStudies.map(({ id, title, pdf }) => (
      <li key={id}>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default CaseStudiesList;
