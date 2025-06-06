import React from 'react';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1lRMrorbCoC9JVRgsDTUg4eR1NV-2XO83/view?usp=sharing"; // <-- Replace with your actual Drive URL

  return (
    <section className="page resume">
      <h2>Resume</h2>
      <p>
        Click the button below to view or download my resume.
      </p>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn"
      >
        View Resume
      </a>
    </section>
  );
};

export default Resume;
