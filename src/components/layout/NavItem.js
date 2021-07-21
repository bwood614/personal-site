import React from "react";
import { Link } from "react-router-dom";
import useHover from "../../hooks/useHover";

const NavItem = ({ to, name }) => {
  const { hovering, toggleHover } = useHover();

  const style = {
    navItem: {
      margin: "15px",
      textDecoration: "none",
      color: "#514D5F",
      borderBottom: hovering ? "4px solid #18A0FB" : "none",
    },
  };

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Link style={style.navItem} to={to}>
        {name}
      </Link>
    </div>
  );
};

export default NavItem;
