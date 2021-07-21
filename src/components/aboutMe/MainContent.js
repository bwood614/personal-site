import React from "react";
import profileImg from "../../images/brayden.png";
import useBreakpoints from "../../hooks/useBreakpoints";

const MainContent = ({ title, bodyText }) => {
  const { isMobileOrTablet } = useBreakpoints();
  const style = {
    mainContentContainer: {
      display: "flex",
      background: "#F3F3F3",
      height: "450px",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
    },
    graphicContainer: {
      width: "50%",
      position: "relative",
    },
    textContentContainer: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#514D5F",
    },
    textContent: {
      width: "75%",
    },
    backgroundCircleContainer: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
    },
    backgroundCircle: {
      position: "absolute",
      right: "-64px",
      top: "-41%",
      height: "829px",
      width: "745px",
      backgroundColor: "#c7e8ff",
      borderRadius: "50%",
    },
    profileImg: {
      position: "absolute",
      top: "-50px",
      right: "50px",
      zIndex: "1",
      width: "650px",
    },
  };

  return (
    <div style={style.mainContentContainer}>
      <div style={style.textContentContainer}>
        <div style={style.textContent}>
          <h1>{title}</h1>
          <p style={{ fontSize: "20px" }}>{bodyText}</p>
        </div>
      </div>
      <div style={style.graphicContainer}>
        {!isMobileOrTablet && (
          <div style={style.backgroundCircleContainer}>
            <div style={style.backgroundCircle}></div>
          </div>
        )}
        <img src={profileImg} style={style.profileImg}></img>
      </div>
    </div>
  );
};

export default MainContent;
