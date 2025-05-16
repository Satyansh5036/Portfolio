// ThemeToggle.js
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cta-btn"
      style={{
        background: "none",
        color: "var(--primary-accent)",
        border: "2px solid var(--primary-accent)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        fontSize: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
        transition: "background 0.3s, color 0.3s"
      }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
