import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          Job Quest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link px-lg-3 py-3 py-lg-4">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link px-lg-3 py-3 py-lg-4">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreatingJobApplications" className="nav-link px-lg-3 py-3 py-lg-4">
                Job Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AcceptApplying" className="nav-link px-lg-3 py-3 py-lg-4">
              Accept Applying
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
