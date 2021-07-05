import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/work-experience">
        Work Experience
      </Link>
    </div>
  );
};

export default Navigation;
