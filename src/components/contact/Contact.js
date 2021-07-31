import React, { useState } from "react";
import Emailer from "./Emailer";

const Contact = () => {
  const style = {
    background: {
      backgroundColor: "#F3F3F3",
      padding: 30,
    },
    title: {
      textAlign: "center",
      marginBottom: 0,
    },
    contactContainer: {
      backgroundColor: "#FFFFFF",
      width: "70%",
      margin: "0px auto",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
    },
  };

  return (
    <div style={style.background}>
      <h1 style={style.title}>Contact</h1>
      <div style={style.contactContainer}>
        <Emailer />
      </div>
    </div>
  );
};

export default Contact;
