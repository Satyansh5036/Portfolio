import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./pages/About";
import AcademicProjects from "./pages/AcademicProjects";
import CaseStudies from "./pages/CaseStudies";
import { FaBars } from "react-icons/fa";
import "./App.css";

function App() {
  // Theme state (optional)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Sidebar open state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Hamburger button visible on mobile */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
      >
        <FaBars size={24} />
      </button>

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <main className="main-content" onClick={closeSidebar}>
        <Hero />
        <About />
        <section id="projects" className="container">
          <h2>Projects</h2>
          <div className="projects-main-cards">
            <AcademicProjects />
            <CaseStudies />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;