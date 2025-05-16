import React, { useState } from "react";
import CaseStudiesList from "./CaseStudiesList";
import ProductTeardown from "./ProductTeardownsList";
import PRDs from "./PRDsList";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="project-card case-studies-card">
      <h3>Case Studies</h3>
      <div className="case-study-categories">
        <button
          className={`category-btn ${selectedCategory === "Case Study" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Case Study")}
        >
          Case Study
        </button>
        <button
          className={`category-btn ${selectedCategory === "Product Teardown" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Product Teardown")}
        >
          Product Teardown
        </button>
        <button
          className={`category-btn ${selectedCategory === "PRD" ? "active" : ""}`}
          onClick={() => setSelectedCategory("PRD")}
        >
          PRD
        </button>
      </div>

      <div className="case-study-projects">
        {selectedCategory === "Case Study" && <CaseStudiesList />}
        {selectedCategory === "Product Teardown" && <ProductTeardown />}
        {selectedCategory === "PRD" && <PRDs />}
      </div>
    </div>
  );
};

export default CaseStudies;
