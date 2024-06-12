import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="index.html">
          Search
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4">
                <Link to={"/login"}>login</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4">
                <Link to={"/register"}>Register</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4">
                <Link to={"/"}>Home</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4">
                {" "}
                <Link to={"/footer"}>CONTACT</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
