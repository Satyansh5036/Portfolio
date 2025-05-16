import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();
  return (
    <section className="page case-studies">
      <h2>Case Studies Section</h2>
      <div className="case-studies-matrix">
        <div className="case-card" onClick={() => navigate('/projects/casestudies/list')}>
          <h3>Case Studies</h3>
          <p>All my case study PDFs here.</p>
        </div>
        <div className="case-card" onClick={() => navigate('/projects/casestudies/teardowns')}>
          <h3>Product Teardowns</h3>
          <p>All my product teardown PDFs here.</p>
        </div>
        <div className="case-card" onClick={() => navigate('/projects/casestudies/prds')}>
          <h3>Product Requirement Documents</h3>
          <p>All my PRDs here.</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
