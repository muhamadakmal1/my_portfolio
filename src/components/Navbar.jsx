import React from "react";
import "../style/Navbar.css"; // Ensure this path matches your project structure

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Muhamad Akmal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Projects", "Skills", "Certificates", "Contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
