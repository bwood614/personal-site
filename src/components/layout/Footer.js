import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Footer = () => {
  return (
    <div className="header-container">
      <Link to="/">Home</Link>
      <Link to="/work-experience">Work Experience</Link>
    </div>
  );
};

export default Footer;
