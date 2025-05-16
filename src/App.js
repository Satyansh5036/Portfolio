import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AcademicProjects from './pages/AcademicProjects';
import CaseStudies from './pages/CaseStudies';
import CaseStudiesList from './pages/CaseStudiesList';
import ProductTeardownsList from './pages/ProductTeardownsList';
import PRDsList from './pages/PRDsList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/academic" element={<AcademicProjects />} />
          <Route path="/projects/casestudies" element={<CaseStudies />} />
          <Route path="/projects/casestudies/list" element={<CaseStudiesList />} />
          <Route path="/projects/casestudies/teardowns" element={<ProductTeardownsList />} />
          <Route path="/projects/casestudies/prds" element={<PRDsList />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
