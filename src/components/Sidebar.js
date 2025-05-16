import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaLinkedin,
  FaEnvelopeOpenText,
  FaTwitter,
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Modal from "./Modal";

const Sidebar = ({ isOpen, closeSidebar, theme, toggleTheme }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
    closeSidebar(); // Close sidebar on mobile when modal opens
  };

  const closeContactModal = () => setContactModalOpen(false);

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div
          className="sidebar-logo"
          onClick={closeSidebar}
          style={{ cursor: "pointer" }}
        >
         
        </div>
        <nav>
          <a href="#home" onClick={closeSidebar}>
            <FaHome
              style={{ color: "#bf00ff", width: 24, height: 24, marginRight: 14 }}
            />
            Home
          </a>
          <a href="#about" onClick={closeSidebar}>
            <FaUser
              style={{ color: "#bf00ff", width: 24, height: 24, marginRight: 14 }}
            />
            About
          </a>
          <a href="#projects" onClick={closeSidebar}>
            <FaFolderOpen
              style={{ color: "#bf00ff", width: 24, height: 24, marginRight: 14 }}
            />
            Projects
          </a>
          <a href="https://drive.google.com/file/d/1nZuX32GZj3nMaEuc6vOm5anMy4-h23Yh/view?usp=sharing" target="_blank" onClick={closeSidebar}>
            <TiDocumentText
              style={{ color: "#bf00ff", width: 24, height: 24, marginRight: 14 }}
            />
            Resume
          </a>
        </nav>

        {/* Contact button outside nav */}
        <button
          type="button"
          onClick={openContactModal}
          className="contact-btn"
          aria-label="Open contact modal"
        >
          <FaEnvelope
            style={{ color: "#bf00ff", width: 24, height: 24, marginRight: 14 }}
          />
          Contact
        </button>

        {/* Dark/Light mode toggle */}
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          <span style={{ marginLeft: 8 }}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </aside>

      {/* Contact Modal */}
      <Modal isOpen={contactModalOpen} onClose={closeContactModal}>
        <h2>Contact Me</h2>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/satyansh-5036"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a href="satyansh.g16@gmail.com" aria-label="Send Email">
            <FaEnvelopeOpenText />
          </a>
          <a
            href="https://x.com/sasp_20301422"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <FaTwitter />
          </a>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
