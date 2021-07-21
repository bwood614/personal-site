import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = {
    footer: {
      width: "100%",
      height: "50px",
      backgroundColor: "#FFFFFF",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
    },
  };

  return <div style={style.footer}>© 2021 Brayden Wood</div>;
};

export default Footer;
