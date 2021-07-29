import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ title, text, url, icon, buttonText }) => {
  const style = {
    contentCard: {
      width: "240px",
      height: "250px",
      borderRadius: "5px",
      boxSizing: "border-box",
      padding: "15px",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#514D5F",
    },
    icon: {
      height: "60px",
    },
    title: {
      fontSize: "24px",
      margin: "16px 0px 8px 0px",
    },
    text: {
      textAlign: "center",
      marginBottom: "16px",
    },
  };

  return (
    <div style={style.contentCard}>
      <img src={icon} style={style.icon} />
      <p style={style.title}>{title}</p>
      <p style={style.text}>{text}</p>
      <Link to={url}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

export default ContentCard;
