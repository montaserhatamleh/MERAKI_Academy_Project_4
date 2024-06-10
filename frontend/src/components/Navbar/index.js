import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <div className="Header">
      // logo for home page
      <div className="Navbar">
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Nav;
