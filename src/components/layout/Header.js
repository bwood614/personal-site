import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    header: {
      height: "70px",
      padding: "0px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
    },
  };

  return (
    <div style={style.header}>
      <Navigation />
    </div>
  );
};

export default Header;
