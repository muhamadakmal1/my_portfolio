import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#5D7B1F" }} className="text-white text-center py-4">

      <div className="container">
        <p className="mb-2 mb-md-3">© 2025 Muhamad Akmal. All rights reserved.</p>
        <div>
          <a
            href="https://github.com/muhamadakmal1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="https://linkedin.com/in/muhamad-akmal-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
