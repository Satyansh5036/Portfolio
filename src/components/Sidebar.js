import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFileArchive, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/Satyansh_Image.jpg';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">
      <img src={profile} alt="Profile" className="profile-img" />
      
      <span>Satyansh</span>
    </div>
    <nav>
      <NavLink to="/" end><FaHome /> Home</NavLink>
      <NavLink to="/about"><FaUser /> About</NavLink>
      <NavLink to="/projects"><FaProjectDiagram /> Projects</NavLink>
      <NavLink to="/resume"><FaFileAlt /> Resume</NavLink>
      <NavLink to="/contact"><FaEnvelope /> Contact</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
